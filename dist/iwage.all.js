//     keymaster.js
//     (c) 2011 Thomas Fuchs
//     keymaster.js may be freely distributed under the MIT license.
(function(a){function h(a,b){var c=a.length;while(c--)if(a[c]===b)return c;return-1}function i(a){var b,g,i,j,k,m;g=(a.target||a.srcElement).tagName,b=a.keyCode;if(b==93||b==224)b=91;if(b in d){d[b]=!0;for(j in f)f[j]==b&&(l[j]=!0);return}if(g=="INPUT"||g=="SELECT"||g=="TEXTAREA")return;if(!(b in c))return;for(k=0;k<c[b].length;k++){i=c[b][k];if(i.scope==e||i.scope=="all"){m=i.mods.length>0;for(j in d)if(!d[j]&&h(i.mods,+j)>-1||d[j]&&h(i.mods,+j)==-1)m=!1;(i.mods.length==0&&!d[16]&&!d[18]&&!d[17]&&!d[91]||m)&&i.method(a,i)===!1&&(a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation&&a.stopPropagation(),a.cancelBubble&&(a.cancelBubble=!0))}}}function j(a){var b=a.keyCode,c;if(b==93||b==224)b=91;if(b in d){d[b]=!1;for(c in f)f[c]==b&&(l[c]=!1)}}function k(){for(b in d)d[b]=!1;for(b in f)l[b]=!1}function l(a,b,d){var e,h,i,j;d===undefined&&(d=b,b="all"),a=a.replace(/\s/g,""),e=a.split(","),e[e.length-1]==""&&(e[e.length-2]+=",");for(i=0;i<e.length;i++){h=[],a=e[i].split("+");if(a.length>1){h=a.slice(0,a.length-1);for(j=0;j<h.length;j++)h[j]=f[h[j]];a=[a[a.length-1]]}a=a[0],a=g[a]||a.toUpperCase().charCodeAt(0),a in c||(c[a]=[]),c[a].push({shortcut:e[i],scope:b,method:d,key:e[i],mods:h})}}function m(a){e=a||"all"}function n(){return e||"all"}function o(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,function(){c(window.event)})}var b,c={},d={16:!1,18:!1,17:!1,91:!1},e="all",f={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},g={backspace:8,tab:9,clear:12,enter:13,"return":13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,"delete":46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220};for(b=1;b<20;b++)f["f"+b]=111+b;for(b in f)l[b]=!1;o(document,"keydown",i),o(document,"keyup",j),o(window,"focus",k),a.key=l,a.key.setScope=m,a.key.getScope=n,typeof module!="undefined"&&(module.exports=key)})(this)
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
Ext.define('Ext.ux.colorpicker.ColorPickerField', {
    extend : 'Ext.form.field.Picker',
    matchFieldWidth : false,


    createPicker : function() {
        var me = this;

        return Ext.create('Ext.ux.colorpicker.ColorPicker', {
            floating : true,
            baseCls : Ext.baseCSSPrefix + 'colorpicker',
            listeners : {
                scope : me,
                select : me.onSelect
            }
        });
    },
    onSelect : function(picker, value) {
        var
            me = this,
            hex = value != 'transparent' ? '#' + value : value;

        me.setValue(hex);
        me.fireEvent('select', me, hex);
        me.collapse();
        me.blur();

        Ext.Element.get(this.el.query('input')[0]).setStyle('backgroundColor', hex);
        Ext.Element.get(this.el.query('input')[0]).setStyle('backgroundImage', 'none');
    },

    onExpand : function(picker) {
        this.picker.setValue(
            this.getValue()
        );
    }
});
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
Ext.define('Ext.ux.cufonpicker.CufonPickerPanel', {
    itemId: 'cufonPicker',
    extend : 'Ext.panel.Panel',
    layout: 'fit',
    width : 550,
    height: 300,
    floating: true,
    baseCls : Ext.baseCSSPrefix + 'cufonpicker',
    autoScroll: true,
    previewText: 'Lorem ipsum 123',
    constructor : function(config) {
        this.initConfig(config);
        this.addEvents('select');
        this.callParent(arguments);
    },
    setPreviewText: function(text) {
        this.previewText = text;
    },
    onMouseWheel: function(e) {
        e.stopEvent();
        e.stopPropagation();
    },
    getPreviewText: function() {
        return this.previewText;
    },
    items: [
        {
            xtype: 'panel',
            autoScroll: true,
            onMouseWheel: function(e) {
                e.stopEvent();
                e.stopPropagation();
            },
            listeners: {
                afterrender: function(self) {
                    var picker = self.up('#cufonPicker');

                    self.el.addListener('click', function(ev, el, opts) {
                        el = Ext.Element.get(el);

                        if (!el.is('.webbie-preview')) {
                            el = el.up('.webbie-preview');
                            if (!el) {
                                return;
                            }
                        }

                        el = el.parent().parent();

                        self.up('#cufonPicker').setValue(
                            Ext.getCmp(el.id)._font
                        );
                    });
                }
            }
        }
    ],
    /**
     * Actualiza el panel para mostrar
     * todas las variantes cargadas
     *
     * @return {webbie.ux.cufonpicker.CufonPickerPanel}
     */
    refresh: function(removeAll) {
        try {
            var
                self = this,
                fontCt = this.items.get(0);

            if (removeAll) {
                fontCt.removeAll();
            }
        } catch(e) {
            return this;
        }

        var variants = [];

        Ext.iterate(webbie.getCufonWebbie().getRegisteredFonts(), function(key, value, index) {
            // console.log(arguments);
            variants.push(value.get().face['font-family']);
        });


        // En cada pasada agregamos fonts
        variants.forEach(function(variant, i) {
            var cls = variant.toLowerCase().replace(/[^a-z\d]+/g, '_');

            // Evitamos repetir fonts
            if (self.down('#' + cls)) {
                return;
            }

            // El estilo diferenciado es para separar las fonts utilizadas
            // de las demas
            var style = '';

            if (webbie.getCufonWebbie().originalLength && i + 1 == webbie.getCufonWebbie().originalLength) {
                style = 'border-bottom: dotted 2px #777;html 5 '
            }

            fontCt.add({
                _font: variant,
                cls: cls,
                border: false,
                itemId: cls,
                html: '<div class="webbie-title">' + variant +
                    '</div><div class="webbie-preview ' + app.hash(variant) + '">' +
                    (self.getPreviewText() || '<div style="font-size: 20px; margin-bottom: 10px">Lorem ipsum 123</div>') +
                    '</div>',
                margin: '6 0',
                style: style,
                listeners: {
                    afterrender: function(fontCtChild) {
                        webbie.getCufonWebbie().replace(
                            '.' + app.hash(variant), {
                                fontFamily: variant,
                                hover: true
                            }
                        );
                    }
                }
            });

        });
        return this;
    },
    cufonContainer: 'div.webbie-preview',
    listeners: {
        activate: function(self) {
            self.refresh(true);
        }
    },
    setValue : function(v) {
        this.value = v;
        this.fireEvent('select', this, v);
    }
});
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
Ext.define('Ext.ux.imagepicker.ImagePickerPanel', {
    itemId: 'image-picker',
    extend : 'Ext.panel.Panel',
    width : 550,
    height: 300,
    images: [],
    imageWidth: 100,
    imageHeight: 100,
    floating: true,
    baseCls : Ext.baseCSSPrefix + 'imagepicker',
    autoScroll: true,
    onMouseWheel: function(e) {
        e.stopEvent();
        e.stopPropagation();
    },
    layout: 'fit',
    items: [
        {
            xtype: 'panel',
            autoScroll: true,
            onMouseWheel: function(e) {
                e.stopEvent();
                e.stopPropagation();
            },
            listeners: {
                afterrender: function(self) {
                    var
                        picker = self.up('#image-picker'),
                        images = picker.images || [],
                        IMAGE_TEMPLATE = ('<div data-src="{src}" style="cursor: pointer;overflow: hidden; text-align: center; margin: {margin}px;padding: {padding}px; border: solid 1px #999; float: left; height: {divHeight}px; width: {divWidth}px"><image src="{src}" width="{width}"></image></div>').tpl({
                            width: picker.imageWidth,
                            height: picker.imageHeight,
                            divWidth: picker.imageHeight * 2,
                            divHeight: picker.imageHeight * 2,
                            padding: 5,
                            margin: 5
                        }),
                        html = '',
                        d = +new Date;


                    images.forEach(function(e) {
                        html += IMAGE_TEMPLATE.tpl({
                            src: e + '?' + d
                        });
                    });

                    self.add({
                        xtype: 'panel',
                        html: html
                    });
                }
            }
        }
    ],
    constructor : function(config) {
        this.initConfig(config);
        this.addEvents('select');
        this.callParent(arguments);
    },
    listeners: {
        activate: function(self) {
        },
        afterrender: function(self) {
            self.items.get(0).el.addListener('click', function(ev, el, opts) {
                el = Ext.Element.get(el);

                self.setValue(el.getAttribute('data-src') || el.getAttribute('src'));
            });
        }
    },
    setValue : function(v) {
        this.value = v;
        this.fireEvent('select', this, v);
    }
});
function iwage() {
    var args = arguments;

    if (!arguments.length) {
        return iwage.mode(iwage.getMode());
    }

    if (typeof args[0] == 'string') {
        if (args[0] in iwage.MODES) {
            return iwage.mode(args[0]);
        }

        return {
            tpl: function(o) {
                return iwage.tpl(args[0], o);
            }
        };
    }
}

iwage.getMode = function() {
    return iwage._mode;
};

iwage.tpl = function(str, obj) {
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            str = str.replace((new RegExp('\\{' + prop.toString() + '\\}', 'g')), obj[prop] || '');
        }
    }

    str.replace(/\{.+\}/, '');

    return str;
};

iwage._values = {};

iwage.set = function(key, value) {
    return (iwage._values[key] = value);
};
iwage.get = function(key) {
    return iwage._values[key];
};

iwage.unset = function(key) {
    return delete iwage._values[key];
};

/**
 * Crea el namespace para todos los modos registrados
 *
 * @param {String} namespace
 */
iwage.ns = function(namespace) {
    namespace in iwage || (iwage[namespace] = {});

    for (var p in iwage.MODES) {
        p in iwage || (iwage[p] = {});
        namespace in iwage[p] || (iwage[p][namespace] = {});

    }
};

iwage.uid = (function() {
    var map = {};
    return function(prefix) {
        prefix = prefix || 'generated';
        map[prefix] = map[prefix] || 0;

        var id = prefix + '-' + map[prefix]++;

        // Valida que no exista un elemento con
        // el mismo id
        if (document.getElementById(id)) {
            return createId(prefix);
        }
        return id;
    }
})();

iwage.path = function(path, root) {
    var parts, i, l;

    parts = path.split('.');
    root = root || iwage();

    for (i = 0,l = parts.length; i < l; i++) {
        if (!root[parts[i]]) {
            return null;
        }
        root = root[parts[i]];
    }

    return root;
}

iwage.exec = function(method, args) {
    var ref, context;

    ref = iwage.path(method);

    if (!ref) {
        iwage.warn('Method ' + method + ' is not implemented (' + iwage.getMode() + ')');
        return;
    }

    context = iwage.path(method.replace(/\.[^\.]+$/, ''));

    return ref.apply(context, args);
};


iwage.alert = function(msg) {
    Ext.MessageBox.alert('Aviso', msg);
};

Ext.ns('iwage.tools');
Ext.ns('iwage.util');
Ext.ns('iwage.fabric');

iwage.log = function() {
    console && console.log.apply(console, arguments);
};

iwage.warn = function() {
    console && console.warn.apply(console, arguments);
};

iwage.error = function() {
    iwage.log('Error ===================================================');
    console && console.error.apply(console, arguments);
    iwage.log('=========================================================');

    iwage.view.error(arguments[0]);
};

/**
 * Inicia el editor
 *
 * @param {Object} options
 */
iwage.start = function(options) {
    options = Ext.apply({
        mode: iwage.MODES.IMAGE,
        modes: {
            IMAGE: true,
            FABRIC: true
        },
        fabricWidth: 300,
        fabricHeight: 300
    }, options || {});

    if (options['fabric.size']) {
        options.fabricWidth = options['fabric.size'].x;
        options.fabricHeight = options['fabric.size'].y;
    }

    iwage.setMode(options.mode);
    iwage.view.start(options);

    iwage.options = options;

    if (options.modes[iwage.MODES.FABRIC]) {
        iwage.mode(iwage.MODES.FABRIC).start(options);
    }

    if (options.dataUri) {
        iwage.file.set(options.dataUri);
    }
};

iwage.mode = function(mode) {
    if (!mode) {
        mode = iwage.getMode().toLowerCase();
    }

    if (!iwage[mode]) {
        iwage[mode] = {};
    }

    return iwage[mode];
};

iwage.eachMode = function(fn) {
    Ext.iterate(iwage.MODES, function(mode) {
        fn(iwage(mode));
    });
};

iwage.setMode = function(mode) {
    iwage._mode = mode;
    iwage.emit('app:mode', mode);
    iwage.tools.clear();
    iwage.view.centerContainer();
    iwage.tools.setMode(mode);
};

iwage.ev = {
    _handlers: {},
    on: function(ev, handler, scope) {
        if (Ext.isArray(ev)) {
            Ext.each(ev, function(current) {
                iwage.ev.on(current, handler, scope);
            });
            return;
        }

        this._handlers[ev] = this._handlers[ev] || [];

        this._handlers[ev].push(handler);
        handler.scope = scope;
    },
    /**
     * Event handler de unico uso
     *
     * @param ev
     * @param handler
     */
    one: function(ev, handler, scope) {
        ev.$single = true;

        this.on(ev, handler, scope);
    },
    off: function(ev, handler) {
        if (!this._handlers[ev]) {
            return;
        }
    },
    emit: function(ev) {
        if (!this._handlers[ev]) {
            return;
        }

        var
            args = Array.prototype.slice.call(arguments, 1),
            handlers = [];

        this._handlers[ev].forEach(function(handler) {
            handler.apply(handler.scope, args);

            if (!handler.$single) {
                handlers.push(handler);
            }
        });
    }
};

iwage.on = function() {
    iwage.ev.on.apply(iwage.ev, arguments);
};

iwage.off = function() {
    iwage.ev.off.apply(iwage.ev, arguments);
};

iwage.emit = function() {
    iwage.ev.emit.apply(iwage.ev, arguments);
};

iwage.cancel = function() {
    iwage.emit('app:cancel');
};

iwage.util.listenersForMode = function(onFabricMode, onImageMode) {
    return {
        afterrender: function(self) {
            iwage.on('app:mode', function(mode) {
                if (mode == iwage.MODES.FABRIC) {
                    (typeof onFabricMode == 'function' ? onFabricMode : self[onFabricMode]).call(self);
                } else {
                    (typeof onImageMode == 'function' ? onImageMode : self[onImageMode]).call(self);
                }
            });
        }
    };
};

iwage.util.hash = iwage.hash = function (s) {
    return s.toLowerCase().replace(/\s*/, '').split('').reduce(
        function(memo, current, index) {
            return memo + current.charCodeAt(0) * (index + 1);
        }, 0).toString(16);
};


iwage.services = {
    imageFromDataUri: function(dataUri, callback) {
        Ext.Ajax.request({
            url: '/webbie_image/ajax_base64_to_image/',
            params: {
                dataUri: dataUri
            },
            success: function(response) {
                if (response && callback) {
                    try {
                        iwage.log('Get: /' + response.responseText);
                        callback('/' + response.responseText);
                    } catch(e) {
                        iwage.error(e);
                    }
                } else {
                    iwage.error('fail: imageFromDataUri');
                }

            }
        });
    }
};


/// TODO mover (webbie)

var webbie = {
    event: {
        emit: function() {
        }
    },
    registerFont: function() {
        var
            args = arguments,
            old;

        try {
            Cufon.registerFont.apply(Cufon, args);
        } catch(e) {
            iwage.log(e);
            old = webbie.reloadFonts;

            if (!old) {
                return;
            }

            webbie.reloadFonts = function() {
                Cufon.registerFont.apply(Cufon, args);
                old();
            };
        }
        try {
            CufonWebbie.registerFont.apply(CufonWebbie, args);
        } catch(e) {
            iwage.log(e);
        }
    },
    getCufonWebbie: function() {
        return CufonWebbie;
    }
};
iwage.MODES = {
    IMAGE: 'IMAGE',
    FABRIC: 'FABRIC'
};
// Herramientas activas (visibles)
iwage.tools.active = [];

iwage.tools.launch = function (toolName, options) {
    var tool;

    toolName = 'iwage.' + iwage.getMode().toLowerCase() + '.tools.' + toolName;

    iwage.log('Tool: ' + toolName);

    // Eliminamos las herramientas volatiles
    iwage.tools.clear();

    options = Ext.apply({
        dataUri: iwage.file.getDataUri(),
        width: iwage.file.getWidth(),
        height: iwage.file.getHeight(),
        tool: tool
    }, options || {});

    tool = Ext.create(toolName, options);

    if (tool.unique) {
        iwage.tools.clearByType(tool.$className);
    }

    tool.use(options);

    iwage.tools.active.push(tool);

    return tool;
};

iwage.tools.launcher = function (tool, options) {
    return function () {
        iwage.tools.launch(tool, options);
    }
};

/**
 * Mata las herramientas activas NO PERSISTENTES
 */
iwage.tools.clear = function () {
    var actives = iwage.tools.active;
    for (var i = 0, l = actives.length; i < l; i++) {
        if (!actives[i].persist) {
            actives[i].destroy();
            actives.splice(i, 1);
        }
    }

    iwage.exec('tools.onClear');
};

/**
 * Mata las herramientas activas NO PERSISTENTES
 */
iwage.tools.clearByType = function (className) {
    var actives = iwage.tools.active;

    for (var i = 0, l = actives.length; i < l; i++) {
        if (!actives[i]) {
            actives.splice(i, 1);
            continue;
        }


        if (actives[i].$className == className) {
            actives[i].destroy();
            actives.splice(i, 1);
        }
    }
};

iwage.tools.getByType = function (className) {
    var actives = iwage.tools.active;
    for (var i = 0, l = actives.length; i < l; i++) {
        if (!actives[i]) {
            actives.splice(i, 1);
            continue;
        }

        if (actives[i].$className == className) {
            return actives[i];
        }
    }

    return null;
};

iwage.tools.setMode = function (mode) {
    var actives = iwage.tools.active;
    for (var i = 0, l = actives.length; i < l; i++) {
        if (!actives[i].mode) {
            // Toda tool deberia tener un modo
            iwage.warn('Modeless tool: ' + actives[i].$className);
            continue;
        }

        if (actives[i].onModeChanged) {
            actives[i].onModeChanged(mode);
            continue;
        }

        if (actives[i].mode != iwage.getMode()) {
            actives[i].hide();
        } else {
            actives[i].show();
        }
    }
};

