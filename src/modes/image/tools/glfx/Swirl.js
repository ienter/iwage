Ext.ns('app.image.tools.glfx');

Ext.define('app.image.tools.glfx.Swirl', {
    toolLabel: 'Swirl',
    extend: 'app.image.tools.glfx.NubFilter',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Radio',
                itemId: 'radius',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 255
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
    previewFilter: function(values, nubs) {
        this.fxCanvas.draw(this.texture).swirl(
            nubs.center.x,
            nubs.center.y,
            values.radius,
            values.angle
        ).update();
    },
    use: function(options) {
        this.addNub('center', 0.5, 0.5);

        this.callParent(arguments);

        // setup nubs
        this.createNubs();
    }
});