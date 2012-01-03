Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.TriangleBlur', {
    toolLabel: 'Triangle Blur',
    extend: 'iwage.image.tools.glfx.Common',
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
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).triangleBlur(values.radius).update();
    }
});