iwage.tools.getStatic = function () {
    var components = [];

    // TODO mover a cada modo
    iwage.tools.active = iwage.tools.active.concat([
        //Ext.create('iwage.fabric.tools.ImageEditionReady'),
        Ext.create('iwage.fabric.tools.EditImage'),
        Ext.create('iwage.fabric.tools.ImageEditionReady'),
        Ext.create('iwage.image.tools.FabricImageReady'),
        Ext.create('iwage.image.tools.EditAsFabric'),

        Ext.create('iwage.image.tools.Zoom'),

        Ext.create('iwage.fabric.tools.Position'),
        Ext.create('iwage.fabric.tools.Appearance')
    ]);

    Ext.each(iwage.tools.active, function (current, index) {
        components.push(current.getComponent());

        if (current.mode != iwage.getMode()) {
            current.hide();
        }
    });

    return components;
};
iwage.ns('history');

iwage.history = {
    addUndo: function() {
        return iwage.exec('history.addUndo', arguments);
    },
    addRedo: function() {
        return iwage.exec('history.addRedo', arguments);
    },
    getUndo: function(index) {
        return iwage.exec('history.getUndo', arguments);
    },
    getRedo: function(index) {
        return iwage.exec('history.getRedo', arguments);
    },
    undo: function() {
        return iwage.exec('history.undo', arguments);
    },
    redo: function() {
        return iwage.exec('history.redo', arguments);
    },
    clear: function() {
        return iwage.exec('history.clear', arguments);
    },
    clearUndoHistory: function() {
        return iwage.exec('history.clearUndoHistory', arguments);
    },
    clearRedoHistory: function() {
        return iwage.exec('history.clearRedoHistory', arguments);
    },
    setOriginal: function(original) {
        return iwage.exec('history.setOriginal', arguments);
    },
    getOriginal: function() {
        return iwage.exec('history.getOriginal', arguments);
    },
    backToOriginal: function() {
        var result = iwage.exec('history.backToOriginal', arguments);

        iwage.exec('history.clear', arguments);

        return result;
    }
};
iwage.ns('file');

iwage.file = {
    open: function() {
        return iwage.exec('file.open', arguments);
    },
    load: function(resource) {
        iwage.view.clearZoom();
        return iwage.exec('file.load', arguments);
    },
    clear: function() {
        iwage.history.clear();
        return iwage.exec('file.clear', arguments);
    },
    set: function(resource, options) {
        return iwage.exec('file.set', arguments);
    },
    save: function(opts) {
        return iwage.exec('file.save', arguments);
    },
    saveImage: function() {
        return iwage.exec('file.saveImage', arguments);
    },
    handle: function(files) {
        if (!files || !files[0]) {
            return false;
        }

        var
            file = files[0],
            reader = new FileReader();

        reader.onload = function(e) {
            iwage.exec('file.handle', [e.target.result]);
        };

        reader.readAsDataURL(file);

        iwage.emit('file:handled', file);
    },
    getDataUri: function(opts) {
        return iwage.exec('file.getDataUri', arguments);
    },
    hide: function() {
        return iwage.exec('file.hide', arguments);
    },
    show: function() {
        return iwage.exec('file.show', arguments);
    },
    copy: function() {
        return iwage.exec('file.copy', arguments);
    },
    paste: function() {
        return iwage.exec('file.paste', arguments);
    },
    getHeight: function() {
        return iwage.exec('file.getHeight', arguments);
    },
    getWidth: function() {
        return iwage.exec('file.getWidth', arguments);
    },
    createCanvas: function() {
        return $('<canvas/>').get(0);
    },
    // TODO move to iwage(iwage.MODES.IMAGE)
    rescale: function(dataUri, scale) {
        var canvas, image, context;

        if (!scale || scale == 1) {
            return dataUri;
        }

        image = this.dataUriToImage(dataUri);

        canvas = this.createCanvas();
        context = canvas.getContext('2d');

        canvas.width = iwage().file.getWidth() * scale;
        canvas.height = iwage().file.getHeight() * scale;

        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        dataUri = canvas.toDataURL('image/png');

        return dataUri;
    },
    rescaleResult: function(scale) {
        iwage.file.set(
            iwage.file.rescale(
                iwage.file.getDataUri,
                scale
            )
        );
    },
    imageToDataUri: function(image) {
        var
            canvas = this.createCanvas(),
            context = canvas.getContext('2d');

        canvas.width = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0);

        return canvas.toDataURL('image/png');
    },
    imageUrlToDataUri: function(url) {
        var image = new Image;
        image.src = url;

        return iwage.file.imageToDataUri(image);
    },
    dataUriToImage: function(dataUri) {
        var image;

        image = new Image();
        image.src = dataUri;

        return image;
    },
    openUrl: function(url) {
        iwage.file.load(
            iwage.file.imageUrlToDataUri(url)
        );
    },
    scale: function(img, scale) {
        var canvas, context, result;

        canvas = this.createCanvas();
        context = canvas.getContext('2d');

        canvas.height = img.height * scale;
        canvas.width = img.width * scale;

        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        result = new Image;
        result.src = canvas.toDataURL('image/png');

        return result;
    },
    scaleResult: function() {
        var scale, result, scaled;

        result = $('.result').get(0);
        scale = 1 / iwage.view.getZoom();

        if (isNaN(scale) || scale == 1) {
            return;
        }

        scaled = iwage.file.scale(result, scale);

        $('.result').remove();
        $(scaled).addClass('result').appendTo('#container');
    },
    viewAsImage: function() {
        window.open(iwage().file.getDataUri(), '_preview');
    }
}
iwage.ns('view');

iwage.view = {
    menu:{},
    statusbar:{},
    viewport:{
        instance:null
    },
    setZoom:function (level) {
        return iwage.exec('view.setZoom', arguments);
    },
    getZoom:function () {
        return iwage.exec('view.getZoom', arguments);
    },
    restoreZoom:function () {
        return iwage.exec('view.restoreZoom', arguments);
    },
    clearZoom:function () {
        return iwage.exec('view.clearZoom', arguments);
    }
};

iwage.view.adjustContainer = function (delay) {
    setTimeout(function () {
        $('#container')
            .show()
            .height(
            $('.result').height()
        )
            .width(
            $('.result').width()
        );


        iwage.view.centerContainer();
    }, delay || 0);
};

/**
 *
 * @param delay
 */
iwage.view.centerContainer = function (delay, opts) {
    var container, result, canvasParent;

    opts = opts || {};

    container = $('.result-container:visible').css('height', '100%');
    result = container.find('.result, canvas');
    canvasParent = container.find('#fabric-parent, #container');

    container.parents().css('height', '100%');

    setTimeout(function () {
        var width = opts.width || result.width();
        var height = opts.height || result.height();

        var marginLeft = (container.width() - width) / 2;
        var marginTop = ((container.height() - height) / 2) * 0.90;

        canvasParent.css({
            marginLeft:marginLeft,
            marginTop:marginTop
        });
    }, delay || 0);
};

iwage.view.error = function (e) {
    Ext.Msg.show({
        title:'Woooops!',
        msg:e,
        buttons:Ext.Msg.OK,
        icon:Ext.Msg.ERROR,
        modal:true
    });
};

iwage.view.start = function () {
    Ext.QuickTips.init();

    Ext.EventManager.onWindowResize(function () {
        iwage.emit('app:resize');
    });

    iwage.on('app:resize', iwage.view.centerContainer);

    iwage.view.viewport.instance = Ext.create('Ext.container.Viewport', {
        layout:'border',
        items:[
            {
                region:'north',
                height:28,
                border:false,
                items:[
                    iwage.view.menu.create()
                ]
            },
            {
                region:'east',
                width:285,
                componentCls:'east-tool',
                title:'Herramientas',
                collapsible:true,
                collapsed:false,
                items:iwage.tools.getStatic(),
                autoScroll:true
            },
            {
                region:'south',
                border:false,
                items:[
                    iwage.view.statusbar.create()
                ]
            },
            {
                region:'center',
                xtype:'panel',
                cls:'working-area',
                lbar:iwage.view.toolLauncher.getTools(),
                border:false,
                items:[
                    {
                        xtype:'container',
                        html:iwage.mode(iwage.MODES.IMAGE).view.getHTML(),
                        hidden:iwage.getMode() == iwage.MODES.FABRIC,
                        listeners:iwage.util.listenersForMode('hide', 'show')
                    },
                    {
                        xtype:'container',
                        html:iwage.mode(iwage.MODES.FABRIC).view.getHTML(),
                        hidden:iwage.getMode() != iwage.MODES.FABRIC,
                        listeners:iwage.util.listenersForMode('show', 'hide')
                    }

                ]
            }
        ]
    });

    try {
        iwage.view.centerContainer(250);
    } catch (e) {
    }
};

iwage.icons = iwage.view.icons = {
    CONFIGURATION:'config_16x16.png',
    BACKGROUND:'background_16x16.png',
    SET_TRANSPARENT:'set_transparent_16x16.png',
    DISPLAY:'display_16x16.png',
    BIN:'bin_16x16.png',
    GRID:'grid_16x16.png',
    MARGINS:'margins_16x16.png',
    TEXT:'text_16x16.png',
    SELECT:'select_16x16.png',
    LOGIN:'login_16x16.png',
    LOGOUT:'logout_16x16.png',
    MAXIMIZE:'maximize_16x16.gif',
    MINIMIZE:'min_view_16x16.gif',
    SEARCH:'amarok_search_16x16.png',
    CLOSE:'remove_16x16.gif',
    DELETE:'delete_16x16.gif',
    PLUS:'plus_16x16.png',
    PREV:'prev_16x16.png',
    PREV_PLUS:'prev_prev.gif',
    REFRESH:'refresh_16x16.gif',
    NEXT:'next_16x16.gif',
    NEXT_PLUS:'next_next.gif',
    HELP:'help_16x16.png',
    TWITTER_GREY:'twitter_grey_16x16.png',
    FACEBOOK:'facebook_16x16.png',
    GMAP:'gmap_16x16.png',
    UNDO:'undo_16x16.png',
    REDO:'redo_16x16.png',
    COPY:'copy_16x16.png',
    CROP:'crop_16x16.png',
    PASTE:'paste_16x16.png',
    DELETE_CROSS:'delete_cross_16x16.png',
    SAVE:'save_16x16.png',
    OPEN:'open_16x16.png',
    PALETTE:'palette_16x16.png',
    PHOTO:'photo_16x16.png',
    NEW:'new_16x16.png',
    METRICS:'metrics_16x16.png',
    BRING_FRONT:'bring_front_16x16.png',
    SEND_BACK:'send_back_16x16.png',
    PREVIEW:'preview_16x16.png',
    DOWNLOAD:'download_16x16.png',
    TICK:'tick_16x16.png',
    BEIZER:'beizer_16x16.png',
    IMAGE:'image_16x16.png',
    SHAPE:'shape_16x16.png',
    CONFIG:'config_16x16.png',

    ROUNDED:'rounded_16x16.png',
    REFLECTION:'reflection_16x16.png',

    // Transforms
    ROTATE_CLOCKWISE:'rotate_clockwise_16x16.png',
    ROTATE_ANTICLOCKWISE:'rotate_anticlockwise_16x16.png',
    FLIP_HORIZONTAL:'flip_horizontal_16x16.png',
    FLIP_VERTICAL:'flip_vertical_16x16.png',

    // Shapes
    TRIANGLE:'triangle_16x16.png',
    RECT:'rect_16x16.png',
    CIRCLE:'circle_16x16.png',
    LINE:'line_16x16.png',

    // Filters
    FILTER_ZOOMBLUR:'filter_blurzoom_16x16.png',
    FILTER_BULGEPINCH:'filter_bulge_16x16.png',
    FILTER_BRIGHTNESSCONTRAST:'filter_contrast_16x16.png',
    FILTER_LENSBLUR:'filter_image_blur_16x16.png',
    FILTER_INK:'filter_ink_16x16.png',
    FILTER_NOISE:'filter_noise_16x16.png',
    FILTER_HEXAGONALPIXELATE:'filter_pixeled_16x16.png',
    FILTER_HUESATURATION:'filter_saturation_16x16.png',
    FILTER_SEPIA:'filter_sepia_16x16.png',
    FILTER_TILTSHIFT:'filter_shft_16x16.png',
    FILTER_SWIRL:'filter_swirl_16x16.png',
    FILTER_VIGNETTE:'filter_vignete_16x16.png',
    FILTER_EDGEWORK:'filter_edge_16x16.png'
};

iwage.icon = iwage.view.icon = function (icon) {
    var basePath = (typeof _base_url != 'undefined' ? _base_url : '/') + 'images/icons/';

    icon = iwage.icons[icon.toUpperCase()];

    if (!icon) {
        iwage.log('icon not found ' + icon);

        icon = iwage.icons.HELP;
    }

    return basePath + icon;
}
iwage.key = function(keys, action) {
    var obj;

    if (typeof keys == 'string') {
        obj = {};
        obj[keys] = action;
        keys = obj;
    }

    for (var p in keys) {
        if (keys.hasOwnProperty(p)) {
            key(p, function() {
                action();
                return false;
            });
        }
    }
};

$(function() {
    iwage.key('ctrl+o', iwage.file.open);
    iwage.key('ctrl+s', iwage.file.save);

    iwage.key('ctrl+z', iwage.history.undo);
    iwage.key('ctrl+shift+z', iwage.history.redo);

    iwage.key('ctrl+c', iwage.file.copy);
    iwage.key('ctrl+v', iwage.file.paste);

    iwage.key('del', function() {
        try {
            iwage().removeActive();
        } catch(e) {
        }
    });

    iwage.key('esc', iwage.cancel);
});
iwage.transition = {

};

(function (transition) {
    function Quadratic(from, to, min, max) {
        this.from = from;
        this.to = to;
        this.min = min;
        this.max = max;
    }

    Quadratic.prototype.get = function (value) {
        value = value / this.to;

        return Math.pow(value, 2) * this.max + this.min;
    };

    function Cubic(from, to, min, max) {
        this.from = from;
        this.to = to;
        this.min = min;
        this.max = max;
    }

    Cubic.prototype.get = function (value) {
        value = value / this.to;

        return Math.pow(value, 3) * this.max + this.min;
    };

    function Exponencial(from, to, min, max) {
        this.from = from;
        this.to = to;
        this.min = min;
        this.max = max;
    }

    Exponencial.prototype.get = function (value) {
        value = value / this.to;

        var p = (value == 0) ? 0 : Math.pow(2, 10 * (value - 1));

        return p * this.max + this.min;
    };

    function ExponencialOut(from, to, min, max) {
        this.from = from;
        this.to = to;
        this.min = min;
        this.max = max;
    }

    ExponencialOut.prototype.get = function (value) {
        value = value / this.to;

        var p = (value == 1) ? 1 : -Math.pow(2, -10 * value) + 1;

        return p * this.max + this.min;
    };

    function QuadraticOut(from, to, min, max) {
        this.from = from;
        this.to = to;
        this.min = min;
        this.max = max;
    }

    QuadraticOut.prototype.get = function (value) {
        value = value / this.to;

        var p = -(Math.pow((value - 1), 2) - 1)

        return p * this.max + this.min;
    };


    transition.Quadratic = function (from, to, min, max) {
        return new Quadratic(from, to, min, max);
    };

    transition.Cubic = function (from, to, min, max) {
        return new Cubic(from, to, min, max);
    };

    transition.Exponencial = function (from, to, min, max) {
        return new Exponencial(from, to, min, max);
    };

    transition.QuadraticOut = function (from, to, min, max) {
        return new QuadraticOut(from, to, min, max);
    };

    transition.ExponencialOut = function (from, to, min, max) {
        return new ExponencialOut(from, to, min, max);
    };

})(iwage.transition);
Ext.ns('iwage.view.menu');

iwage.view.menu.setMode = function(mode) {
    Ext.getCmp('menu').items.each(function(current) {
        if (!current.mode || current.mode == mode) {
            current.show();
        } else {
            current.hide();
        }
    });
};

iwage.view.menu.create = function() {
    var menu = {
        xtype: 'toolbar',
        id: 'menu',
        items: []
    };

    iwage.eachMode(function(mode) {
        if (mode.view && mode.view.menu && mode.view.menu.create) {
            menu.items = menu.items.concat(
                mode.view.menu.create()
            );
        }
    });

    menu.items = menu.items.concat([
        '->',
        {
            text: 'Editor de graficos',
            icon: iwage.icon('palette'),
            disabled: iwage.getMode() == iwage.MODES.FABRIC,
            handler: function() {
                iwage.setMode(iwage.MODES.FABRIC);
            },
            listeners: iwage.util.listenersForMode('disable', 'enable')
        },
        '-',
        {
            text: 'Editor de imagenes',
            icon: iwage.icon('photo'),
            disabled: iwage.getMode() == iwage.MODES.IMAGE,
            handler: function() {
                iwage.setMode(iwage.MODES.IMAGE);
            },
            listeners: iwage.util.listenersForMode('enable', 'disable')
        }
    ]);

    menu.listeners = {
        afterrender: function(self) {
            iwage.view.menu.setMode(iwage.getMode());
        }
    };

    iwage.on('app:mode', function(mode) {
        iwage.view.menu.setMode(iwage.getMode());
    });

    return menu;
};
Ext.ns('iwage.view.statusbar');

iwage.view.statusbar.create = function() {
    if (iwage.view.statusbar.instance) {
        return iwage.view.statusbar.instance;
    }

    iwage.view.statusbar.instance = Ext.create('Ext.toolbar.Toolbar', {
        border: false,
        hidden: true
    });

    return iwage.view.statusbar.instance;
};

iwage.view.statusbar.setMessage = function(message) {
    var toolbar = iwage.view.statusbar.instance;

    if (!toolbar) {
        return;
    }

    toolbar.show();
    toolbar.removeAll();
    toolbar.add('->');
    toolbar.add(message);
};

iwage.view.statusbar.hide = function() {
    var toolbar = iwage.view.statusbar.instance;

    if (!toolbar) {
        return;
    }

    toolbar.hide();
};
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
Ext.ns('iwage.tools');

iwage.tools.BUTTON = {
    CANCEL: {
        text: 'Cancelar',
        icon: iwage.icon('delete_cross'),
        handler: function() {
            this.destroy();
        }
    },
    APPLY: {
        text: 'Aplicar',
        icon: iwage.icon('tick'),
        handler: function() {
            this.applyTool();
        }
    }
};

Ext.define('iwage.tools.Common', {
    unique: true,
    buttons: [
        iwage.tools.BUTTON.APPLY,
        iwage.tools.BUTTON.CANCEL
    ],
    createControls: function() {
        throw 'Unimplemented method: createControls';
    },
    use: function(options) {
        this.renderComponent();

        iwage.ev.one('app:cancel', function() {
            this.destroy();
        }, this);
    },
    refresh: function(options) {
        throw 'Unimplemented method: refresh';
    },
    applyTool: function() {
        throw 'Unimplemented method: applyTool';
    },
    hide: function() {
        try {
            if (this.component && this.component.hide) {
                this.component.hide();
            }
        } catch(e) {
            iwage.error(e);
        }
    },
    show: function() {
        try {
            if (this.component && this.component.show) {
                this.component.show();
            }
        } catch(e) {
            iwage.error(e);
        }
    },
    renderComponent: function() {
        this.getComponent();
        this.show();
    },
    createCanvas: function() {
        return iwage.file.createCanvas();
    },
    getComponent: function() {
        var
            self = this,
            controls = this.createControls();

        if (this.component) {
            return this.component;
        }

        var buttons = self.buttons;

        // Forzamos el scope del button al tool
        Ext.each(buttons, function(current, index, total) {
            current.scope = self;
        });

        this.component = Ext.create('Ext.window.Window', {
            title: this.toolLabel || '',
            resizable: false,
            closable: false,
            y: self.top || undefined,
            x: self.left || undefined,
            width: this.componentWidth || 300,
            items: {
                xtype: 'form',
                padding: controls ? 10 : 0,
                defaults: {
                    padding: controls ? 5 : 0,
                    listeners: {
                        // Listener para todos los campos
                        change: function(field, value) {
                            self.refresh();
                        }
                    },
                    width: 350
                },
                items: controls
            },
            buttons: buttons
        });

        return this.component;
    },
    destroy: function() {
        try {
            this.component.hide();
            this.component.destroy();
        } catch(e) {
        }

        this.callParent(arguments);
    },
    /**
     *
     * @return {Object} Values map
     */
    getValues: function() {
        var map = {};

        if (!this.component) {
            return null;
        }

        this.component.down('form').items.each(function(field, index, total) {
            map[field.itemId] = field.getValue();
        });

        return map;
    }
});
Ext.ns('iwage.tools');

