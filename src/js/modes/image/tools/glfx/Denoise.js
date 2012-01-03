Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.Denoise', {
    toolLabel: 'Denoise',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Intensidad',
                itemId: 'value',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 30
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).denoise(values.value).update();
    }
});