Ext.ns('app.image.tools');

Ext.define('app.image.tools.EditAsFabric', {
    toolLabel: 'Editar como grafico',
    extend: 'app.image.tools.Static',
    getComponent: function() {
        var tool = this;

        if (this.component) {
            return this.component;
        }

        this.component = Ext.create('Ext.button.Button', {
            text: tool.toolLabel,
            icon: app.icon('palette'),
            margin: 5,
            width: 260,
            handler: function() {
                tool.editSelection();
            }
        });

        return this.component;
    },
    onModeChanged: function(mode) {
        if (mode == app.MODES.FABRIC) {
            this.hide();
            return;
        }

        if (app.get('editing_fabric_as_image')) {
            this.hide();
            return;
        }

        this.show();
    },
    // TODO mover logica a donde corresponda
    editSelection: function() {
        var dataUri = app.file.getDataUri();
        var topo = app(app.MODES.FABRIC).topo;

        app(app.MODES.FABRIC).clear();

        app.set('editing_image_as_fabric', true);

        //topo.clear()

        topo.setHeight(
            app.file.getHeight()
        );

        topo.setWidth(
            app.file.getWidth()
        );

        app.view.centerContainer();

        app.services.imageFromDataUri(dataUri, function(link) {
            try {
                fabric.Image.fromURL(link, function(image) {
                    try {
                        app.setMode(app.MODES.FABRIC);

                        setTimeout(function () {
                            image.set({
                                top: image.get('height') / 2,
                                left: image.get('width') / 2
                            });

                            topo.add(image);
                            topo.refresh();
                            topo.setActiveObject(image);
                        }, 500)
                    } catch(e) {
                        app.error(e);
                    }
                });
            } catch(e) {
                app.error(e);
            }

        });
    }
});


