app.mode(app.MODES.FABRIC).file = {
    handle: function(dataUri) {
        app.fabric.topo.imageFromDataUri(dataUri);

        Ext.each(app.tools.active, function(current, index, total) {
            if (current.$className == 'app.tools.fabric.Image') {
                current.destroy();
            }
        });
    },
    load: function(json) {
        app.fabric.topo.open(json);
    },
    save: function() {
        var file = app(app.MODES.FABRIC).file;

        Ext.Msg.prompt('Guardar', 'Nombre del archivo:', function(btn, text) {
            if (btn == 'ok') {
                file.verifySaveName(text, function(json) {
                    if (json.valid === false) {
                        Ext.Msg.show({
                            title:'Atencion',
                            msg: 'Ya existe un archivo con el mismo nombre. Desea reemplazarlo?',
                            buttons: Ext.Msg.YESNO,
                            icon: Ext.Msg.QUESTION,
                            fn: function(btn) {
                                if (btn == 'yes') {
                                    file.doSave(text);
                                }
                            }
                        });
                    } else {
                        file.doSave(text);
                    }
                });
            }
        }, null, false, file.actualName);
    },
    verifySaveName: function(name, callback) {
        Ext.Ajax.request({
            url: app.options.fabricVerifyName,
            params: {
                name: name
            },
            success: function(response) {
                var
                    data = response.responseText,
                    json;

                try {
                    json = Ext.JSON.decode(data);
                } catch(e) {
                    app.error(e);
                }

                (callback || function() {
                })(json, data);
            }
        });
    },
    doSave: function(name) {
        var
            serialized,
            uri,
            topo = app().topo,
            file = app().file;

        uri = topo.toDataURI();
        serialized = topo.serialize();

        Ext.Ajax.request({
            url: app.options.fabricSaveProxy,
            params: {
                name: name,
                uri: uri,
                serialized: JSON.stringify(serialized),
                width: topo.canvas.getWidth(),
                height: topo.canvas.getHeight()
            },
            success: function(response) {
                file.actualName = name;
                (callback || function() {
                })();
            }
        });
    },
    open: function() {
        app.tools.launch('Open');
    },
    getDataUri: function() {
        return app().topo.toDataURI();
    },
    copy: function() {
        app().topo.copyActive();
    },
    paste: function() {
        app().topo.paste();
    }
};