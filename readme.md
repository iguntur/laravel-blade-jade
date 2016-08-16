# Laravel Blade Views

Create laravel blade views using jade

## Install

``` bash
npm install --save-dev laravel-blade-jade
```

``` javascript
// Gulpfile.js

var Elixir = require('laravel-elixir');

require('laravel-blade-jade');

Elixir(function(mix) {

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

``` bash
gulp blade
```

input
``` html
// index.jade 

doctype html
html
    head
        title= $title

    body
        .container
            h1!= 'welcome, ' . $name . '!'

            ul
                - foreach($this->list as $list)
                li {{ $list }}
                - endforeach
```

output

``` html
<!-- index.blade.php -->

<!DOCTYPE html>
<html>
    <head>
        <title>{{ $title }}</title>
    </head>
    <body>
        <div class="container">
            <h1>{!! 'welcome, ' . $name . '!' !!}</h1>
            <ul>
                @foreach($this->list as $list)
                <li>{{ $list }}</li>
                @endforeach
            </ul>
        </div>
    </body>
</html>
```

***Files containing `_*.jade` not be rendered.***


## API

All options supported by the [Jade API](http://jade-lang.com/api/) are supported

```
sourcePath: <string> | <null>
default: "resources/assets/blade"

outputPath: <string> | <null>
default: "resources/views"

basedir: <string> | <null>
default: null == sourcePath

locals: <object>
default: {}

pretty: <boolean>
default: true

prettify: <object>
default: // https://www.npmjs.com/package/gulp-prettify
```


## Official Documentation

Documentation for Elixir can be found on the [Laravel website](http://laravel.com/docs/elixir).

Documentation for Elixir repositories can be found on the [Github](https://github.com/laravel/elixir)

## License
MIT License