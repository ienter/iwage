Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.TiltShift', {
    toolLabel: 'Tilt Shift',
    extend: 'iwage.image.tools.glfx.NubFilter',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Blur radius',
                itemId: 'blurRadius',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 255
            },
            {
                xtype: 'slider',
                fieldLabel: 'Gradient radius',
                itemId: 'gradientRadius',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 255
            }
        ];
    },
    previewFilter: function(values, nubs) {
        this.fxCanvas.draw(this.texture).tiltShift(
            nubs.start.x,
            nubs.start.y,
            nubs.end.x,
            nubs.end.y,
            values.blurRadius,
            values.gradientRadius
        ).update();
    },
    use: function(options) {
        this.addNub('start', 0.25, 0.5);
        this.addNub('end', 0.75, 0.5);

        this.callParent(arguments);

        // setup nubs
        this.createNubs();
    }
});