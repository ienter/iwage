Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.DotScreen', {
    toolLabel: 'Dot Screen',
    extend: 'iwage.image.tools.glfx.Common',
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
        this.fxCanvas.draw(this.texture).dotScreen(
            0,
            0,
            Math.PI,
            values.size
        ).update();
    }
});