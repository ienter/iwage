app(app.MODES.IMAGE).view.menu = {
    createFileMenu: function () {
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
                        text: 'Ver imagen',
                        icon: app.icon('preview'),
                        handler: function () {
                            app.file.viewAsImage();
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
                    '-',
                    {
                        text: 'Recortar',
                        icon: app.icon('crop'),
                        handler: app.tools.launcher('Crop')
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
                        icon: app.icon('set_transparent'),
                        handler: function () {
                            app.tools.launch('FillAlpha');
                        }
                    },
                    '-',
                    {
                        text: 'Brillo / Contraste',
                        icon: app.icon('filter_BrightnessContrast'),
                        handler: function () {
                            app.tools.launch('glfx.BrightnessContrast');
                        }
                    },
                    {
                        text: 'Hue / Saturaci&oacute;n',
                        icon: app.icon('filter_HueSaturation'),
                        handler: function () {
                            app.tools.launch('glfx.HueSaturation');
                        }
                    },
                    '-',
                    {
                        text: 'Rotar a la izquierda',
                        icon: app.icon('rotate_anticlockwise'),
                        handler: function () {
                            app(app.MODES.IMAGE).transform.rotateMinus90();
                        }
                    },
                    {
                        text: 'Rotar a la derecha',
                        icon: app.icon('rotate_clockwise'),
                        handler: function () {
                            app(app.MODES.IMAGE).transform.rotate90();
                        }
                    },
                    {
                        text: 'Reflejar horizontalmente',
                        icon: app.icon('flip_horizontal'),
                        handler: function () {
                            app(app.MODES.IMAGE).transform.translateHorizontal();
                        }
                    },
                    {
                        text: 'Reflejar verticalmente',
                        icon: app.icon('flip_vertical'),
                        handler: function () {
                            app(app.MODES.IMAGE).transform.translateVertical();
                        }
                    },
                    '-',
                    {
                        text: 'Bordes Redondeados',
                        icon: app.icon('rounded'),
                        handler: function () {
                            app.tools.launch('RoundedCorners');
                        }
                    }
                ]
            }
        };
    },
    createFiltersMenu: function () {
        var menu = [];

        Ext.iterate(app.image.tools.glfx, function (key, value, all) {
            if (!value.prototype.toolLabel || typeof value != 'function') {
                return;
            }

            if (['BrightnessContrast', 'HueSaturation', 'Swirl', 'BulgePinch', 'ZoomBlur', 'TiltShift'].indexOf(key) != -1) {
                return;
            }

            menu.push({
                text: value.prototype.toolLabel,
                icon: app.icon('filter_' + key),
                handler: function () {
                    app.tools.launch('glfx.' + key);
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

        Ext.iterate(app.image.tools.glfx, function (key, value, all) {
            if (!value.prototype.toolLabel || typeof value != 'function') {
                return;
            }

            if (['Swirl', 'BulgePinch', 'ZoomBlur', 'TiltShift'].indexOf(key) == -1) {
                return;
            }

            menu.push({
                text: value.prototype.toolLabel,
                icon: app.icon('filter_' + key),
                handler: function () {
                    app.tools.launch('glfx.' + key);
                }
            });
        });

        menu.push({
            text: 'Reflejar',
            icon: app.icon('reflection'),
            handler: function () {
                app.tools.launch('Reflect');
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

        self = app(app.MODES.IMAGE).view.menu;

        menu = [];

        menu.push(self.createFileMenu());

        menu.push(self.createEditMenu());

        menu.push(self.createImageSettingsMenu());

        menu.push(self.createFiltersMenu());

        menu.push(self.createEffectsMenu());


        Ext.each(menu, function (current) {
            current.mode = app.MODES.IMAGE;
        });

        return menu;
    }
};