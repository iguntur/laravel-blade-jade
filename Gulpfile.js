var Elixir = require('laravel-elixir');

// Testing with gulp
require('./index');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

Elixir(function(mix) {

    /**
     * Blade Views
     */
    mix.blade({
        pretty: "    " // indent_size => 4
    });

});
