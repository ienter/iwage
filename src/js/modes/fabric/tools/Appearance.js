Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.Appearance', {
    extend: 'iwage.fabric.tools.Static',
    toolLabel: 'Apariencia',
    buttons: [],
    createControls: function() {
        return [
            Ext.create('Ext.ux.colorpicker.ColorPickerField', {
                disabled: true,
                width: 250,
                labelWidth: 0,
                itemId: 'fill',
                cls: 'color-picker',
                fieldLabel: 'Relleno',
                emptyText: 'Seleccione un color',
                listeners: iwage.fabric.tools.Static.prototype.getDefaultListeners()
            }),
            Ext.create('Ext.ux.colorpicker.ColorPickerField', {
                disabled: true,
                itemId: 'stroke',
                width: 250,
                labelWidth: 0,
                cls: 'color-picker',
                fieldLabel: 'Borde',
                emptyText: 'Seleccione un color',
                listeners: iwage.fabric.tools.Static.prototype.getDefaultListeners()
            }),
            {
                xtype: 'numberfield',
                disabled: true,
                itemId: 'strokeWidth',
                value: 0,
                fieldLabel: 'Ancho&nbsp;de&nbsp;borde'
            },
            {
                xtype: 'sliderfield',
                itemId: 'opacity',
                disabled: true,
                value: 0,
                fieldLabel: 'Opacidad'
            }
        ];
    },
    applyTool: function() {

    }
});