function app() {
    var args = arguments;

    if (!arguments.length) {
        return iwage.mode(iwage.getMode());
    }

    if (typeof args[0] == 'string') {
        if (args[0] in iwage.MODES) {
            return iwage.mode(args[0]);
        }

        return {
            tpl: function(o) {
                return iwage.tpl(args[0], o);
            }
        };
    }
}

iwage.getMode = function() {
    return iwage._mode;
};

iwage.tpl = function(str, obj) {
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            str = str.replace((new RegExp('\\{' + prop.toString() + '\\}', 'g')), obj[prop] || '');
        }
    }

    str.replace(/\{.+\}/, '');

    return str;
};

iwage._values = {};

iwage.set = function(key, value) {
    return (iwage._values[key] = value);
};
iwage.get = function(key) {
    return iwage._values[key];
};

iwage.unset = function(key) {
    return delete iwage._values[key];
};

/**
 * Crea el namespace para todos los modos registrados
 *
 * @param {String} namespace
 */
iwage.ns = function(namespace) {
    namespace in app || (app[namespace] = {});

    for (var p in iwage.MODES) {
        p in app || (app[p] = {});
        namespace in app[p] || (app[p][namespace] = {});

    }
};

iwage.uid = (function() {
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

iwage.path = function(path, root) {
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

iwage.exec = function(method, args) {
    var ref, context;

    ref = iwage.path(method);

    if (!ref) {
        iwage.warn('Method ' + method + ' is not implemented (' + iwage.getMode() + ')');
        return;
    }

    context = iwage.path(method.replace(/\.[^\.]+$/, ''));

    return ref.apply(context, args);
};


iwage.alert = function(msg) {
    Ext.MessageBox.alert('Aviso', msg);
};

Ext.ns('iwage.tools');
Ext.ns('iwage.util');
Ext.ns('iwage.fabric');

iwage.log = function() {
    console && console.log.apply(console, arguments);
};

iwage.warn = function() {
    console && console.warn.apply(console, arguments);
};

iwage.error = function() {
    iwage.log('Error ===================================================');
    console && console.error.apply(console, arguments);
    iwage.log('=========================================================');

    iwage.view.error(arguments[0]);
};

/**
 * Inicia el editor
 *
 * @param {Object} options
 */
iwage.start = function(options) {
    options = Ext.apply({
        mode: iwage.MODES.IMAGE,
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

    iwage.setMode(options.mode);
    iwage.view.start(options);

    iwage.options = options;

    if (options.modes[iwage.MODES.FABRIC]) {
        iwage.mode(iwage.MODES.FABRIC).start(options);
    }

    if (options.dataUri) {
        iwage.file.set(options.dataUri);
    }
};

iwage.mode = function(mode) {
    if (!mode) {
        mode = iwage.getMode().toLowerCase();
    }

    if (!app[mode]) {
        app[mode] = {};
    }

    return app[mode];
};

iwage.eachMode = function(fn) {
    Ext.iterate(iwage.MODES, function(mode) {
        fn(app(mode));
    });
};

iwage.setMode = function(mode) {
    iwage._mode = mode;
    iwage.emit('app:mode', mode);
    iwage.tools.clear();
    iwage.view.centerContainer();
    iwage.tools.setMode(mode);
};

iwage.ev = {
    _handlers: {},
    on: function(ev, handler, scope) {
        if (Ext.isArray(ev)) {
            Ext.each(ev, function(current) {
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

iwage.on = function() {
    iwage.ev.on.apply(iwage.ev, arguments);
};

iwage.off = function() {
    iwage.ev.off.apply(iwage.ev, arguments);
};

iwage.emit = function() {
    iwage.ev.emit.apply(iwage.ev, arguments);
};

iwage.cancel = function() {
    iwage.emit('app:cancel');
};

iwage.util.listenersForMode = function(onFabricMode, onImageMode) {
    return {
        afterrender: function(self) {
            iwage.on('app:mode', function(mode) {
                if (mode == iwage.MODES.FABRIC) {
                    (typeof onFabricMode == 'function' ? onFabricMode : self[onFabricMode]).call(self);
                } else {
                    (typeof onImageMode == 'function' ? onImageMode : self[onImageMode]).call(self);
                }
            });
        }
    };
};

iwage.util.hash = iwage.hash = function (s) {
    return s.toLowerCase().replace(/\s*/, '').split('').reduce(
        function(memo, current, index) {
            return memo + current.charCodeAt(0) * (index + 1);
        }, 0).toString(16);
};


iwage.services = {
    imageFromDataUri: function(dataUri, callback) {
        Ext.Ajax.request({
            url: '/webbie_image/ajax_base64_to_image/',
            params: {
                dataUri: dataUri
            },
            success: function(response) {
                if (response && callback) {
                    try {
                        iwage.log('Get: /' + response.responseText);
                        callback('/' + response.responseText);
                    } catch(e) {
                        iwage.error(e);
                    }
                } else {
                    iwage.error('fail: imageFromDataUri');
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
            iwage.log(e);
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
            iwage.log(e);
        }
    },
    getCufonWebbie: function() {
        return CufonWebbie;
    }
};