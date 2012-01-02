/**
 * @see app.file
 */
app.mode(app.MODES.IMAGE).file = {
    open: function () {
        app.tools.launch('Open');
    },
    load: function (dataUri) {
        app.file.set(dataUri);
        app.history.clear();
        app.history.setOriginal(dataUri);
        app.view.centerContainer();
    },
    clear: function () {
        $('.placeholder .result-container').hide();
    },
    handle: function (dataUri) {
        app.file.load(dataUri);
    },
    set: function (result, opts) {
        opts = opts || {};

        if (!result) {
            return false;
        }

        if (!opts.isUndo) {
            app.history.addUndo();
        }

        $('.result').remove();

        if (typeof result == 'string') {
            result = $('<img/>').attr('src', result);
        } else {
            result = $(result);
        }

        result.addClass('result').appendTo('#container');

        $('.result-container, #container').show();

        app.tools.clear();
        app.view.adjustContainer();
        app.view.adjustContainer(100);
    },
    save: function() {
        app.tools.launch('Save')
    },
    /**
     * Ejecuta el save de la imagen actual
     *
     * Si hay un proxy definido, se intenta una consulta
     * ajax contra la ruta
     */
    doSave: function (opts) {
        opts = opts || {};

        // Caso contrario renderiza la imagen al browser
        if (!app.options.proxy) {
            window.open($('.result').attr('src'), '_open');
            return;
        }

        app.view.statusbar.setMessage('Guardando...');

        var params = app.options.params || {};

        params['dataUri'] = app.file.getDataUri(opts);

        app.file.set(params['dataUri']);

        Ext.Ajax.request({
            url: app.options.proxy,
            params: params,
            timeout: 0,
            success: function (response) {
                var json = Ext.JSON.decode(response.responseText);

                // TODO crear proxy para mensajes
                Ext.MessageBox.alert('Aviso', 'Archivo guardado!');

                app.view.statusbar.hide();
            }
        });
    },
    getDataUri: function (opts) {
        var width, height, resized;

        opts = opts || {};

        width = app.file.getWidth();
        height = app.file.getHeight();

        if (!opts.width || opts.width == width) {
            return $('.result').attr('src');
        }

        resized = app(app.MODES.IMAGE).utils.resize(
            $('.result').get(0),
            opts.width,
            opts.height
        );

        return $(resized).attr('src');
    },
    hide: function () {
        $('.result').hide();
    },
    show: function () {
        $('.result').show();
    },
    getHeight: function () {
        return $('.result').height() || 0;
    },
    getWidth: function () {
        return $('.result').width() || 0;
    }
};