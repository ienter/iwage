app(iwage.MODES.IMAGE).view.menu = {
    createFileMenu: function () {
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
                        text: 'Ver imagen',
                        icon: iwage.icon('preview'),
                        handler: function () {
                            iwage.file.viewAsImage();
                        }
                    }
                ]
            }
        };
    },
    createEditMenu: function () {
        return {
            text: 'Editar',
            menu: {
                items: [
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
                    '-',
                    {
                        text: 'Recortar',
                        icon: iwage.icon('crop'),
                        handler: iwage.tools.launcher('Crop')
                    }
                ]
            }
        }
    },
    createImageSettingsMenu: function () {
        return {
            text: 'Ajustes de imagen',
            menu: {
                items: [
                    {
                        text: 'Rellenar transparencias',
                        icon: iwage.icon('set_transparent'),
                        handler: function () {
                            iwage.tools.launch('FillAlpha');
                        }
                    },
                    '-',
                    {
                        text: 'Brillo / Contraste',
                        icon: iwage.icon('filter_BrightnessContrast'),
                        handler: function () {
                            iwage.tools.launch('glfx.BrightnessContrast');
                        }
                    },
                    {
                        text: 'Hue / Saturaci&oacute;n',
                        icon: iwage.icon('filter_HueSaturation'),
                        handler: function () {
                            iwage.tools.launch('glfx.HueSaturation');
                        }
                    },
                    '-',
                    {
                        text: 'Rotar a la izquierda',
                        icon: iwage.icon('rotate_anticlockwise'),
                        handler: function () {
                            app(iwage.MODES.IMAGE).transform.rotateMinus90();
                        }
                    },
                    {
                        text: 'Rotar a la derecha',
                        icon: iwage.icon('rotate_clockwise'),
                        handler: function () {
                            app(iwage.MODES.IMAGE).transform.rotate90();
                        }
                    },
                    {
                        text: 'Reflejar horizontalmente',
                        icon: iwage.icon('flip_horizontal'),
                        handler: function () {
                            app(iwage.MODES.IMAGE).transform.translateHorizontal();
                        }
                    },
                    {
                        text: 'Reflejar verticalmente',
                        icon: iwage.icon('flip_vertical'),
                        handler: function () {
                            app(iwage.MODES.IMAGE).transform.translateVertical();
                        }
                    },
                    '-',
                    {
                        text: 'Bordes Redondeados',
                        icon: iwage.icon('rounded'),
                        handler: function () {
                            iwage.tools.launch('RoundedCorners');
                        }
                    }
                ]
            }
        };
    },
    createFiltersMenu: function () {
        var menu = [];

        Ext.iterate(iwage.image.tools.glfx, function (key, value, all) {
            if (!value.prototype.toolLabel || typeof value != 'function') {
                return;
            }

            if (['BrightnessContrast', 'HueSaturation', 'Swirl', 'BulgePinch', 'ZoomBlur', 'TiltShift'].indexOf(key) != -1) {
                return;
            }

            menu.push({
                text: value.prototype.toolLabel,
                icon: iwage.icon('filter_' + key),
                handler: function () {
                    iwage.tools.launch('glfx.' + key);
                }
            });
        });

        menu.sort(function (one, another) {
            return one.text > another.text ? 1 : -1;
        });

        return {
            text: 'Filtros',
            menu: menu
        };
    },
    createEffectsMenu: function () {
        var menu = [];

        Ext.iterate(iwage.image.tools.glfx, function (key, value, all) {
            if (!value.prototype.toolLabel || typeof value != 'function') {
                return;
            }

            if (['Swirl', 'BulgePinch', 'ZoomBlur', 'TiltShift'].indexOf(key) == -1) {
                return;
            }

            menu.push({
                text: value.prototype.toolLabel,
                icon: iwage.icon('filter_' + key),
                handler: function () {
                    iwage.tools.launch('glfx.' + key);
                }
            });
        });

        menu.push({
            text: 'Reflejar',
            icon: iwage.icon('reflection'),
            handler: function () {
                iwage.tools.launch('Reflect');
            }
        });

        menu.sort(function (one, another) {
            return one.text > another.text ? 1 : -1;
        });

        return {
            text: 'Efectos',
            menu: menu
        };
    },
    create: function () {
        var menu, self;

        self = app(iwage.MODES.IMAGE).view.menu;

        menu = [];

        menu.push(self.createFileMenu());

        menu.push(self.createEditMenu());

        menu.push(self.createImageSettingsMenu());

        menu.push(self.createFiltersMenu());

        menu.push(self.createEffectsMenu());


        Ext.each(menu, function (current) {
            current.mode = iwage.MODES.IMAGE;
        });

        return menu;
    }
};