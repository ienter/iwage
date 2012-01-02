Ext.ns('app.image.tools.glfx');

Ext.define('app.image.tools.glfx.EdgeWork', {
    toolLabel: 'Edge Work',
    extend: 'app.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Radio',
                itemId: 'radius',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 500
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).edgeWork(values.radius / 10).update();
    }
});