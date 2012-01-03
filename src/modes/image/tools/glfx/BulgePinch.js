Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.BulgePinch', {
    toolLabel: 'Bulge / Pinch',
    extend: 'iwage.image.tools.glfx.NubFilter',
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
                fieldLabel: 'Intensidad',
                itemId: 'strength',
                width: 350,
                value: 0,
                minValue: -100,
                maxValue:100
            }
        ];
    },
    previewFilter: function(values, nubs) {
        this.fxCanvas.draw(this.texture).bulgePinch(
            nubs.center.x,
            nubs.center.y,
            values.radius,
            values.strength / 100
        ).update();
    },
    use: function(options) {
        this.addNub('center', 0.5, 0.5);

        this.callParent(arguments);

        // setup nubs
        this.createNubs();
    }
});