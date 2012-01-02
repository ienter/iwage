Ext.ns('app.tools');

Ext.define('app.tools.Open', {
    extend: 'app.tools.Common',
    unique: true,
    persist: false,
    toolLabel: 'Abrir archivo',
    componentWidth: 500,
    use: function(options) {
        var self = this;

        Ext.Ajax.request({
            url: this.proxy || app.options.galleryProxy,
            success: function(response) {
                var json = Ext.JSON.decode(response.responseText);

                if (json && json.success) {
                    self.images = json.images;
                }

                self.renderComponent();
                self.initEvents();
            }
        });
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
            },
            {
                xtype: 'container',
                height: 40,
                width: '100%',
                html: '<div style="text-align: center;"><input type="file" id="fileLoader" multiple="false" accept="image/*" onchange="app.file.handle(this.files)"></div>'
            }
        ]
    },
    refresh: function(options) {
    },
    applyTool: function(imagePath) {
        app.file.openUrl(imagePath);
        this.destroy();
    },
    initEvents: function() {
        var self = this;

        $(self.component.el.dom).on('click', 'li', function(ev) {
            self.applyTool($(this).find('img').attr('src'));
            self.destroy();
        });

        app.on(['file:handled', 'app:cancel'], function() {
            self.destroy();
        });
    },
    destroy: function() {
        var self = this;

        // remover el delegate de la lista
        $(self.component.el.dom).off('click');

        this.callParent(arguments);
    }
});