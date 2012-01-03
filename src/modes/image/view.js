iwage(iwage.MODES.IMAGE).view = {
    getHTML: function() {
        return '<div class="placeholder result-container" style="display: none"><div id="container">' +
            '<img class="result"' +
            'src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEW/v7////+Zw/90AAAAEUlEQVQI12P4z8CAFWEX/Q8Afr8P8erzE9cAAAAASUVORK5CYII=">' +
            '<div id="nubs"></div></div></div><div id="history-undo"></div><div id="history-redo">';
    },
    setZoom: function(level) {
        iwage().view._zoom = level;

        level = level / 100;

        $('#container').css({
            //'zoom': level,
            '-moz-transform': 'scale(' + level + ')',
            '-webkit-transform': 'scale(' + level + ')'
        });
    },
    getZoom: function() {
        return iwage().view._zoom || 100;
    },
    restoreZoom: function() {
        iwage().view.setZoom(iwage().view.getZoom() || 100);
    },
    clearZoom: function() {
        iwage().view.setZoom(100);
    }
};