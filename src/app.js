function app() {
    var args = arguments;

    if (!arguments.length) {
        return app.mode(app.getMode());
    }

    if (typeof args[0] == 'string') {
        if (args[0] in app.MODES) {
            return app.mode(args[0]);
        }

        return {
            tpl: function(o) {
                return app.tpl(args[0], o);
            }
        };
    }
}

app.getMode = function() {
    return app._mode;
};

app.tpl = function(str, obj) {
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            str = str.replace((new RegExp('\\{' + prop.toString() + '\\}', 'g')), obj[prop] || '');
        }
    }

    str.replace(/\{.+\}/, '');

    return str;
};

app._values = {};

app.set = function(key, value) {
    return (app._values[key] = value);
};
app.get = function(key) {
    return app._values[key];
};

app.unset = function(key) {
    return delete app._values[key];
};

/**
 * Crea el namespace para todos los modos registrados
 *
 * @param {String} namespace
 */
app.ns = function(namespace) {
    namespace in app || (app[namespace] = {});

    for (var p in app.MODES) {
        p in app || (app[p] = {});
        namespace in app[p] || (app[p][namespace] = {});

    }
};

app.uid = (function() {
    var map = {};
    return function(prefix) {
        prefix = prefix || 'generated';
        map[prefix] = map[prefix] || 0;

        var id = prefix + '-' + map[prefix]++;

        // Valida que no exista un elemento con
        // el mismo id
        if (document.getElementById(id)) {
            return createId(prefix);
        }
        return id;
    }
})();

app.path = function(path, root) {
    var parts, i, l;

    parts = path.split('.');
    root = root || app();

    for (i = 0,l = parts.length; i < l; i++) {
        if (!root[parts[i]]) {
            return null;
        }
        root = root[parts[i]];
    }

    return root;
}

app.exec = function(method, args) {
    var ref, context;

    ref = app.path(method);

    if (!ref) {
        app.warn('Method ' + method + ' is not implemented (' + app.getMode() + ')');
        return;
    }

    context = app.path(method.replace(/\.[^\.]+$/, ''));

    return ref.apply(context, args);
};


app.alert = function(msg) {
    Ext.MessageBox.alert('Aviso', msg);
};

Ext.ns('app.tools');
Ext.ns('app.util');
Ext.ns('app.fabric');

app.log = function() {
    console && console.log.apply(console, arguments);
};

app.warn = function() {
    console && console.warn.apply(console, arguments);
};

app.error = function() {
    app.log('Error ===================================================');
    console && console.error.apply(console, arguments);
    app.log('=========================================================');

    app.view.error(arguments[0]);
};

/**
 * Inicia el editor
 *
 * @param {Object} options
 */
app.start = function(options) {
    options = Ext.apply({
        mode: app.MODES.IMAGE,
        modes: {
            IMAGE: true,
            FABRIC: true
        },
        fabricWidth: 300,
        fabricHeight: 300
    }, options || {});

    if (options['fabric.size']) {
        options.fabricWidth = options['fabric.size'].x;
        options.fabricHeight = options['fabric.size'].y;
    }

    app.setMode(options.mode);
    app.view.start(options);

    app.options = options;

    if (options.modes[app.MODES.FABRIC]) {
        app.mode(app.MODES.FABRIC).start(options);
    }

    if (options.dataUri) {
        app.file.set(options.dataUri);
    }
};

app.mode = function(mode) {
    if (!mode) {
        mode = app.getMode().toLowerCase();
    }

    if (!app[mode]) {
        app[mode] = {};
    }

    return app[mode];
};

app.eachMode = function(fn) {
    Ext.iterate(app.MODES, function(mode) {
        fn(app(mode));
    });
};

app.setMode = function(mode) {
    app._mode = mode;
    app.emit('app:mode', mode);
    app.tools.clear();
    app.view.centerContainer();
    app.tools.setMode(mode);
};

app.ev = {
    _handlers: {},
    on: function(ev, handler, scope) {
        if (Ext.isArray(ev)) {
            Ext.each(ev, function(current) {
                app.ev.on(current, handler, scope);
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
    one: function(ev, handler, scope) {
        ev.$single = true;

        this.on(ev, handler, scope);
    },
    off: function(ev, handler) {
        if (!this._handlers[ev]) {
            return;
        }
    },
    emit: function(ev) {
        if (!this._handlers[ev]) {
            return;
        }

        var
            args = Array.prototype.slice.call(arguments, 1),
            handlers = [];

        this._handlers[ev].forEach(function(handler) {
            handler.apply(handler.scope, args);

            if (!handler.$single) {
                handlers.push(handler);
            }
        });
    }
};

app.on = function() {
    app.ev.on.apply(app.ev, arguments);
};

app.off = function() {
    app.ev.off.apply(app.ev, arguments);
};

app.emit = function() {
    app.ev.emit.apply(app.ev, arguments);
};

app.cancel = function() {
    app.emit('app:cancel');
};

app.util.listenersForMode = function(onFabricMode, onImageMode) {
    return {
        afterrender: function(self) {
            app.on('app:mode', function(mode) {
                if (mode == app.MODES.FABRIC) {
                    (typeof onFabricMode == 'function' ? onFabricMode : self[onFabricMode]).call(self);
                } else {
                    (typeof onImageMode == 'function' ? onImageMode : self[onImageMode]).call(self);
                }
            });
        }
    };
};

app.util.hash = app.hash = function (s) {
    return s.toLowerCase().replace(/\s*/, '').split('').reduce(
        function(memo, current, index) {
            return memo + current.charCodeAt(0) * (index + 1);
        }, 0).toString(16);
};


app.services = {
    imageFromDataUri: function(dataUri, callback) {
        Ext.Ajax.request({
            url: '/webbie_image/ajax_base64_to_image/',
            params: {
                dataUri: dataUri
            },
            success: function(response) {
                if (response && callback) {
                    try {
                        app.log('Get: /' + response.responseText);
                        callback('/' + response.responseText);
                    } catch(e) {
                        app.error(e);
                    }
                } else {
                    app.error('fail: imageFromDataUri');
                }

            }
        });
    }
};


/// TODO mover (webbie)

var webbie = {
    event: {
        emit: function() {
        }
    },
    registerFont: function() {
        var
            args = arguments,
            old;

        try {
            Cufon.registerFont.apply(Cufon, args);
        } catch(e) {
            app.log(e);
            old = webbie.reloadFonts;

            if (!old) {
                return;
            }

            webbie.reloadFonts = function() {
                Cufon.registerFont.apply(Cufon, args);
                old();
            };
        }
        try {
            CufonWebbie.registerFont.apply(CufonWebbie, args);
        } catch(e) {
            app.log(e);
        }
    },
    getCufonWebbie: function() {
        return CufonWebbie;
    }
};