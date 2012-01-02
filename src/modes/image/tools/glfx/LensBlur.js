Ext.ns('app.image.tools.glfx');

Ext.define('app.image.tools.glfx.LensBlur', {
    extend: 'app.image.tools.glfx.Common',
    toolLabel: 'Lens Blur',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Radio',
                itemId: 'radius',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 100
            },
            {
                xtype: 'slider',
                fieldLabel: 'Brillo',
                itemId: 'brightness',
                width: 350,
                value: 0,
                minValue: -100,
                maxValue: 100
            },
            {
                xtype: 'slider',
                fieldLabel: 'Angulo',
                itemId: 'angle',
                width: 350,
                value: 0,
                increment: 0.1,
                minValue: -Math.PI,
                maxValue: Math.PI
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).lensBlur(
            values.radius,
            values.brightness / 100,
            values.angle
        ).update();
    }
});