/*
 * fabricMode app.mode(app.MODES.FABRIC)
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
                app.emit('app:fabric:selected:none');
            }
        });

        topoInstance.on('selected', function(object) {
            if (!fabricMode.eventsStopped) {
                app.emit('app:fabric:selected', object);
            }
        });

        fabricMode.topo = topoInstance;

        fabricMode.initEvents();
    };

    fabricMode.clear = function() {
        var canvas = app(app.MODES.FABRIC).topo.canvas;

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

                app.view.statusbar.setMessage(
                    'Cagando fuentes ' + Math.floor(requested / toRequest * 100) + '%'
                );

                if (toRequest == requested) {
                    app.view.statusbar.hide();
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

        app.on('app:fabric:selected:none', function() {
            fabricMode.onObjectUnselected();
        });

        app.on('app:fabric:selected', function(object) {
            fabricMode.onObjectSelected(object);
        });

        app.on('app:mode', function(mode) {
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
        Ext.each(app.tools.active, function(tool, index, all) {
            if (tool.onObjectUnselected) {
                tool.onObjectUnselected();
                return;
            }
        });
    };

    fabricMode.onObjectSelected = function(object) {
        Ext.each(app.tools.active, function(tool, index, all) {
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

        app.tools.clearByType('fabricMode.tools.Text');

        control = app.tools.launch('Text', {
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
        var w = window.open('/', app.uid('_preview'));

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
                app.alert('Logo instalado!');
            }
        });
    };
})(app.mode(app.MODES.FABRIC));
