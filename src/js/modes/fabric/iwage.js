if(!window.topo) window.topo = {};

topo.utils = {};

topo.utils.camelize = function(prop) {
    return prop.replace(/-+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    }).replace(/^([a-z])/, function(match, chr) {
    	return chr.toUpperCase()
    });
};

topo.utils.xetterize = function(obj, props) {
	for(var i = 0, l = props.length; i < l; i++) {
		(function(prop, camelized) {
			obj['get' + camelized] = function() {
				return this[prop];
			};

			obj['set' + camelized] = function(value) {
				var old = this['get' + camelized]();
				this[prop] = value;

				this.emit('set', [prop, value, old]);

				return this;
			};
		})(props[i], topo.utils.camelize(props[i]));
	}
};

topo.utils.eventize = function(obj) {
	obj.emit = function(ev, args, scope) {
		if(!this.__handlers || !this.__handlers[ev]) {
			return this;
		}

		this.__handlers[ev].forEach(function(handler) {
			handler.apply(scope, args);
		});

		return this;
	};

	obj.on = function(ev, handler) {
		this.__handlers = this.__handlers || {};
		this.__handlers[ev] = this.__handlers[ev] || [];
		this.__handlers[ev].push(handler);

		return this;
	};
};

topo.utils.configurize = function(obj) {
	obj.config = function(props) {
		for(var p in props) if(props.hasOwnProperty(p)) {
			this[p] = props[p];
		}
		return this;
	}
};

topo.utils.debounce = function(fn, delay, scope) {
    return function() {
        var args = arguments;

        clearTimeout(fn.lastExecution);

        fn.lastExecution = setTimeout(function() {
            fn.apply(scope, args);
        }, delay);
    }
};

topo.utils.extend = function(parent, subject) {
	subject.prototype = new parent;
	subject.prototype.constructor = subject;
	return subject;
};

if (!window.topo) window.topo = {};

topo.Editor = function(opts) {
    var
        self = this,
        element;

    opts = opts || {};

    if (!opts.element || typeof opts.element == 'string' && !document.getElementById(opts.element)) {
        throw new Error('Invalid canvas element');
    }

    if (typeof opts.element == 'string') {
        opts.element = document.getElementById(opts.element);
    }

    this.canvas = new fabric.Canvas(opts.element);

    this.setHeight(
        opts.height || this.canvas.CANVAS_HEIGHT
    );

    this.setWidth(
        opts.width || this.canvas.CANVAS_WIDTH
    );

    this.initEvents();

    // Limita los refresh consecutivos (performance)
    this.refresh = topo.utils.debounce(this.refresh, 0, this);

    // Limita los next consecutivos (bug fix)
    this.next = topo.utils.debounce(this.next, 150, this);

    this.refresh();

    this.on('change', function(attr, value) {
        self.onChange(attr, value);
    });
};

