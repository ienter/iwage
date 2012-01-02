Ext.ns('app.view.toolLauncher');

app.view.toolLauncher.getTools = function () {
    var self = app.view.toolLauncher;

    return self.getFabricTools().concat(self.getImageEditorTools());
};

// TODO mover a cada modo
app.view.toolLauncher.getImageEditorTools = function () {
    return [
        {
            icon: app.icon('crop'),
            tooltip: 'Recortar',
            hidden: app.getMode() == app.MODES.FABRIC,
            listeners: app.util.listenersForMode('hide', 'show'),
            handler: app.tools.launcher('Crop')
        },
        {
            icon: app.icon('rounded'),
            tooltip: 'Bordes Redondeados',
            hidden: app.getMode() == app.MODES.FABRIC,
            listeners: app.util.listenersForMode('hide', 'show'),
            handler: app.tools.launcher('RoundedCorners')
        },
        {
            xtype: 'tbseparator',
            hidden: app.getMode() == app.MODES.FABRIC,
            listeners: app.util.listenersForMode('hide', 'show')
        },
        // TRANSFORM
        {
            icon: app.icon('rotate_anticlockwise'),
            tooltip: 'Rotar hacia la izquierda',
            hidden: app.getMode() == app.MODES.FABRIC,
            listeners: app.util.listenersForMode('hide', 'show'),
            handler: function () {
                app(app.MODES.IMAGE).transform.rotateMinus90();
            }
        },
        {
            icon: app.icon('rotate_clockwise'),
            tooltip: 'Rotar hacia la derecha',
            hidden: app.getMode() == app.MODES.FABRIC,
            listeners: app.util.listenersForMode('hide', 'show'),
            handler: function () {
                app(app.MODES.IMAGE).transform.rotate90();
            }
        },
        {
            icon: app.icon('flip_horizontal'),
            tooltip: 'Rotar hacia la derecha',
            hidden: app.getMode() == app.MODES.FABRIC,
            listeners: app.util.listenersForMode('hide', 'show'),
            handler: function () {
                app(app.MODES.IMAGE).transform.translateHorizontal();
            }
        },
        {
            icon: app.icon('flip_vertical'),
            tooltip: 'Rotar hacia la derecha',
            hidden: app.getMode() == app.MODES.FABRIC,
            listeners: app.util.listenersForMode('hide', 'show'),
            handler: function () {
                app(app.MODES.IMAGE).transform.translateVertical();
            }
        },
        {
            xtype: 'tbseparator',
            hidden: app.getMode() == app.MODES.FABRIC,
            listeners: app.util.listenersForMode('hide', 'show')
        },
        {
            hidden: app.getMode() == app.MODES.FABRIC,
            listeners: app.util.listenersForMode('hide', 'show'),
            tooltip: 'Rellenar transparencia',
            icon: app.icon('set_transparent'),
            handler: function () {
                app.tools.launch('FillAlpha');
            }
        }

    ];
}

app.view.toolLauncher.getFabricTools = function () {
    return [
        {
            icon: app.icon('copy'),
            tooltip: 'Copiar',
            hidden: app.getMode() != app.MODES.FABRIC,
            listeners: app.util.listenersForMode('show', 'hide'),
            handler: app(app.MODES.FABRIC).copy
        },
        {
            icon: app.icon('paste'),
            tooltip: 'Pegar',
            hidden: app.getMode() != app.MODES.FABRIC,
            listeners: app.util.listenersForMode('show', 'hide'),
            handler: app(app.MODES.FABRIC).paste
        },
        {
            icon: app.icon('delete_cross'),
            tooltip: 'Eliminar seleccion actual',
            hidden: app.getMode() != app.MODES.FABRIC,
            listeners: app.util.listenersForMode('show', 'hide'),
            handler: app(app.MODES.FABRIC).removeActive
        },
        {
            xtype: 'tbseparator',
            hidden: app.getMode() != app.MODES.FABRIC,
            listeners: app.util.listenersForMode('show', 'hide')
        },
        {
            icon: app.icon('text'),
            tooltip: 'Crear texto',
            hidden: app.getMode() != app.MODES.FABRIC,
            listeners: app.util.listenersForMode('show', 'hide'),
            handler: app.tools.launcher('Text')
        },
        {
            icon: app.icon('beizer'),
            tooltip: 'Agregar graficos vectoriales',
            hidden: app.getMode() != app.MODES.FABRIC,
            listeners: app.util.listenersForMode('show', 'hide'),
            handler: app.tools.launcher('Svg')
        },
        {
            icon: app.icon('image'),
            tooltip: 'Agregar imagenes',
            hidden: app.getMode() != app.MODES.FABRIC,
            listeners: app.util.listenersForMode('show', 'hide'),
            handler: app.tools.launcher('Image')
        },
        {
            xtype: 'tbseparator',
            hidden: app.getMode() != app.MODES.FABRIC,
            listeners: app.util.listenersForMode('show', 'hide')
        },
        {
            icon: app.icon('line'),
            tooltip: 'Agregar linea',
            hidden: app.getMode() != app.MODES.FABRIC,
            listeners: app.util.listenersForMode('show', 'hide'),
            handler: app(app.MODES.FABRIC).addLine
        },
        {
            icon: app.icon('rect'),
            tooltip: 'Agregar rectangulo',
            hidden: app.getMode() != app.MODES.FABRIC,
            listeners: app.util.listenersForMode('show', 'hide'),
            handler: app(app.MODES.FABRIC).addRect
        },
        {
            icon: app.icon('triangle'),
            tooltip: 'Agregar triangulo',
            hidden: app.getMode() != app.MODES.FABRIC,
            listeners: app.util.listenersForMode('show', 'hide'),
            handler: app(app.MODES.FABRIC).addTriangle
        },
        {
            icon: app.icon('circle'),
            tooltip: 'Agregar circulo',
            hidden: app.getMode() != app.MODES.FABRIC,
            listeners: app.util.listenersForMode('show', 'hide'),
            handler: app(app.MODES.FABRIC).addCircle
        }
    ]
}