Ext.define('iwage.tools.Static', {
    extend: 'iwage.tools.Common',
    persist: true,
    getComponent: function () {
        var self = this, buttons;

        if (this.component) {
            return this.component;
        }

        buttons = this.buttons || []


        // Forzamos el scope del button al tool
        Ext.each(buttons, function (current, index, total) {
            current.scope = self;
        });


        this.component = Ext.create('Ext.panel.Panel', {
            title: this.toolLabel || '',
            resizable: false,
            closable: false,
            width: this.componentWidth || 285,
            border: false,
            margin: '1 0 0 0',
            items: [
                {
                    xtype: 'form',
                    padding: 10,
                    border: false,
                    defaults: {
                        labelWidth: 0,
                        padding: 5,
                        listeners: this.getDefaultListeners && this.getDefaultListeners() || {},
                        width: 250
                    },
                    items: this.createControls()
                }
            ],
            buttons: buttons
        });
        return this.component;
    }
});
Ext.ns('iwage.tools');

Ext.define('iwage.tools.Open', {
    extend: 'iwage.tools.Common',
    unique: true,
    persist: false,
    toolLabel: 'Abrir archivo',
    componentWidth: 500,
    use: function(options) {
        var self = this;

        Ext.Ajax.request({
            url: this.proxy || iwage.options.galleryProxy,
            success: function(response) {
                var json = Ext.JSON.decode(response.responseText);

                if (json && json.success) {
                    self.images = json.images;
                }

                self.renderComponent();
                self.initEvents();
            }
        });
    },
    createControls: function() {
        var list = '<ul>';

        Ext.each(this.images, function(current, index, total) {
            list += '<li><img src="' + current + '" width="52" height="52"/></li>'
        });

        list += '</ul>';

        return [
            {
                xtype: 'container',
                height: 300,
                width: '100%',
                style: 'overflow: auto; margin-bottom: 10px',
                html: '<div class="file-preview">' + list + '<div style="clear: both"></div></div>'
            },
            {
                xtype: 'container',
                height: 40,
                width: '100%',
                html: '<div style="text-align: center;"><input type="file" id="fileLoader" multiple="false" accept="image/*" onchange="iwage.file.handle(this.files)"></div>'
            }
        ]
    },
    refresh: function(options) {
    },
    applyTool: function(imagePath) {
        iwage.file.openUrl(imagePath);
        this.destroy();
    },
    initEvents: function() {
        var self = this;

        $(self.component.el.dom).on('click', 'li', function(ev) {
            self.applyTool($(this).find('img').attr('src'));
            self.destroy();
        });

        iwage.on(['file:handled', 'app:cancel'], function() {
            self.destroy();
        });
    },
    destroy: function() {
        var self = this;

        // remover el delegate de la lista
        $(self.component.el.dom).off('click');

        this.callParent(arguments);
    }
});
/*
 * fabricMode iwage.mode(iwage.MODES.FABRIC)
 */

(function(fabricMode) {
    /**
     * @param {Object} options
     */
    fabricMode.start = function(options) {
        fabricMode.loadFonts();

        setTimeout(function() {
            fabricMode.initTopo(options);
            fabricMode.start = function() {
            };
        });

    };

    fabricMode.eventsStopped = false;

    fabricMode.stopEvents = function() {
        fabricMode.eventsStopped = true;
    };

    fabricMode.resumeEvents = function() {
        fabricMode.eventsStopped = false;
    };

    /**
     *
     * @param options
     */
    fabricMode.initTopo = function(options) {
        var topoInstance = new topo.Editor({
            element: 'fabric',
            width: options.fabricWidth,
            height: options.fabricHeight
        });

        topoInstance.on('selected:none', function() {
            if (!fabricMode.eventsStopped) {
                iwage.emit('app:fabric:selected:none');
            }
        });

        topoInstance.on('selected', function(object) {
            if (!fabricMode.eventsStopped) {
                iwage.emit('app:fabric:selected', object);
            }
        });

        fabricMode.topo = topoInstance;

        fabricMode.initEvents();
    };

    fabricMode.clear = function() {
        var canvas = iwage(iwage.MODES.FABRIC).topo.canvas;

        var obj;
        while (obj = canvas.item(0)) {
            canvas.remove(obj);
        }
    };

    fabricMode.loadFonts = function() {
        fabricMode.findFonts(function(data) {
            var
                base = '/asset/font/file/',
                toRequest = data.length,
                requested = 0;

            function ready() {
                requested++;

                iwage.view.statusbar.setMessage(
                    'Cagando fuentes ' + Math.floor(requested / toRequest * 100) + '%'
                );

                if (toRequest == requested) {
                    iwage.view.statusbar.hide();
                }
            }

            Ext.each(data, function(current, index, total) {
                Ext.Loader.loadScriptFile(
                    base + current.file,
                    ready,
                    ready
                );
            });
        });
    };

    fabricMode.findFonts = function(callback) {
        Ext.Ajax.request({
            url: '/system/finder/findInModel/fontset/all/',
            success: function(response) {
                var data;

                try {
                    data = Ext.decode(response.responseText);
                } catch(e) {
                }

                if (data) {
                    callback(data.data);
                }
            }
        });
    };

    fabricMode.initEvents = function() {

        iwage.on('app:fabric:selected:none', function() {
            fabricMode.onObjectUnselected();
        });

        iwage.on('app:fabric:selected', function(object) {
            fabricMode.onObjectSelected(object);
        });

        iwage.on('app:mode', function(mode) {
            fabricMode.topo.refresh();
        });

        $('#fabric-parent').click(function() {
            fabricMode.topo.refresh();

        });
    };

    /**
     * Deshabilita todas las herramientas estaticas
     */
    fabricMode.onObjectUnselected = function() {
        Ext.each(iwage.tools.active, function(tool, index, all) {
            if (tool.onObjectUnselected) {
                tool.onObjectUnselected();
                return;
            }
        });
    };

    fabricMode.onObjectSelected = function(object) {
        Ext.each(iwage.tools.active, function(tool, index, all) {
            if (!tool.onObjectSelected) {
                return;
            }

            var items = tool.getComponent().items;

            if (!items) {
                if (tool.getComponent().$className == 'Ext.button.Button') {
                    tool.onObjectSelected(null, null, object)
                }
                return;
            }

            items.each(function(field, index) {
                if (field.itemId) {
                    tool.onObjectSelected(field, field.itemId, object);
                } else {
                    // soporte a composite fields
                    field.items.each(function(current, index, total) {
                        if (current.itemId) {
                            tool.onObjectSelected(current, current.itemId, object);
                        }
                    });
                }
            });
        });

        if (object.type == 'text') {
            fabricMode.onTextObjectSelected(object);
        }
    };

    /**
     *
     * @param {Object} object
     */
    fabricMode.onTextObjectSelected = function(object) {
        var control;

        iwage.tools.clearByType('fabricMode.tools.Text');

        control = iwage.tools.launch('Text', {
            text: object
        });

        fabricMode.stopEvents();
        fabricMode.topo.setActiveObject(object);
        fabricMode.resumeEvents();

        control.setValues();
    };

    fabricMode.addLine = function() {
        fabricMode.topo.shape('Line');
    };

    fabricMode.addRect = function() {
        fabricMode.topo.shape('Rect');
    };

    fabricMode.addCircle = function() {
        fabricMode.topo.shape('Circle');
    };

    fabricMode.addTriangle = function() {
        fabricMode.topo.shape('Triangle');
    };

    fabricMode.removeActive = function() {
        fabricMode.topo.removeActive();
    };

    fabricMode.preview = function() {
        // Abrir una ventana al home
        var w = window.open('/', iwage.uid('_preview'));

        // Modificar el logo
        $(w).load(function() {
            $('.webbie-logo', w.document).attr(
                'src', fabricMode.topo.toDataURI()
            );
            w.focus();
        });
    };

    fabricMode.install = function() {
        var uri = fabricMode.topo.toDataURI();

        Ext.Ajax.request({
            url:'/webbie_image/install_logo/',
            params: {
                uri: uri
            },
            success: function(response) {
                iwage.alert('Logo instalado!');
            }
        });
    };
})(iwage.mode(iwage.MODES.FABRIC));
/*
 * fabricMode iwage.mode(iwage.MODES.FABRIC)
 */

