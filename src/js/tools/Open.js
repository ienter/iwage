Ext.ns('iwage.tools');

Ext.define('iwage.tools.Open', {
    extend:'iwage.tools.Common',
    unique:true,
    persist:false,
    toolLabel:'Abrir archivo',
    componentWidth:500,
    use:function (options) {
        this.renderComponent();
        this.initEvents();
    },
    createControls:function () {
        return [
            {
                xtype:'container',
                height:40,
                width:'100%',
                html:'<div style="text-align: center;"><input type="file" id="fileLoader" multiple="false" accept="image/*" onchange="iwage.file.handle(this.files)"></div>'
            }
        ]
    },
    refresh:function (options) {
    },
    applyTool:function (imagePath) {
        iwage.file.openUrl(imagePath);
        this.destroy();
    },
    initEvents:function () {
        var self = this;

        iwage.on(['file:handled', 'app:cancel'], function () {
            self.destroy();
        });
    }
});