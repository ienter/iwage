Ext.ns('app.tools');

app.tools.BUTTON = {
    CANCEL: {
        text: 'Cancelar',
        icon: app.icon('delete_cross'),
        handler: function() {
            this.destroy();
        }
    },
    APPLY: {
        text: 'Aplicar',
        icon: app.icon('tick'),
        handler: function() {
            this.applyTool();
        }
    }
};

Ext.define('app.tools.Common', {
    unique: true,
    buttons: [
        app.tools.BUTTON.APPLY,
        app.tools.BUTTON.CANCEL
    ],
    createControls: function() {
        throw 'Unimplemented method: createControls';
    },
    use: function(options) {
        this.renderComponent();

        app.ev.one('app:cancel', function() {
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
            app.error(e);
        }
    },
    show: function() {
        try {
            if (this.component && this.component.show) {
                this.component.show();
            }
        } catch(e) {
            app.error(e);
        }
    },
    renderComponent: function() {
        this.getComponent();
        this.show();
    },
    createCanvas: function() {
        return app.file.createCanvas();
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