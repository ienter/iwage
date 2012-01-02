Ext.ns('app.fabric.tools');

Ext.define('app.fabric.tools.Text', {
    extend: 'app.fabric.tools.Common',
    persist: false,
    toolLabel: 'Texto',
    top: 30,
    left: 30,
    use: function () {
        if (this.text) {
            this.buttons = [];
        }

        return this.callParent(arguments);
    },
    createControls: function () {
        return [
            {
                xtype: 'textarea',
                itemId: 'text',
                fieldLabel: 'Texto',
                emptyText: 'Escriba aqui'
            },
            Ext.create('webbie.ux.cufonpicker.CufonPickerField', {
                hideTopBar: true,
                itemId: 'fontFamily',
                fieldLabel: 'Tipografia',
                emptyText: 'Seleccione la tipografia',
                listeners: {
                    // Hack para generar el evento de refresh
                    change: function (self) {
                        var text = self.up('form').down('#text');

                        text.fireEvent('change', this, text.getValue());
                    }
                }
            })
        ];
    },
    refresh: function () {
        if (this.text) {
            this.applyTool();
        }
    },
    applyTool: function () {
        var values = this.getValues();

        var text = values.text;
        var fontFamily = values.fontFamily;
        if (!text || !fontFamily) {
            return;
        }

        if (this.text) {
            this.text.set({
                text: text,
                fontFamily: fontFamily
            });

            app(app.MODES.FABRIC).topo.refresh();
        } else {
            this.text = app(app.MODES.FABRIC).topo.text(text, {
                fontFamily: fontFamily
            });
        }
    },
    setValues: function () {
        var cmp = this.getComponent();

        cmp.down('#text').setValue(this.text.get('text'));
        cmp.down('#fontFamily').setValue(this.text.get('fontFamily'));
    },
    onObjectUnselected: function () {
        this.destroy();
    }
});
