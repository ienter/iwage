Ext.ns('app.image.tools');

Ext.define('app.image.tools.RoundedCorners', {
    extend: 'app.tools.Common',
    mode: app.MODES.IMAGE,
    persist: true,
    unique: true,
    toolLabel: 'Bordes Redondeados',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Nivel',
                itemId: 'level',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 250
            }
        ];
    },
    refresh: function(options) {
        var values = this.getValues();

        if (!values) {
            return;
        }

        // Remover las imagenes de prueba
        $('.result.rounded').remove();

        // Crear la imagen
        $(app().utils.roundedCorners($('.result').get(0), values.level))
            .addClass('result')
            .addClass('rounded')
            .appendTo($('.result').parent());
    },
    use: function(options) {
        this.callParent(arguments);

        // TODO usar metodos estandar
        $('.result').hide();

        this.refresh();
    },
    applyTool: function() {
        // Reemplazar la imagen
        app.file.set(
            app.file.imageToDataUri($('.result.rounded').get(0))
        );

        this.destroy();
    },
    destroy: function() {
        this.callParent(arguments);

        // TODO usar metodos estandar
        $('.result').show();

        // Remover las imagenes de prueba
        $('.result.rounded').remove();
    }
});