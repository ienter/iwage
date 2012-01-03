iwage.key = function(keys, action) {
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
    iwage.key('ctrl+o', iwage.file.open);
    iwage.key('ctrl+s', iwage.file.save);

    iwage.key('ctrl+z', iwage.history.undo);
    iwage.key('ctrl+shift+z', iwage.history.redo);

    iwage.key('ctrl+c', iwage.file.copy);
    iwage.key('ctrl+v', iwage.file.paste);

    iwage.key('del', function() {
        try {
            app().removeActive();
        } catch(e) {
        }
    });

    iwage.key('esc', iwage.cancel);
});
