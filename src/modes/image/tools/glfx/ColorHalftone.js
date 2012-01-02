Ext.ns('app.image.tools.glfx');

Ext.define('app.image.tools.glfx.ColorHalftone', {
    toolLabel: 'Color Halftone',
    extend: 'app.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Escala',
                itemId: 'size',
                width: 350,
                value: 1,
                minValue: 1,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values, nubs) {
        this.fxCanvas.draw(this.texture).colorHalftone(
            0,
            0,
            Math.PI,
            values.size
        ).update();
    }
});