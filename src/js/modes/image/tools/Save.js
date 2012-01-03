Ext.ns('iwage.image.tools');

Ext.define('iwage.image.tools.Save', {
    mode: iwage.MODES.IMAGE,
    persist: false,
    unique: true,
    toolLabel: 'Guardar',
    extend: 'iwage.tools.Common',
    buttons: [
        {
            text: 'Guardar',
            icon: iwage.icon('save'),
            handler: function () {
                this.applyTool();
            }
        },
        {
            text: 'Cancelar',
            icon: iwage.icon('delete_cross'),
            handler: function () {
                this.destroy();
            }
        }
    ],
    getSize: function (max) {
        var width, height, prop, w, h, allowed;

        w = width = iwage.file.getWidth();
        h = height = iwage.file.getHeight();

        allowed = true;

        if (max && (max >= width && max >= height)) {
            allowed = false;
        } else {
            if (max && width > height) {
                w = max;
                h = height * w / width;
            } else if (max) {
                h = max;
                w = width * h / height;
            }
        }

        return {
            w: w,
            h: h,
            allowed: allowed
        };
    },
    createControls: function () {
        var tool = this;

        return [
            {
                xtype: 'radiogroup',
                itemId: 'size',
                fieldLabel: 'Tama&ntilde;o',
                columns: 1,
                vertical: true,
                items: [
                    {
                        boxLabel: tool.getSize(150).allowed ? iwage('Miniatura ({w}x{h})').tpl(tool.getSize(150)) : 'MIniatura',
                        name: 'rb',
                        inputValue: iwage('{w}x{h}').tpl(tool.getSize(150)),
                        disabled: !tool.getSize(150).allowed
                    },
                    {
                        boxLabel: tool.getSize(400).allowed ? iwage('Medio ({w}x{h})').tpl(tool.getSize(400)) : 'Medio',
                        name: 'rb',
                        inputValue: iwage('{w}x{h}').tpl(tool.getSize(400)),
                        disabled: !tool.getSize(400).allowed
                    },
                    {
                        boxLabel: tool.getSize(800).allowed ? iwage('Grande ({w}x{h})').tpl(tool.getSize(800)) : 'Grande',
                        name: 'rb',
                        inputValue: iwage('{w}x{h}').tpl(tool.getSize(800)),
                        disabled: !tool.getSize(800).allowed
                    },
                    {
                        boxLabel: iwage('Tama&ntilde;o Completo ({w}x{h})').tpl(tool.getSize()),
                        name: 'rb',
                        checked: true,
                        inputValue: iwage('{w}x{h}').tpl(tool.getSize())
                    }
                ]
            }
        ];
    },
    refresh: function (options) {
    },
    applyTool: function () {
        var values, size;

        values = this.getValues();
        size = values.size.rb.split('x');

        iwage().file.doSave({
            width: size[0],
            height: size[1]
        });

        this.destroy();
    }
});