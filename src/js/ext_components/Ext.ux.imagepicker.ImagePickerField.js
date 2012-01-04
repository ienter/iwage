/**
 * TODO comentar
 *
 * @author Valentin Starck
 */
Ext.define('Ext.ux.imagepicker.ImagePickerField', {
    extend : 'Ext.form.field.Picker',
    matchFieldWidth : false,
    cls: 'ext-ux-image-picker-field',
    imageWidth: 100,
    imageHeight: 100,
    createPicker : function() {
        var picker = Ext.create('Ext.ux.imagepicker.ImagePickerPanel', {
            images: this.images || [],
            imageWidth: this.imageWidth,
            imageHeight: this.imageHeight,
            imagePadding: this.imagePadding,
            width: 475,
            listeners : {
                scope : this,
                select : this.onSelect
            }
        });
        return picker;
    },
    onSelect : function(picker, value) {
        this.setValue(value);
        this.fireEvent('select', this, value);
        this.collapse();
        this.blur();
    },
    refresh: function() {
        this.picker = this.createPicker();
    }
});