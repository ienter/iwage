iwage.ns('file');

iwage.file = {
    open: function() {
        return iwage.exec('file.open', arguments);
    },
    load: function(resource) {
        iwage.view.clearZoom();
        return iwage.exec('file.load', arguments);
    },
    clear: function() {
        iwage.history.clear();
        return iwage.exec('file.clear', arguments);
    },
    set: function(resource, options) {
        return iwage.exec('file.set', arguments);
    },
    save: function(opts) {
        return iwage.exec('file.save', arguments);
    },
    saveImage: function() {
        return iwage.exec('file.saveImage', arguments);
    },
    handle: function(files) {
        if (!files || !files[0]) {
            return false;
        }

        var
            file = files[0],
            reader = new FileReader();

        reader.onload = function(e) {
            iwage.exec('file.handle', [e.target.result]);
        };

        reader.readAsDataURL(file);

        iwage.emit('file:handled', file);
    },
    getDataUri: function(opts) {
        return iwage.exec('file.getDataUri', arguments);
    },
    hide: function() {
        return iwage.exec('file.hide', arguments);
    },
    show: function() {
        return iwage.exec('file.show', arguments);
    },
    copy: function() {
        return iwage.exec('file.copy', arguments);
    },
    paste: function() {
        return iwage.exec('file.paste', arguments);
    },
    getHeight: function() {
        return iwage.exec('file.getHeight', arguments);
    },
    getWidth: function() {
        return iwage.exec('file.getWidth', arguments);
    },
    createCanvas: function() {
        return $('<canvas/>').get(0);
    },
    // TODO mover a iwage(iwage.MODES.IMAGE)
    rescale: function(dataUri, scale) {
        var canvas, image, context;

        if (!scale || scale == 1) {
            return dataUri;
        }

        image = this.dataUriToImage(dataUri);

        canvas = this.createCanvas();
        context = canvas.getContext('2d');

        canvas.width = iwage().file.getWidth() * scale;
        canvas.height = iwage().file.getHeight() * scale;

        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        dataUri = canvas.toDataURL('image/png');

        return dataUri;
    },
    rescaleResult: function(scale) {
        iwage.file.set(
            iwage.file.rescale(
                iwage.file.getDataUri,
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

        return iwage.file.imageToDataUri(image);
    },
    dataUriToImage: function(dataUri) {
        var image;

        image = new Image();
        image.src = dataUri;

        return image;
    },
    openUrl: function(url) {
        iwage.file.load(
            iwage.file.imageUrlToDataUri(url)
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
        scale = 1 / iwage.view.getZoom();

        if (isNaN(scale) || scale == 1) {
            return;
        }

        scaled = iwage.file.scale(result, scale);

        $('.result').remove();
        $(scaled).addClass('result').appendTo('#container');
    },
    viewAsImage: function() {
        window.open(iwage().file.getDataUri(), '_preview');
    }
}