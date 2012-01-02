Ext.ns('app.tools');

Ext.define('app.tools.Static', {
    extend: 'app.tools.Common',
    persist: true,
    getComponent: function () {
        var self = this, buttons;

        if (this.component) {
            return this.component;
        }

        buttons = this.buttons || []


        // Forzamos el scope del button al tool
        Ext.each(buttons, function (current, index, total) {
            current.scope = self;
        });


        this.component = Ext.create('Ext.panel.Panel', {
            title: this.toolLabel || '',
            resizable: false,
            closable: false,
            width: this.componentWidth || 285,
            border: false,
            margin: '1 0 0 0',
            items: [
                {
                    xtype: 'form',
                    padding: 10,
                    border: false,
                    defaults: {
                        labelWidth: 0,
                        padding: 5,
                        listeners: this.getDefaultListeners && this.getDefaultListeners() || {},
                        width: 250
                    },
                    items: this.createControls()
                }
            ],
            buttons: buttons
        });
        return this.component;
    }
});