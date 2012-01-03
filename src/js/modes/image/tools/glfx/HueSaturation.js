Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.HueSaturation', {
    toolLabel: 'Hue / Saturacion',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'HUE',
                itemId: 'hue',
                width: 350,
                value: 0,
                minValue: -180,
                maxValue: 180
            },
            {
                xtype: 'slider',
                fieldLabel: 'Saturacion',
                itemId: 'saturation',
                width: 350,
                value: 0,
                minValue: -100,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).hueSaturation(values.hue / 180, values.saturation / 100).update();
    }
});