app.ns('history');

app.history = {
    addUndo: function() {
        return app.exec('history.addUndo', arguments);
    },
    addRedo: function() {
        return app.exec('history.addRedo', arguments);
    },
    getUndo: function(index) {
        return app.exec('history.getUndo', arguments);
    },
    getRedo: function(index) {
        return app.exec('history.getRedo', arguments);
    },
    undo: function() {
        return app.exec('history.undo', arguments);
    },
    redo: function() {
        return app.exec('history.redo', arguments);
    },
    clear: function() {
        return app.exec('history.clear', arguments);
    },
    clearUndoHistory: function() {
        return app.exec('history.clearUndoHistory', arguments);
    },
    clearRedoHistory: function() {
        return app.exec('history.clearRedoHistory', arguments);
    },
    setOriginal: function(original) {
        return app.exec('history.setOriginal', arguments);
    },
    getOriginal: function() {
        return app.exec('history.getOriginal', arguments);
    },
    backToOriginal: function() {
        var result = app.exec('history.backToOriginal', arguments);

        app.exec('history.clear', arguments);

        return result;
    }
};

