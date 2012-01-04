Ext.define('Ext.ux.colorpicker.ColorPicker', {
    extend : 'Ext.container.Container',
    alias : 'widget.ux.colorpicker',
    width : 350,
    config : {
        hsv : {
            h : 0,
            s : 0,
            v : 0
        }
    },
    items : [
        {
            xtype : 'container',
            itemId : 'cRgb',
            cls : 'x-cp-rgbpicker',
            items : [
                {
                    xtype : 'container',
                    itemId : 'rgbPicker',
                    cls : 'x-cp-rgbslider',
                    width : 15,
                    height : 15
                }
            ]
        },
        {
            xtype : 'container',
            itemId : 'cHue',
            cls : 'x-cp-huepicker',
            items : [
                {
                    xtype : 'container',
                    itemId : 'huePicker',
                    cls : 'x-cp-hueslider',
                    width : 15,
                    height : 15
                }
            ]
        },
        {
            xtype : 'form',
            itemId : 'cForm',
            border : false,
            cls : 'x-cp-formcontainer',
            items : [
                {
                    layout : 'column',
                    border : false,
                    items : [
                        {
                            layout : 'anchor',
                            border : false,
                            defaultType : 'numberfield',
                            defaults : {
                                anchor : '99%',
                                labelWidth : 10,
                                value : 0,
                                minValue : 0,
                                maxValue : 255,
                                labelSeparator : '',
                                hideTrigger : true
                            },
                            columnWidth : .5,
                            items : [
                                {
                                    fieldLabel : 'R',
                                    itemId : 'iRed'
                                },
                                {
                                    fieldLabel : 'G',
                                    itemId : 'iGreen'
                                },
                                {
                                    fieldLabel : 'B',
                                    itemId : 'iBlue'
                                }
                            ]
                        },
                        {
                            layout : 'anchor',
                            border : false,
                            defaultType : 'numberfield',
                            defaults : {
                                anchor : '99%',
                                labelWidth : 10,
                                value : 0,
                                minValue : 0,
                                maxValue : 255,
                                labelSeparator : '',
                                hideTrigger : true
                            },
                            columnWidth : .5,
                            items : [
                                {
                                    fieldLabel : 'H',
                                    itemId : 'iHue',
                                    maxValue : 360
                                },
                                {
                                    fieldLabel : 'S',
                                    itemId : 'iSat'
                                },
                                {
                                    fieldLabel : 'V',
                                    itemId : 'iVal'
                                }
                            ]
                        }
                    ]
                },
                {
                    layout : {
                        type : 'hbox',
                        align : 'top'
                    },
                    width: 120,
                    border : false,
                    defaults : {
                        labelWidth : 10,
                        labelSeparator : ''
                    },
                    items : [
                        {
                            xtype : 'textfield',
                            fieldLabel : '#',
                            itemId : 'iHexa',
                            width: 75
                        },
                        {
                            xtype: 'checkbox',
                            width: 40,
                            fieldLabel: '<span class="icon-transparent" style="display: block; height: 16px; width: 16px; margin-left: 3px">&nbsp;</span>',
                            itemId: 'iTransparent'
                        }
                    ]
                },
                {
                    defaultType : 'container',
                    border : false,
                    items : [
                        {
                            layout : {
                                type : 'hbox',
                                align : 'top'
                            },
                            defaultType : 'container',
                            items : [
                                {
                                    width : 30,
                                    height : 25,
                                    itemId : 'cWebsafe'
                                },
                                {
                                    cls : 'x-cp-leftarrow'
                                },
                                {
                                    xtype : 'button',
                                    text : 'Websafe',
                                    itemId : 'bWebsafe',
                                    flex : 1
                                }
                            ]
                        },
                        {
                            layout : {
                                type : 'hbox',
                                align : 'middle'
                            },
                            defaultType : 'container',
                            items : [
                                {
                                    width : 30,
                                    height : 25,
                                    itemId : 'cInverse'
                                },
                                {
                                    cls : 'x-cp-leftarrow'
                                },
                                {
                                    xtype : 'button',
                                    text : 'Inverso',
                                    itemId : 'bInverse',
                                    flex : 1
                                }
                            ]
                        },
                        {
                            layout : {
                                type : 'hbox',
                                align : 'middle'
                            },
                            defaultType : 'container',
                            items : [
                                {
                                    width : 30,
                                    height : 25,
                                    itemId : 'cSelect'
                                },
                                {
                                    cls : 'x-cp-leftarrow'
                                },
                                {
                                    xtype : 'button',
                                    text : 'Seleccionar',
                                    itemId : 'bSelect',
                                    flex : 1
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    constructor : function(config) {
        var me = this;
        me.initConfig(config);
        me.addEvents('select');
        me.callParent(arguments);

        return this;
    },
    afterRender : function(component) {
        var me = this;
        me.callParent(arguments);

        // Si hay un color inicial, setup de rgbPicker y huePicker
        if (me.value) {
            me.setColor(me.value);
        }
    },
    isTransparent: function() {
        return this.down('#iTransparent').getValue();
    },
    setTransparent: function(flag) {
        var me = this;

        if (flag) {
            me.down('#iRed').disable();
            me.down('#iGreen').disable();
            me.down('#iBlue').disable();
            me.down('#iHue').disable();
            me.down('#iSat').disable();
            me.down('#iVal').disable();
            me.down('#iHexa').disable();

            me.down('#cWebsafe').el.hide();
            me.down('#cInverse').el.hide();
            me.down('#cSelect').el.hide();
        } else {
            me.down('#iRed').enable();
            me.down('#iGreen').enable();
            me.down('#iBlue').enable();
            me.down('#iHue').enable();
            me.down('#iSat').enable();
            me.down('#iVal').enable();
            me.down('#iHexa').enable();

            me.down('#cWebsafe').el.show();
            me.down('#cInverse').el.show();
            me.down('#cSelect').el.show();
        }
    },
    initEvents : function() {
        var me = this;
        me.callParent();

        me.down('#cRgb').getEl().on('mousedown', function() {
            if (!me.down('#iTransparent').getValue()) {
                me.rgbClick.apply(me, arguments);
            }
        }, me);

        me.down('#cHue').getEl().on('mousedown', function() {
            if (!me.down('#iTransparent').getValue()) {
                me.hueClick.apply(me, arguments);
            }
        }, me);

        me.down('#iHexa').on('blur', me.hexaChange, me);

        me.down('#iTransparent').on('change', function(self) {
            me.setTransparent(self.getValue());
        }, me);

        me.down('#iRed').on('blur', me.rgbChange, me);
        me.down('#iGreen').on('blur', me.rgbChange, me);
        me.down('#iBlue').on('blur', me.rgbChange, me);

        me.down('#iHue').on('blur', me.hsvChange, me);
        me.down('#iSat').on('blur', me.hsvChange, me);
        me.down('#iVal').on('blur', me.hsvChange, me);

        me.down('#bWebsafe').on('click', function() {
            if (!me.down('#iTransparent').getValue()) {
                me.websafeClick.apply(me, arguments);
            }
        }, me);

        me.down('#bInverse').on('click', function() {
            if (!me.down('#iTransparent').getValue()) {
                me.inverseClick.apply(me, arguments);
            }
        }, me);
        me.down('#bSelect').on('click', me.selectClick, me);
    },
    websafeClick : function() {
        var
            me = this,
            rgb = me.websafe(
                me.getColor()
            );

        me.updateMode = 'click';

        me.setColor(me.rgbToHex(rgb));
    },
    inverseClick : function() {
        var me = this, rgb = me.invert(this.getColor());
        me.updateMode = 'click';
        me.setColor(me.rgbToHex(rgb));
    },
    selectClick : function() {
        var
            me = this,
            color;


        color = me.down('#cSelect').getEl().getColor('backgroundColor', '', '').toUpperCase();

        if (me.isTransparent()) {
            color = 'transparent';
        }

        this.fireEvent('select', this, color);
    },
    getColor : function() {
        var me = this, hsv = me.getHsv();
        return me.hsvToRgb(hsv.h, hsv.s, hsv.v);
    },
    setValue : function(v) {
        this.value = v;

        if (v == 'transparent') {
            this.setTransparent(true);
        } else {
            this.setColor(v);
        }
    },
    setColor : function(c) {
        var me = this;
        if (me.rendered) {

            c = c.replace('#', '');

            if (!/^[0-9a-fA-F]{6}$/.test(c))
                return;

            me.down('#iHexa').setValue(c);
            me.hexaChange();

            // Actualizar rgbPicker
            me.updateRgbPicker(me.getHsv().h);

        }
    },
    selectColor : function(event, element) {
        this.fireEvent('select', this, Ext.get(element).getColor('backgroundColor', '', ''));
    },

    rgbChange : function(input) {
        var me = this, temp = me.rgbToHsv(me.down('#iRed').getValue(), me.down('#iGreen').getValue(), me.down('#iBlue').getValue());

        me.updateMode = 'rgb';
        me.setHsv({
            h : temp[0],
            s : temp[1],
            v : temp[2]
        });
        me.updateColor();
    },

    hsvChange : function(input) {
        var me = this;
        me.updateMode = 'hsv';
        me.setHsv({
            h : me.down('#iHue').getValue(),
            s : me.down('#iSat').getValue() / 100,
            v : me.down('#iVal').getValue() / 100
        });
        me.updateColor();
    },

    hexaChange : function(input) {
        var
            me = this,
            temp = me.rgbToHsv(me.hexToRgb(me.down('#iHexa').getValue()));

        me.updateMode = 'hexa';

        me.setHsv({
            h : temp[0],
            s : temp[1],
            v : temp[2]
        });
        me.updateColor();
    },

    hueClick : function(event, el) {
        var me = this;
        me.updateMode = 'click';
        me.moveHuePicker(event.getXY()[1] - me.down('#cHue').getEl().getTop());
    },

    rgbClick : function(event, el) {
        var me = this, cRgb = me.down('#cRgb').getEl();
        me.updateMode = 'click';
        me.moveRgbPicker(event.getXY()[0] - cRgb.getLeft(), event.getXY()[1] - cRgb.getTop());
    },

    moveHuePicker : function(y) {
        var me = this, hsv = me.getHsv(), hp = me.down('#huePicker').getEl();
        hsv.h = Math.round(360 / 181 * (181 - y));
        hp.moveTo(hp.getLeft(), me.down('#cHue').getEl().getTop() + y - 7, true);
        me.updateRgbPicker(hsv.h);
        me.updateColor();
    },

    updateRgbPicker : function(newValue) {
        var me = this;
        me.updateMode = 'click';
        me.down('#cRgb').getEl().applyStyles({
            'backgroundColor' : '#' + me.rgbToHex(me.hsvToRgb(newValue, 1, 1))
        });
    },

    moveRgbPicker : function(x, y) {
        var me = this, hsv = me.getHsv(), cRgb = me.down('#cRgb').getEl();
        hsv.s = me.getSaturation(x);
        hsv.v = me.getVal(y);
        me.down('#rgbPicker').getEl().moveTo(cRgb.getLeft() + x - 7, cRgb.getTop() + y - 7, true);
        me.updateColor();
    },

    updateColor : function() {
        var me = this, hsv = me.getHsv();
        var rgb = me.hsvToRgb(hsv.h, hsv.s, hsv.v);
        var invert = me.invert(rgb);
        var websafe = me.websafe(rgb);
        var wsInvert = me.invert(websafe);

        if (me.updateMode != 'hexa') {
            me.down('#iHexa').setValue(me.rgbToHex(rgb));
        }
        if (me.updateMode != 'rgb') {
            me.down('#iRed').setValue(rgb[0]);
            me.down('#iGreen').setValue(rgb[1]);
            me.down('#iBlue').setValue(rgb[2]);
        }
        if (me.updateMode != 'hsv') {
            me.down('#iHue').setValue(Math.round(hsv.h));
            me.down('#iSat').setValue(Math.round(hsv.s * 100));
            me.down('#iVal').setValue(Math.round(hsv.v * 100));
        }

        me.setButtonColor('#cWebsafe', websafe);
        me.setButtonColor('#cInverse', invert);
        me.setButtonColor('#cSelect', rgb);

        if (me.updateMode != 'click') {
            var cRgb = me.down('#cRgb').getEl(), cHue = me.down('#cHue').getEl(), hp = me.down('#huePicker').getEl();
            hp.moveTo(hp.getLeft(), cHue.getTop() + me.getHPos(me.down('#iHue').getValue()) - 7, true);
            me.down('#rgbPicker').getEl().moveTo(cRgb.getLeft() + me.getSPos(me.down('#iSat').getValue() / 100) - 7,
                cHue.getTop() + me.getVPos(me.down('#iVal').getValue() / 100) - 7, true);
        }
    },

    setButtonColor : function(id, rgb) {
        var me = this, dq = Ext.DomQuery, invert = me.invert(rgb);
        me.down(id).getEl().applyStyles({
            'background' : '#' + me.rgbToHex(rgb)
        });
    },
    /**
     * Convert X coordinate to Saturation value
     *
     * @private
     * @param {Number} x
     * @return {Number}
     */
    getSaturation : function(x) {
        return x / 181;
    },

    /**
     * Convert Y coordinate to Brightness value
     *
     * @private
     * @param {Number} y
     * @return {Number}
     */
    getVal : function(y) {
        return (181 - y) / 181;
    },
    hsvToRgb : function(h, s, v) {
        if (h instanceof Array) {
            return this.hsvToRgb.call(this, h[0], h[1], h[2]);
        }

        var r, g, b, i, f, p, q, t;

        i = Math.floor((h / 60) % 6);
        f = (h / 60) - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i) {
            case 0:
                r = v,g = t,b = p;
                break;
            case 1:
                r = q,g = v,b = p;
                break;
            case 2:
                r = p,g = v,b = t;
                break;
            case 3:
                r = p,g = q,b = v;
                break;
            case 4:
                r = t,g = p,b = v;
                break;
            case 5:
                r = v,g = p,b = q;
                break;
        }
        return [ this.realToDec(r), this.realToDec(g), this.realToDec(b) ];
    },
    /**
     * Convert a float to decimal
     *
     * @param {Number} n
     * @return {Number}
     */
    realToDec : function(n) {
        return Math.min(255, Math.round(n * 256));
    },

    websafe : function(r, g, b) {
        var me = this;
        if (r instanceof Array) {
            return me.websafe.call(me, r[0], r[1], r[2]);
        }
        return [ me.checkSafeNumber(r), me.checkSafeNumber(g), me.checkSafeNumber(b) ];
    },

    checkSafeNumber : function(v) {
        if (!isNaN(v)) {
            v = Math.min(Math.max(0, v), 255);
            var i, next;
            for (i = 0; i < 256; i = i + 51) {
                next = i + 51;
                if (v >= i && v <= next) {
                    return (v - i > 25) ? next : i;
                }
            }
        }
        return v;
    },

    invert : function(r, g, b) {
        if (r instanceof Array) {
            return this.invert.call(this, r[0], r[1], r[2]);
        }
        return [ 255 - r, 255 - g, 255 - b ];
    },

    getSPos : function(saturation) {
        return saturation * 181;
    },

    getVPos : function(value) {
        return 181 - (value * 181);
    },

    getHPos : function(hue) {
        return 181 - hue * (181 / 360);
    },

    hexToRgb : function(hex) {
        var r, g, b;
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);

        return [ r, g, b ];
    },

    rgbToHex : function(r, g, b) {
        var me = this;
        if (r instanceof Array)
            return me.rgbToHex.call(me, r[0], r[1], r[2]);

        return me.toHex(r) + me.toHex(g) + me.toHex(b);
    },

    toHex : function(n) {
        n = parseInt(n, 10);
        if (isNaN(n))
            return "00";
        n = Math.max(0, Math.min(n, 255));
        return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);
    },

    rgbToHsv : function(r, g, b) {
        if (r instanceof Array)
            return this.rgbToHsv.call(this, r[0], r[1], r[2]);

        r = r / 255,g = g / 255,b = b / 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;

        var d = max - min;
        s = max == 0 ? 0 : d / max;

        if (max == min) {
            h = 0; // achromatic
        } else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }

        return [ h * 360, s, v ];
    }
});