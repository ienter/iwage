Ext.define('Ext.ux.imagepicker.ImagePickerPanel', {
    itemId: 'image-picker',
    extend : 'Ext.panel.Panel',
    width : 550,
    height: 300,
    images: [],
    imageWidth: 100,
    imageHeight: 100,
    floating: true,
    baseCls : Ext.baseCSSPrefix + 'imagepicker',
    autoScroll: true,
    onMouseWheel: function(e) {
        e.stopEvent();
        e.stopPropagation();
    },
    layout: 'fit',
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
                    var
                        picker = self.up('#image-picker'),
                        images = picker.images || [],
                        IMAGE_TEMPLATE = ('<div data-src="{src}" style="cursor: pointer;overflow: hidden; text-align: center; margin: {margin}px;padding: {padding}px; border: solid 1px #999; float: left; height: {divHeight}px; width: {divWidth}px"><image src="{src}" width="{width}"></image></div>').tpl({
                            width: picker.imageWidth,
                            height: picker.imageHeight,
                            divWidth: picker.imageHeight * 2,
                            divHeight: picker.imageHeight * 2,
                            padding: 5,
                            margin: 5
                        }),
                        html = '',
                        d = +new Date;


                    images.forEach(function(e) {
                        html += IMAGE_TEMPLATE.tpl({
                            src: e + '?' + d
                        });
                    });

                    self.add({
                        xtype: 'panel',
                        html: html
                    });
                }
            }
        }
    ],
    constructor : function(config) {
        this.initConfig(config);
        this.addEvents('select');
        this.callParent(arguments);
    },
    listeners: {
        activate: function(self) {
        },
        afterrender: function(self) {
            self.items.get(0).el.addListener('click', function(ev, el, opts) {
                el = Ext.Element.get(el);

                self.setValue(el.getAttribute('data-src') || el.getAttribute('src'));
            });
        }
    },
    setValue : function(v) {
        this.value = v;
        this.fireEvent('select', this, v);
    }
});