(function(fabricMode) {
    /**
     * @param {Object} options
     */
    fabricMode.start = function(options) {
        fabricMode.loadFonts();

        setTimeout(function() {
            fabricMode.initTopo(options);
            fabricMode.start = function() {
            };
        });

    };

    fabricMode.eventsStopped = false;

    fabricMode.stopEvents = function() {
        fabricMode.eventsStopped = true;
    };

    fabricMode.resumeEvents = function() {
        fabricMode.eventsStopped = false;
    };

    /**
     *
     * @param options
     */
    fabricMode.initTopo = function(options) {
        var topoInstance = new topo.Editor({
            element: 'fabric',
            width: options.fabricWidth,
            height: options.fabricHeight
        });

        topoInstance.on('selected:none', function() {
            if (!fabricMode.eventsStopped) {
                iwage.emit('app:fabric:selected:none');
            }
        });

        topoInstance.on('selected', function(object) {
            if (!fabricMode.eventsStopped) {
                iwage.emit('app:fabric:selected', object);
            }
        });

        fabricMode.topo = topoInstance;

        fabricMode.initEvents();
    };

    fabricMode.clear = function() {
        var canvas = iwage(iwage.MODES.FABRIC).topo.canvas;

        var obj;
        while (obj = canvas.item(0)) {
            canvas.remove(obj);
        }
    };

    fabricMode.loadFonts = function() {
        fabricMode.findFonts(function(data) {
            var
                base = '/asset/font/file/',
                toRequest = data.length,
                requested = 0;

            function ready() {
                requested++;

                iwage.view.statusbar.setMessage(
                    'Cagando fuentes ' + Math.floor(requested / toRequest * 100) + '%'
                );

                if (toRequest == requested) {
                    iwage.view.statusbar.hide();
                }
            }

            Ext.each(data, function(current, index, total) {
                Ext.Loader.loadScriptFile(
                    base + current.file,
                    ready,
                    ready
                );
            });
        });
    };

    fabricMode.findFonts = function(callback) {
        Ext.Ajax.request({
            url: '/system/finder/findInModel/fontset/all/',
            success: function(response) {
                var data;

                try {
                    data = Ext.decode(response.responseText);
                } catch(e) {
                }

                if (data) {
                    callback(data.data);
                }
            }
        });
    };

    fabricMode.initEvents = function() {

        iwage.on('app:fabric:selected:none', function() {
            fabricMode.onObjectUnselected();
        });

        iwage.on('app:fabric:selected', function(object) {
            fabricMode.onObjectSelected(object);
        });

        iwage.on('app:mode', function(mode) {
            fabricMode.topo.refresh();
        });

        $('#fabric-parent').click(function() {
            fabricMode.topo.refresh();

        });
    };

    /**
     * Deshabilita todas las herramientas estaticas
     */
    fabricMode.onObjectUnselected = function() {
        Ext.each(iwage.tools.active, function(tool, index, all) {
            if (tool.onObjectUnselected) {
                tool.onObjectUnselected();
                return;
            }
        });
    };

    fabricMode.onObjectSelected = function(object) {
        Ext.each(iwage.tools.active, function(tool, index, all) {
            if (!tool.onObjectSelected) {
                return;
            }

            var items = tool.getComponent().items;

            if (!items) {
                if (tool.getComponent().$className == 'Ext.button.Button') {
                    tool.onObjectSelected(null, null, object)
                }
                return;
            }

            items.each(function(field, index) {
                if (field.itemId) {
                    tool.onObjectSelected(field, field.itemId, object);
                } else {
                    // soporte a composite fields
                    field.items.each(function(current, index, total) {
                        if (current.itemId) {
                            tool.onObjectSelected(current, current.itemId, object);
                        }
                    });
                }
            });
        });

        if (object.type == 'text') {
            fabricMode.onTextObjectSelected(object);
        }
    };

    /**
     *
     * @param {Object} object
     */
    fabricMode.onTextObjectSelected = function(object) {
        var control;

        iwage.tools.clearByType('fabricMode.tools.Text');

        control = iwage.tools.launch('Text', {
            text: object
        });

        fabricMode.stopEvents();
        fabricMode.topo.setActiveObject(object);
        fabricMode.resumeEvents();

        control.setValues();
    };

    fabricMode.addLine = function() {
        fabricMode.topo.shape('Line');
    };

    fabricMode.addRect = function() {
        fabricMode.topo.shape('Rect');
    };

    fabricMode.addCircle = function() {
        fabricMode.topo.shape('Circle');
    };

    fabricMode.addTriangle = function() {
        fabricMode.topo.shape('Triangle');
    };

    fabricMode.removeActive = function() {
        fabricMode.topo.removeActive();
    };

    fabricMode.preview = function() {
        // Abrir una ventana al home
        var w = window.open('/', iwage.uid('_preview'));

        // Modificar el logo
        $(w).load(function() {
            $('.webbie-logo', w.document).attr(
                'src', fabricMode.topo.toDataURI()
            );
            w.focus();
        });
    };

    fabricMode.install = function() {
        var uri = fabricMode.topo.toDataURI();

        Ext.Ajax.request({
            url:'/webbie_image/install_logo/',
            params: {
                uri: uri
            },
            success: function(response) {
                iwage.alert('Logo instalado!');
            }
        });
    };
})(iwage.mode(iwage.MODES.FABRIC));
iwage.mode(iwage.MODES.FABRIC).file = {
    handle: function(dataUri) {
        iwage.fabric.topo.imageFromDataUri(dataUri);

        Ext.each(iwage.tools.active, function(current, index, total) {
            if (current.$className == 'iwage.tools.fabric.Image') {
                current.destroy();
            }
        });
    },
    load: function(json) {
        iwage.fabric.topo.open(json);
    },
    save: function() {
        var file = iwage(iwage.MODES.FABRIC).file;

        Ext.Msg.prompt('Guardar', 'Nombre del archivo:', function(btn, text) {
            if (btn == 'ok') {
                file.verifySaveName(text, function(json) {
                    if (json.valid === false) {
                        Ext.Msg.show({
                            title:'Atencion',
                            msg: 'Ya existe un archivo con el mismo nombre. Desea reemplazarlo?',
                            buttons: Ext.Msg.YESNO,
                            icon: Ext.Msg.QUESTION,
                            fn: function(btn) {
                                if (btn == 'yes') {
                                    file.doSave(text);
                                }
                            }
                        });
                    } else {
                        file.doSave(text);
                    }
                });
            }
        }, null, false, file.actualName);
    },
    verifySaveName: function(name, callback) {
        Ext.Ajax.request({
            url: iwage.options.fabricVerifyName,
            params: {
                name: name
            },
            success: function(response) {
                var
                    data = response.responseText,
                    json;

                try {
                    json = Ext.JSON.decode(data);
                } catch(e) {
                    iwage.error(e);
                }

                (callback || function() {
                })(json, data);
            }
        });
    },
    doSave: function(name) {
        var
            serialized,
            uri,
            topo = iwage().topo,
            file = iwage().file;

        uri = topo.toDataURI();
        serialized = topo.serialize();

        Ext.Ajax.request({
            url: iwage.options.fabricSaveProxy,
            params: {
                name: name,
                uri: uri,
                serialized: JSON.stringify(serialized),
                width: topo.canvas.getWidth(),
                height: topo.canvas.getHeight()
            },
            success: function(response) {
                file.actualName = name;
                (callback || function() {
                })();
            }
        });
    },
    open: function() {
        iwage.tools.launch('Open');
    },
    getDataUri: function() {
        return iwage().topo.toDataURI();
    },
    copy: function() {
        iwage().topo.copyActive();
    },
    paste: function() {
        iwage().topo.paste();
    }
};
iwage.mode(iwage.MODES.FABRIC).history = {

};
iwage.mode(iwage.MODES.FABRIC).view = {
    getHTML: function() {
        return '<div class="result-container"><div id="fabric-parent"><canvas id="fabric"></canvas></div></div>';
    }
};
iwage(iwage.MODES.FABRIC).view.menu = {
    createFileMenu: function() {
        return {
            text: 'Archivo',
            menu: {
                items: [
                    {
                        text: 'Abrir <span class="shortcut">(ctrl + o)</span>',
                        icon: iwage.icon('open'),
                        handler: iwage.file.open
                    },
                    {
                        text: 'Guardar <span class="shortcut">(ctrl + s)</span>',
                        icon: iwage.icon('save'),
                        handler: iwage.file.save
                    },
                    '-',
                    {
                        text: 'Previsualizar',
                        icon: iwage.icon('preview'),
                        handler: function() {
                            iwage(iwage.MODES.FABRIC).preview();
                        }
                    },
                    {
                        text: 'Instalar',
                        icon: iwage.icon('tick'),
                        handler: function() {
                            iwage(iwage.MODES.FABRIC).install();
                        }
                    },
                    {
                        text: 'Descargar',
                        icon: iwage.icon('download'),
                        handler: function() {
                            iwage.file.viewAsImage();
                        }
                    }
                ]
            }
        };
    },
    createEditMenu: function() {
        return {
            text: 'Editar',
            menu: {
                items:[
                    {
                        icon: iwage.icon('undo'),
                        text: 'Deshacer <span class="shortcut">(ctrl + z)</span>',
                        handler: iwage.history.undo
                    },
                    {
                        icon: iwage.icon('redo'),
                        text: 'Rehacer <span class="shortcut">(ctrl + shift + z)</span>',
                        handler: iwage.history.redo
                    },
                    '-',
                    {
                        text: 'Volver al original',
                        icon: iwage.icon('bin'),
                        handler: iwage.history.backToOriginal
                    },
                    {
                        icon: iwage.icon('copy'),
                        text: 'Copiar objeto <span class="shortcut">(ctrl + v)</span>',
                        handler: iwage.fabric.copy
                    },
                    {
                        icon: iwage.icon('paste'),
                        text: 'Pegar <span class="shortcut">(ctrl + c)</span>',
                        handler: iwage.fabric.paste
                    },
                    {
                        icon: iwage.icon('delete_cross'),
                        text: 'Eliminar objeto <span class="shortcut">(supr)</span>',
                        handler: iwage.fabric.removeActive
                    },
                    '-',
                    {
                        icon: iwage.icon('margins'),
                        text: 'Configurar tama&ntilde;o del lienzo',
                        handler: iwage.tools.launcher('Configuration')
                    }

                ]
            }
        }
    },
    create: function() {
        var menu, self;

        self = iwage(iwage.MODES.FABRIC).view.menu;

        menu = [];

        menu.push(self.createFileMenu());

        menu.push(self.createEditMenu());

        Ext.each(menu, function(current) {
            current.mode = iwage.MODES.FABRIC;
        });

        return menu;
    }
};
Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.Common', {
    extend: 'iwage.tools.Common',
    persist: true,
    mode: iwage.MODES.FABRIC
});
Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.Static', {
    extend: 'iwage.tools.Static',
    mode: iwage.MODES.FABRIC,
    refresh: function(itemId, value) {
        if (!itemId) {
            return;
        }

        try {
            if (itemId != 'angle') {
                iwage(iwage.MODES.FABRIC).topo.getActive().set(itemId, value);
            } else {
                iwage(iwage.MODES.FABRIC).topo.getActive().setAngle(value);
            }
            iwage(iwage.MODES.FABRIC).topo.refresh();
        } catch(e) {
            iwage.log(e);
        }
    },
    onObjectSelected: function(field, itemId, fabricObject) {
        if (!fabricObject || !field || !itemId) {
            return;
        }

        switch (fabricObject.type) {
            case 'rect':
            case 'triangle':
            case 'circle':
                field.enable();
                break;
            // Las lineas no tienen color de relleno
            case 'line':
                if (itemId != 'stroke') {
                    field.enable();
                }
                break;
            case 'image':
                if (['angle', 'top', 'left', 'opacity'].indexOf(itemId) != -1) {
                    field.enable();
                }
                break;
            case 'path':
            case 'path-group':
                if (itemId == 'fill' && fabricObject.isSameColor && fabricObject.isSameColor()) {
                    field.enable();
                }
                if (['angle', 'top', 'left', 'opacity'].indexOf(itemId) != -1) {
                    field.enable();
                }
                break;
            case 'text':
                if (['angle', 'top', 'left', 'opacity', 'fill'].indexOf(itemId) != -1) {
                    field.enable();
                }
                break;
        }

        // Evitar eventos
        field.suspendEvents();

        switch (itemId) {
            case 'zpos':
                field.enable();
                break;
            case 'opacity':
                field.setValue(
                    fabricObject.get(itemId) * 100
                );
                break;
            default:
                field.setValue && field.setValue(
                    fabricObject.get(field.itemId)
                );
        }

        field.resumeEvents();
    },
    onObjectUnselected: function() {
        var items = this.getComponent().items;

        if (!items) {
            return;
        }

        items.each(function(field, index) {
            if (field.itemId) {
                field.disable();
            } else {
                // soporte a composite fields
                field.items.each(function(current, index, total) {
                    if (current.itemId) {
                        current.disable();
                    }
                });
            }

        });
    },
    getDefaultListeners: function() {
        var self = this;

        return {
            change: function(field, value) {
                if (field.itemId == 'opacity') {
                    value = value / 100;
                }

                self.refresh(field.itemId, value);
            }
        }
    }
});
Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.Open', {
    extend: 'iwage.tools.Open',
    toolLabel: 'Abrir',
    use: function(options) {
        var self = this;

        Ext.Ajax.request({
            url: this.proxy || iwage.options.fabricProxy,
            success: function(response) {
                var json = Ext.JSON.decode(response.responseText);

                if (json && json.data) {
                    self.getComponent().loadList(json.data);
                }

                self.renderComponent();
                self.initEvents();
            }
        });
    },
    getComponent: function() {
        var openTool = this;

        if (this.component) {
            return this.component;
        }

        this.component = Ext.create('Ext.window.Window', {
            draggable: false,
            resizable: false,
            title: openTool.toolLabel,
            layout: 'hbox',
            width: 600,
            loadList: function(list) {
                list = list || [];

                this.list = list;

                var listCmp = this.down('#list');

                list.forEach(function(e) {
                    listCmp.add({
                        xtype: 'panel',
                        overCls: 'hover-active',
                        border: false,
                        padding: 5,
                        html: iwage('<div data-id="{id}">{name}</div>').tpl({
                            id: e.idLogoSave,
                            name: e.name
                        })
                    });
                });

                this.enable();
            },
            activeTpl: '<div class="logo_open">' +
                '<div class="field"><label>Archivo: </label><span>{name} ({w}x{h})</span></div>' +
                '<div class="preview"><div class="img-ct">{img}</div></div>' +
                '<div class="field last">Ultima fecha de modificaci&oacute;n: <span>{date}</span></div>' +
                '</div>',
            setActive: function(id) {
                var rec, preview = this.down('#preview');

                if (!preview) {
                    return;
                }

                preview.removeAll();

                if (!this.list) {
                    return;
                }

                rec = this.list.filter(function(e) {
                    return e.idLogoSave == id
                })[0];

                if (!rec) {
                    return;
                }

                this.active = rec;

                preview.add({
                    xtype: 'container',
                    padding: 10,
                    html: iwage(this.activeTpl).tpl({
                        name: rec.name,
                        date: rec.date,
                        w: rec.width,
                        h: rec.height,
                        img: iwage('<img src="{base}asset/logo_save/preview/{file}" alt="">').tpl({
                            base: '/',
                            file: rec.preview + '.png' + '?' + Math.random()
                        })
                    })
                });
            },
            buttons: [
                {
                    xtype: 'button',
                    text: 'Abrir',
                    icon: iwage.icon('tick'),
                    handler: function(self) {
                        var opener = openTool.getComponent();

                        var active = opener.active;

                        if (!active) {
                            return;
                        }

                        iwage.file.load(active.serialized);

                        openTool.destroy();
                    }
                },
                {
                    xtype: 'button',
                    text: 'Cancelar',
                    icon: iwage.icon('delete_cross'),
                    handler: function(self) {
                        try {
                            openTool.destroy();
                        } catch(e) {
                        }
                    }
                }
            ],
            items: [
                {
                    xtype: 'panel',
                    title: 'Archivo',
                    itemId: 'list',
                    width: 200,
                    height: 400,
                    listeners: {
                        afterrender: function(self) {
                            self.getEl().on('click', function(ev, target, opts) {
                                var id;

                                try {
                                    id = Ext.Element.get(target).getAttribute('data-id');
                                } catch(e) {
                                }

                                if (id) {
                                    openTool.getComponent().setActive(id);
                                }

                            }) // ev, target, opts
                        }
                    }
                },
                {
                    xtype: 'panel',
                    itemId: 'preview',
                    title: 'Vista previa',
                    width: 390,
                    height: 400
                }
            ]
        });

        return this.component;
    }
});
Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.Text', {
    extend: 'iwage.fabric.tools.Common',
    persist: false,
    toolLabel: 'Texto',
    top: 30,
    left: 30,
    use: function () {
        if (this.text) {
            this.buttons = [];
        }

        return this.callParent(arguments);
    },
    createControls: function () {
        return [
            {
                xtype: 'textarea',
                itemId: 'text',
                fieldLabel: 'Texto',
                emptyText: 'Escriba aqui'
            },
            Ext.create('webbie.ux.cufonpicker.CufonPickerField', {
                hideTopBar: true,
                itemId: 'fontFamily',
                fieldLabel: 'Tipografia',
                emptyText: 'Seleccione la tipografia',
                listeners: {
                    // Hack para generar el evento de refresh
                    change: function (self) {
                        var text = self.up('form').down('#text');

                        text.fireEvent('change', this, text.getValue());
                    }
                }
            })
        ];
    },
    refresh: function () {
        if (this.text) {
            this.applyTool();
        }
    },
    applyTool: function () {
        var values = this.getValues();

        var text = values.text;
        var fontFamily = values.fontFamily;
        if (!text || !fontFamily) {
            return;
        }

        if (this.text) {
            this.text.set({
                text: text,
                fontFamily: fontFamily
            });

            iwage(iwage.MODES.FABRIC).topo.refresh();
        } else {
            this.text = iwage(iwage.MODES.FABRIC).topo.text(text, {
                fontFamily: fontFamily
            });
        }
    },
    setValues: function () {
        var cmp = this.getComponent();

        cmp.down('#text').setValue(this.text.get('text'));
        cmp.down('#fontFamily').setValue(this.text.get('fontFamily'));
    },
    onObjectUnselected: function () {
        this.destroy();
    }
});
Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.Image', {
    extend: 'iwage.tools.Open',
    toolLabel: 'Imagen',
    applyTool: function(imagePath) {
        iwage(iwage.MODES.FABRIC).topo.image(imagePath);
    }
});
Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.Svg', {
    extend: 'iwage.tools.Open',
    toolLabel: 'SVG',
    use: function(options) {
        this.proxy = iwage.options.svgProxy;
        this.callParent(arguments);
    },
    createControls: function() {
        var list = '<ul>';

        Ext.each(this.images, function(current, index, total) {
            list += '<li><img src="' + current + '" width="52" height="52"/></li>'
        });

        list += '</ul>';

        return [
            {
                xtype: 'container',
                height: 300,
                width: '100%',
                style: 'overflow: auto; margin-bottom: 10px',
                html: '<div class="file-preview">' + list + '<div style="clear: both"></div></div>'
            }
        ]
    },
    buttons: [
        {
            text: 'Subir archivos',
            handler: function() {
                window.open("/system/admin/svg/add.html", '_blank');
            }
        },
        iwage.tools.BUTTON.CANCEL
    ],
    applyTool: function(svgPath) {
        try {
            iwage(iwage.MODES.FABRIC).topo.svg(/imagen\/(.+)?\./.exec(svgPath)[1]);
        } catch(e) {
        }

        this.destroy();
    }
});
Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.EditImage', {
    extend: 'iwage.fabric.tools.Static',
    refresh: function(itemId, value) {

    },
    getComponent: function() {
        var tool = this;

        if (this.component) {
            return this.component;
        }

        this.component = Ext.create('Ext.button.Button', {
            text: 'Editar en Editor de imagenes',
            icon: iwage.icon('photo'),
            disabled: true,
            margin: 5,
            width: 260,
            handler: function() {
                tool.editSelection();
            }
        });

        return this.component;
    },
    onModeChanged: function(mode) {
        if (mode != iwage.MODES.FABRIC) {
            this.hide();
            return;
        }

        if (iwage.get('editing_image_as_fabric')) {
            this.hide();
            return;
        }

        this.show();
    },
    onObjectSelected: function(field, itemId, fabricObject) {
        if (fabricObject.type == 'image') {
            this.getComponent().enable();
        } else {
            this.getComponent().disable();
        }
    },
    onObjectUnselected: function() {
        this.getComponent().disable();
    },
    editSelection: function() {
        // TODO mover
        var active = iwage(iwage.MODES.FABRIC).topo.getActive();

        if (!active) {
            return;
        }

        iwage.set('editing_fabric_as_image', true);

        active.clone(function(clone) {
            iwage(iwage.MODES.FABRIC).imageHolder = clone;

            active.set('angle', 0);

            active.toDataURL(function(dataUri) {
                iwage.setMode(iwage.MODES.IMAGE);
                iwage.file.set(dataUri);
                iwage(iwage.MODES.FABRIC).topo.remove(active);
            });
        });
    }
});
Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.ImageEditionReady', {
    extend: 'iwage.fabric.tools.Static',
    refresh: function(itemId, value) {

    },
    getComponent: function() {
        var tool = this;

        if (this.component) {
            return this.component;
        }

        this.component = Ext.create('Ext.button.Button', {
            text: 'Aplicar cambios',
            icon: iwage.icon('tick'),
            margin: 5,
            hidden: true,
            width: 260,
            handler: function() {
                tool.applyTool();
            }
        });

        return this.component;
    },
    onModeChanged: function(mode) {
        if (mode == iwage.MODES.IMAGE) {
            this.hide();
            return;
        }
        if (!iwage.get('editing_image_as_fabric')) {
            this.hide();
            return;
        }

        this.show();
    },
    applyTool: function() {
        iwage(iwage.MODES.IMAGE).file.set(
            iwage().file.getDataUri()
        );

        iwage.unset('editing_image_as_fabric')

        iwage.setMode(iwage.MODES.IMAGE);
    }
});
Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.Position', {
    extend: 'iwage.fabric.tools.Static',
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
                        icon: iwage.icon('bring_front'),
                        handler:   function() {
                            iwage(iwage.MODES.FABRIC).topo.toFront();
                        }
                    },
                    {
                        xtype: 'button',
                        itemId: 'toBack',
                        margin: 2,
                        text: 'Enviar al fondo',
                        icon: iwage.icon('send_back'),
                        handler:  function() {
                            iwage(iwage.MODES.FABRIC).topo.toBack();
                        }
                    }
                ]
            }
        ];
    },
    applyTool: function() {

    }
});
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
Ext.ns('iwage.fabric.tools');

Ext.define('iwage.fabric.tools.Configuration', {
    unique: true,
    persist: false,
    extend: 'iwage.fabric.tools.Common',
    toolLabel: 'Configurar lienzo',
    createControls: function() {
        return [
            {
                xtype: 'numberfield',
                itemId: 'height',
                value:  iwage(iwage.MODES.FABRIC).topo.getHeight(),
                fieldLabel: 'Alto',
                minValue: 0,
                allowDecimals: false,
                allowBlank: false
            },
            {
                xtype: 'numberfield',
                itemId: 'width',
                value:  iwage(iwage.MODES.FABRIC).topo.getWidth(),
                fieldLabel: 'Ancho',
                minValue: 0,
                allowDecimals: false,
                allowBlank: false
            }
        ];
    },
    refresh: function() {
    },
    applyTool: function() {
        var values = this.getValues();

        // TODO mover a iwage.fabric y centrar

        iwage(iwage.MODES.FABRIC).topo.setHeight(values.height);
        iwage(iwage.MODES.FABRIC).topo.setWidth(values.width);

        iwage.view.centerContainer();
    }
});
iwage(iwage.MODES.IMAGE).tools = {
    onClear: function () {
        iwage.file.show();
    }
};

iwage.mode(iwage.MODES.IMAGE).transform = {
    translateVertical: function () {
        iwage(iwage.MODES.IMAGE).file.set(
            iwage(iwage.MODES.IMAGE).utils.translateVertical(
                $('.result').get(0)
            )
        );
    },
    translateHorizontal: function () {
        iwage(iwage.MODES.IMAGE).file.set(
            iwage(iwage.MODES.IMAGE).utils.translateHorizontal(
                $('.result').get(0)
            )
        );
    },
    rotate180: function () {
        iwage(iwage.MODES.IMAGE).file.set(
            iwage(iwage.MODES.IMAGE).utils.rotate180(
                $('.result').get(0)
            )
        );
    },
    rotate90: function () {
        iwage(iwage.MODES.IMAGE).file.set(
            iwage(iwage.MODES.IMAGE).utils.rotate90(
                $('.result').get(0)
            )
        );
    },
    rotateMinus90: function () {
        iwage(iwage.MODES.IMAGE).file.set(
            iwage(iwage.MODES.IMAGE).utils.rotateMinus90(
                $('.result').get(0)
            )
        );
    },
    rotate270: function () {
        iwage(iwage.MODES.IMAGE).file.set(
            iwage(iwage.MODES.IMAGE).utils.rotate270(
                $('.result').get(0)
            )
        );
    },
    reflect: function () {
        iwage(iwage.MODES.IMAGE).file.set(
            iwage(iwage.MODES.IMAGE).utils.reflect(
                $('.result').get(0)
            )
        );
    },
    fillAlpha: function (color) {
        iwage(iwage.MODES.IMAGE).file.set(
            iwage(iwage.MODES.IMAGE).utils.fillAlpha(
                $('.result').get(0),
                color
            )
        );
    }
};

iwage.mode(iwage.MODES.IMAGE).utils = {};

