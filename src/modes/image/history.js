app.mode(app.MODES.IMAGE).history = {
    addUndo: function() {
        $('<img/>')
            .attr('src', $('.result').attr('src'))
            .appendTo('#history-undo');

        // Una vez realizado un cambio, no se puede rehacer ningun
        // paso
        app.history.clearRedoHistory();
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
        app.history.addRedo();

        app.file.set(
            app.history.getUndo(-1),
            {
                isUndo: true
            }
        );
    },
    redo: function() {
        app.file.set(app.history.getRedo(0));
    },
    clear: function() {
        app.history.clearUndoHistory();
        app.history.clearRedoHistory();
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
        return app.history.getUndo(0);
    },
    backToOriginal: function() {
        app.file.load(
            app.history.getOriginal()
        );
    }
};