Ext.ns('app.fabric.tools');

Ext.define('app.image.tools.Open', {
    extend: 'app.tools.Open',
    toolLabel: 'Imagen',
    applyTool: function(imagePath) {
        if(Ext.isArray(imagePath)) {
            imagePath = imagePath[0];
        }

        app.file.openUrl(imagePath);
    }
});