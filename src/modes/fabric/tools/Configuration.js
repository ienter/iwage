Ext.ns('app.fabric.tools');

Ext.define('app.fabric.tools.Configuration', {
    unique: true,
    persist: false,
    extend: 'app.fabric.tools.Common',
    toolLabel: 'Configurar lienzo',
    createControls: function() {
        return [
            {
                xtype: 'numberfield',
                itemId: 'height',
                value:  app(app.MODES.FABRIC).topo.getHeight(),
                fieldLabel: 'Alto',
                minValue: 0,
                allowDecimals: false,
                allowBlank: false
            },
            {
                xtype: 'numberfield',
                itemId: 'width',
                value:  app(app.MODES.FABRIC).topo.getWidth(),
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

        // TODO mover a app.fabric y centrar

        app(app.MODES.FABRIC).topo.setHeight(values.height);
        app(app.MODES.FABRIC).topo.setWidth(values.width);

        app.view.centerContainer();
    }
});