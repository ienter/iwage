Ext.ns('app.image.tools.glfx');

Ext.define('app.image.tools.glfx.BrightnessContrast', {
    toolLabel: 'Brillo / Contraste',
    extend: 'app.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Brillo',
                itemId: 'brightness',
                width: 350,
                value: 0,
                minValue: -255,
                maxValue: 255
            },
            {
                xtype: 'slider',
                fieldLabel: 'Contraste',
                itemId: 'contrast',
                width: 350,
                value: 0,
                minValue: -255,
                maxValue: 255
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).brightnessContrast(values.brightness / 255, values.contrast / 255).update();
    }
});