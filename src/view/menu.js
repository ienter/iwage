Ext.ns('iwage.view.menu');

iwage.view.menu.setMode = function(mode) {
    Ext.getCmp('menu').items.each(function(current) {
        if (!current.mode || current.mode == mode) {
            current.show();
        } else {
            current.hide();
        }
    });
};

iwage.view.menu.create = function() {
    var menu = {
        xtype: 'toolbar',
        id: 'menu',
        items: []
    };

    iwage.eachMode(function(mode) {
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
            icon: iwage.icon('palette'),
            disabled: iwage.getMode() == iwage.MODES.FABRIC,
            handler: function() {
                iwage.setMode(iwage.MODES.FABRIC);
            },
            listeners: iwage.util.listenersForMode('disable', 'enable')
        },
        '-',
        {
            text: 'Editor de imagenes',
            icon: iwage.icon('photo'),
            disabled: iwage.getMode() == iwage.MODES.IMAGE,
            handler: function() {
                iwage.setMode(iwage.MODES.IMAGE);
            },
            listeners: iwage.util.listenersForMode('enable', 'disable')
        }
    ]);

    menu.listeners = {
        afterrender: function(self) {
            iwage.view.menu.setMode(iwage.getMode());
        }
    };

    iwage.on('app:mode', function(mode) {
        iwage.view.menu.setMode(iwage.getMode());
    });

    return menu;
};