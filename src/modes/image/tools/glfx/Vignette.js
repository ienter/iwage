Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.Vignette', {
    toolLabel: 'Vignette',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Tama&ntilde;o',
                itemId: 'size',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 100
            },
            {
                xtype: 'slider',
                fieldLabel: 'Intensidad',
                itemId: 'amount',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).vignette(values.size / 100, values.amount / 100).update();
    }
});