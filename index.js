'use strict';

var Emitter = require('tiny-emitter');
var debounce = require('debounce');
var EVENT_NAME = 'resize';

var emitter = new Emitter();
var debounceTime;
var debounced;

var size = module.exports = {
    width: 0,
    height: 0,

    addListener: function(listener, context) {
        emitter.on(EVENT_NAME, listener, context);
        listener.call(context, size.width, size.height)
    },

    removeListener: function(listener, context) {
        if(listener) emitter.off(EVENT_NAME, listener, context);
    },

    bind: function(opts) {
        opts = opts || {};
        size.unbind();
        debounceTime = opts.debounceTime || 150;
        debounced = debounce(onEvent, debounceTime);
        window.addEventListener(EVENT_NAME, debounced);
    },

    unbind: function() {
        window.removeEventListener(EVENT_NAME, debounced);
    }
};

function onEvent() {
    size.width = window.innerWidth;
    size.height = window.innerHeight;
    emitter.emit(EVENT_NAME, size.width, size.height);
}

onEvent();
size.bind();