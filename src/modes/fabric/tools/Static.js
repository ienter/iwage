Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.Static', {
    extend: 'iwage.tools.Static',
    mode: iwage.MODES.FABRIC,
    refresh: function(itemId, value) {
        if (!itemId) {
            return;
        }

        try {
            if (itemId != 'angle') {
                app(iwage.MODES.FABRIC).topo.getActive().set(itemId, value);
            } else {
                app(iwage.MODES.FABRIC).topo.getActive().setAngle(value);
            }
            app(iwage.MODES.FABRIC).topo.refresh();
        } catch(e) {
            iwage.log(e);
        }
    },
    onObjectSelected: function(field, itemId, fabricObject) {
        if (!fabricObject || !field || !itemId) {
            return;
        }

        switch (fabricObject.type) {
            case 'rect':
            case 'triangle':
            case 'circle':
                field.enable();
                break;
            // Las lineas no tienen color de relleno
            case 'line':
                if (itemId != 'stroke') {
                    field.enable();
                }
                break;
            case 'image':
                if (['angle', 'top', 'left', 'opacity'].indexOf(itemId) != -1) {
                    field.enable();
                }
                break;
            case 'path':
            case 'path-group':
                if (itemId == 'fill' && fabricObject.isSameColor && fabricObject.isSameColor()) {
                    field.enable();
                }
                if (['angle', 'top', 'left', 'opacity'].indexOf(itemId) != -1) {
                    field.enable();
                }
                break;
            case 'text':
                if (['angle', 'top', 'left', 'opacity', 'fill'].indexOf(itemId) != -1) {
                    field.enable();
                }
                break;
        }

        // Evitar eventos
        field.suspendEvents();

        switch (itemId) {
            case 'zpos':
                field.enable();
                break;
            case 'opacity':
                field.setValue(
                    fabricObject.get(itemId) * 100
                );
                break;
            default:
                field.setValue && field.setValue(
                    fabricObject.get(field.itemId)
                );
        }

        field.resumeEvents();
    },
    onObjectUnselected: function() {
        var items = this.getComponent().items;

        if (!items) {
            return;
        }

        items.each(function(field, index) {
            if (field.itemId) {
                field.disable();
            } else {
                // soporte a composite fields
                field.items.each(function(current, index, total) {
                    if (current.itemId) {
                        current.disable();
                    }
                });
            }

        });
    },
    getDefaultListeners: function() {
        var self = this;

        return {
            change: function(field, value) {
                if (field.itemId == 'opacity') {
                    value = value / 100;
                }

                self.refresh(field.itemId, value);
            }
        }
    }
});