(function (utils) {
    utils.canvas = function (width, height) {
        var canvas = document.createElement('canvas');

        if (width) {
            canvas.width = width;
        }

        if (height) {
            canvas.height = height;
        }

        return canvas;
    };

    utils.getImageFromDataUri = function (dataUri) {
        var image;

        image = new Image;
        image.src = dataUri;

        return image;
    };

    utils.getImageFromImageData = function (imageData) {
        var image, canvas, context;

        canvas = this.canvas(imageData.width, imageData.height);
        context = canvas.getContext('2d');

        context.putImageData(imageData, 0, 0);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };

    utils.getImageData = function (img) {
        var canvas = utils.canvas(img.width, img.height);
        var ctx = canvas.getContext('2d');

        ctx.drawImage(img, 0, 0);

        return ctx.getImageData(0, 0, canvas.width, canvas.height);
    };

    utils.scale = function (img, scale) {
        var canvas, context, result;

        canvas = utils.canvas();
        context = canvas.getContext('2d');

        canvas.height = img.height * scale;
        canvas.width = img.width * scale;

        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };

    utils.roundedCorners = function (img, size) {
        var imageData = utils.getImageData(img);
        var data = imageData.data;

        var w = imageData.width;
        var h = imageData.height;

        if (size * 2 > w || size * 2 > h) {
            size = Math.min(w, h) / 2;
        }

        var smoothValue = size * 2; //Math.ceil(Math.pow(size, 1/2));

        var diff = 0;

        for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
                diff = 0;

                if (y <= size && x <= size) {
                    diff = Math.pow(size - x, 2) + Math.pow(size - y, 2) - Math.pow(size, 2);
                } else if (y <= size && (w - x) <= size) {
                    diff = Math.pow(size - (w - x), 2) + Math.pow(size - y, 2) - Math.pow(size, 2);
                } else if ((h - y) <= size && x <= size) {
                    diff = Math.pow(size - x, 2) + Math.pow(size - (h - y), 2) - Math.pow(size, 2);
                } else if ((h - y) <= size && (w - x) <= size) {
                    diff = Math.pow(size - (w - x), 2) + Math.pow(size - (h - y), 2) - Math.pow(size, 2);
                } else {
                    continue;
                }

                if (diff >= 0 && data[(y * w + x) * 4 + 3] != 0) {
                    data[(y * w + x) * 4 + 3] = 0;

                    if (diff - smoothValue < 0) {
                        data[(y * w + x) * 4 + 3] = -(diff - smoothValue) * 255 / smoothValue;
                    }
                }
            }
        }

        return utils.getImageFromImageData(imageData);
    };

    utils.rotate180 = function (img) {
        var canvas, context, result;

        canvas = utils.canvas();
        context = canvas.getContext('2d');

        canvas.height = img.height;
        canvas.width = img.width;

        context.translate(canvas.width, canvas.height);

        context.rotate(Math.PI);

        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };

    utils.rotate90 = function (img) {
        var canvas, context, result;

        canvas = utils.canvas();
        context = canvas.getContext('2d');

        canvas.height = img.width;
        canvas.width = img.height;

        context.translate(canvas.width, canvas.height);
        context.rotate(Math.PI / 2);
        context.translate(-canvas.height, 0);

        context.drawImage(img, 0, 0);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };

    utils.rotateMinus90 = function (img) {
        var canvas, context, result;

        canvas = utils.canvas();
        context = canvas.getContext('2d');

        canvas.height = img.width;
        canvas.width = img.height;

        context.translate(canvas.width, canvas.height);
        context.rotate(-Math.PI / 2);
        context.translate(0, -canvas.width);

        context.drawImage(img, 0, 0);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };

    utils.rotate270 = function (img) {
        return utils.rotate90(
            utils.rotate180(
                img
            )
        );
    };

    utils.translateVertical = function (img) {
        var imageData = utils.getImageData(img);
        var data = imageData.data;

        var w = imageData.width;
        var h = imageData.height;

        var canvas = utils.canvas();

        canvas.height = h;
        canvas.width = w;

        var context = canvas.getContext('2d');
        var outputImageData = context.getImageData(0, 0, canvas.width, canvas.height);

        for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
                for (var c = 0; c < 4; c++) {
                    outputImageData.data[((h - y) * w + x) * 4 + c] = data[(y * w + x) * 4 + c];
                }
            }
        }

        return utils.getImageFromImageData(outputImageData);
    };

    utils.translateHorizontal = function (img) {
        var imageData = utils.getImageData(img);
        var data = imageData.data;

        var w = imageData.width;
        var h = imageData.height;

        var canvas = utils.canvas();

        canvas.height = h;
        canvas.width = w;

        var context = canvas.getContext('2d');
        var outputImageData = context.getImageData(0, 0, canvas.width, canvas.height);

        for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
                for (var c = 0; c < 4; c++) {
                    outputImageData.data[(y * w + (w - x)) * 4 + c] = data[(y * w + x) * 4 + c];
                }
            }
        }

        return utils.getImageFromImageData(outputImageData);
    };

    utils.verticalTranslation = function (img, angle) {
        var canvas, context, result;

        canvas = utils.canvas();
        context = canvas.getContext('2d');

        canvas.height = img.height;
        canvas.width = img.width;

        context.translate(canvas.width, canvas.height);

        context.rotate(Math.PI);

        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };

    utils.reflect = function (img, modifier, transition) {
        modifier = modifier || 1.3;

        // Crear un canvas mas alto que la imagen
        var canvas, context, h, w;

        canvas = utils.canvas();

        w = canvas.width = img.width;
        h = canvas.height = Math.floor(img.height * modifier);

        context = canvas.getContext('2d');

        // Chrome workaround
        if (!w) {
            w = canvas.width = img.width;
        }

        // Insertarle la imagen
        context.drawImage(img, 0, 0);

        // Obtener la info
        var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

        var data = imageData.data;

        var easing = iwage.transition[transition || 'Cuadratic'](0, h - img.height, 0, 255);
        var alpha;

        // Recorremos los pixeles agregados (img.height - h)
        for (var y = img.height; y < h; y++) {
            alpha = 255 - easing.get(y - img.height);
            for (var x = 0; x < w; x++) {
                for (var c = 0; c < 3; c++) {
                    data[(y * w + x) * 4 + c] = data[((2 * img.height - y - 1) * w + x) * 4 + c];
                }

                var originalAlpha = data[((2 * img.height - y - 1) * w + x) * 4 + c];

                if (originalAlpha < 255) {
                    data[(y * w + x) * 4 + 3] = originalAlpha * alpha / 255;
                } else {
                    data[(y * w + x) * 4 + 3] = alpha;
                }
            }
        }

        return utils.getImageFromImageData(imageData);
    };

    utils.fillAlpha = function (img, color) {
        var canvas, context, h, w;

        canvas = utils.canvas();

        w = canvas.width = img.width;
        h = canvas.height = img.height;

        context = canvas.getContext('2d');

        // Chrome workaround
        if (!w) {
            w = canvas.width = img.width;
        }

        context.fillStyle = color;
        context.fillRect(0, 0, w, h);

        // Insertarle la imagen
        context.drawImage(img, 0, 0);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };

    utils.resize = function (img, width, height) {
        var canvas, context;

        canvas = utils.canvas();

        canvas.width = width;
        canvas.height = height;

        // Chrome workaround
        if (!canvas.width) {
            canvas.width = width;
        }

        context = canvas.getContext('2d');

        // Insertarle la imagen
        context.drawImage(img, 0, 0, width, height);

        return utils.getImageFromDataUri(canvas.toDataURL('image/png'));
    };
})(iwage.mode(iwage.MODES.IMAGE).utils);
/**
 * @see iwage.file
 */
iwage.mode(iwage.MODES.IMAGE).file = {
    open: function () {
        iwage.tools.launch('Open');
    },
    load: function (dataUri) {
        iwage.file.set(dataUri);
        iwage.history.clear();
        iwage.history.setOriginal(dataUri);
        iwage.view.centerContainer();
    },
    clear: function () {
        $('.placeholder .result-container').hide();
    },
    handle: function (dataUri) {
        iwage.file.load(dataUri);
    },
    set: function (result, opts) {
        opts = opts || {};

        if (!result) {
            return false;
        }

        if (!opts.isUndo) {
            iwage.history.addUndo();
        }

        $('.result').remove();

        if (typeof result == 'string') {
            result = $('<img/>').attr('src', result);
        } else {
            result = $(result);
        }

        result.addClass('result').appendTo('#container');

        $('.result-container, #container').show();

        iwage.tools.clear();
        iwage.view.adjustContainer();
        iwage.view.adjustContainer(100);
    },
    save: function() {
        iwage.tools.launch('Save')
    },
    /**
     * Ejecuta el save de la imagen actual
     *
     * Si hay un proxy definido, se intenta una consulta
     * ajax contra la ruta
     */
    doSave: function (opts) {
        opts = opts || {};

        // Caso contrario renderiza la imagen al browser
        if (!iwage.options.proxy) {
            window.open($('.result').attr('src'), '_open');
            return;
        }

        iwage.view.statusbar.setMessage('Guardando...');

        var params = iwage.options.params || {};

        params['dataUri'] = iwage.file.getDataUri(opts);

        iwage.file.set(params['dataUri']);

        Ext.Ajax.request({
            url: iwage.options.proxy,
            params: params,
            timeout: 0,
            success: function (response) {
                var json = Ext.JSON.decode(response.responseText);

                // TODO crear proxy para mensajes
                Ext.MessageBox.alert('Aviso', 'Archivo guardado!');

                iwage.view.statusbar.hide();
            }
        });
    },
    getDataUri: function (opts) {
        var width, height, resized;

        opts = opts || {};

        width = iwage.file.getWidth();
        height = iwage.file.getHeight();

        if (!opts.width || opts.width == width) {
            return $('.result').attr('src');
        }

        resized = iwage(iwage.MODES.IMAGE).utils.resize(
            $('.result').get(0),
            opts.width,
            opts.height
        );

        return $(resized).attr('src');
    },
    hide: function () {
        $('.result').hide();
    },
    show: function () {
        $('.result').show();
    },
    getHeight: function () {
        return $('.result').height() || 0;
    },
    getWidth: function () {
        return $('.result').width() || 0;
    }
};
iwage.mode(iwage.MODES.IMAGE).history = {
    addUndo: function() {
        $('<img/>')
            .attr('src', $('.result').attr('src'))
            .appendTo('#history-undo');

        // Una vez realizado un cambio, no se puede rehacer ningun
        // paso
        iwage.history.clearRedoHistory();
    },
    addRedo: function() {
        $('<img/>')
            .attr('src', $('.result').attr('src'))
            .appendTo('#history-redo');
    },
    getUndo: function(index) {
        var img, uri;

        img = $('#history-undo img').get(index);

        uri = $(img).attr('src');

        $(img).remove();

        return uri;
    },
    getRedo: function(index) {
        var img, uri;

        img = $('#history-redo img').get(index);

        uri = $(img).attr('src');

        $(img).remove();

        return uri;
    },
    undo: function() {
        iwage.history.addRedo();

        iwage.file.set(
            iwage.history.getUndo(-1),
            {
                isUndo: true
            }
        );
    },
    redo: function() {
        iwage.file.set(iwage.history.getRedo(0));
    },
    clear: function() {
        iwage.history.clearUndoHistory();
        iwage.history.clearRedoHistory();
    },
    clearUndoHistory: function() {
        $('#history-undo').children().remove();
    },
    clearRedoHistory: function() {
        $('#history-redo').children().remove();
    },
    setOriginal: function(original) {
    },
    getOriginal: function() {
        return iwage.history.getUndo(0);
    },
    backToOriginal: function() {
        iwage.file.load(
            iwage.history.getOriginal()
        );
    }
};
iwage(iwage.MODES.IMAGE).view = {
    getHTML: function() {
        return '<div class="placeholder result-container" style="display: none"><div id="container">' +
            '<img class="result"' +
            'src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEW/v7////+Zw/90AAAAEUlEQVQI12P4z8CAFWEX/Q8Afr8P8erzE9cAAAAASUVORK5CYII=">' +
            '<div id="nubs"></div></div></div><div id="history-undo"></div><div id="history-redo">';
    },
    setZoom: function(level) {
        iwage().view._zoom = level;

        level = level / 100;

        $('#container').css({
            //'zoom': level,
            '-moz-transform': 'scale(' + level + ')',
            '-webkit-transform': 'scale(' + level + ')'
        });
    },
    getZoom: function() {
        return iwage().view._zoom || 100;
    },
    restoreZoom: function() {
        iwage().view.setZoom(iwage().view.getZoom() || 100);
    },
    clearZoom: function() {
        iwage().view.setZoom(100);
    }
};
iwage(iwage.MODES.IMAGE).view.menu = {
    createFileMenu: function () {
        return {
            text: 'Archivo',
            menu: {
                items: [
                    {
                        text: 'Abrir <span class="shortcut">(ctrl + o)</span>',
                        icon: iwage.icon('open'),
                        handler: iwage.file.open
                    },
                    {
                        text: 'Guardar <span class="shortcut">(ctrl + s)</span>',
                        icon: iwage.icon('save'),
                        handler: iwage.file.save
                    },
                    '-',
                    {
                        text: 'Ver imagen',
                        icon: iwage.icon('preview'),
                        handler: function () {
                            iwage.file.viewAsImage();
                        }
                    }
                ]
            }
        };
    },
    createEditMenu: function () {
        return {
            text: 'Editar',
            menu: {
                items: [
                    {
                        icon: iwage.icon('undo'),
                        text: 'Deshacer <span class="shortcut">(ctrl + z)</span>',
                        handler: iwage.history.undo
                    },
                    {
                        icon: iwage.icon('redo'),
                        text: 'Rehacer <span class="shortcut">(ctrl + shift + z)</span>',
                        handler: iwage.history.redo
                    },
                    '-',
                    {
                        text: 'Volver al original',
                        icon: iwage.icon('bin'),
                        handler: iwage.history.backToOriginal
                    },
                    '-',
                    {
                        text: 'Recortar',
                        icon: iwage.icon('crop'),
                        handler: iwage.tools.launcher('Crop')
                    }
                ]
            }
        }
    },
    createImageSettingsMenu: function () {
        return {
            text: 'Ajustes de imagen',
            menu: {
                items: [
                    {
                        text: 'Rellenar transparencias',
                        icon: iwage.icon('set_transparent'),
                        handler: function () {
                            iwage.tools.launch('FillAlpha');
                        }
                    },
                    '-',
                    {
                        text: 'Brillo / Contraste',
                        icon: iwage.icon('filter_BrightnessContrast'),
                        handler: function () {
                            iwage.tools.launch('glfx.BrightnessContrast');
                        }
                    },
                    {
                        text: 'Hue / Saturaci&oacute;n',
                        icon: iwage.icon('filter_HueSaturation'),
                        handler: function () {
                            iwage.tools.launch('glfx.HueSaturation');
                        }
                    },
                    '-',
                    {
                        text: 'Rotar a la izquierda',
                        icon: iwage.icon('rotate_anticlockwise'),
                        handler: function () {
                            iwage(iwage.MODES.IMAGE).transform.rotateMinus90();
                        }
                    },
                    {
                        text: 'Rotar a la derecha',
                        icon: iwage.icon('rotate_clockwise'),
                        handler: function () {
                            iwage(iwage.MODES.IMAGE).transform.rotate90();
                        }
                    },
                    {
                        text: 'Reflejar horizontalmente',
                        icon: iwage.icon('flip_horizontal'),
                        handler: function () {
                            iwage(iwage.MODES.IMAGE).transform.translateHorizontal();
                        }
                    },
                    {
                        text: 'Reflejar verticalmente',
                        icon: iwage.icon('flip_vertical'),
                        handler: function () {
                            iwage(iwage.MODES.IMAGE).transform.translateVertical();
                        }
                    },
                    '-',
                    {
                        text: 'Bordes Redondeados',
                        icon: iwage.icon('rounded'),
                        handler: function () {
                            iwage.tools.launch('RoundedCorners');
                        }
                    }
                ]
            }
        };
    },
    createFiltersMenu: function () {
        var menu = [];

        Ext.iterate(iwage.image.tools.glfx, function (key, value, all) {
            if (!value.prototype.toolLabel || typeof value != 'function') {
                return;
            }

            if (['BrightnessContrast', 'HueSaturation', 'Swirl', 'BulgePinch', 'ZoomBlur', 'TiltShift'].indexOf(key) != -1) {
                return;
            }

            menu.push({
                text: value.prototype.toolLabel,
                icon: iwage.icon('filter_' + key),
                handler: function () {
                    iwage.tools.launch('glfx.' + key);
                }
            });
        });

        menu.sort(function (one, another) {
            return one.text > another.text ? 1 : -1;
        });

        return {
            text: 'Filtros',
            menu: menu
        };
    },
    createEffectsMenu: function () {
        var menu = [];

        Ext.iterate(iwage.image.tools.glfx, function (key, value, all) {
            if (!value.prototype.toolLabel || typeof value != 'function') {
                return;
            }

            if (['Swirl', 'BulgePinch', 'ZoomBlur', 'TiltShift'].indexOf(key) == -1) {
                return;
            }

            menu.push({
                text: value.prototype.toolLabel,
                icon: iwage.icon('filter_' + key),
                handler: function () {
                    iwage.tools.launch('glfx.' + key);
                }
            });
        });

        menu.push({
            text: 'Reflejar',
            icon: iwage.icon('reflection'),
            handler: function () {
                iwage.tools.launch('Reflect');
            }
        });

        menu.sort(function (one, another) {
            return one.text > another.text ? 1 : -1;
        });

        return {
            text: 'Efectos',
            menu: menu
        };
    },
    create: function () {
        var menu, self;

        self = iwage(iwage.MODES.IMAGE).view.menu;

        menu = [];

        menu.push(self.createFileMenu());

        menu.push(self.createEditMenu());

        menu.push(self.createImageSettingsMenu());

        menu.push(self.createFiltersMenu());

        menu.push(self.createEffectsMenu());


        Ext.each(menu, function (current) {
            current.mode = iwage.MODES.IMAGE;
        });

        return menu;
    }
};
/*
 * glfx.js
 * http://evanw.github.com/glfx.js/
 *
 * Copyright 2011 Evan Wallace
 * Released under the MIT license
 */
