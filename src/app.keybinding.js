app.key = function(keys, action) {
    var obj;

    if (typeof keys == 'string') {
        obj = {};
        obj[keys] = action;
        keys = obj;
    }

    for (var p in keys) {
        if (keys.hasOwnProperty(p)) {
            key(p, function() {
                action();
                return false;
            });
        }
    }
};

$(function() {
    app.key('ctrl+o', app.file.open);
    app.key('ctrl+s', app.file.save);

    app.key('ctrl+z', app.history.undo);
    app.key('ctrl+shift+z', app.history.redo);

    app.key('ctrl+c', app.file.copy);
    app.key('ctrl+v', app.file.paste);

    app.key('del', function() {
        try {
            app().removeActive();
        } catch(e) {
        }
    });

    app.key('esc', app.cancel);
});
