@extends('layout.app')
@section('title', 'Home')
@section('sidebar')
    @parent
    <p>This is appended to the master sidebar</p>
@endsection
@section('content')
    <!-- HTML Comments -->
    <div class="col-md-6">
        <h1>Heading</h1>
        @if(Auth::user())
            <ul data-foo="bar">
                @foreach($lists as $list)
                <li></li>
                @endforeach
            </ul>
        @else
            <h2>BarBazQuux</h2>
        @endif
    </div>
    {{-- Blade Comments --}}
    <div class="col-md-6">
        <h1>Heading 2</h1>
        <div class="wrapper">
            <section data-for="bar">
                <ul>
                    <li>foo</li>
                    <li>bar</li>
                </ul>
            </section>
            <section data-for="foo">
                <ul>
                    <li>baz</li>
                    <li>quux</li>
                </ul>
            </section>
        </div>
    </div>
@endsection