Ext.define('Ext.ux.colorpicker.ColorPickerField', {
    extend : 'Ext.form.field.Picker',
    matchFieldWidth : false,


    createPicker : function() {
        var me = this;

        return Ext.create('Ext.ux.colorpicker.ColorPicker', {
            floating : true,
            baseCls : Ext.baseCSSPrefix + 'colorpicker',
            listeners : {
                scope : me,
                select : me.onSelect
            }
        });
    },
    onSelect : function(picker, value) {
        var
            me = this,
            hex = value != 'transparent' ? '#' + value : value;

        me.setValue(hex);
        me.fireEvent('select', me, hex);
        me.collapse();
        me.blur();

        Ext.Element.get(this.el.query('input')[0]).setStyle('backgroundColor', hex);
        Ext.Element.get(this.el.query('input')[0]).setStyle('backgroundImage', 'none');
    },

    onExpand : function(picker) {
        this.picker.setValue(
            this.getValue()
        );
    }
});