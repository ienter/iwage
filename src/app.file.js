app.ns('file');

app.file = {
    open: function() {
        return app.exec('file.open', arguments);
    },
    load: function(resource) {
        app.view.clearZoom();
        return app.exec('file.load', arguments);
    },
    clear: function() {
        app.history.clear();
        return app.exec('file.clear', arguments);
    },
    set: function(resource, options) {
        return app.exec('file.set', arguments);
    },
    save: function(opts) {
        return app.exec('file.save', arguments);
    },
    saveImage: function() {
        return app.exec('file.saveImage', arguments);
    },
    handle: function(files) {
        if (!files || !files[0]) {
            return false;
        }

        var
            file = files[0],
            reader = new FileReader();

        reader.onload = function(e) {
            app.exec('file.handle', [e.target.result]);
        };

        reader.readAsDataURL(file);

        app.emit('file:handled', file);
    },
    getDataUri: function(opts) {
        return app.exec('file.getDataUri', arguments);
    },
    hide: function() {
        return app.exec('file.hide', arguments);
    },
    show: function() {
        return app.exec('file.show', arguments);
    },
    copy: function() {
        return app.exec('file.copy', arguments);
    },
    paste: function() {
        return app.exec('file.paste', arguments);
    },
    getHeight: function() {
        return app.exec('file.getHeight', arguments);
    },
    getWidth: function() {
        return app.exec('file.getWidth', arguments);
    },
    createCanvas: function() {
        return $('<canvas/>').get(0);
    },
    // TODO mover a app(app.MODES.IMAGE)
    rescale: function(dataUri, scale) {
        var canvas, image, context;

        if (!scale || scale == 1) {
            return dataUri;
        }

        image = this.dataUriToImage(dataUri);

        canvas = this.createCanvas();
        context = canvas.getContext('2d');

        canvas.width = app().file.getWidth() * scale;
        canvas.height = app().file.getHeight() * scale;

        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        dataUri = canvas.toDataURL('image/png');

        return dataUri;
    },
    rescaleResult: function(scale) {
        app.file.set(
            app.file.rescale(
                app.file.getDataUri,
                scale
            )
        );
    },
    imageToDataUri: function(image) {
        var
            canvas = this.createCanvas(),
            context = canvas.getContext('2d');

        canvas.width = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0);

        return canvas.toDataURL('image/png');
    },
    imageUrlToDataUri: function(url) {
        var image = new Image;
        image.src = url;

        return app.file.imageToDataUri(image);
    },
    dataUriToImage: function(dataUri) {
        var image;

        image = new Image();
        image.src = dataUri;

        return image;
    },
    openUrl: function(url) {
        app.file.load(
            app.file.imageUrlToDataUri(url)
        );
    },
    scale: function(img, scale) {
        var canvas, context, result;

        canvas = this.createCanvas();
        context = canvas.getContext('2d');

        canvas.height = img.height * scale;
        canvas.width = img.width * scale;

        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        result = new Image;
        result.src = canvas.toDataURL('image/png');

        return result;
    },
    scaleResult: function() {
        var scale, result, scaled;

        result = $('.result').get(0);
        scale = 1 / app.view.getZoom();

        if (isNaN(scale) || scale == 1) {
            return;
        }

        scaled = app.file.scale(result, scale);

        $('.result').remove();
        $(scaled).addClass('result').appendTo('#container');
    },
    viewAsImage: function() {
        window.open(app().file.getDataUri(), '_preview');
    }
}