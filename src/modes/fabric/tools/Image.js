Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.Image', {
    extend: 'iwage.tools.Open',
    toolLabel: 'Imagen',
    applyTool: function(imagePath) {
        iwage(iwage.MODES.FABRIC).topo.image(imagePath);
    }
});