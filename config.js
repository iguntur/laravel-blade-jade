'use strict';

var _ = require('lodash');
var Elixir = require('laravel-elixir');

var config = {

    /*
     |----------------------------------------------------------------
     | Jade Template Engine
     |----------------------------------------------------------------
     |
     | http://jade-lang.com
     |
     */

    blade: {
        search: "*.jade",
        sourcePath: "resources/assets/blade",
        outputPath: "resources/views",

        // https://www.npmjs.com/package/gulp-jade
        locals: {},

        /**
         |----------------------------------------------------------------
         | Basedir
         |----------------------------------------------------------------
         |
         | Overrides the value from `elixir.json`
         | https://www.npmjs.com/package/laravel-elixir-config
         |
         | type: string|null
         | default: null
         | value: folder name
         | if value == null, value = sourcePath
         |
         */
        basedir: null,

        // Pretty print
        pretty: true
    }
};

Elixir.config = _.merge(Elixir.config, config);

module.exports = Elixir;
