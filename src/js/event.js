iwage.ev = {
    _handlers:{},
    on:function (ev, handler, scope) {
        if (Ext.isArray(ev)) {
            Ext.each(ev, function (current) {
                iwage.ev.on(current, handler, scope);
            });
            return;
        }

        this._handlers[ev] = this._handlers[ev] || [];

        this._handlers[ev].push(handler);
        handler.scope = scope;
    },
    /**
     * Event handler de unico uso
     *
     * @param ev
     * @param handler
     */
    one:function (ev, handler, scope) {
        ev.$single = true;

        this.on(ev, handler, scope);
    },
    off:function (ev, handler) {
        if (!this._handlers[ev]) {
            return;
        }
    },
    emit:function (ev) {
        if (!this._handlers[ev]) {
            return;
        }

        var
            args = Array.prototype.slice.call(arguments, 1),
            handlers = [];

        this._handlers[ev].forEach(function (handler) {
            handler.apply(handler.scope, args);

            if (!handler.$single) {
                handlers.push(handler);
            }
        });
    }
};

iwage.on = function () {
    iwage.ev.on.apply(iwage.ev, arguments);
};

iwage.off = function () {
    iwage.ev.off.apply(iwage.ev, arguments);
};

iwage.emit = function () {
    iwage.ev.emit.apply(iwage.ev, arguments);
};