var fx = function() {
    function n(b, c, d) {
        return Math.max(b, Math.min(c, d))
    }

    function v(b) {
        return{_:b,loadContentsOf:function(c) {
            this._.loadContentsOf(c)
        },destroy:function() {
            this._.destroy()
        }}
    }

    function C(b) {
        return v(r.fromElement(b))
    }

    function D(b, c) {
        var d = a.getExtension("OES_texture_float") ? a.FLOAT : a.UNSIGNED_BYTE;
        this._.texture && this._.texture.destroy();
        this._.spareTexture && this._.spareTexture.destroy();
        this.width = b;
        this.height = c;
        this._.texture = new r(b, c, a.RGBA, d);
        this._.spareTexture = new r(b, c, a.RGBA, d);
        this._.extraTexture = this._.extraTexture || new r(0, 0, a.RGBA, d);
        this._.flippedShader = this._.flippedShader || new l(null, "uniform sampler2D texture;varying vec2 texCoord;void main(){gl_FragColor=texture2D(texture,vec2(texCoord.x,1.0-texCoord.y));}");
        this._.isInitialized = true
    }

    function E(b, c, d) {
        if (!this._.isInitialized || b._.width != this.width || b._.height != this.height)D.call(this, c ? c : b._.width, d ? d : b._.height);
        b._.use();
        this._.texture.drawTo(function() {
            l.getDefaultShader().drawRect()
        });
        return this
    }

    function F() {
        this._.texture.use();
        this._.flippedShader.drawRect();
        return this
    }

    function m(b, c, d, e) {
        (d || this._.texture).use();
        this._.spareTexture.drawTo(function() {
            b.uniforms(c).drawRect()
        });
        this._.spareTexture.swapWith(e || this._.texture)
    }

    function G(b) {
        b.parentNode.insertBefore(this, b);
        b.parentNode.removeChild(b);
        return this
    }

    function H() {
        var b = new r(this._.texture.width, this._.texture.height, a.RGBA, a.UNSIGNED_BYTE);
        this._.texture.use();
        b.drawTo(function() {
            l.getDefaultShader().drawRect()
        });
        return v(b)
    }

    function w() {
        var b = this._.texture.width,c = this._.texture.height,d = new Uint8Array(b * c * 4);
        this._.texture.drawTo(function() {
            a.readPixels(0, 0, b, c, a.RGBA, a.UNSIGNED_BYTE, d)
        });
        return d
    }

    function I(b) {
        var c = this._.texture.width,d = this._.texture.height,e = w.call(this),f = document.createElement("canvas"),g = f.getContext("2d");
        f.width = c;
        f.height = d;
        c = g.createImageData(c, d);
        for (d = 0; d < e.length; d++)c.data[d] = e[d];
        g.putImageData(c, 0, 0);
        return f.toDataURL(b)
    }

    function k(b) {
        return function() {
            a = this._.gl;
            return b.apply(this,
                arguments)
        }
    }

    function x(b, c, d, e, f, g, h, i) {
        var j = d - f,o = e - g,p = h - f,y = i - g;
        f = b - d + f - h;
        g = c - e + g - i;
        var z = j * y - p * o;
        p = (f * y - p * g) / z;
        j = (j * g - f * o) / z;
        return[d - b + p * d,e - c + p * e,p,h - b + j * h,i - c + j * i,j,b,c,1]
    }

    function A(b) {
        var c = b[0],d = b[1],e = b[2],f = b[3],g = b[4],h = b[5],i = b[6],j = b[7];
        b = b[8];
        var o = c * g * b - c * h * j - d * f * b + d * h * i + e * f * j - e * g * i;
        return[(g * b - h * j) / o,(e * j - d * b) / o,(d * h - e * g) / o,(h * i - f * b) / o,(c * b - e * i) / o,(e * f - c * h) / o,(f * j - g * i) / o,(d * i - c * j) / o,(c * g - d * f) / o]
    }

    function J(b, c) {
        return[b[0] * c[0] + b[1] * c[3] + b[2] * c[6],b[0] * c[1] + b[1] * c[4] + b[2] * c[7],
            b[0] * c[2] + b[1] * c[5] + b[2] * c[8],b[3] * c[0] + b[4] * c[3] + b[5] * c[6],b[3] * c[1] + b[4] * c[4] + b[5] * c[7],b[3] * c[2] + b[4] * c[5] + b[5] * c[8],b[6] * c[0] + b[7] * c[3] + b[8] * c[6],b[6] * c[1] + b[7] * c[4] + b[8] * c[7],b[6] * c[2] + b[7] * c[5] + b[8] * c[8]]
    }

    function B(b) {
        var c = b.length;
        this.xa = [];
        this.ya = [];
        this.u = [];
        this.y2 = [];
        b.sort(function(g, h) {
            return g[0] - h[0]
        });
        for (var d = 0; d < c; d++) {
            this.xa.push(b[d][0]);
            this.ya.push(b[d][1])
        }
        this.u[0] = 0;
        this.y2[0] = 0;
        for (d = 1; d < c - 1; ++d) {
            b = this.xa[d + 1] - this.xa[d - 1];
            var e = (this.xa[d] - this.xa[d - 1]) / b,f = e * this.y2[d -
                1] + 2;
            this.y2[d] = (e - 1) / f;
            this.u[d] = (6 * ((this.ya[d + 1] - this.ya[d]) / (this.xa[d + 1] - this.xa[d]) - (this.ya[d] - this.ya[d - 1]) / (this.xa[d] - this.xa[d - 1])) / b - e * this.u[d - 1]) / f
        }
        this.y2[c - 1] = 0;
        for (d = c - 2; d >= 0; --d)this.y2[d] = this.y2[d] * this.y2[d + 1] + this.u[d]
    }

    function t(b, c) {
        return new l(null, b + "uniform sampler2D texture;uniform vec2 texSize;varying vec2 texCoord;void main(){vec2 coord=texCoord*texSize;" + c + "gl_FragColor=texture2D(texture,coord/texSize);vec2 clampedCoord=clamp(coord,vec2(0.0),texSize);if(coord!=clampedCoord){gl_FragColor.a*=max(0.0,1.0-length(coord-clampedCoord));}}")
    }

    function K(b, c) {
        a.brightnessContrast = a.brightnessContrast || new l(null, "uniform sampler2D texture;uniform float brightness;uniform float contrast;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);color.rgb+=brightness;if(contrast>0.0){color.rgb=(color.rgb-0.5)/(1.0-contrast)+0.5;}else{color.rgb=(color.rgb-0.5)*(1.0+contrast)+0.5;}gl_FragColor=color;}");
        m.call(this, a.brightnessContrast, {brightness:n(-1, b, 1),contrast:n(-1, c, 1)});
        return this
    }

    function s(b) {
        b = new B(b);
        for (var c = [],d = 0; d < 256; d++)c.push(n(0, Math.floor(b.interpolate(d / 255) * 256), 255));
        return c
    }

    function L(b, c, d) {
        b = s(b);
        if (arguments.length == 1)c = d = b; else {
            c = s(c);
            d = s(d)
        }
        for (var e = [],f = 0; f < 256; f++)e.splice(e.length, 0, b[f], c[f], d[f], 255);
        this._.extraTexture.initFromBytes(256, 1, e);
        this._.extraTexture.use(1);
        a.curves = a.curves || new l(null, "uniform sampler2D texture;uniform sampler2D map;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);color.r=texture2D(map,vec2(color.r)).r;color.g=texture2D(map,vec2(color.g)).g;color.b=texture2D(map,vec2(color.b)).b;gl_FragColor=color;}");
        a.curves.textures({map:1});
        m.call(this, a.curves, {});
        return this
    }

    function M(b) {
        a.denoise = a.denoise || new l(null, "uniform sampler2D texture;uniform float exponent;uniform float strength;uniform vec2 texSize;varying vec2 texCoord;void main(){vec4 center=texture2D(texture,texCoord);vec4 color=vec4(0.0);float total=0.0;for(float x=-4.0;x<=4.0;x+=1.0){for(float y=-4.0;y<=4.0;y+=1.0){vec4 sample=texture2D(texture,texCoord+vec2(x,y)/texSize);float weight=1.0-abs(dot(sample.rgb-center.rgb,vec3(0.25)));weight=pow(weight,exponent);color+=sample*weight;total+=weight;}}gl_FragColor=color/total;}");
        for (var c = 0; c < 2; c++)m.call(this, a.denoise, {exponent:Math.max(0, b),texSize:[this.width,this.height]});
        return this
    }

    function N(b, c) {
        a.hueSaturation = a.hueSaturation || new l(null, "uniform sampler2D texture;uniform float hue;uniform float saturation;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float angle=hue*3.14159265;float s=sin(angle),c=cos(angle);vec3 weights=(vec3(2.0*c,-sqrt(3.0)*s-c,sqrt(3.0)*s-c)+1.0)/3.0;float len=length(color.rgb);color.rgb=vec3(dot(color.rgb,weights.xyz),dot(color.rgb,weights.zxy),dot(color.rgb,weights.yzx));float average=(color.r+color.g+color.b)/3.0;if(saturation>0.0){color.rgb+=(average-color.rgb)*(1.0-1.0/(1.001-saturation));}else{color.rgb+=(average-color.rgb)*(-saturation);}gl_FragColor=color;}");
        m.call(this, a.hueSaturation, {hue:n(-1, b, 1),saturation:n(-1, c, 1)});
        return this
    }

    function O(b) {
        a.noise = a.noise || new l(null, "uniform sampler2D texture;uniform float amount;varying vec2 texCoord;float rand(vec2 co){return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);}void main(){vec4 color=texture2D(texture,texCoord);float diff=(rand(texCoord)-0.5)*amount;color.r+=diff;color.g+=diff;color.b+=diff;gl_FragColor=color;}");
        m.call(this, a.noise, {amount:n(0, b, 1)});
        return this
    }

    function P(b) {
        a.sepia = a.sepia || new l(null, "uniform sampler2D texture;uniform float amount;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float r=color.r;float g=color.g;float b=color.b;color.r=min(1.0,(r*(1.0-(0.607*amount)))+(g*(0.769*amount))+(b*(0.189*amount)));color.g=min(1.0,(r*0.349*amount)+(g*(1.0-(0.314*amount)))+(b*0.168*amount));color.b=min(1.0,(r*0.272*amount)+(g*0.534*amount)+(b*(1.0-(0.869*amount))));gl_FragColor=color;}");
        m.call(this, a.sepia, {amount:n(0, b, 1)});
        return this
    }

    function Q(b, c) {
        a.unsharpMask = a.unsharpMask || new l(null, "uniform sampler2D blurredTexture;uniform sampler2D originalTexture;uniform float strength;uniform float threshold;varying vec2 texCoord;void main(){vec4 blurred=texture2D(blurredTexture,texCoord);vec4 original=texture2D(originalTexture,texCoord);gl_FragColor=mix(blurred,original,1.0+strength);}");
        this._.extraTexture.ensureFormat(this._.texture);
        this._.texture.use();
        this._.extraTexture.drawTo(function() {
            l.getDefaultShader().drawRect()
        });
        this._.extraTexture.use(1);
        this.triangleBlur(b);
        a.unsharpMask.textures({originalTexture:1});
        m.call(this, a.unsharpMask, {strength:c});
        this._.extraTexture.unuse(1);
        return this
    }

    function R(b) {
        a.vibrance = a.vibrance || new l(null, "uniform sampler2D texture;uniform float amount;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float average=(color.r+color.g+color.b)/3.0;float mx=max(color.r,max(color.g,color.b));float amt=(mx-average)*(-amount*3.0);color.rgb=mix(color.rgb,vec3(mx),amt);gl_FragColor=color;}");
        m.call(this, a.vibrance, {amount:n(-1, b, 1)});
        return this
    }

    function S(b, c) {
        a.vignette = a.vignette || new l(null, "uniform sampler2D texture;uniform float size;uniform float amount;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float dist=distance(texCoord,vec2(0.5,0.5));color.rgb*=smoothstep(0.8,size*0.799,dist*(amount+size));gl_FragColor=color;}");
        m.call(this, a.vignette, {size:n(0, b, 1),amount:n(0, c, 1)});
        return this
    }

    function T(b, c, d) {
        a.lensBlurPrePass = a.lensBlurPrePass || new l(null, "uniform sampler2D texture;uniform float power;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);color=pow(color,vec4(power));gl_FragColor=vec4(color);}");
        var e = "uniform sampler2D texture0;uniform sampler2D texture1;uniform vec2 delta0;uniform vec2 delta1;uniform float power;varying vec2 texCoord;" +
            q + "vec4 sample(vec2 delta){float offset=random(vec3(delta,151.7182),0.0);vec4 color=vec4(0.0);float total=0.0;for(float t=0.0;t<=30.0;t++){float percent=(t+offset)/30.0;color+=texture2D(texture0,texCoord+delta*percent);total+=1.0;}return color/total;}";
        a.lensBlur0 = a.lensBlur0 || new l(null, e + "void main(){gl_FragColor=sample(delta0);}");
        a.lensBlur1 = a.lensBlur1 || new l(null, e + "void main(){gl_FragColor=(sample(delta0)+sample(delta1))*0.5;}");
        a.lensBlur2 = a.lensBlur2 || (new l(null, e + "void main(){vec4 color=(sample(delta0)+2.0*texture2D(texture1,texCoord))/3.0;gl_FragColor=pow(color,vec4(power));}")).textures({texture1:1});
        e =
            [];
        for (var f = 0; f < 3; f++) {
            var g = d + f * Math.PI * 2 / 3;
            e.push([b * Math.sin(g) / this.width,b * Math.cos(g) / this.height])
        }
        b = Math.pow(10, n(-1, c, 1));
        m.call(this, a.lensBlurPrePass, {power:b});
        this._.extraTexture.ensureFormat(this._.texture);
        m.call(this, a.lensBlur0, {delta0:e[0]}, this._.texture, this._.extraTexture);
        m.call(this, a.lensBlur1, {delta0:e[1],delta1:e[2]}, this._.extraTexture, this._.extraTexture);
        m.call(this, a.lensBlur0, {delta0:e[1]});
        this._.extraTexture.use(1);
        m.call(this, a.lensBlur2, {power:1 / b,delta0:e[2]});
        return this
    }

    function U(b, c, d, e, f, g) {
        a.tiltShift = a.tiltShift || new l(null, "uniform sampler2D texture;uniform float blurRadius;uniform float gradientRadius;uniform vec2 start;uniform vec2 end;uniform vec2 delta;uniform vec2 texSize;varying vec2 texCoord;" + q + "void main(){vec4 color=vec4(0.0);float total=0.0;float offset=random(vec3(12.9898,78.233,151.7182),0.0);vec2 normal=normalize(vec2(start.y-end.y,end.x-start.x));float radius=smoothstep(0.0,1.0,abs(dot(texCoord*texSize-start,normal))/gradientRadius)*blurRadius;for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec4 sample=texture2D(texture,texCoord+delta/texSize*percent*radius);sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}");
        var h = d - b,i = e - c,j = Math.sqrt(h * h + i * i);
        m.call(this, a.tiltShift, {blurRadius:f,gradientRadius:g,start:[b,c],end:[d,e],delta:[h / j,i / j],texSize:[this.width,this.height]});
        m.call(this, a.tiltShift, {blurRadius:f,gradientRadius:g,start:[b,c],end:[d,e],delta:[-i / j,h / j],texSize:[this.width,this.height]});
        return this
    }

    function V(b) {
        a.triangleBlur = a.triangleBlur || new l(null, "uniform sampler2D texture;uniform vec2 delta;varying vec2 texCoord;" + q + "void main(){vec4 color=vec4(0.0);float total=0.0;float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec4 sample=texture2D(texture,texCoord+delta*percent);sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}");
        m.call(this, a.triangleBlur, {delta:[b / this.width,0]});
        m.call(this, a.triangleBlur, {delta:[0,b / this.height]});
        return this
    }

    function W(b, c, d) {
        a.zoomBlur = a.zoomBlur || new l(null, "uniform sampler2D texture;uniform vec2 center;uniform float strength;uniform vec2 texSize;varying vec2 texCoord;" + q + "void main(){vec4 color=vec4(0.0);float total=0.0;vec2 toCenter=center-texCoord*texSize;float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=0.0;t<=40.0;t++){float percent=(t+offset)/40.0;float weight=4.0*(percent-percent*percent);vec4 sample=texture2D(texture,texCoord+toCenter*percent*strength/texSize);sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}");
        m.call(this, a.zoomBlur, {center:[b,c],strength:d,texSize:[this.width,this.height]});
        return this
    }

    function X(b, c, d, e) {
        a.colorHalftone = a.colorHalftone || new l(null, "uniform sampler2D texture;uniform vec2 center;uniform float angle;uniform float scale;uniform vec2 texSize;varying vec2 texCoord;float pattern(float angle){float s=sin(angle),c=cos(angle);vec2 tex=texCoord*texSize-center;vec2 point=vec2(c*tex.x-s*tex.y,s*tex.x+c*tex.y)*scale;return(sin(point.x)*sin(point.y))*4.0;}void main(){vec4 color=texture2D(texture,texCoord);vec3 cmy=1.0-color.rgb;float k=min(cmy.x,min(cmy.y,cmy.z));cmy=(cmy-k)/(1.0-k);cmy=clamp(cmy*10.0-3.0+vec3(pattern(angle+0.26179),pattern(angle+1.30899),pattern(angle)),0.0,1.0);k=clamp(k*10.0-5.0+pattern(angle+0.78539),0.0,1.0);gl_FragColor=vec4(1.0-cmy-k,color.a);}");
        m.call(this, a.colorHalftone, {center:[b,c],angle:d,scale:Math.PI / e,texSize:[this.width,this.height]});
        return this
    }

    function Y(b, c, d, e) {
        a.dotScreen = a.dotScreen || new l(null, "uniform sampler2D texture;uniform vec2 center;uniform float angle;uniform float scale;uniform vec2 texSize;varying vec2 texCoord;float pattern(){float s=sin(angle),c=cos(angle);vec2 tex=texCoord*texSize-center;vec2 point=vec2(c*tex.x-s*tex.y,s*tex.x+c*tex.y)*scale;return(sin(point.x)*sin(point.y))*4.0;}void main(){vec4 color=texture2D(texture,texCoord);float average=(color.r+color.g+color.b)/3.0;gl_FragColor=vec4(vec3(average*10.0-5.0+pattern()),color.a);}");
        m.call(this, a.dotScreen, {center:[b,c],angle:d,scale:Math.PI / e,texSize:[this.width,this.height]});
        return this
    }

    function Z(b) {
        a.edgeWork1 = a.edgeWork1 || new l(null, "uniform sampler2D texture;uniform vec2 delta;varying vec2 texCoord;" + q + "void main(){vec2 color=vec2(0.0);vec2 total=vec2(0.0);float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec3 sample=texture2D(texture,texCoord+delta*percent).rgb;float average=(sample.r+sample.g+sample.b)/3.0;color.x+=average*weight;total.x+=weight;if(abs(t)<15.0){weight=weight*2.0-1.0;color.y+=average*weight;total.y+=weight;}}gl_FragColor=vec4(color/total,0.0,1.0);}");
        a.edgeWork2 = a.edgeWork2 || new l(null, "uniform sampler2D texture;uniform vec2 delta;varying vec2 texCoord;" + q + "void main(){vec2 color=vec2(0.0);vec2 total=vec2(0.0);float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec2 sample=texture2D(texture,texCoord+delta*percent).xy;color.x+=sample.x*weight;total.x+=weight;if(abs(t)<15.0){weight=weight*2.0-1.0;color.y+=sample.y*weight;total.y+=weight;}}float c=clamp(10000.0*(color.y/total.y-color.x/total.x)+0.5,0.0,1.0);gl_FragColor=vec4(c,c,c,1.0);}");
        m.call(this, a.edgeWork1, {delta:[b / this.width,0]});
        m.call(this, a.edgeWork2, {delta:[0,b / this.height]});
        return this
    }

    function $(b, c, d) {
        a.hexagonalPixelate = a.hexagonalPixelate || new l(null, "uniform sampler2D texture;uniform vec2 center;uniform float scale;uniform vec2 texSize;varying vec2 texCoord;void main(){vec2 tex=(texCoord*texSize-center)/scale;tex.y/=0.866025404;tex.x-=tex.y*0.5;vec2 a;if(tex.x+tex.y-floor(tex.x)-floor(tex.y)<1.0)a=vec2(floor(tex.x),floor(tex.y));else a=vec2(ceil(tex.x),ceil(tex.y));vec2 b=vec2(ceil(tex.x),floor(tex.y));vec2 c=vec2(floor(tex.x),ceil(tex.y));vec3 TEX=vec3(tex.x,tex.y,1.0-tex.x-tex.y);vec3 A=vec3(a.x,a.y,1.0-a.x-a.y);vec3 B=vec3(b.x,b.y,1.0-b.x-b.y);vec3 C=vec3(c.x,c.y,1.0-c.x-c.y);float alen=length(TEX-A);float blen=length(TEX-B);float clen=length(TEX-C);vec2 choice;if(alen<blen){if(alen<clen)choice=a;else choice=c;}else{if(blen<clen)choice=b;else choice=c;}choice.x+=choice.y*0.5;choice.y*=0.866025404;choice*=scale/texSize;gl_FragColor=texture2D(texture,choice+center/texSize);}");
        m.call(this, a.hexagonalPixelate, {center:[b,c],scale:d,texSize:[this.width,this.height]});
        return this
    }

    function aa(b) {
        a.ink = a.ink || new l(null, "uniform sampler2D texture;uniform float strength;uniform vec2 texSize;varying vec2 texCoord;void main(){vec2 dx=vec2(1.0/texSize.x,0.0);vec2 dy=vec2(0.0,1.0/texSize.y);vec4 color=texture2D(texture,texCoord);float bigTotal=0.0;float smallTotal=0.0;vec3 bigAverage=vec3(0.0);vec3 smallAverage=vec3(0.0);for(float x=-2.0;x<=2.0;x+=1.0){for(float y=-2.0;y<=2.0;y+=1.0){vec3 sample=texture2D(texture,texCoord+dx*x+dy*y).rgb;bigAverage+=sample;bigTotal+=1.0;if(abs(x)+abs(y)<2.0){smallAverage+=sample;smallTotal+=1.0;}}}vec3 edge=max(vec3(0.0),bigAverage/bigTotal-smallAverage/smallTotal);gl_FragColor=vec4(color.rgb-dot(edge,edge)*strength*100000.0,color.a);}");
        m.call(this, a.ink, {strength:b * b * b * b * b,texSize:[this.width,this.height]});
        return this
    }

    function ba(b, c, d, e) {
        a.bulgePinch = a.bulgePinch || t("uniform float radius;uniform float strength;uniform vec2 center;", "coord-=center;float distance=length(coord);if(distance<radius){float percent=distance/radius;if(strength>0.0){coord*=mix(1.0,smoothstep(0.0,radius/distance,percent),strength*0.75);}else{coord*=mix(1.0,pow(percent,1.0+strength*0.75)*radius/distance,1.0-percent);}}coord+=center;");
        m.call(this, a.bulgePinch, {radius:d,strength:n(-1, e, 1),center:[b,c],texSize:[this.width,this.height]});
        return this
    }

    function ca(b, c, d) {
        a.matrixWarp = a.matrixWarp || t("uniform mat3 matrix;uniform bool useTextureSpace;", "if(useTextureSpace)coord=coord/texSize*2.0-1.0;vec3 warp=matrix*vec3(coord,1.0);coord=warp.xy/warp.z;if(useTextureSpace)coord=(coord*0.5+0.5)*texSize;");
        b = Array.prototype.concat.apply([], b);
        if (b.length ==
            4)b = [b[0],b[1],0,b[2],b[3],0,0,0,1]; else if (b.length != 9)throw"can only warp with 2x2 or 3x3 matrix";
        m.call(this, a.matrixWarp, {matrix:c ? A(b) : b,texSize:[this.width,this.height],useTextureSpace:d | 0});
        return this
    }

    function da(b, c) {
        var d = x.apply(null, c),e = x.apply(null, b);
        return this.matrixWarp(J(A(d), e))
    }

    function ea(b, c, d, e) {
        a.swirl = a.swirl || t("uniform float radius;uniform float angle;uniform vec2 center;", "coord-=center;float distance=length(coord);if(distance<radius){float percent=(radius-distance)/radius;float theta=percent*percent*angle;float s=sin(theta);float c=cos(theta);coord=vec2(coord.x*c-coord.y*s,coord.x*s+coord.y*c);}coord+=center;");
        m.call(this, a.swirl, {radius:d,center:[b,c],angle:e,texSize:[this.width,this.height]});
        return this
    }

    var u = {},a;
    u.canvas = function() {
        var b = document.createElement("canvas");
        try {
            a = b.getContext("experimental-webgl", {premultipliedAlpha:false})
        } catch(c) {
            a = null
        }
        if (!a)throw"This browser does not support WebGL";
        b._ = {gl:a,isInitialized:false,texture:null,spareTexture:null,flippedShader:null};
        b.texture = k(C);
        b.draw = k(E);
        b.update = k(F);
        b.replace = k(G);
        b.contents = k(H);
        b.getPixelArray = k(w);
        b.toDataURL = k(I);
        b.brightnessContrast =
            k(K);
        b.hexagonalPixelate = k($);
        b.hueSaturation = k(N);
        b.colorHalftone = k(X);
        b.triangleBlur = k(V);
        b.unsharpMask = k(Q);
        b.perspective = k(da);
        b.matrixWarp = k(ca);
        b.bulgePinch = k(ba);
        b.tiltShift = k(U);
        b.dotScreen = k(Y);
        b.edgeWork = k(Z);
        b.lensBlur = k(T);
        b.zoomBlur = k(W);
        b.noise = k(O);
        b.denoise = k(M);
        b.curves = k(L);
        b.swirl = k(ea);
        b.ink = k(aa);
        b.vignette = k(S);
        b.vibrance = k(R);
        b.sepia = k(P);
        return b
    };
    u.splineInterpolate = s;
    var l = function() {
        function b(f, g) {
            var h = a.createShader(f);
            a.shaderSource(h, g);
            a.compileShader(h);
            if (!a.getShaderParameter(h,
                a.COMPILE_STATUS))throw"compile error: " + a.getShaderInfoLog(h);
            return h
        }

        function c(f, g) {
            this.texCoordAttribute = this.vertexAttribute = null;
            this.program = a.createProgram();
            f = f || d;
            g = g || e;
            g = "precision highp float;" + g;
            a.attachShader(this.program, b(a.VERTEX_SHADER, f));
            a.attachShader(this.program, b(a.FRAGMENT_SHADER, g));
            a.linkProgram(this.program);
            if (!a.getProgramParameter(this.program, a.LINK_STATUS))throw"link error: " + a.getProgramInfoLog(this.program);
        }

        var d = "attribute vec2 vertex;attribute vec2 _texCoord;varying vec2 texCoord;void main(){texCoord=_texCoord;gl_Position=vec4(vertex*2.0-1.0,0.0,1.0);}",
            e = "uniform sampler2D texture;varying vec2 texCoord;void main(){gl_FragColor=texture2D(texture,texCoord);}";
        c.prototype.destroy = function() {
            a.deleteProgram(this.program);
            this.program = null
        };
        c.prototype.uniforms = function(f) {
            a.useProgram(this.program);
            for (var g in f)if (f.hasOwnProperty(g)) {
                var h = a.getUniformLocation(this.program, g);
                if (h !== null) {
                    var i = f[g];
                    if (Object.prototype.toString.call(i) == "[object Array]")switch (i.length) {
                        case 1:
                            a.uniform1fv(h, new Float32Array(i));
                            break;
                        case 2:
                            a.uniform2fv(h, new Float32Array(i));
                            break;
                        case 3:
                            a.uniform3fv(h, new Float32Array(i));
                            break;
                        case 4:
                            a.uniform4fv(h, new Float32Array(i));
                            break;
                        case 9:
                            a.uniformMatrix3fv(h, false, new Float32Array(i));
                            break;
                        case 16:
                            a.uniformMatrix4fv(h, false, new Float32Array(i));
                            break;
                        default:
                            throw"dont't know how to load uniform \"" + g + '" of length ' + i.length;
                    } else if (Object.prototype.toString.call(i) == "[object Number]")a.uniform1f(h, i); else throw'attempted to set uniform "' + g + '" to invalid value ' + (i || "undefined").toString();
                }
            }
            return this
        };
        c.prototype.textures = function(f) {
            a.useProgram(this.program);
            for (var g in f)f.hasOwnProperty(g) && a.uniform1i(a.getUniformLocation(this.program, g), f[g]);
            return this
        };
        c.prototype.drawRect = function(f, g, h, i) {
            var j = a.getParameter(a.VIEWPORT);
            g = g !== void 0 ? (g - j[1]) / j[3] : 0;
            f = f !== void 0 ? (f - j[0]) / j[2] : 0;
            h = h !== void 0 ? (h - j[0]) / j[2] : 1;
            i = i !== void 0 ? (i - j[1]) / j[3] : 1;
            if (a.vertexBuffer == null)a.vertexBuffer = a.createBuffer();
            a.bindBuffer(a.ARRAY_BUFFER, a.vertexBuffer);
            a.bufferData(a.ARRAY_BUFFER, new Float32Array([f,
                g,f,i,h,g,h,i]), a.STATIC_DRAW);
            if (a.texCoordBuffer == null) {
                a.texCoordBuffer = a.createBuffer();
                a.bindBuffer(a.ARRAY_BUFFER, a.texCoordBuffer);
                a.bufferData(a.ARRAY_BUFFER, new Float32Array([0,0,0,1,1,0,1,1]), a.STATIC_DRAW)
            }
            if (this.vertexAttribute == null) {
                this.vertexAttribute = a.getAttribLocation(this.program, "vertex");
                a.enableVertexAttribArray(this.vertexAttribute)
            }
            if (this.texCoordAttribute == null) {
                this.texCoordAttribute = a.getAttribLocation(this.program, "_texCoord");
                a.enableVertexAttribArray(this.texCoordAttribute)
            }
            a.useProgram(this.program);
            a.bindBuffer(a.ARRAY_BUFFER, a.vertexBuffer);
            a.vertexAttribPointer(this.vertexAttribute, 2, a.FLOAT, false, 0, 0);
            a.bindBuffer(a.ARRAY_BUFFER, a.texCoordBuffer);
            a.vertexAttribPointer(this.texCoordAttribute, 2, a.FLOAT, false, 0, 0);
            a.drawArrays(a.TRIANGLE_STRIP, 0, 4)
        };
        c.getDefaultShader = function() {
            a.defaultShader = a.defaultShader || new c;
            return a.defaultShader
        };
        return c
    }();
    B.prototype.interpolate = function(b) {
        for (var c = 0,d = this.ya.length - 1; d - c > 1;) {
            var e = d + c >> 1;
            if (this.xa[e] > b)d = e; else c = e
        }
        e = this.xa[d] - this.xa[c];
        var f = (this.xa[d] - b) / e;
        b = (b - this.xa[c]) / e;
        return f * this.ya[c] + b * this.ya[d] + ((f * f * f - f) * this.y2[c] + (b * b * b - b) * this.y2[d]) * e * e / 6
    };
    var r = function() {
        function b(e, f, g, h) {
            this.id = a.createTexture();
            this.width = e;
            this.height = f;
            this.format = g;
            this.type = h;
            a.bindTexture(a.TEXTURE_2D, this.id);
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T,
                a.CLAMP_TO_EDGE);
            e && f && a.texImage2D(a.TEXTURE_2D, 0, this.format, e, f, 0, this.format, this.type, null)
        }

        function c(e) {
            if (d == null)d = document.createElement("canvas");
            d.width = e.width;
            d.height = e.height;
            e = d.getContext("2d");
            e.clearRect(0, 0, d.width, d.height);
            return e
        }

        b.fromElement = function(e) {
            var f = new b(0, 0, a.RGBA, a.UNSIGNED_BYTE);
            f.loadContentsOf(e);
            return f
        };
        b.prototype.loadContentsOf = function(e) {
            this.width = e.width || e.videoWidth;
            this.height = e.height || e.videoHeight;
            a.bindTexture(a.TEXTURE_2D, this.id);
            a.texImage2D(a.TEXTURE_2D,
                0, this.format, this.format, this.type, e)
        };
        b.prototype.initFromBytes = function(e, f, g) {
            this.width = e;
            this.height = f;
            this.format = a.RGBA;
            this.type = a.UNSIGNED_BYTE;
            a.bindTexture(a.TEXTURE_2D, this.id);
            a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, e, f, 0, a.RGBA, this.type, new Uint8Array(g))
        };
        b.prototype.destroy = function() {
            a.deleteTexture(this.id);
            this.id = null
        };
        b.prototype.use = function(e) {
            a.activeTexture(a.TEXTURE0 + (e || 0));
            a.bindTexture(a.TEXTURE_2D, this.id)
        };
        b.prototype.unuse = function(e) {
            a.activeTexture(a.TEXTURE0 + (e || 0));
            a.bindTexture(a.TEXTURE_2D, null)
        };
        b.prototype.ensureFormat = function(e, f, g, h) {
            if (arguments.length == 1) {
                var i = arguments[0];
                e = i.width;
                f = i.height;
                g = i.format;
                h = i.type
            }
            if (e != this.width || f != this.height || g != this.format || h != this.type) {
                this.width = e;
                this.height = f;
                this.format = g;
                this.type = h;
                a.bindTexture(a.TEXTURE_2D, this.id);
                a.texImage2D(a.TEXTURE_2D, 0, this.format, e, f, 0, this.format, this.type, null)
            }
        };
        b.prototype.drawTo = function(e) {
            a.framebuffer = a.framebuffer || a.createFramebuffer();
            a.bindFramebuffer(a.FRAMEBUFFER,
                a.framebuffer);
            a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.id, 0);
            a.viewport(0, 0, this.width, this.height);
            e();
            a.bindFramebuffer(a.FRAMEBUFFER, null)
        };
        var d = null;
        b.prototype.fillUsingCanvas = function(e) {
            e(c(this));
            this.format = a.RGBA;
            this.type = a.UNSIGNED_BYTE;
            a.bindTexture(a.TEXTURE_2D, this.id);
            a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, d);
            return this
        };
        b.prototype.toImage = function(e) {
            this.use();
            l.getDefaultShader().drawRect();
            var f = this.width * this.height * 4,
                g = new Uint8Array(f),h = c(this),i = h.createImageData(this.width, this.height);
            a.readPixels(0, 0, this.width, this.height, a.RGBA, a.UNSIGNED_BYTE, g);
            for (var j = 0; j < f; j++)i.data[j] = g[j];
            h.putImageData(i, 0, 0);
            e.src = d.toDataURL()
        };
        b.prototype.swapWith = function(e) {
            var f;
            f = e.id;
            e.id = this.id;
            this.id = f;
            f = e.width;
            e.width = this.width;
            this.width = f;
            f = e.height;
            e.height = this.height;
            this.height = f;
            f = e.format;
            e.format = this.format;
            this.format = f
        };
        return b
    }(),q = "float random(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}";
    return u
}();
/*!
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.16",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({propAttr:c.fn.prop||c.fn.attr,_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=
this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,
"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":
"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,
outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,
"tabindex"),d=isNaN(b);return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&
a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&
c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)try{b(d).triggerHandler("remove")}catch(e){}k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){try{b(this).triggerHandler("remove")}catch(d){}});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=
function(h){return!!b.data(h,a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):
d;if(e&&d.charAt(0)==="_")return h;e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=
b.extend(true,{},this.options,this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+
"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",
c);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){var d=false;b(document).mouseup(function(){d=false});b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+
this.widgetName)},_mouseDown:function(a){if(!d){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,f=a.which==1,g=typeof this.options.cancel=="string"&&a.target.nodeName?b(a.target).closest(this.options.cancel).length:false;if(!f||g||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(e){return c._mouseMove(e)};this._mouseUpDelegate=function(e){return c._mouseUp(e)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return d=true}},_mouseMove:function(a){if(b.browser.msie&&
!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=
false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Draggable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;if(b.iframeFix)d(b.iframeFix===true?"iframe":b.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")});return true},_mouseStart:function(a){var b=this.options;
this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);d.ui.ddmanager&&d.ui.ddmanager.dragStart(this,a);return true},
_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=
false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,
10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},_mouseUp:function(a){this.options.iframeFix===true&&d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});d.ui.ddmanager&&d.ui.ddmanager.dragStop(this,a);return d.ui.mouse.prototype._mouseUp.call(this,a)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||
!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone().removeAttr("id"):this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&
a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),
10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[a.containment=="document"?0:d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a.containment=="document"?0:d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,
(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){a=d(a.containment);var b=a[0];if(b){a.offset();var c=d(b).css("overflow")!=
"hidden";this.containment=[(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),
10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=a}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+
this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&
!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,h=a.pageY;if(this.originalPosition){var g;if(this.containment){if(this.relative_container){g=this.relative_container.offset();g=[this.containment[0]+g.left,this.containment[1]+g.top,this.containment[2]+g.left,this.containment[3]+g.top]}else g=this.containment;if(a.pageX-this.offset.click.left<g[0])e=g[0]+this.offset.click.left;
if(a.pageY-this.offset.click.top<g[1])h=g[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>g[2])e=g[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>g[3])h=g[3]+this.offset.click.top}if(b.grid){h=b.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/b.grid[1])*b.grid[1]:this.originalPageY;h=g?!(h-this.offset.click.top<g[1]||h-this.offset.click.top>g[3])?h:!(h-this.offset.click.top<g[1])?h-b.grid[1]:h+b.grid[1]:h;e=b.grid[0]?this.originalPageX+Math.round((e-this.originalPageX)/
b.grid[0])*b.grid[0]:this.originalPageX;e=g?!(e-this.offset.click.left<g[0]||e-this.offset.click.left>g[2])?e:!(e-this.offset.click.left<g[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<
526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,
c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.16"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var h=d.data(this,"sortable");if(h&&!h.options.disabled){c.sortables.push({instance:h,shouldRevert:h.options.revert});
h.refreshPositions();h._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=
false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;
c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&
this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=
a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!=
"x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<
c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-
c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,
width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),f=c.options,e=f.snapTolerance,h=b.offset.left,g=h+c.helperProportions.width,n=b.offset.top,o=n+c.helperProportions.height,i=c.snapElements.length-1;i>=0;i--){var j=c.snapElements[i].left,l=j+c.snapElements[i].width,k=c.snapElements[i].top,m=k+c.snapElements[i].height;if(j-e<h&&h<l+e&&k-e<n&&n<m+e||j-e<h&&h<l+e&&k-e<o&&o<m+e||j-e<g&&g<l+e&&k-e<n&&n<m+e||j-e<g&&g<l+e&&k-e<o&&
o<m+e){if(f.snapMode!="inner"){var p=Math.abs(k-o)<=e,q=Math.abs(m-n)<=e,r=Math.abs(j-g)<=e,s=Math.abs(l-h)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l}).left-c.margins.left}var t=
p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(k-n)<=e;q=Math.abs(m-o)<=e;r=Math.abs(j-h)<=e;s=Math.abs(l-g)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[i].snapping&&
(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=p||q||r||s||t}else{c.snapElements[i].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),
10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;
Ext.ns('iwage.image.tools');

Ext.define('iwage.image.tools.Static', {
    extend: 'iwage.tools.Static',
    mode: iwage.MODES.IMAGE,
    refresh: function(itemId, value) {
    }
});
Ext.ns('iwage.fabric.tools');

Ext.define('iwage.image.tools.Open', {
    extend: 'iwage.tools.Open',
    toolLabel: 'Imagen',
    applyTool: function(imagePath) {
        if(Ext.isArray(imagePath)) {
            imagePath = imagePath[0];
        }

        iwage.file.openUrl(imagePath);
    }
});
Ext.ns('iwage.image.tools');

Ext.define('iwage.image.tools.Save', {
    mode: iwage.MODES.IMAGE,
    persist: false,
    unique: true,
    toolLabel: 'Guardar',
    extend: 'iwage.tools.Common',
    buttons: [
        {
            text: 'Guardar',
            icon: iwage.icon('save'),
            handler: function () {
                this.applyTool();
            }
        },
        {
            text: 'Cancelar',
            icon: iwage.icon('delete_cross'),
            handler: function () {
                this.destroy();
            }
        }
    ],
    getSize: function (max) {
        var width, height, prop, w, h, allowed;

        w = width = iwage.file.getWidth();
        h = height = iwage.file.getHeight();

        allowed = true;

        if (max && (max >= width && max >= height)) {
            allowed = false;
        } else {
            if (max && width > height) {
                w = max;
                h = height * w / width;
            } else if (max) {
                h = max;
                w = width * h / height;
            }
        }

        return {
            w: w,
            h: h,
            allowed: allowed
        };
    },
    createControls: function () {
        var tool = this;

        return [
            {
                xtype: 'radiogroup',
                itemId: 'size',
                fieldLabel: 'Tama&ntilde;o',
                columns: 1,
                vertical: true,
                items: [
                    {
                        boxLabel: tool.getSize(150).allowed ? iwage('Miniatura ({w}x{h})').tpl(tool.getSize(150)) : 'MIniatura',
                        name: 'rb',
                        inputValue: iwage('{w}x{h}').tpl(tool.getSize(150)),
                        disabled: !tool.getSize(150).allowed
                    },
                    {
                        boxLabel: tool.getSize(400).allowed ? iwage('Medio ({w}x{h})').tpl(tool.getSize(400)) : 'Medio',
                        name: 'rb',
                        inputValue: iwage('{w}x{h}').tpl(tool.getSize(400)),
                        disabled: !tool.getSize(400).allowed
                    },
                    {
                        boxLabel: tool.getSize(800).allowed ? iwage('Grande ({w}x{h})').tpl(tool.getSize(800)) : 'Grande',
                        name: 'rb',
                        inputValue: iwage('{w}x{h}').tpl(tool.getSize(800)),
                        disabled: !tool.getSize(800).allowed
                    },
                    {
                        boxLabel: iwage('Tama&ntilde;o Completo ({w}x{h})').tpl(tool.getSize()),
                        name: 'rb',
                        checked: true,
                        inputValue: iwage('{w}x{h}').tpl(tool.getSize())
                    }
                ]
            }
        ];
    },
    refresh: function (options) {
    },
    applyTool: function () {
        var values, size;

        values = this.getValues();
        size = values.size.rb.split('x');

        iwage().file.doSave({
            width: size[0],
            height: size[1]
        });

        this.destroy();
    }
});
Ext.ns('iwage.image.tools');

Ext.define('iwage.image.tools.Zoom', {
    mode: iwage.MODES.IMAGE,
    toolLabel: 'Zoom',
    extend: 'iwage.tools.Static',
    buttons: [
        {
            text: 'Tama&ntilde;o orignal',
            icon: iwage.icon('search'),
            handler: function () {
                iwage().view.setZoom(100);

                this.getComponent().down('#zoom').setValue(100);
            }
        }
    ],
    createControls: function () {
        var tool = this;

        return [
            {
                xtype: 'slider',
                fieldLabel: 'Nivel',
                itemId: 'zoom',
                width: 250,
                value: iwage().view.getZoom(),
                minValue: 0,
                maxValue: 250,
                useTips: true,
                tipText: function (thumb) {
                    return Ext.String.format('x{0}', (thumb.value / 100).toFixed(2));
                },
                listeners: {
                    change: function () {
                        tool.refresh();
                    }
                }
            }
        ];
    },
    refresh: function (options) {
        var values = this.getValues();

        if (!values) {
            return;
        }

        iwage().view.setZoom(values.zoom);
    },
    constructor: function (options) {
        var self = this;

        // TODO remover el evento
        iwage.on('app:zoom', function (zoom) {
            self.getComponent().down('#zoom').setValue(zoom);
        });

        this.callParent(arguments);
    },
    applyTool: function () {
    },
    destroy: function () {
        this.callParent(arguments);
    }
});
Ext.ns('iwage.image.tools');

Ext.define('iwage.image.tools.Crop', {
    mode: iwage.MODES.IMAGE,
    toolLabel: 'Recortar',
    extend: 'iwage.tools.Common',
    createControls: function () {
        return [
            {
                xtype: 'label',
                style: 'display:block;padding:0px !important;text-align:center;margin: 0 auto',
                text: 'Seleccione el area a recortar',
                width: 230
            }
        ];
    },
    use: function (options) {

        iwage().view.setZoom(100);
        iwage.emit('app:zoom', 100);

        this.originalImage = new Image;

        this.originalImage.src = options.dataUri;

        this.api = $.Jcrop('.result', {
            handleOpacity: 1
        });

        this.callParent(arguments);
    },
    applyTool: function () {
        var
            canvas = this.createCanvas(),
            context = canvas.getContext('2d'),
            offset, width, height;

        width = this.getWidth();
        height = this.getHeight();
        offset = this.getOffset();

        canvas.width = width;
        canvas.height = height;

        //1160.5 487 123 79 0 0 123 79

        //return console.log(

        context.drawImage(
            // Image
            this.originalImage,
            offset.left,
            offset.top,
            width,
            height,
            // Dest x
            0,
            // Dest y
            0,
            // Dest width
            width,
            // Dest height
            height
        );

        iwage.file.set(canvas.toDataURL('image/png'));
    },
    getWidth: function () {
        return $('.jcrop-holder div:eq(0)').width();
    },
    getHeight: function () {
        return $('.jcrop-holder div:eq(0)').height();
    },
    getOffset: function () {
        var
            el = $('.jcrop-holder div:eq(0)'),
            container = el.parent();

        return {
            top: el.offset().top - container.offset().top,
            left: el.offset().left - container.offset().left
        };
    },
    destroy: function () {
        this.callParent(arguments);
        this.api.destroy();
    }
});
Ext.ns('iwage.image.tools');

Ext.define('iwage.image.tools.FillAlpha', {
    extend:'iwage.tools.Common',
    mode:iwage.MODES.IMAGE,
    persist:true,
    unique:true,
    toolLabel:'Rellenar Transparencia',
    componentWidth:390,
    createControls:function () {
        var tool = this;
        return [
            Ext.create('Ext.ux.colorpicker.ColorPicker', {
                //floating : true,
                width:370,
                itemId:'color',
                baseCls:Ext.baseCSSPrefix + 'colorpicker',
                listeners:{
                    scope:tool,
                    select:function (picker, value) {
                        if (!value) {
                            value = 'transparent';
                        }

                        if (value != 'transparent') {
                            value = '#' + value;
                        }

                        this.refresh(value);
                    }
                }
            })
        ];
    },
    refresh:function (value) {
        // Remover las imagenes de prueba
        $('.result.rounded').remove();

        // Crear la imagen
        var filled = iwage().utils.fillAlpha($('.result').get(0), value);

        // TODO usar metodos estandar
        $(filled)
            .addClass('result')
            .addClass('rounded')
            .appendTo($('.result').parent());
    },
    use:function (options) {
        this.callParent(arguments);

        // TODO usar metodos estandar
        $('.result').hide();

        this.refresh('transparent');
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
Ext.ns('iwage.image.tools');

Ext.define('iwage.image.tools.RoundedCorners', {
    extend: 'iwage.tools.Common',
    mode: iwage.MODES.IMAGE,
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
        $(iwage().utils.roundedCorners($('.result').get(0), values.level))
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
        iwage.file.set(
            iwage.file.imageToDataUri($('.result.rounded').get(0))
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
Ext.ns('iwage.image.tools');

Ext.define('iwage.image.tools.EditAsFabric', {
    toolLabel: 'Editar como grafico',
    extend: 'iwage.image.tools.Static',
    getComponent: function() {
        var tool = this;

        if (this.component) {
            return this.component;
        }

        this.component = Ext.create('Ext.button.Button', {
            text: tool.toolLabel,
            icon: iwage.icon('palette'),
            margin: 5,
            width: 260,
            handler: function() {
                tool.editSelection();
            }
        });

        return this.component;
    },
    onModeChanged: function(mode) {
        if (mode == iwage.MODES.FABRIC) {
            this.hide();
            return;
        }

        if (iwage.get('editing_fabric_as_image')) {
            this.hide();
            return;
        }

        this.show();
    },
    // TODO mover logica a donde corresponda
    editSelection: function() {
        var dataUri = iwage.file.getDataUri();
        var topo = iwage(iwage.MODES.FABRIC).topo;

        iwage(iwage.MODES.FABRIC).clear();

        iwage.set('editing_image_as_fabric', true);

        //topo.clear()

        topo.setHeight(
            iwage.file.getHeight()
        );

        topo.setWidth(
            iwage.file.getWidth()
        );

        iwage.view.centerContainer();

        iwage.services.imageFromDataUri(dataUri, function(link) {
            try {
                fabric.Image.fromURL(link, function(image) {
                    try {
                        iwage.setMode(iwage.MODES.FABRIC);

                        setTimeout(function () {
                            image.set({
                                top: image.get('height') / 2,
                                left: image.get('width') / 2
                            });

                            topo.add(image);
                            topo.refresh();
                            topo.setActiveObject(image);
                        }, 500)
                    } catch(e) {
                        iwage.error(e);
                    }
                });
            } catch(e) {
                iwage.error(e);
            }

        });
    }
});
Ext.ns('iwage.image.tools');

Ext.define('iwage.image.tools.FabricImageReady', {
    extend: 'iwage.image.tools.Static',
    refresh: function(itemId, value) {
    },
    getComponent: function() {
        var tool = this;

        if (this.component) {
            return this.component;
        }

        this.component = Ext.create('Ext.button.Button', {
            text: 'Aplicar cambios',
            icon: iwage.icon('tick'),
            margin: 5,
            width: 260,
            hidden: true,
            handler: function() {
                tool.applyTool();
            }
        });

        return this.component;
    },
    onModeChanged: function(mode) {
        if (mode == iwage.MODES.FABRIC) {
            this.hide();
            return;
        }

        if (!iwage.get('editing_fabric_as_image')) {
            this.hide();
            return;
        }

        this.show();
    },
    // TODO mover logica
    applyTool: function() {
        var dataUri, newImage, oldImage, topo;

        dataUri = iwage.file.getDataUri();
        newImage = fabric.Image.fromDataURL(dataUri);

        oldImage = iwage.fabric.imageHolder;

        if (!oldImage) {
            // error!
            return;
        }

        newImage.set({
            top: oldImage.get('top'),
            left: oldImage.get('left'),
            angle: oldImage.get('angle'),
            opacity: oldImage.get('opacity')
        });

        topo = iwage.fabric.topo;

        topo.add(newImage);
        topo.exec('calcOffset');
        topo.refresh();
        topo.setActiveObject(newImage);

        iwage.fabric.imageHolder = null;
        iwage.file.clear();


        iwage.setMode(iwage.MODES.FABRIC);
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.Common', {
    extend: 'iwage.tools.Common',
    mode: iwage.MODES.IMAGE,
    use: function(options) {
        var fxCanvas, placeholder, image;

        iwage.file.hide();

        placeholder = $('<div/>').addClass('glfx').css({
            position: 'absolute',
            top: options.top || 0,
            left: options.left || 0,
            height: options.height || 300,
            width: options.width || 300,
            backgroundColor: '#f00'
        }).appendTo($('#container'));

        try {
            fxCanvas = fx.canvas();
        } catch (e) {
            iwage.log(e);
            (options.onError || function() {
            })(e);
            return false;
        }

        this.fxCanvas = fxCanvas;

        fxCanvas.width = options.width || 300;
        fxCanvas.height = options.height || 300;

        image = new Image();
        image.src = options.dataUri;
        image.width = options.width;
        image.height = options.height;

        fxCanvas.replace(placeholder.get(0));

        // Imagen original
        this.texture = fxCanvas.texture(image);

        // Render inicial
        this.fxCanvas.draw(this.texture).update();

        iwage.view.adjustContainer();

        this.renderComponent();

        return true;
    },
    applyTool: function() {
        iwage.file.set(this.fxCanvas.toDataURL('image/png'));
    },
    previewFilter: function(values) {
        throw 'Unimplemented method: applyFilter';
    },
    refresh: function() {
        var values = this.getValues();

        if (!values) {
            return;
        }

        this.previewFilter(values);
    },
    destroy: function() {
        this.callParent();
        try {
            this.texture.destroy();
            $(this.fxCanvas).remove();
            this.fxCanvas = null;
        } catch(e) {
        }

        iwage.file.show();
    }
});
Ext.ns('iwage.image.tools.glfx');
/**
 *
 */
