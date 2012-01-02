Ext.ns('app.fabric.tools');

Ext.define('app.fabric.tools.EditImage', {
    extend: 'app.fabric.tools.Static',
    refresh: function(itemId, value) {

    },
    getComponent: function() {
        var tool = this;

        if (this.component) {
            return this.component;
        }

        this.component = Ext.create('Ext.button.Button', {
            text: 'Editar en Editor de imagenes',
            icon: app.icon('photo'),
            disabled: true,
            margin: 5,
            width: 260,
            handler: function() {
                tool.editSelection();
            }
        });

        return this.component;
    },
    onModeChanged: function(mode) {
        if (mode != app.MODES.FABRIC) {
            this.hide();
            return;
        }

        if (app.get('editing_image_as_fabric')) {
            this.hide();
            return;
        }

        this.show();
    },
    onObjectSelected: function(field, itemId, fabricObject) {
        if (fabricObject.type == 'image') {
            this.getComponent().enable();
        } else {
            this.getComponent().disable();
        }
    },
    onObjectUnselected: function() {
        this.getComponent().disable();
    },
    editSelection: function() {
        // TODO mover
        var active = app(app.MODES.FABRIC).topo.getActive();

        if (!active) {
            return;
        }

        app.set('editing_fabric_as_image', true);

        active.clone(function(clone) {
            app(app.MODES.FABRIC).imageHolder = clone;

            active.set('angle', 0);

            active.toDataURL(function(dataUri) {
                app.setMode(app.MODES.IMAGE);
                app.file.set(dataUri);
                app(app.MODES.FABRIC).topo.remove(active);
            });
        });
    }
});