topo.Editor.prototype = {
    exec: function(method, args) {
        if (!args) {
            args = [];
        }

        if (!Array.isArray(args)) {
            args = [args];
        }

        if (this.canvas) {
            return this.canvas[method].apply(
                this.canvas,
                args
            );
        }

        if (method != 'refreshAll') {
            this.refresh();
        }

        return null;
    },
    /**
     * @return {topo.Editor}
     */
    refresh: function() {
        if (this.canvas.CANVAS_HEIGHT != this.getHeight()) {
            this.exec('setHeight', this.getHeight());
        }

        if (this.canvas.CANVAS_WIDTH != this.getWidth()) {
            this.exec('setWidth', this.getWidth());
        }

        fabric.log('Refreshing canvas');
        this.exec('renderAll');

        return this;
    },
    /**
     * @return {String}
     */
    serialize: function() {
        return this.exec('toDatalessJSON');
    },
    toDataURI: function() {
        this.exec('deactivateAll');
        return this.exec('toDataURL', 'png');
    },
    initEvents: function() {
        var
            self = this;

        this.on('set', function(prop, value, oldValue) {
            // Refrescamos el canvas
            self.refresh();
        });

        this.canvas.observe('object:selected', function(e) {
            var fabricObject = e.memo.target;

            if (self.canvas.getActiveGroup()) {
                return;
            }

            self.emit('selected', [fabricObject]);
        });


        this.canvas.observe('object:moving', topo.utils.debounce(function(e) {
            if (self.canvas.getActiveGroup()) {
                return;
            }

            if (!self.canvas.getActiveObject()) {
                return;
            }

            var fabricObject = e.memo.target;

            self.emit('selected', [fabricObject]);
        }, 50, this));

        this.canvas.observe('selection:cleared', function() {
            self.emit('selected:none');
        });
    },
    /**
     *
     * @param {String} text
     * @param {Object} opts
     * @return {fabric.Text}
     */
    text: function(text, opts) {
        opts = opts || {};

        var
            self = this,
            fabricObject = new fabric.Text(text || opts.text || '', {
                fill: '#000',
                fontFamily: Object.keys(CufonWebbie.getRegisteredFonts())[0],
                top: this.getCenterY(),
                left: this.getCenterX()

            });

        fabric.log(this.getCenterX(), this.getCenterY());

        if (opts.color) {
            fabricObject.set('fill', opts.color);
        }

        if (opts.fontFamily) {
            fabricObject.set('fontFamily', opts.fontFamily);
        }

        this.exec('add', fabricObject);
        this.refresh();
        this.setActiveObject(fabricObject);

        return fabricObject;
    },
    svg: function(file) {
        var
            self = this;

        fabric.loadSVGFromURL('/asset/svg/svg/' + file + '.svg', function(objects, options) {
            var fabricObject;

            if (objects.length > 1) {
                fabricObject = new fabric.PathGroup(objects, options);
            } else {
                fabricObject = objects[0];
            }

            fabricObject.set('top', self.getCenterY());
            fabricObject.set('left', self.getCenterX());
            fabricObject.set('angle', 0);

            if (self.getCenterX() > self.getCenterY()) {
                fabricObject.scaleToWidth(self.getCenterY());
            } else {
                fabricObject.scaleToHeight(self.getCenterX());
            }

            self.add(fabricObject);
            self.exec('calcOffset');
            self.refresh();
            self.setActiveObject(fabricObject);
        });
    },
    image: function(file) {
        var
            self = this;

        fabric.Image.fromURL(file, function(fabricObject) {
            fabricObject.set('top', self.getCenterY());
            fabricObject.set('left', self.getCenterX());
            fabricObject.set('angle', 0);

            if (self.getCenterX() > self.getCenterY()) {
                fabricObject.scaleToWidth(self.getCenterY());
            } else {
                fabricObject.scaleToHeight(self.getCenterX());
            }

            self.add(fabricObject);
            self.exec('calcOffset');
            self.refresh();
            self.setActiveObject(fabricObject);
        });
    },
    imageFromDataUri: function(dataUri) {
        var
            self = this,
            fabricObject = fabric.Image.fromDataURL(dataUri);

        fabricObject.set('top', this.getCenterY());
        fabricObject.set('left', this.getCenterX());
        fabricObject.set('angle', 0);

        if (this.getCenterX() > this.getCenterY()) {
            fabricObject.scaleToWidth(this.getCenterY());
        } else {
            fabricObject.scaleToHeight(this.getCenterX());
        }

        setTimeout(function () {
            self.add(fabricObject);
            self.exec('calcOffset');
            self.setActiveObject(fabricObject);
            self.refresh();
        }, 1000);

    },
    /**
     * TODO adelgazar
     *
     * @param data
     */
    shape: function(data) {
        var
            fabricObject,
            type;

        if (typeof data == 'string') {
            data = {
                type: data
            };
        }

        if (!fabric[data.type]) {
            fabric.warn('Invalid type: ' + data.type);
            return;
        }

        if (data.type == 'Circle') {
            return this.circle(data);
        }

        fabricObject = new fabric[data.type];

        if (data.strokeWidth) {
            fabricObject.set('strokeWidth', data.strokeWidth);
        }


        if (data.type == 'Rect') {
            fabricObject.set('fill', '#0F8311');
            fabricObject.set('stroke', '#0F8311');
        } else {
            if (data.type == 'Triangle') {
                fabricObject.set('fill', '#0D6FCE');
                fabricObject.set('stroke', '#0D6FCE');
            } else {
                fabricObject.set('fill', '#000000');
            }
        }

        if (data != 'Line') {
            fabricObject.set('height', this.getCenterY() * 2 / 3);
        }

        fabricObject.set('width', this.getCenterX() * 2 / 3);
        fabricObject.set('angle', 0);

        fabricObject.set('top', this.getCenterY());
        fabricObject.set('left', this.getCenterX());

        this.add(fabricObject);
        this.exec('calcOffset');
        this.refresh();
        this.setActiveObject(fabricObject);

    },
    circle: function(data) {
        data = data || {};

        var fabricObject = new fabric.Circle({
            left: data.left || this.getCenterX(),
            top: data.top || this.getCenterY(),
            strokeWidth: data.strokeWidth || 1,
            radius: data.radius || this.getCenterY() / 2,
            fill: data.fill || '#961111',
            stroke: data.stroke || '#961111'
        });

        this.add(fabricObject);
        this.exec('calcOffset');
        this.refresh();
        this.setActiveObject(fabricObject);
    },
    add: function(fabricObject) {
        this.exec('add', fabricObject);
        return this;
    },
    getCenterX: function() {
        return this.exec('getCenter').left;
    },
    getCenterY: function() {
        return this.exec('getCenter').top;
    },
    clear: function() {
        this.exec('dispose');
        return this;
    },
    remove: function(fabricObject) {
        this.exec('remove', fabricObject);
        return this;
    },
    item: function(index) {
        return this.exec('item', index);
    },
    getFromFabricObject: function(fabricObject) {
        return null;
    },
    getActive: function() {
        return this.canvas.getActiveObject() || this.canvas.getActiveGroup();
    },
    getActiveObject: function() {
        return this.canvas.getActiveObject();
    },
    /**
     * Trata de eliminar la seleccion
     *
     * @return {topo.Editor}
     */
    removeActive: function() {
        var
            canvas = this.canvas,
            obj, i, l, dirty;

        if (canvas.getActiveGroup()) {
            dirty = true;

            obj = canvas.getActiveGroup().objects;

            canvas.discardActiveGroup();

            for (i = 0,l = obj.length; i < l; i++) {
                canvas.remove(obj[i]);
            }
        }

        if (canvas.getActiveObject()) {
            dirty = true;
            canvas.remove(canvas.getActiveObject());
        }

        if (dirty) {
            this.refresh();
        }

        this.emit('selected:none');

        return this;
    },
    copyboard: null,
    /**
     * Clona y referencia el objeto activo
     * para futuros pastes
     *
     * @return {topo.Editor}
     */
    copyActive: function() {
        var
            canvas = this.canvas;

        if (canvas.getActiveObject()) {
            this.copyboard = canvas.getActiveObject();
        }

        return this;
    },
    /**
     * Clona y pega el elemento del clipboard
     * si es que existiera
     *
     * @return {topo.Editor}
     */
    paste: function() {
        if (!this.copyboard) {
            return this;
        }

        var copy = this.copyboard.clone();

        copy.set('top', copy.top + 5);
        copy.set('left', copy.left + 5);

        this.exec('deactivateAll');
        this.exec('add', copy);
        this.setActiveObject(copy);

        return this;
    },
    onChange: function(attr, value) {
        var canvas = this.canvas,
            activeObject,
            self = this;

        activeObject = canvas.getActiveObject();

        if (!activeObject) {
            return;
        }

        switch (attr) {
            case 'angle':
                activeObject.setAngle(value);
                break;
            case 'height':
                activeObject.scaleToHeight(value);
                break;
            case 'width':
                activeObject.scaleToWidth(value);
                break;
            case 'opacity':
                activeObject.setOpacity(value);
                break;
            default:
                activeObject.set(attr, value);
        }

        this.refresh();

        setTimeout(function() {
            self.emit('selected', [activeObject]);
        }, 0);

    },
    up: function(px) {
        var
            fabricObject = this.getActive();

        if (!fabricObject) {
            return;
        }

        px = px || 1;

        fabricObject.set('top', fabricObject.get('top') - px);

        this.refresh();
        this.emit('selected', [fabricObject]);
    },
    down: function(px) {
        var
            fabricObject = this.getActive();

        if (!fabricObject) {
            return;
        }

        px = px || 1;

        fabricObject.set('top', fabricObject.get('top') + px);

        this.refresh();
        this.emit('selected', [fabricObject]);
    },
    left: function(px) {
        var
            fabricObject = this.getActive();

        if (!fabricObject) {
            return;
        }

        px = px || 1;

        fabricObject.set('left', fabricObject.get('left') - px);

        this.refresh();
        this.emit('selected', [fabricObject]);
    },
    right: function(px, emit) {
        var
            fabricObject = this.getActive();

        if (!fabricObject) {
            return;
        }

        px = px || 1;

        fabricObject.set('left', fabricObject.get('left') + px);

        this.refresh();
        this.emit('selected', [fabricObject]);
    },
    toFront: function() {
        var
            fabricObject = this.getActive(),
            canvas = this.canvas;

        if (!fabricObject) {
            return;
        }

        canvas.bringToFront(fabricObject);

        this.refresh();
        this.emit('selected', [fabricObject]);
    },
    toBack: function() {
        var
            fabricObject = this.getActive(),
            canvas = this.canvas;

        if (!fabricObject) {
            return;
        }

        canvas.sendToBack(fabricObject);

        this.refresh();
        this.emit('selected', [fabricObject]);
    },
    next: function() {
        var
            canvas = this.canvas,
            objects = canvas._objects,
            active = this.getActive(),
            activeIndex;

        // Si no hay elemento seleccionado
        if (!active) {
            this.setItemActive(0);
            return;
        }

        activeIndex = objects.indexOf(active);

        // Si es un path group
        if (activeIndex == -1) {
            this.setItemActive(0);
            return;
        }

        // Si es el ultimo elemento
        if (!objects[activeIndex + 1]) {
            this.setItemActive(0);
        }

        // Next!
        this.setItemActive(activeIndex + 1);
    },
    setActiveObject: function(item) {
        this.exec('setActiveObject', item);
        return this;
    },
    setItemActive: function(index) {
        var
            canvas = this.canvas,
            objects = canvas._objects;

        index = index || 0;

        this.exec('deactivateAll');

        if (!objects[index]) {
            if (objects[0]) {
                canvas.setActiveObject(objects[0]);
            }

            return;
        }

        this.setActiveObject(objects[index]);
        return this;
    },
    open: function(serialized) {
        this.canvas.loadFromJSON(serialized);
        this.refresh();
    }
};

