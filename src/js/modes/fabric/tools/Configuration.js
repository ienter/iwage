Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.Configuration', {
    unique: true,
    persist: false,
    extend: 'iwage.fabric.tools.Common',
    toolLabel: 'Configurar lienzo',
    createControls: function() {
        return [
            {
                xtype: 'numberfield',
                itemId: 'height',
                value:  iwage(iwage.MODES.FABRIC).topo.getHeight(),
                fieldLabel: 'Alto',
                minValue: 0,
                allowDecimals: false,
                allowBlank: false
            },
            {
                xtype: 'numberfield',
                itemId: 'width',
                value:  iwage(iwage.MODES.FABRIC).topo.getWidth(),
                fieldLabel: 'Ancho',
                minValue: 0,
                allowDecimals: false,
                allowBlank: false
            }
        ];
    },
    refresh: function() {
    },
    applyTool: function() {
        var values = this.getValues();

        // TODO mover a iwage.fabric y centrar

        iwage(iwage.MODES.FABRIC).topo.setHeight(values.height);
        iwage(iwage.MODES.FABRIC).topo.setWidth(values.width);

        iwage.view.centerContainer();
    }
});