Ext.ns('app.image.tools');

Ext.define('app.image.tools.Crop', {
    mode: app.MODES.IMAGE,
    toolLabel: 'Recortar',
    extend: 'app.tools.Common',
    createControls: function () {
        return [
            {
                xtype: 'label',
                style: 'display:block;padding:0px !important;text-align:center;margin: 0 auto',
                text: 'Seleccione el area a recortar',
                width: 230
            }
        ];
    },
    use: function (options) {

        app().view.setZoom(100);
        app.emit('app:zoom', 100);

        this.originalImage = new Image;

        this.originalImage.src = options.dataUri;

        this.api = $.Jcrop('.result', {
            handleOpacity: 1
        });

        this.callParent(arguments);
    },
    applyTool: function () {
        var
            canvas = this.createCanvas(),
            context = canvas.getContext('2d'),
            offset, width, height;

        width = this.getWidth();
        height = this.getHeight();
        offset = this.getOffset();

        canvas.width = width;
        canvas.height = height;

        //1160.5 487 123 79 0 0 123 79

        //return console.log(

        context.drawImage(
            // Image
            this.originalImage,
            offset.left,
            offset.top,
            width,
            height,
            // Dest x
            0,
            // Dest y
            0,
            // Dest width
            width,
            // Dest height
            height
        );

        app.file.set(canvas.toDataURL('image/png'));
    },
    getWidth: function () {
        return $('.jcrop-holder div:eq(0)').width();
    },
    getHeight: function () {
        return $('.jcrop-holder div:eq(0)').height();
    },
    getOffset: function () {
        var
            el = $('.jcrop-holder div:eq(0)'),
            container = el.parent();

        return {
            top: el.offset().top - container.offset().top,
            left: el.offset().left - container.offset().left
        };
    },
    destroy: function () {
        this.callParent(arguments);
        this.api.destroy();
    }
});