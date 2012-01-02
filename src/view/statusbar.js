Ext.ns('app.view.statusbar');

app.view.statusbar.create = function() {
    if (app.view.statusbar.instance) {
        return app.view.statusbar.instance;
    }

    app.view.statusbar.instance = Ext.create('Ext.toolbar.Toolbar', {
        border: false,
        hidden: true
    });

    return app.view.statusbar.instance;
};

app.view.statusbar.setMessage = function(message) {
    var toolbar = app.view.statusbar.instance;

    if (!toolbar) {
        return;
    }

    toolbar.show();
    toolbar.removeAll();
    toolbar.add('->');
    toolbar.add(message);
};

app.view.statusbar.hide = function() {
    var toolbar = app.view.statusbar.instance;

    if (!toolbar) {
        return;
    }

    toolbar.hide();
};