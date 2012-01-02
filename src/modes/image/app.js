app(app.MODES.IMAGE).tools = {
    onClear: function () {
        app.file.show();
    }
};

app.mode(app.MODES.IMAGE).transform = {
    translateVertical: function () {
        app(app.MODES.IMAGE).file.set(
            app(app.MODES.IMAGE).utils.translateVertical(
                $('.result').get(0)
            )
        );
    },
    translateHorizontal: function () {
        app(app.MODES.IMAGE).file.set(
            app(app.MODES.IMAGE).utils.translateHorizontal(
                $('.result').get(0)
            )
        );
    },
    rotate180: function () {
        app(app.MODES.IMAGE).file.set(
            app(app.MODES.IMAGE).utils.rotate180(
                $('.result').get(0)
            )
        );
    },
    rotate90: function () {
        app(app.MODES.IMAGE).file.set(
            app(app.MODES.IMAGE).utils.rotate90(
                $('.result').get(0)
            )
        );
    },
    rotateMinus90: function () {
        app(app.MODES.IMAGE).file.set(
            app(app.MODES.IMAGE).utils.rotateMinus90(
                $('.result').get(0)
            )
        );
    },
    rotate270: function () {
        app(app.MODES.IMAGE).file.set(
            app(app.MODES.IMAGE).utils.rotate270(
                $('.result').get(0)
            )
        );
    },
    reflect: function () {
        app(app.MODES.IMAGE).file.set(
            app(app.MODES.IMAGE).utils.reflect(
                $('.result').get(0)
            )
        );
    },
    fillAlpha: function (color) {
        app(app.MODES.IMAGE).file.set(
            app(app.MODES.IMAGE).utils.fillAlpha(
                $('.result').get(0),
                color
            )
        );
    }
};

app.mode(app.MODES.IMAGE).utils = {};

