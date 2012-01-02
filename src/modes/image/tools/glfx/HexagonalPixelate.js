Ext.ns('app.image.tools.glfx');

Ext.define('app.image.tools.glfx.HexagonalPixelate', {
    toolLabel: 'Pixelado Hexagonal',
    extend: 'app.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Escala',
                itemId: 'scale',
                width: 350,
                value: 1,
                minValue: 1,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).hexagonalPixelate(0, 0, values.scale).update();
    }
});