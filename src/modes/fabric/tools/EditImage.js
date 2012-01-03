Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.EditImage', {
    extend: 'iwage.fabric.tools.Static',
    refresh: function(itemId, value) {

    },
    getComponent: function() {
        var tool = this;

        if (this.component) {
            return this.component;
        }

        this.component = Ext.create('Ext.button.Button', {
            text: 'Editar en Editor de imagenes',
            icon: iwage.icon('photo'),
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
        if (mode != iwage.MODES.FABRIC) {
            this.hide();
            return;
        }

        if (iwage.get('editing_image_as_fabric')) {
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
        var active = app(iwage.MODES.FABRIC).topo.getActive();

        if (!active) {
            return;
        }

        iwage.set('editing_fabric_as_image', true);

        active.clone(function(clone) {
            app(iwage.MODES.FABRIC).imageHolder = clone;

            active.set('angle', 0);

            active.toDataURL(function(dataUri) {
                iwage.setMode(iwage.MODES.IMAGE);
                iwage.file.set(dataUri);
                app(iwage.MODES.FABRIC).topo.remove(active);
            });
        });
    }
});