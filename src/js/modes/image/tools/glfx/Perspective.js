Ext.ns('iwage.image.tools.glfx');

/**
 * TODO implementar
 * @see http://evanw.github.com/glfx.js/demo/#perspective
 */

Ext.define('iwage.image.tools.glfx.Perspective', {
    toolLabel: 'Perspectiva',
    extend: 'iwage.image.tools.glfx.NubFilter',
    createControls: function() {
    },
    previewFilter: function(values, nubs) {
    },
    use: function(options) {

        this.callParent(arguments);

        // setup nubs
        this.createNubs();
    }
});