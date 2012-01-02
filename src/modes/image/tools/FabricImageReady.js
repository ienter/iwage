Ext.ns('app.image.tools');

Ext.define('app.image.tools.FabricImageReady', {
    extend: 'app.image.tools.Static',
    refresh: function(itemId, value) {
    },
    getComponent: function() {
        var tool = this;

        if (this.component) {
            return this.component;
        }

        this.component = Ext.create('Ext.button.Button', {
            text: 'Aplicar cambios',
            icon: app.icon('tick'),
            margin: 5,
            width: 260,
            hidden: true,
            handler: function() {
                tool.applyTool();
            }
        });

        return this.component;
    },
    onModeChanged: function(mode) {
        if (mode == app.MODES.FABRIC) {
            this.hide();
            return;
        }

        if (!app.get('editing_fabric_as_image')) {
            this.hide();
            return;
        }

        this.show();
    },
    // TODO mover logica
    applyTool: function() {
        var dataUri, newImage, oldImage, topo;

        dataUri = app.file.getDataUri();
        newImage = fabric.Image.fromDataURL(dataUri);

        oldImage = app.fabric.imageHolder;

        if (!oldImage) {
            // error!
            return;
        }

        newImage.set({
            top: oldImage.get('top'),
            left: oldImage.get('left'),
            angle: oldImage.get('angle'),
            opacity: oldImage.get('opacity')
        });

        topo = app.fabric.topo;

        topo.add(newImage);
        topo.exec('calcOffset');
        topo.refresh();
        topo.setActiveObject(newImage);

        app.fabric.imageHolder = null;
        app.file.clear();


        app.setMode(app.MODES.FABRIC);
    }
});