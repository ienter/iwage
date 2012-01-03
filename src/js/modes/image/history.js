iwage.mode(iwage.MODES.IMAGE).history = {
    addUndo: function() {
        $('<img/>')
            .attr('src', $('.result').attr('src'))
            .appendTo('#history-undo');

        // Una vez realizado un cambio, no se puede rehacer ningun
        // paso
        iwage.history.clearRedoHistory();
    },
    addRedo: function() {
        $('<img/>')
            .attr('src', $('.result').attr('src'))
            .appendTo('#history-redo');
    },
    getUndo: function(index) {
        var img, uri;

        img = $('#history-undo img').get(index);

        uri = $(img).attr('src');

        $(img).remove();

        return uri;
    },
    getRedo: function(index) {
        var img, uri;

        img = $('#history-redo img').get(index);

        uri = $(img).attr('src');

        $(img).remove();

        return uri;
    },
    undo: function() {
        iwage.history.addRedo();

        iwage.file.set(
            iwage.history.getUndo(-1),
            {
                isUndo: true
            }
        );
    },
    redo: function() {
        iwage.file.set(iwage.history.getRedo(0));
    },
    clear: function() {
        iwage.history.clearUndoHistory();
        iwage.history.clearRedoHistory();
    },
    clearUndoHistory: function() {
        $('#history-undo').children().remove();
    },
    clearRedoHistory: function() {
        $('#history-redo').children().remove();
    },
    setOriginal: function(original) {
    },
    getOriginal: function() {
        return iwage.history.getUndo(0);
    },
    backToOriginal: function() {
        iwage.file.load(
            iwage.history.getOriginal()
        );
    }
};