Ext.define('iwage.image.tools.glfx.NubFilter', {
    extend: 'iwage.image.tools.glfx.Common',
    createNubs: function() {
        // TODO reciclar el contenedor #nubs
        // $('<div/>').attr('id', 'nubs').appendTo();

        var self = this;

        if (!this.nubs || !this.nubs.length) {
            return;
        }

        Ext.each(this.nubs, function(current) {
            self.createNub(current);
        });
    },
    createNub: function(nub) {
        var x, y, self, element;

        self = this;

        x = nub.x * this.fxCanvas.width;
        y = nub.y * this.fxCanvas.height;

        element = $('<div class="nub" id="nub' + nub.name + '"></div>').appendTo('#nubs');

        var ondrag = (function(self, nub) {
            return function(event, ui) {
                var offset = $(event.target.parentNode).offset();
                self['nub_' + nub.name] = { x: ui.offset.left - offset.left, y: ui.offset.top - offset.top };
                self.refresh();
            };
        })(self, nub);

        element.draggable({
            drag: ondrag,
            containment: 'parent',
            scroll: false
        }).css({ left: x, top: y });

        self['nub_' + nub.name] = { x: x, y: y };
    },
    addNub: function(name, x, y) {
        this.nubs = this.nubs || [];
        this.nubs.push({ name: name, x: x, y: y });
    },
    refresh: function() {
        var
            values = this.getValues(),
            nubs = this.getNubsValues();

        if (!values || !nubs) {
            return;
        }

        this.previewFilter(values, nubs);
    },
    getNubsValues: function() {
        var self = this;
        return this.nubs.reduce(function(memo, current) {
            memo[current.name] = {
                x: self['nub_' + current.name] && self['nub_' + current.name].x || current.x,
                y: self['nub_' + current.name] && self['nub_' + current.name].y || current.y
            };
            return memo;
        }, {});
    },
    destroy: function() {
        this.callParent(arguments);

        // remove nubs
        $('#nubs').children().remove();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.BrightnessContrast', {
    toolLabel: 'Brillo / Contraste',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Brillo',
                itemId: 'brightness',
                width: 350,
                value: 0,
                minValue: -255,
                maxValue: 255
            },
            {
                xtype: 'slider',
                fieldLabel: 'Contraste',
                itemId: 'contrast',
                width: 350,
                value: 0,
                minValue: -255,
                maxValue: 255
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).brightnessContrast(values.brightness / 255, values.contrast / 255).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.Denoise', {
    toolLabel: 'Denoise',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Intensidad',
                itemId: 'value',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 30
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).denoise(values.value).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.EdgeWork', {
    toolLabel: 'Edge Work',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Radio',
                itemId: 'radius',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 500
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).edgeWork(values.radius / 10).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.HexagonalPixelate', {
    toolLabel: 'Pixelado Hexagonal',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Escala',
                itemId: 'scale',
                width: 350,
                value: 1,
                minValue: 1,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).hexagonalPixelate(0, 0, values.scale).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.HueSaturation', {
    toolLabel: 'Hue / Saturacion',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'HUE',
                itemId: 'hue',
                width: 350,
                value: 0,
                minValue: -180,
                maxValue: 180
            },
            {
                xtype: 'slider',
                fieldLabel: 'Saturacion',
                itemId: 'saturation',
                width: 350,
                value: 0,
                minValue: -100,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).hueSaturation(values.hue / 180, values.saturation / 100).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.Ink', {
    toolLabel: 'Ink',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Intensidad',
                itemId: 'value',
                width: 350,
                value: 0,
                minValue: -100,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).ink(values.value / 100).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.LensBlur', {
    extend: 'iwage.image.tools.glfx.Common',
    toolLabel: 'Lens Blur',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Radio',
                itemId: 'radius',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 100
            },
            {
                xtype: 'slider',
                fieldLabel: 'Brillo',
                itemId: 'brightness',
                width: 350,
                value: 0,
                minValue: -100,
                maxValue: 100
            },
            {
                xtype: 'slider',
                fieldLabel: 'Angulo',
                itemId: 'angle',
                width: 350,
                value: 0,
                increment: 0.1,
                minValue: -Math.PI,
                maxValue: Math.PI
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).lensBlur(
            values.radius,
            values.brightness / 100,
            values.angle
        ).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.Noise', {
    toolLabel: 'Noise',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Intensidad',
                itemId: 'value',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).noise(values.value / 100).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.Sepia', {
    toolLabel: 'Sepia',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Intensidad',
                itemId: 'value',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).sepia(values.value / 100).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.TriangleBlur', {
    toolLabel: 'Triangle Blur',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Radio',
                itemId: 'radius',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).triangleBlur(values.radius).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.UnsharpMask', {
    toolLabel: 'Unsharp Mask',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Radio',
                itemId: 'radius',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 100
            },
            {
                xtype: 'slider',
                fieldLabel: 'Intensidad',
                itemId: 'strength',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).unsharpMask(values.radius, values.strength).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.Vibrance', {
    toolLabel: 'Vibrance',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Intensidad',
                itemId: 'value',
                width: 350,
                value: 0,
                minValue: -100,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).vibrance(values.value / 100).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.Vignette', {
    toolLabel: 'Vignette',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Tama&ntilde;o',
                itemId: 'size',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 100
            },
            {
                xtype: 'slider',
                fieldLabel: 'Intensidad',
                itemId: 'amount',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values) {
        this.fxCanvas.draw(this.texture).vignette(values.size / 100, values.amount / 100).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.ColorHalftone', {
    toolLabel: 'Color Halftone',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Escala',
                itemId: 'size',
                width: 350,
                value: 1,
                minValue: 1,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values, nubs) {
        this.fxCanvas.draw(this.texture).colorHalftone(
            0,
            0,
            Math.PI,
            values.size
        ).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.DotScreen', {
    toolLabel: 'Dot Screen',
    extend: 'iwage.image.tools.glfx.Common',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Escala',
                itemId: 'size',
                width: 350,
                value: 1,
                minValue: 1,
                maxValue: 100
            }
        ];
    },
    previewFilter: function(values, nubs) {
        this.fxCanvas.draw(this.texture).dotScreen(
            0,
            0,
            Math.PI,
            values.size
        ).update();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.Swirl', {
    toolLabel: 'Swirl',
    extend: 'iwage.image.tools.glfx.NubFilter',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Radio',
                itemId: 'radius',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 255
            },
            {
                xtype: 'slider',
                fieldLabel: 'Angulo',
                itemId: 'angle',
                width: 350,
                value: 0,
                increment: 0.1,
                minValue: -Math.PI,
                maxValue: Math.PI
            }
        ];
    },
    previewFilter: function(values, nubs) {
        this.fxCanvas.draw(this.texture).swirl(
            nubs.center.x,
            nubs.center.y,
            values.radius,
            values.angle
        ).update();
    },
    use: function(options) {
        this.addNub('center', 0.5, 0.5);

        this.callParent(arguments);

        // setup nubs
        this.createNubs();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.BulgePinch', {
    toolLabel: 'Bulge / Pinch',
    extend: 'iwage.image.tools.glfx.NubFilter',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Radio',
                itemId: 'radius',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 255
            },
            {
                xtype: 'slider',
                fieldLabel: 'Intensidad',
                itemId: 'strength',
                width: 350,
                value: 0,
                minValue: -100,
                maxValue:100
            }
        ];
    },
    previewFilter: function(values, nubs) {
        this.fxCanvas.draw(this.texture).bulgePinch(
            nubs.center.x,
            nubs.center.y,
            values.radius,
            values.strength / 100
        ).update();
    },
    use: function(options) {
        this.addNub('center', 0.5, 0.5);

        this.callParent(arguments);

        // setup nubs
        this.createNubs();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.ZoomBlur', {
    toolLabel: 'Zoom Blur',
    extend: 'iwage.image.tools.glfx.NubFilter',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Intensidad',
                itemId: 'strength',
                width: 350,
                value: 0,
                minValue: -100,
                maxValue:100
            }
        ];
    },
    previewFilter: function(values, nubs) {
        this.fxCanvas.draw(this.texture).zoomBlur(
            nubs.center.x,
            nubs.center.y,
            values.strength / 100
        ).update();
    },
    use: function(options) {
        this.addNub('center', 0.5, 0.5);

        this.callParent(arguments);

        // setup nubs
        this.createNubs();
    }
});
Ext.ns('iwage.image.tools.glfx');

Ext.define('iwage.image.tools.glfx.TiltShift', {
    toolLabel: 'Tilt Shift',
    extend: 'iwage.image.tools.glfx.NubFilter',
    createControls: function() {
        return [
            {
                xtype: 'slider',
                fieldLabel: 'Blur radius',
                itemId: 'blurRadius',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 255
            },
            {
                xtype: 'slider',
                fieldLabel: 'Gradient radius',
                itemId: 'gradientRadius',
                width: 350,
                value: 0,
                minValue: 0,
                maxValue: 255
            }
        ];
    },
    previewFilter: function(values, nubs) {
        this.fxCanvas.draw(this.texture).tiltShift(
            nubs.start.x,
            nubs.start.y,
            nubs.end.x,
            nubs.end.y,
            values.blurRadius,
            values.gradientRadius
        ).update();
    },
    use: function(options) {
        this.addNub('start', 0.25, 0.5);
        this.addNub('end', 0.75, 0.5);

        this.callParent(arguments);

        // setup nubs
        this.createNubs();
    }
});