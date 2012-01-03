Ext.ns('iwage.image.tools');

Ext.define('iwage.image.tools.FabricImageReady', {
    extend: 'iwage.image.tools.Static',
    refresh: function(itemId, value) {
    },
    getComponent: function() {
        var tool = this;

        if (this.component) {
            return this.component;
        }

        this.component = Ext.create('Ext.button.Button', {
            text: 'Aplicar cambios',
            icon: iwage.icon('tick'),
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
        if (mode == iwage.MODES.FABRIC) {
            this.hide();
            return;
        }

        if (!iwage.get('editing_fabric_as_image')) {
            this.hide();
            return;
        }

        this.show();
    },
    // TODO mover logica
    applyTool: function() {
        var dataUri, newImage, oldImage, topo;

        dataUri = iwage.file.getDataUri();
        newImage = fabric.Image.fromDataURL(dataUri);

        oldImage = iwage.fabric.imageHolder;

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

        topo = iwage.fabric.topo;

        topo.add(newImage);
        topo.exec('calcOffset');
        topo.refresh();
        topo.setActiveObject(newImage);

        iwage.fabric.imageHolder = null;
        iwage.file.clear();


        iwage.setMode(iwage.MODES.FABRIC);
    }
});