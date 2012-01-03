Ext.ns('iwage.fabric.tools');

Ext.define('iwage.image.tools.Open', {
    extend: 'iwage.tools.Open',
    toolLabel: 'Imagen',
    applyTool: function(imagePath) {
        if(Ext.isArray(imagePath)) {
            imagePath = imagePath[0];
        }

        iwage.file.openUrl(imagePath);
    }
});