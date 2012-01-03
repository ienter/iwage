Ext.ns('iwage.tools');

iwage.tools.BUTTON = {
    CANCEL: {
        text: 'Cancelar',
        icon: iwage.icon('delete_cross'),
        handler: function() {
            this.destroy();
        }
    },
    APPLY: {
        text: 'Aplicar',
        icon: iwage.icon('tick'),
        handler: function() {
            this.applyTool();
        }
    }
};

Ext.define('iwage.tools.Common', {
    unique: true,
    buttons: [
        iwage.tools.BUTTON.APPLY,
        iwage.tools.BUTTON.CANCEL
    ],
    createControls: function() {
        throw 'Unimplemented method: createControls';
    },
    use: function(options) {
        this.renderComponent();

        iwage.ev.one('app:cancel', function() {
            this.destroy();
        }, this);
    },
    refresh: function(options) {
        throw 'Unimplemented method: refresh';
    },
    applyTool: function() {
        throw 'Unimplemented method: applyTool';
    },
    hide: function() {
        try {
            if (this.component && this.component.hide) {
                this.component.hide();
            }
        } catch(e) {
            iwage.error(e);
        }
    },
    show: function() {
        try {
            if (this.component && this.component.show) {
                this.component.show();
            }
        } catch(e) {
            iwage.error(e);
        }
    },
    renderComponent: function() {
        this.getComponent();
        this.show();
    },
    createCanvas: function() {
        return iwage.file.createCanvas();
    },
    getComponent: function() {
        var
            self = this,
            controls = this.createControls();

        if (this.component) {
            return this.component;
        }

        var buttons = self.buttons;

        // Forzamos el scope del button al tool
        Ext.each(buttons, function(current, index, total) {
            current.scope = self;
        });

        this.component = Ext.create('Ext.window.Window', {
            title: this.toolLabel || '',
            resizable: false,
            closable: false,
            y: self.top || undefined,
            x: self.left || undefined,
            width: this.componentWidth || 300,
            items: {
                xtype: 'form',
                padding: controls ? 10 : 0,
                defaults: {
                    padding: controls ? 5 : 0,
                    listeners: {
                        // Listener para todos los campos
                        change: function(field, value) {
                            self.refresh();
                        }
                    },
                    width: 350
                },
                items: controls
            },
            buttons: buttons
        });

        return this.component;
    },
    destroy: function() {
        try {
            this.component.hide();
            this.component.destroy();
        } catch(e) {
        }

        this.callParent(arguments);
    },
    /**
     *
     * @return {Object} Values map
     */
    getValues: function() {
        var map = {};

        if (!this.component) {
            return null;
        }

        this.component.down('form').items.each(function(field, index, total) {
            map[field.itemId] = field.getValue();
        });

        return map;
    }
});