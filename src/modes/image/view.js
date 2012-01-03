app(iwage.MODES.IMAGE).view = {
    getHTML: function() {
        return '<div class="placeholder result-container" style="display: none"><div id="container">' +
            '<img class="result"' +
            'src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEW/v7////+Zw/90AAAAEUlEQVQI12P4z8CAFWEX/Q8Afr8P8erzE9cAAAAASUVORK5CYII=">' +
            '<div id="nubs"></div></div></div><div id="history-undo"></div><div id="history-redo">';
    },
    setZoom: function(level) {
        app().view._zoom = level;

        level = level / 100;

        $('#container').css({
            //'zoom': level,
            '-moz-transform': 'scale(' + level + ')',
            '-webkit-transform': 'scale(' + level + ')'
        });
    },
    getZoom: function() {
        return app().view._zoom || 100;
    },
    restoreZoom: function() {
        app().view.setZoom(app().view.getZoom() || 100);
    },
    clearZoom: function() {
        app().view.setZoom(100);
    }
};