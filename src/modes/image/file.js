/**
 * @see iwage.file
 */
iwage.mode(iwage.MODES.IMAGE).file = {
    open: function () {
        iwage.tools.launch('Open');
    },
    load: function (dataUri) {
        iwage.file.set(dataUri);
        iwage.history.clear();
        iwage.history.setOriginal(dataUri);
        iwage.view.centerContainer();
    },
    clear: function () {
        $('.placeholder .result-container').hide();
    },
    handle: function (dataUri) {
        iwage.file.load(dataUri);
    },
    set: function (result, opts) {
        opts = opts || {};

        if (!result) {
            return false;
        }

        if (!opts.isUndo) {
            iwage.history.addUndo();
        }

        $('.result').remove();

        if (typeof result == 'string') {
            result = $('<img/>').attr('src', result);
        } else {
            result = $(result);
        }

        result.addClass('result').appendTo('#container');

        $('.result-container, #container').show();

        iwage.tools.clear();
        iwage.view.adjustContainer();
        iwage.view.adjustContainer(100);
    },
    save: function() {
        iwage.tools.launch('Save')
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
        if (!iwage.options.proxy) {
            window.open($('.result').attr('src'), '_open');
            return;
        }

        iwage.view.statusbar.setMessage('Guardando...');

        var params = iwage.options.params || {};

        params['dataUri'] = iwage.file.getDataUri(opts);

        iwage.file.set(params['dataUri']);

        Ext.Ajax.request({
            url: iwage.options.proxy,
            params: params,
            timeout: 0,
            success: function (response) {
                var json = Ext.JSON.decode(response.responseText);

                // TODO crear proxy para mensajes
                Ext.MessageBox.alert('Aviso', 'Archivo guardado!');

                iwage.view.statusbar.hide();
            }
        });
    },
    getDataUri: function (opts) {
        var width, height, resized;

        opts = opts || {};

        width = iwage.file.getWidth();
        height = iwage.file.getHeight();

        if (!opts.width || opts.width == width) {
            return $('.result').attr('src');
        }

        resized = app(iwage.MODES.IMAGE).utils.resize(
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