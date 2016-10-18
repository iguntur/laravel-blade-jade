# laravel-blade-jade

> Create laravel blade views using jade


## Install

```bash
$ npm install --save-dev laravel-blade-jade
```

```js
// Gulpfile.js

const Elixir = require('laravel-elixir');

require('laravel-blade-jade');

Elixir(mix => {

    /**
     * Blade Views
     */
    mix.blade({
        sourcePath: "resources/assets/blade",
        locals: {}
    });

    // ...
});
```


## Basic Usage

Trigger

``` bash
$ gulp blade
```

``` html
// index.jade

doctype html
html
    head
        title @yield('title')
    body
        @include("partials.foo-bar", ['key' => 'val'])

        @section('sidebar')
            sidebar.master
                p This is the master sidebar.
        @stop

        .container: .row
            @yield('content')
```

output

``` html
<!-- index.blade.php -->

<!DOCTYPE html>
<html>
    <head>
        <title>@yield('title')</title>
    </head>
    <body>
        @include("partials.foo-bar", ['key' => 'val'])
        @section('sidebar')
            <sidebar class="master">
                <p>This is the master sidebar.</p>
            </sidebar>
        @stop
        <div class="container">
            <div class="row">
                @yield('content')
            </div>
        </div>
    </body>
</html>
```

**Files containing `_*.jade` not be rendered.**


## API

All options supported by the [Jade API](http://jade-lang.com/api/) are supported

### sourcePath
type: <string> | <null>

default: "resources/assets/blade"

### outputPath
type: <string> | <null>

default: "resources/views"

### basedir
type: <string> | <null>

default: null == sourcePath

### locals
type: <object>

default: (empty) {}

### pretty
type: <boolean> | <string>

default: true


## Official Documentation

Documentation for Elixir can be found on the [Laravel website](http://laravel.com/docs/elixir).

Documentation for Jade can be found on the [Jade website](http://jade-lang.com).

Documentation for Elixir repositories can be found on the [Github](https://github.com/laravel/elixir)


### Note

If you using `version 1.0` please check [docs](https://github.com/iGuntur/laravel-blade-jade/blob/1.0/readme.md#basic-usage)

# License

MIT @ [Guntur Poetra](guntur.starmediateknik.com)
