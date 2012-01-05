Ext.ns('iwage.view.toolLauncher');

iwage.view.toolLauncher.getTools = function () {
    var self = iwage.view.toolLauncher;

    return self.getFabricTools().concat(self.getImageEditorTools());
};

// TODO mover a cada modo
iwage.view.toolLauncher.getImageEditorTools = function () {
    return [
        {
            icon: iwage.icon('crop'),
            tooltip: iwage.label('crop'),
            hidden: iwage.getMode() == iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('hide', 'show'),
            handler: iwage.tools.launcher('Crop')
        },
        {
            icon: iwage.icon('rounded'),
            tooltip: iwage.label('rounded borders'),
            hidden: iwage.getMode() == iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('hide', 'show'),
            handler: iwage.tools.launcher('RoundedCorners')
        },
        {
            xtype: 'tbseparator',
            hidden: iwage.getMode() == iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('hide', 'show')
        },
        // TRANSFORM
        {
            icon: iwage.icon('rotate_anticlockwise'),
            tooltip: iwage.label('Rotar hacia la izquierda'),
            hidden: iwage.getMode() == iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('hide', 'show'),
            handler: function () {
                iwage(iwage.MODES.IMAGE).transform.rotateMinus90();
            }
        },
        {
            icon: iwage.icon('rotate_clockwise'),
            tooltip: iwage.label('Rotar hacia la derecha'),
            hidden: iwage.getMode() == iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('hide', 'show'),
            handler: function () {
                iwage(iwage.MODES.IMAGE).transform.rotate90();
            }
        },
        {
            icon: iwage.icon('flip_horizontal'),
            tooltip: iwage.label('Rotar hacia la derecha'),
            hidden: iwage.getMode() == iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('hide', 'show'),
            handler: function () {
                iwage(iwage.MODES.IMAGE).transform.translateHorizontal();
            }
        },
        {
            icon: iwage.icon('flip_vertical'),
            tooltip: iwage.label('Rotar hacia la derecha'),
            hidden: iwage.getMode() == iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('hide', 'show'),
            handler: function () {
                iwage(iwage.MODES.IMAGE).transform.translateVertical();
            }
        },
        {
            xtype: 'tbseparator',
            hidden: iwage.getMode() == iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('hide', 'show')
        },
        {
            hidden: iwage.getMode() == iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('hide', 'show'),
            tooltip: iwage.label('Rellenar transparencia'),
            icon: iwage.icon('set_transparent'),
            handler: function () {
                iwage.tools.launch('FillAlpha');
            }
        }

    ];
}

iwage.view.toolLauncher.getFabricTools = function () {
    return [
        {
            icon: iwage.icon('copy'),
            tooltip: iwage.label('Copiar'),
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage(iwage.MODES.FABRIC).copy
        },
        {
            icon: iwage.icon('paste'),
            tooltip: iwage.label('Pegar'),
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage(iwage.MODES.FABRIC).paste
        },
        {
            icon: iwage.icon('delete_cross'),
            tooltip: iwage.label('Eliminar seleccion actual'),
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage(iwage.MODES.FABRIC).removeActive
        },
        {
            xtype: 'tbseparator',
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide')
        },
        {
            icon: iwage.icon('text'),
            tooltip: iwage.label('Crear texto'),
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage.tools.launcher('Text')
        },
        {
            icon: iwage.icon('beizer'),
            tooltip: iwage.label('Agregar graficos vectoriales'),
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage.tools.launcher('Svg')
        },
        {
            icon: iwage.icon('image'),
            tooltip: iwage.label('Agregar imagenes'),
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage.tools.launcher('Image')
        },
        {
            xtype: 'tbseparator',
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide')
        },
        {
            icon: iwage.icon('line'),
            tooltip: iwage.label('Agregar linea'),
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage(iwage.MODES.FABRIC).addLine
        },
        {
            icon: iwage.icon('rect'),
            tooltip: iwage.label('Agregar rectangulo'),
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage(iwage.MODES.FABRIC).addRect
        },
        {
            icon: iwage.icon('triangle'),
            tooltip: iwage.label('Agregar triangulo'),
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage(iwage.MODES.FABRIC).addTriangle
        },
        {
            icon: iwage.icon('circle'),
            tooltip: iwage.label('Agregar circulo'),
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage(iwage.MODES.FABRIC).addCircle
        }
    ]
}