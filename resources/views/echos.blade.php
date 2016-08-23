
<ul data-foo="bar">
    @foreach($lists as $list)
    <li class="foo bar baz"><a href="{{ route($list->url) }}">{{ $list }}</a></li>
    @endforeach
</ul>
<div id="Text">{{ $name or "default" }}</div>
<div id="Tag">
    {{ $name or "default" }}
</div>
<div id="Blade" class="echos">
    <p class="raw">
        {{{ $raw() }}}
    </p>
    <p class="escaped">
        {{ $escaped or "default" }}
    </p>
    <p class="unescaped">
        {!! $unescaped !!}
    </p>
</div>