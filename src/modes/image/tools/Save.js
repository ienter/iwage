Ext.ns('app.image.tools');

Ext.define('app.image.tools.Save', {
    mode: app.MODES.IMAGE,
    persist: false,
    unique: true,
    toolLabel: 'Guardar',
    extend: 'app.tools.Common',
    buttons: [
        {
            text: 'Guardar',
            icon: app.icon('save'),
            handler: function () {
                this.applyTool();
            }
        },
        {
            text: 'Cancelar',
            icon: app.icon('delete_cross'),
            handler: function () {
                this.destroy();
            }
        }
    ],
    getSize: function (max) {
        var width, height, prop, w, h, allowed;

        w = width = app.file.getWidth();
        h = height = app.file.getHeight();

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
                        boxLabel: tool.getSize(150).allowed ? app('Miniatura ({w}x{h})').tpl(tool.getSize(150)) : 'MIniatura',
                        name: 'rb',
                        inputValue: app('{w}x{h}').tpl(tool.getSize(150)),
                        disabled: !tool.getSize(150).allowed
                    },
                    {
                        boxLabel: tool.getSize(400).allowed ? app('Medio ({w}x{h})').tpl(tool.getSize(400)) : 'Medio',
                        name: 'rb',
                        inputValue: app('{w}x{h}').tpl(tool.getSize(400)),
                        disabled: !tool.getSize(400).allowed
                    },
                    {
                        boxLabel: tool.getSize(800).allowed ? app('Grande ({w}x{h})').tpl(tool.getSize(800)) : 'Grande',
                        name: 'rb',
                        inputValue: app('{w}x{h}').tpl(tool.getSize(800)),
                        disabled: !tool.getSize(800).allowed
                    },
                    {
                        boxLabel: app('Tama&ntilde;o Completo ({w}x{h})').tpl(tool.getSize()),
                        name: 'rb',
                        checked: true,
                        inputValue: app('{w}x{h}').tpl(tool.getSize())
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

        app().file.doSave({
            width: size[0],
            height: size[1]
        });

        this.destroy();
    }
});