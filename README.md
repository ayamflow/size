size.js
===

Small util to centralize and debounce window 'resize' events.

- No need for you to access the global object (window)
- Avoid triggering [unnecessary repaint/reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)
- Avoid locking the UI by debouncing the event (only one event per resize action)


## Install

```
npm install ayamflow/size -S
```

## Usage

```
var size = require('size');

size.addListener(function(width, height) {
    console.log('resized', width, height);
});
console.log(size.width);
```

## Instance Methods

### addListener(handler[, context])

Bind a function to the resize event and immediately call the handler with the current width/height
* `handler` - the function to call after a resize event
* `context` - (OPTIONAL) - the context to bind the event callback to


### removeListener(handler[, context])

Unbind a function to the resize event
* `handler` - the function to call after a resize event
* `context` - (OPTIONAL) - the context to bind the event callback to

### bind(options)

Enable the singleton by listening to the window `onresize` event. This is called automatically on require/import.
* `options` - a hash containing configurable options:
- `debounceTime`: debounce delay for the window `onresize` event. Defaults is 150.

### unbind()

Unbind the window `onresize` event.

## Instance Properties

### width
### height

## License
MIT.
