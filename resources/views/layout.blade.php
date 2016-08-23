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