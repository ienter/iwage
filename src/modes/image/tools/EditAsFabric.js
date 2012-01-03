Ext.ns('iwage.image.tools');

Ext.define('iwage.image.tools.EditAsFabric', {
    toolLabel: 'Editar como grafico',
    extend: 'iwage.image.tools.Static',
    getComponent: function() {
        var tool = this;

        if (this.component) {
            return this.component;
        }

        this.component = Ext.create('Ext.button.Button', {
            text: tool.toolLabel,
            icon: iwage.icon('palette'),
            margin: 5,
            width: 260,
            handler: function() {
                tool.editSelection();
            }
        });

        return this.component;
    },
    onModeChanged: function(mode) {
        if (mode == iwage.MODES.FABRIC) {
            this.hide();
            return;
        }

        if (iwage.get('editing_fabric_as_image')) {
            this.hide();
            return;
        }

        this.show();
    },
    // TODO mover logica a donde corresponda
    editSelection: function() {
        var dataUri = iwage.file.getDataUri();
        var topo = iwage(iwage.MODES.FABRIC).topo;

        iwage(iwage.MODES.FABRIC).clear();

        iwage.set('editing_image_as_fabric', true);

        //topo.clear()

        topo.setHeight(
            iwage.file.getHeight()
        );

        topo.setWidth(
            iwage.file.getWidth()
        );

        iwage.view.centerContainer();

        iwage.services.imageFromDataUri(dataUri, function(link) {
            try {
                fabric.Image.fromURL(link, function(image) {
                    try {
                        iwage.setMode(iwage.MODES.FABRIC);

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
                        iwage.error(e);
                    }
                });
            } catch(e) {
                iwage.error(e);
            }

        });
    }
});


