Ext.ns('app.fabric.tools');

Ext.define('app.fabric.tools.Image', {
    extend: 'app.tools.Open',
    toolLabel: 'Imagen',
    applyTool: function(imagePath) {
        app(app.MODES.FABRIC).topo.image(imagePath);
    }
});