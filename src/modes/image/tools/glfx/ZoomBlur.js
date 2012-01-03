Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.ZoomBlur', {
    toolLabel: 'Zoom Blur',
    extend: 'iwage.image.tools.glfx.NubFilter',
    createControls: function() {
        return [
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
        this.fxCanvas.draw(this.texture).zoomBlur(
            nubs.center.x,
            nubs.center.y,
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