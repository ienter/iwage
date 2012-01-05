iwage.ns('history');

iwage.history = {
    addUndo: function() {
        return iwage.exec('history.addUndo', arguments);
    },
    addRedo: function() {
        return iwage.exec('history.addRedo', arguments);
    },
    getUndo: function(index) {
        return iwage.exec('history.getUndo', arguments);
    },
    getRedo: function(index) {
        return iwage.exec('history.getRedo', arguments);
    },
    undo: function() {
        return iwage.exec('history.undo', arguments);
    },
    redo: function() {
        return iwage.exec('history.redo', arguments);
    },
    clear: function() {
        return iwage.exec('history.clear', arguments);
    },
    clearUndoHistory: function() {
        return iwage.exec('history.clearUndoHistory', arguments);
    },
    clearRedoHistory: function() {
        return iwage.exec('history.clearRedoHistory', arguments);
    },
    setOriginal: function(original) {
        return iwage.exec('history.setOriginal', arguments);
    },
    getOriginal: function() {
        return iwage.exec('history.getOriginal', arguments);
    },
    backToOriginal: function() {
        var result = iwage.exec('history.backToOriginal', arguments);

        iwage.exec('history.clear', arguments);

        return result;
    }
};

