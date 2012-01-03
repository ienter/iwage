Ext.ns('iwage.view.statusbar');

iwage.view.statusbar.create = function() {
    if (iwage.view.statusbar.instance) {
        return iwage.view.statusbar.instance;
    }

    iwage.view.statusbar.instance = Ext.create('Ext.toolbar.Toolbar', {
        border: false,
        hidden: true
    });

    return iwage.view.statusbar.instance;
};

iwage.view.statusbar.setMessage = function(message) {
    var toolbar = iwage.view.statusbar.instance;

    if (!toolbar) {
        return;
    }

    toolbar.show();
    toolbar.removeAll();
    toolbar.add('->');
    toolbar.add(message);
};

iwage.view.statusbar.hide = function() {
    var toolbar = iwage.view.statusbar.instance;

    if (!toolbar) {
        return;
    }

    toolbar.hide();
};