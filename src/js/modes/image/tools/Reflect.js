Ext.ns('iwage.image.tools');

Ext.define('iwage.image.tools.Reflect', {
    mode:iwage.MODES.IMAGE,
    persist:true,
    unique:true,
    toolLabel:'Reflejar',
    extend:'iwage.tools.Common',
    createControls:function () {
        return [
            {
                xtype:'slider',
                fieldLabel:'Tama&ntilde;o del reflejo',
                itemId:'size',
                width:350,
                value:30,
                minValue:0,
                maxValue:100,
                useTips:true,
                tipText:function (thumb) {
                    return Ext.String.format('{0}%', thumb.value);
                }
            },
            {
                xtype:'slider',
                fieldLabel:'Intensidad',
                itemId:'level',
                width:350,
                value:2,
                minValue:0,
                maxValue:3,
                useTips:true,
                tipText:function (thumb) {
                    return [
                        'Baja',
                        'Media',
                        'Alta',
                        'Muy Alta'
                    ][thumb.value];
                }
            }
        ];
    },
    refresh:function (options) {
        var values = this.getValues();

        if (!values) {
            return;
        }

        // Remover las imagenes de prueba
        $('.result.rounded').remove();

        // Crear la imagen
        var modifier = 1 + (values.size / 100);
        var transition = ['ExponencialOut', 'QuadraticOut', 'Quadratic', 'Exponencial'][values.level];

        $('#container').height(
            $('.result').height() * modifier
        );

        $(iwage().utils.reflect($('.result').get(0), modifier, transition))
            .addClass('result')
            .addClass('rounded')
            .appendTo($('.result').parent());

        iwage.view.centerContainer(0, {
            height:$('.result').height() * modifier
        });
    },
    use:function (options) {
        this.callParent(arguments);

        // TODO usar metodos estandar
        $('.result').hide();

        this.refresh();
    },
    applyTool:function () {
        // Reemplazar la imagen
        iwage.file.set(
            iwage.file.imageToDataUri($('.result.rounded').get(0))
        );

        this.destroy();
    },
    destroy:function () {
        this.callParent(arguments);

        // TODO usar metodos estandar
        $('.result').show();

        // Remover las imagenes de prueba
        $('.result.rounded').remove();
    }
});