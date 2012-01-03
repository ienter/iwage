Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.Common', {
    extend: 'iwage.tools.Common',
    mode: iwage.MODES.IMAGE,
    use: function(options) {
        var fxCanvas, placeholder, image;

        iwage.file.hide();

        placeholder = $('<div/>').addClass('glfx').css({
            position: 'absolute',
            top: options.top || 0,
            left: options.left || 0,
            height: options.height || 300,
            width: options.width || 300,
            backgroundColor: '#f00'
        }).appendTo($('#container'));

        try {
            fxCanvas = fx.canvas();
        } catch (e) {
            iwage.log(e);
            (options.onError || function() {
            })(e);
            return false;
        }

        this.fxCanvas = fxCanvas;

        fxCanvas.width = options.width || 300;
        fxCanvas.height = options.height || 300;

        image = new Image();
        image.src = options.dataUri;
        image.width = options.width;
        image.height = options.height;

        fxCanvas.replace(placeholder.get(0));

        // Imagen original
        this.texture = fxCanvas.texture(image);

        // Render inicial
        this.fxCanvas.draw(this.texture).update();

        iwage.view.adjustContainer();

        this.renderComponent();

        return true;
    },
    applyTool: function() {
        iwage.file.set(this.fxCanvas.toDataURL('image/png'));
    },
    previewFilter: function(values) {
        throw 'Unimplemented method: applyFilter';
    },
    refresh: function() {
        var values = this.getValues();

        if (!values) {
            return;
        }

        this.previewFilter(values);
    },
    destroy: function() {
        this.callParent();
        try {
            this.texture.destroy();
            $(this.fxCanvas).remove();
            this.fxCanvas = null;
        } catch(e) {
        }

        iwage.file.show();
    }
});