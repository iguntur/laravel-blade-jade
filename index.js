'use strict';

var p = require('path');
var _ = require('lodash');
var $ = require('gulp-load-plugins')();
var Elixir = require('laravel-elixir');

require('./lib/compiler')();
require('./config');


/*
 |----------------------------------------------------------------
 | Jade Compilation Task
 |----------------------------------------------------------------
 |
 | This task will compile your Jade file, including html-prettify.
 | Jade is one of the HTML pre-precessors
 |
 */

Elixir.extend('blade', function(options) {
    options = options || {};

    options.basedir = options.basedir || options.sourcePath || Elixir.config.blade.basedir || Elixir.config.blade.sourcePath;
    options = _.merge(Elixir.config.blade, options);

    let paths = getPaths(options.sourcePath, options.outputPath);

    new Elixir.Task('blade', function() {
        return (
            gulp
            .src(paths.src.path)
            .pipe($.jade(options))
            .on('error', function(e) {
                new Elixir.Notification().error(e, ' Views Compilation Failed');
                this.emit('end');
            })
            .pipe($.removeEmptyLines())
            .pipe($.prettify(options.prettify))
            .pipe($.extReplace('.blade.php'))
            .pipe(gulp.dest(paths.output.path))
            .pipe(new Elixir.Notification('Blade Views Compiled!'))
        );
    }, paths)
    .watch(paths.watch);
});


/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|null} src
 * @param  {string|null}  output
 * @return {GulpPaths}
 */
function getPaths(source, output) {
    let gulpPaths = () => {
        return new Elixir.GulpPaths()
            .src(source || Elixir.config.blade.sourcePath)
            .output(output || Elixir.config.blade.outputPath);
    };

    let paths = gulpPaths();

    // Stop compile if path is not directorie
    if (!paths.src.isDir) {
        console.error(`The { sourcePath: "${ paths.src.path }" } must be directory name!`, '');

        process.exit(1);
    }

    // Stop compile if path is not directorie
    if (!paths.output.isDir) {
        console.error(`The { outputPath: "${ paths.output.path }" } must be directory name!`, '');

        process.exit(1);
    }

    let basePath = paths.src.path.replace(/\*/g, '');
    let search = `${ p.normalize(basePath + '.') }/**/${ Elixir.config.blade.search }`;

    paths.watch = search;
    paths.src.path = [
        // Ignore compiled file if first char is `_`.
        // Ex: '_ignore.jade'
        '!' + search.replace('*.', '_*.'),

        search
    ];

    return paths;
}