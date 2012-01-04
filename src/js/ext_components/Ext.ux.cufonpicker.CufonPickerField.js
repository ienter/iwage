/**
 * TODO comentar
 *
 * @author Valentin Starck
 */
Ext.define('Ext.ux.cufonpicker.CufonPickerField', {
    extend : 'Ext.form.field.Picker',
    matchFieldWidth : false,
    cls: 'webbie-ux-cufon-picker-field',
    alias: 'cufonfield',

    constructor : function(config) {
        this.initConfig(config);
        this.addEvents('change');
        this.callParent(arguments);
    },
    createPicker : function() {
        var picker = Ext.create('webbie.ux.cufonpicker.CufonPickerPanel', {
            hideTopBar: this.hideTopBar || false,
            listeners : {
                scope : this,
                select : this.onSelect
            }
        });

        picker.setPreviewText(
            this.getPreviewText()
        );

        return picker;
    },

    getPreviewText: function(text) {
        this.previewText = text;
    },

    setPreviewText: function() {
        return this.previewText;
    },
    onSelect : function(picker, value) {
        this.setValue(value);
        this.fireEvent('select', this, value);
        this.fireEvent('change', this, value);
        this.collapse();
        this.blur();
    }
});