topo.Editor.__attrs = [
    'element',
    'height',
    'width',
    'backgroundColor'
];

topo.utils.xetterize(topo.Editor.prototype, topo.Editor.__attrs);
topo.utils.eventize(topo.Editor.prototype);
topo.utils.configurize(topo.Editor.prototype);

/*
 * fabricMode iwage.mode(iwage.MODES.FABRIC)
 */

(function(fabricMode) {
    /**
     * @param {Object} options
     */
    fabricMode.start = function(options) {
        fabricMode.loadFonts();

        setTimeout(function() {
            fabricMode.initTopo(options);
            fabricMode.start = function() {
            };
        });

    };

    fabricMode.eventsStopped = false;

    fabricMode.stopEvents = function() {
        fabricMode.eventsStopped = true;
    };

    fabricMode.resumeEvents = function() {
        fabricMode.eventsStopped = false;
    };

    /**
     *
     * @param options
     */
    fabricMode.initTopo = function(options) {
        var topoInstance = new topo.Editor({
            element: 'fabric',
            width: options.fabricWidth,
            height: options.fabricHeight
        });

        topoInstance.on('selected:none', function() {
            if (!fabricMode.eventsStopped) {
                iwage.emit('app:fabric:selected:none');
            }
        });

        topoInstance.on('selected', function(object) {
            if (!fabricMode.eventsStopped) {
                iwage.emit('app:fabric:selected', object);
            }
        });

        fabricMode.topo = topoInstance;

        fabricMode.initEvents();
    };

    fabricMode.clear = function() {
        var canvas = iwage(iwage.MODES.FABRIC).topo.canvas;

        var obj;
        while (obj = canvas.item(0)) {
            canvas.remove(obj);
        }
    };

    fabricMode.loadFonts = function() {
        fabricMode.findFonts(function(data) {
            var
                base = '/asset/font/file/',
                toRequest = data.length,
                requested = 0;

            function ready() {
                requested++;

                iwage.view.statusbar.setMessage(
                    'Cagando fuentes ' + Math.floor(requested / toRequest * 100) + '%'
                );

                if (toRequest == requested) {
                    iwage.view.statusbar.hide();
                }
            }

            Ext.each(data, function(current, index, total) {
                Ext.Loader.loadScriptFile(
                    base + current.file,
                    ready,
                    ready
                );
            });
        });
    };

    fabricMode.findFonts = function(callback) {
        Ext.Ajax.request({
            url: '/system/finder/findInModel/fontset/all/',
            success: function(response) {
                var data;

                try {
                    data = Ext.decode(response.responseText);
                } catch(e) {
                }

                if (data) {
                    callback(data.data);
                }
            }
        });
    };

    fabricMode.initEvents = function() {

        iwage.on('app:fabric:selected:none', function() {
            fabricMode.onObjectUnselected();
        });

        iwage.on('app:fabric:selected', function(object) {
            fabricMode.onObjectSelected(object);
        });

        iwage.on('app:mode', function(mode) {
            fabricMode.topo.refresh();
        });

        $('#fabric-parent').click(function() {
            fabricMode.topo.refresh();

        });
    };

    /**
     * Deshabilita todas las herramientas estaticas
     */
    fabricMode.onObjectUnselected = function() {
        Ext.each(iwage.tools.active, function(tool, index, all) {
            if (tool.onObjectUnselected) {
                tool.onObjectUnselected();
                return;
            }
        });
    };

    fabricMode.onObjectSelected = function(object) {
        Ext.each(iwage.tools.active, function(tool, index, all) {
            if (!tool.onObjectSelected) {
                return;
            }

            var items = tool.getComponent().items;

            if (!items) {
                if (tool.getComponent().$className == 'Ext.button.Button') {
                    tool.onObjectSelected(null, null, object)
                }
                return;
            }

            items.each(function(field, index) {
                if (field.itemId) {
                    tool.onObjectSelected(field, field.itemId, object);
                } else {
                    // soporte a composite fields
                    field.items.each(function(current, index, total) {
                        if (current.itemId) {
                            tool.onObjectSelected(current, current.itemId, object);
                        }
                    });
                }
            });
        });

        if (object.type == 'text') {
            fabricMode.onTextObjectSelected(object);
        }
    };

    /**
     *
     * @param {Object} object
     */
    fabricMode.onTextObjectSelected = function(object) {
        var control;

        iwage.tools.clearByType('fabricMode.tools.Text');

        control = iwage.tools.launch('Text', {
            text: object
        });

        fabricMode.stopEvents();
        fabricMode.topo.setActiveObject(object);
        fabricMode.resumeEvents();

        control.setValues();
    };

    fabricMode.addLine = function() {
        fabricMode.topo.shape('Line');
    };

    fabricMode.addRect = function() {
        fabricMode.topo.shape('Rect');
    };

    fabricMode.addCircle = function() {
        fabricMode.topo.shape('Circle');
    };

    fabricMode.addTriangle = function() {
        fabricMode.topo.shape('Triangle');
    };

    fabricMode.removeActive = function() {
        fabricMode.topo.removeActive();
    };

    fabricMode.preview = function() {
        // Abrir una ventana al home
        var w = window.open('/', iwage.uid('_preview'));

        // Modificar el logo
        $(w).load(function() {
            $('.webbie-logo', w.document).attr(
                'src', fabricMode.topo.toDataURI()
            );
            w.focus();
        });
    };

    fabricMode.install = function() {
        var uri = fabricMode.topo.toDataURI();

        Ext.Ajax.request({
            url:'/webbie_image/install_logo/',
            params: {
                uri: uri
            },
            success: function(response) {
                iwage.alert('Logo instalado!');
            }
        });
    };
})(iwage.mode(iwage.MODES.FABRIC));
