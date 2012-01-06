iwage(iwage.MODES.FABRIC).view.menu = {
    createFileMenu: function() {
        return {
            text: 'Archivo',
            menu: {
                items: [
                    {
                        text: 'Abrir <span class="shortcut">(ctrl + o)</span>',
                        icon: iwage.icon('open'),
                        handler: iwage.file.open
                    },
                    {
                        text: 'Guardar <span class="shortcut">(ctrl + s)</span>',
                        icon: iwage.icon('save'),
                        handler: iwage.file.save
                    },
                    '-',
                    {
                        text: 'Previsualizar',
                        icon: iwage.icon('preview'),
                        handler: function() {
                            iwage(iwage.MODES.FABRIC).preview();
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
                        icon: iwage.icon('undo'),
                        text: 'Deshacer <span class="shortcut">(ctrl + z)</span>',
                        handler: iwage.history.undo
                    },
                    {
                        icon: iwage.icon('redo'),
                        text: 'Rehacer <span class="shortcut">(ctrl + shift + z)</span>',
                        handler: iwage.history.redo
                    },
                    '-',
                    {
                        text: 'Volver al original',
                        icon: iwage.icon('bin'),
                        handler: iwage.history.backToOriginal
                    },
                    {
                        icon: iwage.icon('copy'),
                        text: 'Copiar objeto <span class="shortcut">(ctrl + v)</span>',
                        handler: iwage.fabric.copy
                    },
                    {
                        icon: iwage.icon('paste'),
                        text: 'Pegar <span class="shortcut">(ctrl + c)</span>',
                        handler: iwage.fabric.paste
                    },
                    {
                        icon: iwage.icon('delete_cross'),
                        text: 'Eliminar objeto <span class="shortcut">(supr)</span>',
                        handler: iwage.fabric.removeActive
                    },
                    '-',
                    {
                        icon: iwage.icon('margins'),
                        text: 'Configurar tama&ntilde;o del lienzo',
                        handler: iwage.tools.launcher('Configuration')
                    }

                ]
            }
        }
    },
    create: function() {
        var menu, self;

        self = iwage(iwage.MODES.FABRIC).view.menu;

        menu = [];

        menu.push(self.createFileMenu());

        menu.push(self.createEditMenu());

        Ext.each(menu, function(current) {
            current.mode = iwage.MODES.FABRIC;
        });

        return menu;
    }
};