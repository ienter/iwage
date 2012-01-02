Ext.ns('app.image.tools.glfx');
/**
 *
 */
Ext.define('app.image.tools.glfx.NubFilter', {
    extend: 'app.image.tools.glfx.Common',
    createNubs: function() {
        // TODO reciclar el contenedor #nubs
        // $('<div/>').attr('id', 'nubs').appendTo();

        var self = this;

        if (!this.nubs || !this.nubs.length) {
            return;
        }

        Ext.each(this.nubs, function(current) {
            self.createNub(current);
        });
    },
    createNub: function(nub) {
        var x, y, self, element;

        self = this;

        x = nub.x * this.fxCanvas.width;
        y = nub.y * this.fxCanvas.height;

        element = $('<div class="nub" id="nub' + nub.name + '"></div>').appendTo('#nubs');

        var ondrag = (function(self, nub) {
            return function(event, ui) {
                var offset = $(event.target.parentNode).offset();
                self['nub_' + nub.name] = { x: ui.offset.left - offset.left, y: ui.offset.top - offset.top };
                self.refresh();
            };
        })(self, nub);

        element.draggable({
            drag: ondrag,
            containment: 'parent',
            scroll: false
        }).css({ left: x, top: y });

        self['nub_' + nub.name] = { x: x, y: y };
    },
    addNub: function(name, x, y) {
        this.nubs = this.nubs || [];
        this.nubs.push({ name: name, x: x, y: y });
    },
    refresh: function() {
        var
            values = this.getValues(),
            nubs = this.getNubsValues();

        if (!values || !nubs) {
            return;
        }

        this.previewFilter(values, nubs);
    },
    getNubsValues: function() {
        var self = this;
        return this.nubs.reduce(function(memo, current) {
            memo[current.name] = {
                x: self['nub_' + current.name] && self['nub_' + current.name].x || current.x,
                y: self['nub_' + current.name] && self['nub_' + current.name].y || current.y
            };
            return memo;
        }, {});
    },
    destroy: function() {
        this.callParent(arguments);

        // remove nubs
        $('#nubs').children().remove();
    }
});