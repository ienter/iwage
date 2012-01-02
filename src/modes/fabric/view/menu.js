app(app.MODES.FABRIC).view.menu = {
    createFileMenu: function() {
        return {
            text: 'Archivo',
            menu: {
                items: [
                    {
                        text: 'Abrir <span class="shortcut">(ctrl + o)</span>',
                        icon: app.icon('open'),
                        handler: app.file.open
                    },
                    {
                        text: 'Guardar <span class="shortcut">(ctrl + s)</span>',
                        icon: app.icon('save'),
                        handler: app.file.save
                    },
                    '-',
                    {
                        text: 'Previsualizar',
                        icon: app.icon('preview'),
                        handler: function() {
                            app(app.MODES.FABRIC).preview();
                        }
                    },
                    {
                        text: 'Instalar',
                        icon: app.icon('tick'),
                        handler: function() {
                            app(app.MODES.FABRIC).install();
                        }
                    },
                    {
                        text: 'Descargar',
                        icon: app.icon('download'),
                        handler: function() {
                            app.file.viewAsImage();
                        }
                    }
                ]
            }
        };
    },
    createEditMenu: function() {
        return {
            text: 'Editar',
            menu: {
                items:[
                    {
                        icon: app.icon('undo'),
                        text: 'Deshacer <span class="shortcut">(ctrl + z)</span>',
                        handler: app.history.undo
                    },
                    {
                        icon: app.icon('redo'),
                        text: 'Rehacer <span class="shortcut">(ctrl + shift + z)</span>',
                        handler: app.history.redo
                    },
                    '-',
                    {
                        text: 'Volver al original',
                        icon: app.icon('bin'),
                        handler: app.history.backToOriginal
                    },
                    {
                        icon: app.icon('copy'),
                        text: 'Copiar objeto <span class="shortcut">(ctrl + v)</span>',
                        handler: app.fabric.copy
                    },
                    {
                        icon: app.icon('paste'),
                        text: 'Pegar <span class="shortcut">(ctrl + c)</span>',
                        handler: app.fabric.paste
                    },
                    {
                        icon: app.icon('delete_cross'),
                        text: 'Eliminar objeto <span class="shortcut">(supr)</span>',
                        handler: app.fabric.removeActive
                    },
                    '-',
                    {
                        icon: app.icon('margins'),
                        text: 'Configurar tama&ntilde;o del lienzo',
                        handler: app.tools.launcher('Configuration')
                    }

                ]
            }
        }
    },
    create: function() {
        var menu, self;

        self = app(app.MODES.FABRIC).view.menu;

        menu = [];

        menu.push(self.createFileMenu());

        menu.push(self.createEditMenu());

        Ext.each(menu, function(current) {
            current.mode = app.MODES.FABRIC;
        });

        return menu;
    }
};