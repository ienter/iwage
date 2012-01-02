Ext.ns('app.view.menu');

app.view.menu.setMode = function(mode) {
    Ext.getCmp('menu').items.each(function(current) {
        if (!current.mode || current.mode == mode) {
            current.show();
        } else {
            current.hide();
        }
    });
};

app.view.menu.create = function() {
    var menu = {
        xtype: 'toolbar',
        id: 'menu',
        items: []
    };

    app.eachMode(function(mode) {
        if (mode.view && mode.view.menu && mode.view.menu.create) {
            menu.items = menu.items.concat(
                mode.view.menu.create()
            );
        }
    });

    menu.items = menu.items.concat([
        '->',
        {
            text: 'Editor de graficos',
            icon: app.icon('palette'),
            disabled: app.getMode() == app.MODES.FABRIC,
            handler: function() {
                app.setMode(app.MODES.FABRIC);
            },
            listeners: app.util.listenersForMode('disable', 'enable')
        },
        '-',
        {
            text: 'Editor de imagenes',
            icon: app.icon('photo'),
            disabled: app.getMode() == app.MODES.IMAGE,
            handler: function() {
                app.setMode(app.MODES.IMAGE);
            },
            listeners: app.util.listenersForMode('enable', 'disable')
        }
    ]);

    menu.listeners = {
        afterrender: function(self) {
            app.view.menu.setMode(app.getMode());
        }
    };

    app.on('app:mode', function(mode) {
        app.view.menu.setMode(app.getMode());
    });

    return menu;
};