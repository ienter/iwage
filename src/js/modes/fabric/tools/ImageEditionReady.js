Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.ImageEditionReady', {
    extend: 'iwage.fabric.tools.Static',
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
            hidden: true,
            width: 260,
            handler: function() {
                tool.applyTool();
            }
        });

        return this.component;
    },
    onModeChanged: function(mode) {
        if (mode == iwage.MODES.IMAGE) {
            this.hide();
            return;
        }
        if (!iwage.get('editing_image_as_fabric')) {
            this.hide();
            return;
        }

        this.show();
    },
    applyTool: function() {
        iwage(iwage.MODES.IMAGE).file.set(
            iwage().file.getDataUri()
        );

        iwage.unset('editing_image_as_fabric')

        iwage.setMode(iwage.MODES.IMAGE);
    }
});