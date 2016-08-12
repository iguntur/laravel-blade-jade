'use strict';

module.exports = function () {
    const Jade = require('jade');

    /**
     * Overrides Jade Compiler prototype code
     * @return {object}
     */
    Jade.Lexer.prototype.code = function () {
        var captures;

        if (captures = /^(!?=|-)[ \t]*([^\n]+)/.exec(this.input)) {
            this.consume(captures[0].length);

            var flags = captures[1];
            captures[1] = captures[2];

            var tok = this.tok('code', captures[1]);
            tok.escape = flags.charAt(0) === '=';
            tok.buffer = flags.charAt(0) === '=' || flags.charAt(1) === '=';
            
            return tok;
        }
    };

    /**
     * Overrides Jade Compiler prototype visitCode
     * @return {string}
     */
    Jade.Compiler.prototype.visitCode = function (code) {
        var val = code.val;

        if (code.buffer) {
            val = code.escape ? `{{ ${ val } }}` : `{!! ${ val } !!}`;
        } else {
            val = `\n@${ val }\n`;
        }

        this.buffer(val);
    };
};
