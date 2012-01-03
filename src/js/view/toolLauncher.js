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
            tooltip: 'Recortar',
            hidden: iwage.getMode() == iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('hide', 'show'),
            handler: iwage.tools.launcher('Crop')
        },
        {
            icon: iwage.icon('rounded'),
            tooltip: 'Bordes Redondeados',
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
            tooltip: 'Rotar hacia la izquierda',
            hidden: iwage.getMode() == iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('hide', 'show'),
            handler: function () {
                iwage(iwage.MODES.IMAGE).transform.rotateMinus90();
            }
        },
        {
            icon: iwage.icon('rotate_clockwise'),
            tooltip: 'Rotar hacia la derecha',
            hidden: iwage.getMode() == iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('hide', 'show'),
            handler: function () {
                iwage(iwage.MODES.IMAGE).transform.rotate90();
            }
        },
        {
            icon: iwage.icon('flip_horizontal'),
            tooltip: 'Rotar hacia la derecha',
            hidden: iwage.getMode() == iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('hide', 'show'),
            handler: function () {
                iwage(iwage.MODES.IMAGE).transform.translateHorizontal();
            }
        },
        {
            icon: iwage.icon('flip_vertical'),
            tooltip: 'Rotar hacia la derecha',
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
            tooltip: 'Rellenar transparencia',
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
            tooltip: 'Copiar',
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage(iwage.MODES.FABRIC).copy
        },
        {
            icon: iwage.icon('paste'),
            tooltip: 'Pegar',
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage(iwage.MODES.FABRIC).paste
        },
        {
            icon: iwage.icon('delete_cross'),
            tooltip: 'Eliminar seleccion actual',
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
            tooltip: 'Crear texto',
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage.tools.launcher('Text')
        },
        {
            icon: iwage.icon('beizer'),
            tooltip: 'Agregar graficos vectoriales',
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage.tools.launcher('Svg')
        },
        {
            icon: iwage.icon('image'),
            tooltip: 'Agregar imagenes',
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
            tooltip: 'Agregar linea',
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage(iwage.MODES.FABRIC).addLine
        },
        {
            icon: iwage.icon('rect'),
            tooltip: 'Agregar rectangulo',
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage(iwage.MODES.FABRIC).addRect
        },
        {
            icon: iwage.icon('triangle'),
            tooltip: 'Agregar triangulo',
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage(iwage.MODES.FABRIC).addTriangle
        },
        {
            icon: iwage.icon('circle'),
            tooltip: 'Agregar circulo',
            hidden: iwage.getMode() != iwage.MODES.FABRIC,
            listeners: iwage.util.listenersForMode('show', 'hide'),
            handler: iwage(iwage.MODES.FABRIC).addCircle
        }
    ]
}