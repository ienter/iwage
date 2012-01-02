Ext.ns('app.fabric.tools');

Ext.define('app.fabric.tools.Position', {
    extend: 'app.fabric.tools.Static',
    toolLabel: 'Posicion',
    buttons: [],
    createControls: function() {
        return [
            {
                xtype: 'numberfield',
                itemId: 'left',
                disabled: true,
                value: 0,
                fieldLabel: 'X'
            },
            {
                xtype: 'numberfield',
                itemId: 'top',
                disabled: true,
                value: 0,
                fieldLabel: 'Y'
            },
            {
                xtype: 'numberfield',
                itemId: 'angle',
                disabled: true,
                value: 0,
                fieldLabel: 'Angulo'
            },
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                fieldLabel: 'Profundidad',
                itemId: 'zpos',
                disabled: true,
                items: [
                    {
                        xtype: 'button',
                        itemId: 'toFront',
                        margin: '2 2 2 0',
                        text: 'Traer al frente',
                        icon: app.icon('bring_front'),
                        handler:   function() {
                            app(app.MODES.FABRIC).topo.toFront();
                        }
                    },
                    {
                        xtype: 'button',
                        itemId: 'toBack',
                        margin: 2,
                        text: 'Enviar al fondo',
                        icon: app.icon('send_back'),
                        handler:  function() {
                            app(app.MODES.FABRIC).topo.toBack();
                        }
                    }
                ]
            }
        ];
    },
    applyTool: function() {

    }
});