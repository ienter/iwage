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
        return this.previewText;
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

        Ext.iterate(webbie.getCufonWebbie().getRegisteredFonts(), function(key, value, index) {
            // console.log(arguments);
            variants.push(value.get().face['font-family']);
        });


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
                    '</div><div class="webbie-preview ' + app.hash(variant) + '">' +
                    (self.getPreviewText() || '<div style="font-size: 20px; margin-bottom: 10px">Lorem ipsum 123</div>') +
                    '</div>',
                margin: '6 0',
                style: style,
                listeners: {
                    afterrender: function(fontCtChild) {
                        webbie.getCufonWebbie().replace(
                            '.' + app.hash(variant), {
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