(function (utils) {
    utils.canvas = function (width, height) {
        var canvas = document.createElement('canvas');

        if (width) {
            canvas.width = width;
        }

        if (height) {
            canvas.height = height;
        }

        return canvas;
    };

    utils.getImageFromDataUri = function (dataUri) {
        var image;

        image = new Image;
        image.src = dataUri;

        return image;
    };

    utils.getImageFromImageData = function (imageData) {
        var image, canvas, context;

        canvas = this.canvas(imageData.width, imageData.height);
        context = canvas.getContext('2d');

        context.putImageData(imageData, 0, 0);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };

    utils.getImageData = function (img) {
        var canvas = utils.canvas(img.width, img.height);
        var ctx = canvas.getContext('2d');

        ctx.drawImage(img, 0, 0);

        return ctx.getImageData(0, 0, canvas.width, canvas.height);
    };

    utils.scale = function (img, scale) {
        var canvas, context, result;

        canvas = utils.canvas();
        context = canvas.getContext('2d');

        canvas.height = img.height * scale;
        canvas.width = img.width * scale;

        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };

    utils.roundedCorners = function (img, size) {
        var imageData = utils.getImageData(img);
        var data = imageData.data;

        var w = imageData.width;
        var h = imageData.height;

        if (size * 2 > w || size * 2 > h) {
            size = Math.min(w, h) / 2;
        }

        var smoothValue = size * 2; //Math.ceil(Math.pow(size, 1/2));

        var diff = 0;

        for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
                diff = 0;

                if (y <= size && x <= size) {
                    diff = Math.pow(size - x, 2) + Math.pow(size - y, 2) - Math.pow(size, 2);
                } else if (y <= size && (w - x) <= size) {
                    diff = Math.pow(size - (w - x), 2) + Math.pow(size - y, 2) - Math.pow(size, 2);
                } else if ((h - y) <= size && x <= size) {
                    diff = Math.pow(size - x, 2) + Math.pow(size - (h - y), 2) - Math.pow(size, 2);
                } else if ((h - y) <= size && (w - x) <= size) {
                    diff = Math.pow(size - (w - x), 2) + Math.pow(size - (h - y), 2) - Math.pow(size, 2);
                } else {
                    continue;
                }

                if (diff >= 0 && data[(y * w + x) * 4 + 3] != 0) {
                    data[(y * w + x) * 4 + 3] = 0;

                    if (diff - smoothValue < 0) {
                        data[(y * w + x) * 4 + 3] = -(diff - smoothValue) * 255 / smoothValue;
                    }
                }
            }
        }

        return utils.getImageFromImageData(imageData);
    };

    utils.rotate180 = function (img) {
        var canvas, context, result;

        canvas = utils.canvas();
        context = canvas.getContext('2d');

        canvas.height = img.height;
        canvas.width = img.width;

        context.translate(canvas.width, canvas.height);

        context.rotate(Math.PI);

        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };

    utils.rotate90 = function (img) {
        var canvas, context, result;

        canvas = utils.canvas();
        context = canvas.getContext('2d');

        canvas.height = img.width;
        canvas.width = img.height;

        context.translate(canvas.width, canvas.height);
        context.rotate(Math.PI / 2);
        context.translate(-canvas.height, 0);

        context.drawImage(img, 0, 0);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };

    utils.rotateMinus90 = function (img) {
        var canvas, context, result;

        canvas = utils.canvas();
        context = canvas.getContext('2d');

        canvas.height = img.width;
        canvas.width = img.height;

        context.translate(canvas.width, canvas.height);
        context.rotate(-Math.PI / 2);
        context.translate(0, -canvas.width);

        context.drawImage(img, 0, 0);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };

    utils.rotate270 = function (img) {
        return utils.rotate90(
            utils.rotate180(
                img
            )
        );
    };

    utils.translateVertical = function (img) {
        var imageData = utils.getImageData(img);
        var data = imageData.data;

        var w = imageData.width;
        var h = imageData.height;

        var canvas = utils.canvas();

        canvas.height = h;
        canvas.width = w;

        var context = canvas.getContext('2d');
        var outputImageData = context.getImageData(0, 0, canvas.width, canvas.height);

        for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
                for (var c = 0; c < 4; c++) {
                    outputImageData.data[((h - y) * w + x) * 4 + c] = data[(y * w + x) * 4 + c];
                }
            }
        }

        return utils.getImageFromImageData(outputImageData);
    };

    utils.translateHorizontal = function (img) {
        var imageData = utils.getImageData(img);
        var data = imageData.data;

        var w = imageData.width;
        var h = imageData.height;

        var canvas = utils.canvas();

        canvas.height = h;
        canvas.width = w;

        var context = canvas.getContext('2d');
        var outputImageData = context.getImageData(0, 0, canvas.width, canvas.height);

        for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
                for (var c = 0; c < 4; c++) {
                    outputImageData.data[(y * w + (w - x)) * 4 + c] = data[(y * w + x) * 4 + c];
                }
            }
        }

        return utils.getImageFromImageData(outputImageData);
    };

    utils.verticalTranslation = function (img, angle) {
        var canvas, context, result;

        canvas = utils.canvas();
        context = canvas.getContext('2d');

        canvas.height = img.height;
        canvas.width = img.width;

        context.translate(canvas.width, canvas.height);

        context.rotate(Math.PI);

        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };

    utils.reflect = function (img, modifier, transition) {
        modifier = modifier || 1.3;

        // Crear un canvas mas alto que la imagen
        var canvas, context, h, w;

        canvas = utils.canvas();

        w = canvas.width = img.width;
        h = canvas.height = Math.floor(img.height * modifier);

        context = canvas.getContext('2d');

        // Chrome workaround
        if (!w) {
            w = canvas.width = img.width;
        }

        // Insertarle la imagen
        context.drawImage(img, 0, 0);

        // Obtener la info
        var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

        var data = imageData.data;

        var easing = app.transition[transition || 'Cuadratic'](0, h - img.height, 0, 255);
        var alpha;

        // Recorremos los pixeles agregados (img.height - h)
        for (var y = img.height; y < h; y++) {
            alpha = 255 - easing.get(y - img.height);
            for (var x = 0; x < w; x++) {
                for (var c = 0; c < 3; c++) {
                    data[(y * w + x) * 4 + c] = data[((2 * img.height - y - 1) * w + x) * 4 + c];
                }

                var originalAlpha = data[((2 * img.height - y - 1) * w + x) * 4 + c];

                if (originalAlpha < 255) {
                    data[(y * w + x) * 4 + 3] = originalAlpha * alpha / 255;
                } else {
                    data[(y * w + x) * 4 + 3] = alpha;
                }
            }
        }

        return utils.getImageFromImageData(imageData);
    };

    utils.fillAlpha = function (img, color) {
        var canvas, context, h, w;

        canvas = utils.canvas();

        w = canvas.width = img.width;
        h = canvas.height = img.height;

        context = canvas.getContext('2d');

        // Chrome workaround
        if (!w) {
            w = canvas.width = img.width;
        }

        context.fillStyle = color;
        context.fillRect(0, 0, w, h);

        // Insertarle la imagen
        context.drawImage(img, 0, 0);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };

    utils.resize = function (img, width, height) {
        var canvas, context;

        canvas = utils.canvas();

        canvas.width = width;
        canvas.height = height;

        // Chrome workaround
        if (!canvas.width) {
            canvas.width = width;
        }

        context = canvas.getContext('2d');

        // Insertarle la imagen
        context.drawImage(img, 0, 0, width, height);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };
})(app.mode(app.MODES.IMAGE).utils);