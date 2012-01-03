Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.Svg', {
    extend: 'iwage.tools.Open',
    toolLabel: 'SVG',
    use: function(options) {
        this.proxy = iwage.options.svgProxy;
        this.callParent(arguments);
    },
    createControls: function() {
        var list = '<ul>';

        Ext.each(this.images, function(current, index, total) {
            list += '<li><img src="' + current + '" width="52" height="52"/></li>'
        });

        list += '</ul>';

        return [
            {
                xtype: 'container',
                height: 300,
                width: '100%',
                style: 'overflow: auto; margin-bottom: 10px',
                html: '<div class="file-preview">' + list + '<div style="clear: both"></div></div>'
            }
        ]
    },
    buttons: [
        {
            text: 'Subir archivos',
            handler: function() {
                window.open("/system/admin/svg/add.html", '_blank');
            }
        },
        iwage.tools.BUTTON.CANCEL
    ],
    applyTool: function(svgPath) {
        try {
            iwage(iwage.MODES.FABRIC).topo.svg(/imagen\/(.+)?\./.exec(svgPath)[1]);
        } catch(e) {
        }

        this.destroy();
    }
});