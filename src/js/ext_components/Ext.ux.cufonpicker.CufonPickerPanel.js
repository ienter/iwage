Ext.define('Ext.ux.cufonpicker.CufonPickerPanel', {
    itemId: 'cufonPicker',
    extend : 'Ext.panel.Panel',
    layout: 'fit',
    width : 550,
    height: 300,
    floating: true,
    baseCls : Ext.baseCSSPrefix + 'cufonpicker',
    autoScroll: true,
    previewText: 'Lorem ipsum 123',
    constructor : function(config) {
        this.initConfig(config);
        this.addEvents('select');

        if (config.hideTopBar !== true) {
            this.tbar = {
                items:[
                    {
                        xtype: 'panel',
                        ctCls: 'webbie-color-box-ct',
                        border: false,
                        height: 24,
                        width: 60,
                        html: '<div class="webbie-color-box none" xdata-qtip="Restaurar fondo" onclick="webbie.util.setFontPreviewBackground()"></div>' +
                            '<div class="webbie-color-box white" xdata-qtip="Forzar fondo blanco" onclick="webbie.util.setFontPreviewBackground(\'#fff\')"></div>' +
                            '<div class="webbie-color-box black" xdata-qtip="Forzar fondo negro" onclick="webbie.util.setFontPreviewBackground(\'#000\')"></div>' +
                            '<div class="clear"></div>'
                    },
                    '->',
                    {
                        itemId: 'cufon-remove',
                        text: 'Quitar tipografias del elemento',
                        handler: function(self) {
                            self.up('#cufonPicker').setValue('');
                        }
                    },
                    {
                        text: 'Ver mas',
                        handler: function(self) {
                            self.disable();
                            webbie.font.next(function(status) {
                                setTimeout(function() {
                                    self.up('#cufonPicker').refresh();
                                    status !== false && self.enable();
                                }, 250);
                            });
                        }
                    }
                ]
            }
        }

        this.callParent(arguments);
    },
    setPreviewText: function(text) {
        this.previewText = text;
    },
    onMouseWheel: function(e) {
        e.stopEvent();
        e.stopPropagation();
    },
    getPreviewText: function() {
        return this.previewText || webbie.getSelector().getHTML();
    },
    items: [
        {
            xtype: 'panel',
            autoScroll: true,
            onMouseWheel: function(e) {
                e.stopEvent();
                e.stopPropagation();
            },
            listeners: {
                afterrender: function(self) {
                    var picker = self.up('#cufonPicker');

                    setTimeout(function r() {
                        try {
                            picker.refresh();
                        } catch(e) {
                        }

                        webbie.font.getList(function(l) {
                            if (l.length > jQuery('script[src*="/font/file"]').size()) {
                                setTimeout(r, 2500);
                            }
                        });
                    }, 2500);

                    self.el.addListener('click', function(ev, el, opts) {
                        el = Ext.Element.get(el);

                        if (!el.is('.webbie-preview')) {
                            el = el.up('.webbie-preview');
                            if (!el) {
                                return;
                            }
                        }

                        el = el.parent().parent();

                        self.up('#cufonPicker').setValue(
                            Ext.getCmp(el.id)._font
                        );
                    });

                    picker.on('show', function() {
                        var cssPath = webbie.getSelector().getCssPath();

                        var hidden = (new webbie.Hash(webbie.getCufonWebbie().getRules())).filter(
                            function(v, key) {
                                return key == cssPath;
                            }).size();

                        if (!hidden) {
                            try {
                                picker.down('#cufon-remove').hide();
                            } catch(e) {
                            }
                        } else {
                            try {
                                picker.down('#cufon-remove').show();
                            } catch(e) {
                            }
                        }
                    });
                }
            }
        }
    ],
    /**
     * Actualiza el panel para mostrar
     * todas las variantes cargadas
     *
     * @return {webbie.ux.cufonpicker.CufonPickerPanel}
     */
    refresh: function(removeAll) {
        try {
            var
                self = this,
                fontCt = this.items.get(0);

            if (removeAll) {
                fontCt.removeAll();
            }
        } catch(e) {
            return this;
        }

        var variants = [];

        variants = new webbie.Hash(webbie.getCufonWebbie().getRegisteredFonts()).reduce(function(memo, value, key, index) {
            memo.push(value.get().face['font-family']);
            return memo;
        }, []);

        // En cada pasada agregamos fonts
        variants.forEach(function(variant, i) {
            var cls = variant.toLowerCase().replace(/[^a-z\d]+/g, '_');

            // Evitamos repetir fonts
            if (self.down('#' + cls)) {
                return;
            }

            // El estilo diferenciado es para separar las fonts utilizadas
            // de las demas
            var style = '';

            if (webbie.getCufonWebbie().originalLength && i + 1 == webbie.getCufonWebbie().originalLength) {
                style = 'border-bottom: dotted 2px #777;html 5 '
            }

            fontCt.add({
                _font: variant,
                cls: cls,
                border: false,
                itemId: cls,
                html: '<div class="webbie-title">' + variant +
                    '</div><div class="webbie-preview">' +
                    (self.getPreviewText() || '<div style="font-size: 20px; margin-bottom: 10px">Lorem ipsum 123</div>') +
                    '</div>',
                margin: '6 0',
                style: style,
                listeners: {
                    afterrender: function(fontCtChild) {
                        var path = webbie.utils.getCSSPath(fontCtChild.el.dom) + ' ' + self.cufonContainer;
                        webbie.getCufonWebbie().replace(
                            path, {
                                fontFamily: variant,
                                hover: true
                            }
                        );
                    }
                }
            });

        });
        return this;
    },
    cufonContainer: 'div.webbie-preview',
    listeners: {
        activate: function(self) {
            self.refresh(true);
        }
    },
    setValue : function(v) {
        this.value = v;
        this.fireEvent('select', this, v);
    }
});