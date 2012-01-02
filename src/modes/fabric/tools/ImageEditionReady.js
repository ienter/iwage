Ext.ns('app.fabric.tools');

Ext.define('app.fabric.tools.ImageEditionReady', {
    extend: 'app.fabric.tools.Static',
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
            hidden: true,
            width: 260,
            handler: function() {
                tool.applyTool();
            }
        });

        return this.component;
    },
    onModeChanged: function(mode) {
        if (mode == app.MODES.IMAGE) {
            this.hide();
            return;
        }
        if (!app.get('editing_image_as_fabric')) {
            this.hide();
            return;
        }

        this.show();
    },
    applyTool: function() {
        app(app.MODES.IMAGE).file.set(
            app().file.getDataUri()
        );

        app.unset('editing_image_as_fabric')

        app.setMode(app.MODES.IMAGE);
    }
});