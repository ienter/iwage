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
            tpl:function (o) {
                return iwage.tpl(args[0], o);
            }
        };
    }
}

iwage.getMode = function () {
    return iwage._mode;
};

iwage.tpl = function (str, obj) {
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            str = str.replace((new RegExp('\\{' + prop.toString() + '\\}', 'g')), obj[prop] || '');
        }
    }

    return str;
};

iwage._values = {};

iwage.set = function (key, value) {
    return (iwage._values[key] = value);
};
iwage.get = function (key) {
    return iwage._values[key];
};

iwage.unset = function (key) {
    return delete iwage._values[key];
};

/**
 * Creates the namespace for all registered modes
 *
 * @param {String} namespace
 */
iwage.ns = function (namespace) {
    namespace in iwage || (iwage[namespace] = {});

    for (var p in iwage.MODES) {
        p in iwage || (iwage[p] = {});
        namespace in iwage[p] || (iwage[p][namespace] = {});

    }
};

iwage.uid = (function () {
    var map = {};
    return function (prefix) {
        prefix = prefix || 'generated';
        map[prefix] = map[prefix] || 0;

        var id = prefix + '-' + map[prefix]++;

        if (document.getElementById(id)) {
            return createId(prefix);
        }
        return id;
    }
})();

iwage.path = function (path, root) {
    var parts, i, l;

    parts = path.split('.');
    root = root || iwage();

    for (i = 0, l = parts.length; i < l; i++) {
        if (!root[parts[i]]) {
            return null;
        }
        root = root[parts[i]];
    }

    return root;
}

iwage.exec = function (method, args) {
    var ref, context;

    ref = iwage.path(method);

    if (!ref) {
        iwage.warn('Method ' + method + ' is not implemented (' + iwage.getMode() + ')');
        return;
    }

    context = iwage.path(method.replace(/\.[^\.]+$/, ''));

    return ref.apply(context, args);
};

Ext.ns('iwage.tools');
Ext.ns('iwage.util');
Ext.ns('iwage.fabric');

iwage.log = function () {
    console && console.log.apply(console, arguments);
};

iwage.warn = function () {
    console && console.warn.apply(console, arguments);
};

iwage.error = function () {
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
iwage.start = function (options) {
    options = Ext.apply({
        mode:iwage.MODES.IMAGE,
        modes:{
            IMAGE:true,
            FABRIC:true
        },
        fabricWidth:300,
        fabricHeight:300
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

iwage.mode = function (mode) {
    if (!mode) {
        mode = iwage.getMode().toLowerCase();
    }

    if (!iwage[mode]) {
        iwage[mode] = {};
    }

    return iwage[mode];
};

iwage.eachMode = function (fn) {
    Ext.iterate(iwage.MODES, function (mode) {
        fn(iwage(mode));
    });
};

iwage.setMode = function (mode) {
    iwage._mode = mode;
    iwage.emit('app:mode', mode);
    iwage.tools.clear();
    iwage.view.centerContainer();
    iwage.tools.setMode(mode);
};

iwage.cancel = function () {
    iwage.emit('app:cancel');
};

iwage.util.listenersForMode = function (onFabricMode, onImageMode) {
    return {
        afterrender:function (self) {
            iwage.on('app:mode', function (mode) {
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
        function (memo, current, index) {
            return memo + current.charCodeAt(0) * (index + 1);
        }, 0).toString(16);
};


iwage.services = {
    imageFromDataUri:function (dataUri, callback) {
        iwage.warn('NOT IMPLEMENTED!');
    }
};
iwage.MODES = {
    IMAGE: 'IMAGE',
    FABRIC: 'FABRIC'
};
iwage.ev = {
    _handlers:{},
    on:function (ev, handler, scope) {
        if (Ext.isArray(ev)) {
            Ext.each(ev, function (current) {
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
    one:function (ev, handler, scope) {
        ev.$single = true;

        this.on(ev, handler, scope);
    },
    off:function (ev, handler) {
        if (!this._handlers[ev]) {
            return;
        }
    },
    emit:function (ev) {
        if (!this._handlers[ev]) {
            return;
        }

        var
            args = Array.prototype.slice.call(arguments, 1),
            handlers = [];

        this._handlers[ev].forEach(function (handler) {
            handler.apply(handler.scope, args);

            if (!handler.$single) {
                handlers.push(handler);
            }
        });
    }
};

iwage.on = function () {
    iwage.ev.on.apply(iwage.ev, arguments);
};

iwage.off = function () {
    iwage.ev.off.apply(iwage.ev, arguments);
};

iwage.emit = function () {
    iwage.ev.emit.apply(iwage.ev, arguments);
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

iwage.lang = iwage.view.lang = function(lang, labels) {
    iwage
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


iwage.alert = function (msg) {
    Ext.MessageBox.alert('Aviso', msg);
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
                title: iwage.label('tools'),
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
    var basePath =  '/src/images/icons/';

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
iwage.ns('i18n');

iwage.i18n.labels = {};

// TODO add support for merge tools labels
iwage.i18n.register = function (lang, labels) {
    iwage.i18n.labels[lang] = labels;
};

iwage.label = iwage.i18n.label = function (label) {
    var langs, lang;

    langs = iwage.i18n.labels;
    lang = iwage.i18n.lang || 'es';

    if (!langs[lang] || !langs[lang][label]) {
        return '[' + label + ']';
    }

    return langs[lang][label];
};
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
            text: iwage.label('Editor de graficos'),
            icon: iwage.icon('palette'),
            disabled: iwage.getMode() == iwage.MODES.FABRIC,
            handler: function() {
                iwage.setMode(iwage.MODES.FABRIC);
            },
            listeners: iwage.util.listenersForMode('disable', 'enable')
        },
        '-',
        {
            text: iwage.label('Editor de imagenes'),
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
/*! Fabric.js Copyright 2008-2011, Bitsonnet (Juriy Zaytsev, Maxim Chernyak) */

var fabric = fabric || { version: "0.6.13" };

if (typeof exports != 'undefined') {
  exports.fabric = fabric;
}

if (typeof document != 'undefined' && typeof window != 'undefined') {
  fabric.document = document;
  fabric.window = window;
}
else {
  // assume we're running under node.js when document/window are not present
  fabric.document = require("jsdom").jsdom("<!DOCTYPE html><html><head></head><body></body></html>");
  fabric.window = fabric.document.createWindow();
}

/**
 * True when in environment that supports touch events
 * @property isTouchSupported
 * @type boolean
 */
fabric.isTouchSupported = "ontouchstart" in fabric.document.documentElement;
/*
    http://www.JSON.org/json2.js
    2010-03-20

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
/*!
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 */

var Cufon = (function() {

  var api = function() {
    return api.replace.apply(null, arguments);
  };

  var DOM = api.DOM = {

    ready: (function() {

      var complete = false, readyStatus = { loaded: 1, complete: 1 };

      var queue = [], perform = function() {
        if (complete) return;
        complete = true;
        for (var fn; fn = queue.shift(); fn());
      };

      // Gecko, Opera, WebKit r26101+

      if (fabric.document.addEventListener) {
        fabric.document.addEventListener('DOMContentLoaded', perform, false);
        fabric.window.addEventListener('pageshow', perform, false); // For cached Gecko pages
      }

      // Old WebKit, Internet Explorer

      if (!fabric.window.opera && fabric.document.readyState) (function() {
        readyStatus[fabric.document.readyState] ? perform() : setTimeout(arguments.callee, 10);
      })();

      // Internet Explorer

      if (fabric.document.readyState && fabric.document.createStyleSheet) (function() {
        try {
          fabric.document.body.doScroll('left');
          perform();
        }
        catch (e) {
          setTimeout(arguments.callee, 1);
        }
      })();

      addEvent(fabric.window, 'load', perform); // Fallback

      return function(listener) {
        if (!arguments.length) perform();
        else complete ? listener() : queue.push(listener);
      };

    })()

  };

  var CSS = api.CSS = {

    Size: function(value, base) {

      this.value = parseFloat(value);
      this.unit = String(value).match(/[a-z%]*$/)[0] || 'px';

      this.convert = function(value) {
        return value / base * this.value;
      };

      this.convertFrom = function(value) {
        return value / this.value * base;
      };

      this.toString = function() {
        return this.value + this.unit;
      };

    },

    getStyle: function(el) {
      return new Style(el.style);
      /*
      var view = document.defaultView;
      if (view && view.getComputedStyle) return new Style(view.getComputedStyle(el, null));
      if (el.currentStyle) return new Style(el.currentStyle);
      return new Style(el.style);
      */
    },

    quotedList: cached(function(value) {
      // doesn't work properly with empty quoted strings (""), but
      // it's not worth the extra code.
      var list = [], re = /\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g, match;
      while (match = re.exec(value)) list.push(match[3] || match[1]);
      return list;
    }),

    ready: (function() {

      var complete = false;

      var queue = [], perform = function() {
        complete = true;
        for (var fn; fn = queue.shift(); fn());
      };

      // Safari 2 does not include <style> elements in document.styleSheets.
      // Safari 2 also does not support Object.prototype.propertyIsEnumerable.

      var styleElements = Object.prototype.propertyIsEnumerable ? elementsByTagName('style') : { length: 0 };
      var linkElements = elementsByTagName('link');

      DOM.ready(function() {
        // These checks are actually only needed for WebKit-based browsers, but don't really hurt other browsers.
        var linkStyles = 0, link;
        for (var i = 0, l = linkElements.length; link = linkElements[i], i < l; ++i) {
          // WebKit does not load alternate stylesheets.
          if (!link.disabled && link.rel.toLowerCase() == 'stylesheet') ++linkStyles;
        }
        if (fabric.document.styleSheets.length >= styleElements.length + linkStyles) perform();
        else setTimeout(arguments.callee, 10);
      });

      return function(listener) {
        if (complete) listener();
        else queue.push(listener);
      };

    })(),

    supports: function(property, value) {
      var checker = fabric.document.createElement('span').style;
      if (checker[property] === undefined) return false;
      checker[property] = value;
      return checker[property] === value;
    },

    textAlign: function(word, style, position, wordCount) {
      if (style.get('textAlign') == 'right') {
        if (position > 0) word = ' ' + word;
      }
      else if (position < wordCount - 1) word += ' ';
      return word;
    },

    textDecoration: function(el, style) {
      if (!style) style = this.getStyle(el);
      var types = {
        underline: null,
        overline: null,
        'line-through': null
      };
      for (var search = el; search.parentNode && search.parentNode.nodeType == 1; ) {
        var foundAll = true;
        for (var type in types) {
          if (types[type]) continue;
          if (style.get('textDecoration').indexOf(type) != -1) types[type] = style.get('color');
          foundAll = false;
        }
        if (foundAll) break; // this is rather unlikely to happen
        style = this.getStyle(search = search.parentNode);
      }
      return types;
    },

    textShadow: cached(function(value) {
      if (value == 'none') return null;
      var shadows = [], currentShadow = {}, result, offCount = 0;
      var re = /(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;
      while (result = re.exec(value)) {
        if (result[0] == ',') {
          shadows.push(currentShadow);
          currentShadow = {}, offCount = 0;
        }
        else if (result[1]) {
          currentShadow.color = result[1];
        }
        else {
          currentShadow[[ 'offX', 'offY', 'blur' ][offCount++]] = result[2];
        }
      }
      shadows.push(currentShadow);
      return shadows;
    }),

    color: cached(function(value) {
      var parsed = {};
      parsed.color = value.replace(/^rgba\((.*?),\s*([\d.]+)\)/, function($0, $1, $2) {
        parsed.opacity = parseFloat($2);
        return 'rgb(' + $1 + ')';
      });
      return parsed;
    }),

    textTransform: function(text, style) {
      return text[{
        uppercase: 'toUpperCase',
        lowercase: 'toLowerCase'
      }[style.get('textTransform')] || 'toString']();
    }

  };

  function Font(data) {

    var face = this.face = data.face;
    this.glyphs = data.glyphs;
    this.w = data.w;
    this.baseSize = parseInt(face['units-per-em'], 10);

    this.family = face['font-family'].toLowerCase();
    this.weight = face['font-weight'];
    this.style = face['font-style'] || 'normal';

    this.viewBox = (function () {
      var parts = face.bbox.split(/\s+/);
      var box = {
        minX: parseInt(parts[0], 10),
        minY: parseInt(parts[1], 10),
        maxX: parseInt(parts[2], 10),
        maxY: parseInt(parts[3], 10)
      };
      box.width = box.maxX - box.minX,
      box.height = box.maxY - box.minY;
      box.toString = function() {
        return [ this.minX, this.minY, this.width, this.height ].join(' ');
      };
      return box;
    })();

    this.ascent = -parseInt(face.ascent, 10);
    this.descent = -parseInt(face.descent, 10);

    this.height = -this.ascent + this.descent;

  }

  function FontFamily() {

    var styles = {}, mapping = {
      oblique: 'italic',
      italic: 'oblique'
    };

    this.add = function(font) {
      (styles[font.style] || (styles[font.style] = {}))[font.weight] = font;
    };

    this.get = function(style, weight) {
      var weights = styles[style] || styles[mapping[style]]
        || styles.normal || styles.italic || styles.oblique;
      if (!weights) return null;
      // we don't have to worry about "bolder" and "lighter"
      // because IE's currentStyle returns a numeric value for it,
      // and other browsers use the computed value anyway
      weight = {
        normal: 400,
        bold: 700
      }[weight] || parseInt(weight, 10);
      if (weights[weight]) return weights[weight];
      // http://www.w3.org/TR/CSS21/fonts.html#propdef-font-weight
      // Gecko uses x99/x01 for lighter/bolder
      var up = {
        1: 1,
        99: 0
      }[weight % 100], alts = [], min, max;
      if (up === undefined) up = weight > 400;
      if (weight == 500) weight = 400;
      for (var alt in weights) {
        alt = parseInt(alt, 10);
        if (!min || alt < min) min = alt;
        if (!max || alt > max) max = alt;
        alts.push(alt);
      }
      if (weight < min) weight = min;
      if (weight > max) weight = max;
      alts.sort(function(a, b) {
        return (up
          ? (a > weight && b > weight) ? a < b : a > b
          : (a < weight && b < weight) ? a > b : a < b) ? -1 : 1;
      });
      return weights[alts[0]];
    };

  }

  function HoverHandler() {

    function contains(node, anotherNode) {
      if (node.contains) return node.contains(anotherNode);
      return node.compareDocumentPosition(anotherNode) & 16;
    }

    function onOverOut(e) {
      var related = e.relatedTarget;
      if (!related || contains(this, related)) return;
      trigger(this);
    }

    function onEnterLeave(e) {
      trigger(this);
    }

    function trigger(el) {
      // A timeout is needed so that the event can actually "happen"
      // before replace is triggered. This ensures that styles are up
      // to date.
      setTimeout(function() {
        api.replace(el, sharedStorage.get(el).options, true);
      }, 10);
    }

    this.attach = function(el) {
      if (el.onmouseenter === undefined) {
        addEvent(el, 'mouseover', onOverOut);
        addEvent(el, 'mouseout', onOverOut);
      }
      else {
        addEvent(el, 'mouseenter', onEnterLeave);
        addEvent(el, 'mouseleave', onEnterLeave);
      }
    };

  }

  function Storage() {

    var map = {}, at = 0;

    function identify(el) {
      return el.cufid || (el.cufid = ++at);
    }

    this.get = function(el) {
      var id = identify(el);
      return map[id] || (map[id] = {});
    };

  }

  function Style(style) {

    var custom = {}, sizes = {};

    this.get = function(property) {
      return custom[property] != undefined ? custom[property] : style[property];
    };

    this.getSize = function(property, base) {
      return sizes[property] || (sizes[property] = new CSS.Size(this.get(property), base));
    };

    this.extend = function(styles) {
      for (var property in styles) custom[property] = styles[property];
      return this;
    };

  }

  function addEvent(el, type, listener) {
    if (el.addEventListener) {
      el.addEventListener(type, listener, false);
    }
    else if (el.attachEvent) {
      el.attachEvent('on' + type, function() {
        return listener.call(el, fabric.window.event);
      });
    }
  }

  function attach(el, options) {
    var storage = sharedStorage.get(el);
    if (storage.options) return el;
    if (options.hover && options.hoverables[el.nodeName.toLowerCase()]) {
      hoverHandler.attach(el);
    }
    storage.options = options;
    return el;
  }

  function cached(fun) {
    var cache = {};
    return function(key) {
      if (!cache.hasOwnProperty(key)) cache[key] = fun.apply(null, arguments);
      return cache[key];
    };
  }

  function getFont(el, style) {
    if (!style) style = CSS.getStyle(el);
    var families = CSS.quotedList(style.get('fontFamily').toLowerCase()), family;
    for (var i = 0, l = families.length; i < l; ++i) {
      family = families[i];
      if (fonts[family]) return fonts[family].get(style.get('fontStyle'), style.get('fontWeight'));
    }
    return null;
  }

  function elementsByTagName(query) {
    return fabric.document.getElementsByTagName(query);
  }

  function merge() {
    var merged = {}, key;
    for (var i = 0, l = arguments.length; i < l; ++i) {
      for (key in arguments[i]) merged[key] = arguments[i][key];
    }
    return merged;
  }

  function process(font, text, style, options, node, el) {

    var separate = options.separate;
    if (separate == 'none') return engines[options.engine].apply(null, arguments);
    var fragment = fabric.document.createDocumentFragment(), processed;
    var parts = text.split(separators[separate]), needsAligning = (separate == 'words');
    if (needsAligning && HAS_BROKEN_REGEXP) {
      // @todo figure out a better way to do this
      if (/^\s/.test(text)) parts.unshift('');
      if (/\s$/.test(text)) parts.push('');
    }
    for (var i = 0, l = parts.length; i < l; ++i) {
      processed = engines[options.engine](font,
        needsAligning ? CSS.textAlign(parts[i], style, i, l) : parts[i],
        style, options, node, el, i < l - 1);
      if (processed) fragment.appendChild(processed);
    }
    return fragment;
  }

  function replaceElement(el, options) {
    var font, style, nextNode, redraw;
    for (var node = attach(el, options).firstChild; node; node = nextNode) {
      nextNode = node.nextSibling;
      redraw = false;
      if (node.nodeType == 1) {
        if (!node.firstChild) continue;
        if (!/cufon/.test(node.className)) {
          arguments.callee(node, options);
          continue;
        }
        else redraw = true;
      }
      if (!style) style = CSS.getStyle(el).extend(options);
      if (!font) font = getFont(el, style);

      if (!font) continue;
      if (redraw) {
        engines[options.engine](font, null, style, options, node, el);
        continue;
      }
      var text = node.data;
      if (text === '') continue;
      var processed = process(font, text, style, options, node, el);
      if (processed) node.parentNode.replaceChild(processed, node);
      else node.parentNode.removeChild(node);
    }
  }

  var HAS_BROKEN_REGEXP = ' '.split(/\s+/).length == 0;

  var sharedStorage = new Storage();
  var hoverHandler = new HoverHandler();
  var replaceHistory = [];

  var engines = {}, fonts = {}, defaultOptions = {
    engine: null,
    //fontScale: 1,
    //fontScaling: false,
    hover: false,
    hoverables: {
      a: true
    },
    printable: true,
    //rotation: 0,
    //selectable: false,
    selector: (
        fabric.window.Sizzle
      ||  (fabric.window.jQuery && function(query) { return jQuery(query); }) // avoid noConflict issues
      ||  (fabric.window.dojo && dojo.query)
      ||  (fabric.window.$$ && function(query) { return $$(query); })
      ||  (fabric.window.$ && function(query) { return $(query); })
      ||  (fabric.document.querySelectorAll && function(query) { return fabric.document.querySelectorAll(query); })
      ||  elementsByTagName
    ),
    separate: 'words', // 'none' and 'characters' are also accepted
    textShadow: 'none'
  };

  var separators = {
    words: /\s+/,
    characters: ''
  };

  api.now = function() {
    DOM.ready();
    return api;
  };

  api.refresh = function() {
    var currentHistory = replaceHistory.splice(0, replaceHistory.length);
    for (var i = 0, l = currentHistory.length; i < l; ++i) {
      api.replace.apply(null, currentHistory[i]);
    }
    return api;
  };

  api.registerEngine = function(id, engine) {
    if (!engine) return api;
    engines[id] = engine;
    return api.set('engine', id);
  };

  api.registerFont = function(data) {
    var font = new Font(data), family = font.family;
    if (!fonts[family]) fonts[family] = new FontFamily();
    fonts[family].add(font);
    return api.set('fontFamily', '"' + family + '"');
  };

  api.replace = function(elements, options, ignoreHistory) {
    options = merge(defaultOptions, options);
    if (!options.engine) return api; // there's no browser support so we'll just stop here
    if (typeof options.textShadow == 'string' && options.textShadow)
      options.textShadow = CSS.textShadow(options.textShadow);
    if (!ignoreHistory) replaceHistory.push(arguments);
    if (elements.nodeType || typeof elements == 'string') elements = [ elements ];
    CSS.ready(function() {
      for (var i = 0, l = elements.length; i < l; ++i) {
        var el = elements[i];
        if (typeof el == 'string') api.replace(options.selector(el), options, true);
        else replaceElement(el, options);
      }
    });
    return api;
  };

  api.replaceElement = function(el, options) {
    options = merge(defaultOptions, options);
    if (typeof options.textShadow == 'string' && options.textShadow)
      options.textShadow = CSS.textShadow(options.textShadow);
    return replaceElement(el, options);
  };

  // ==>
  api.engines = engines;
  api.fonts = fonts;
  api.getOptions = function() {
    return merge(defaultOptions);
  }
  // <==

  api.set = function(option, value) {
    defaultOptions[option] = value;
    return api;
  };

  return api;

})();

Cufon.registerEngine('canvas', (function() {

  // Safari 2 doesn't support .apply() on native methods

  var check = fabric.document.createElement('canvas');
  if (!check || !check.getContext || !check.getContext.apply) return;
  check = null;

  var HAS_INLINE_BLOCK = Cufon.CSS.supports('display', 'inline-block');

  // Firefox 2 w/ non-strict doctype (almost standards mode)
  var HAS_BROKEN_LINEHEIGHT = !HAS_INLINE_BLOCK && (fabric.document.compatMode == 'BackCompat' || /frameset|transitional/i.test(fabric.document.doctype.publicId));

  var styleSheet = fabric.document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.appendChild(fabric.document.createTextNode(
    '.cufon-canvas{text-indent:0}' +
    '@media screen,projection{' +
      '.cufon-canvas{display:inline;display:inline-block;position:relative;vertical-align:middle' +
      (HAS_BROKEN_LINEHEIGHT
        ? ''
        : ';font-size:1px;line-height:1px') +
      '}.cufon-canvas .cufon-alt{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden}' +
      (HAS_INLINE_BLOCK
        ? '.cufon-canvas canvas{position:relative}'
        : '.cufon-canvas canvas{position:absolute}') +
    '}' +
    '@media print{' +
      '.cufon-canvas{padding:0 !important}' +
      '.cufon-canvas canvas{display:none}' +
      '.cufon-canvas .cufon-alt{display:inline}' +
    '}'
  ));
  fabric.document.getElementsByTagName('head')[0].appendChild(styleSheet);

  function generateFromVML(path, context) {
    var atX = 0, atY = 0;
    var code = [], re = /([mrvxe])([^a-z]*)/g, match;
    generate: for (var i = 0; match = re.exec(path); ++i) {
      var c = match[2].split(',');
      switch (match[1]) {
        case 'v':
          code[i] = { m: 'bezierCurveTo', a: [ atX + ~~c[0], atY + ~~c[1], atX + ~~c[2], atY + ~~c[3], atX += ~~c[4], atY += ~~c[5] ] };
          break;
        case 'r':
          code[i] = { m: 'lineTo', a: [ atX += ~~c[0], atY += ~~c[1] ] };
          break;
        case 'm':
          code[i] = { m: 'moveTo', a: [ atX = ~~c[0], atY = ~~c[1] ] };
          break;
        case 'x':
          code[i] = { m: 'closePath' };
          break;
        case 'e':
          break generate;
      }
      context[code[i].m].apply(context, code[i].a);
    }
    return code;
  }

  function interpret(code, context) {
    for (var i = 0, l = code.length; i < l; ++i) {
      var line = code[i];
      context[line.m].apply(context, line.a);
    }
  }

  return function(font, text, style, options, node, el) {

    var redraw = (text === null);

    var viewBox = font.viewBox;

    var size = style.getSize('fontSize', font.baseSize);

    var letterSpacing = style.get('letterSpacing');
    letterSpacing = (letterSpacing == 'normal') ? 0 : size.convertFrom(parseInt(letterSpacing, 10));

    var expandTop = 0, expandRight = 0, expandBottom = 0, expandLeft = 0;
    var shadows = options.textShadow, shadowOffsets = [];
    if (shadows) {
      for (var i = 0, l = shadows.length; i < l; ++i) {
        var shadow = shadows[i];
        var x = size.convertFrom(parseFloat(shadow.offX));
        var y = size.convertFrom(parseFloat(shadow.offY));
        shadowOffsets[i] = [ x, y ];
        if (y < expandTop) expandTop = y;
        if (x > expandRight) expandRight = x;
        if (y > expandBottom) expandBottom = y;
        if (x < expandLeft) expandLeft = x;
      }
    }

    var chars = Cufon.CSS.textTransform(redraw ? node.alt : text, style).split('');

    var width = 0, lastWidth = null;

    var maxWidth = 0, lines = 1, lineWidths = [ ];
    for (var i = 0, l = chars.length; i < l; ++i) {
      if (chars[i] === '\n') {
        lines++;
        if (width > maxWidth) {
          maxWidth = width;
        }
        lineWidths.push(width);
        width = 0;
        continue;
      }
      var glyph = font.glyphs[chars[i]] || font.missingGlyph;
      if (!glyph) continue;
      width += lastWidth = Number(glyph.w || font.w) + letterSpacing;
    }
    lineWidths.push(width);

    width = Math.max(maxWidth, width);

    var lineOffsets = [ ];
    for (var i = lineWidths.length; i--; ) {
      lineOffsets[i] = width - lineWidths[i];
    }

    if (lastWidth === null) return null; // there's nothing to render

    expandRight += (viewBox.width - lastWidth);
    expandLeft += viewBox.minX;

    var wrapper, canvas;

    if (redraw) {
      wrapper = node;
      canvas = node.firstChild;
    }
    else {
      wrapper = fabric.document.createElement('span');
      wrapper.className = 'cufon cufon-canvas';
      wrapper.alt = text;

      canvas = fabric.document.createElement('canvas');
      wrapper.appendChild(canvas);

      if (options.printable) {
        var print = fabric.document.createElement('span');
        print.className = 'cufon-alt';
        print.appendChild(fabric.document.createTextNode(text));
        wrapper.appendChild(print);
      }
    }

    var wStyle = wrapper.style;
    var cStyle = canvas.style || { };

    var height = size.convert(viewBox.height - expandTop + expandBottom);
    var roundedHeight = Math.ceil(height);
    var roundingFactor = roundedHeight / height;

    canvas.width = Math.ceil(size.convert(width + expandRight - expandLeft) * roundingFactor);
    canvas.height = roundedHeight;

    expandTop += viewBox.minY;

    cStyle.top = Math.round(size.convert(expandTop - font.ascent)) + 'px';
    cStyle.left = Math.round(size.convert(expandLeft)) + 'px';

    var _width = Math.ceil(size.convert(width * roundingFactor));
    var wrapperWidth = _width + 'px';
    var _height = size.convert(font.height);
    var totalLineHeight = (options.lineHeight - 1) * size.convert(-font.ascent / 5) * (lines - 1);

    Cufon.textOptions.width = _width;
    Cufon.textOptions.height = (_height * lines) + totalLineHeight;
    Cufon.textOptions.lines = lines;

    if (HAS_INLINE_BLOCK) {
      wStyle.width = wrapperWidth;
      wStyle.height = _height + 'px';
    }
    else {
      wStyle.paddingLeft = wrapperWidth;
      wStyle.paddingBottom = (_height - 1) + 'px';
    }

    var g = Cufon.textOptions.context || canvas.getContext('2d'),
        scale = roundedHeight / viewBox.height;

    g.save();
    g.scale(scale, scale);

    g.translate(
      // we're at the center of an object and need to jump to the top left corner
      // where first character is to be drawn
      -expandLeft - ((1/scale * canvas.width) / 2) + (Cufon.fonts[font.family].offsetLeft || 0),
      -expandTop - (Cufon.textOptions.height / scale) / 2
    );

    g.lineWidth = font.face['underline-thickness'];

    g.save();

    function line(y, color) {
      g.strokeStyle = color;

      g.beginPath();

      g.moveTo(0, y);
      g.lineTo(width, y);

      g.stroke();
    }

    var textDecoration = Cufon.getTextDecoration(options),
        isItalic = options.fontStyle === 'italic';

    function renderBackground() {
      g.save();

      g.fillStyle = options.backgroundColor;

      var left = 0, lineNum = 0;

      if (options.textAlign === 'right') {
        g.translate(lineOffsets[lineNum], 0);
      }
      else if (options.textAlign === 'center') {
        g.translate(lineOffsets[lineNum] / 2, 0);
      }

      for (var i = 0, l = chars.length; i < l; ++i) {
        if (chars[i] === '\n') {

          lineNum++;

          var topOffset = -font.ascent - ((font.ascent / 5) * options.lineHeight);

          if (options.textAlign === 'right') {
            g.translate(-width, topOffset);
            g.translate(lineOffsets[lineNum], 0);
          }
          else if (options.textAlign === 'center') {
            // offset to the start of text in previous line AND half of its offset
            // (essentially moving caret to the left edge of bounding box)
            g.translate(-left - (lineOffsets[lineNum - 1] / 2), topOffset);
            g.translate(lineOffsets[lineNum] / 2, 0);
          }
          else {
            g.translate(-left, topOffset);
          }

          left = 0;

          continue;
        }
        var glyph = font.glyphs[chars[i]] || font.missingGlyph;
        if (!glyph) continue;

        var charWidth = Number(glyph.w || font.w) + letterSpacing;

        g.save();
        g.translate(0, font.ascent);
        g.fillRect(0, 0, charWidth + 10, -font.ascent + font.descent);
        g.restore();

        g.translate(charWidth, 0);
        left += charWidth;
      }
      g.restore();
    }

    function renderText() {
      g.fillStyle = Cufon.textOptions.color || style.get('color');

      var left = 0, lineNum = 0;

      if (options.textAlign === 'right') {
        g.translate(lineOffsets[lineNum], 0);
      }
      else if (options.textAlign === 'center') {
        g.translate(lineOffsets[lineNum] / 2, 0);
      }

      for (var i = 0, l = chars.length; i < l; ++i) {
        if (chars[i] === '\n') {

          lineNum++;

          var topOffset = -font.ascent - ((font.ascent / 5) * options.lineHeight);

          if (options.textAlign === 'right') {
            g.translate(-width, topOffset);
            g.translate(lineOffsets[lineNum], 0);
          }
          else if (options.textAlign === 'center') {
            // offset to the start of text in previous line AND half of its offset
            // (essentially moving caret to the left edge of bounding box)
            g.translate(-left - (lineOffsets[lineNum - 1] / 2), topOffset);
            g.translate(lineOffsets[lineNum] / 2, 0);
          }
          else {
            g.translate(-left, topOffset);
          }

          left = 0;

          continue;
        }
        var glyph = font.glyphs[chars[i]] || font.missingGlyph;
        if (!glyph) continue;

        var charWidth = Number(glyph.w || font.w) + letterSpacing;

        if (textDecoration) {
          g.save();
          g.strokeStyle = g.fillStyle;
          g.beginPath();
          if (textDecoration.underline) {
            g.moveTo(0, -font.face['underline-position']);
            g.lineTo(charWidth, -font.face['underline-position']);
          }
          if (textDecoration.overline) {
            g.moveTo(0, font.ascent);
            g.lineTo(charWidth, font.ascent);
          }
          if (textDecoration['line-through']) {
            g.moveTo(0, -font.descent);
            g.lineTo(charWidth, -font.descent);
          }
          g.stroke();
          g.restore();
        }

        if (isItalic) {
          g.save();
          g.transform(1, 0, -0.25, 1, 0, 0);
        }

        g.beginPath();
        if (glyph.d) {
          if (glyph.code) interpret(glyph.code, g);
          else glyph.code = generateFromVML('m' + glyph.d, g);
        }

        g.fill();

        if (options.strokeStyle) {
          g.closePath();
          g.save();
          g.lineWidth = options.strokeWidth;
          g.strokeStyle = options.strokeStyle;
          g.stroke();
          g.restore();
        }

        if (isItalic) {
          g.restore();
        }

        g.translate(charWidth, 0);
        left += charWidth;
      }
    }

    if (shadows) {
      for (var i = 0, l = shadows.length; i < l; ++i) {
        var shadow = shadows[i];
        g.save();
        g.fillStyle = shadow.color;
        g.translate.apply(g, shadowOffsets[i]);
        renderText();
        g.restore();
      }
    }

    g.save();
    if (options.backgroundColor) {
      renderBackground();
    }
    renderText();
    g.restore();
    g.restore();
    g.restore();

    return wrapper;

  };

})());

Cufon.registerEngine('vml', (function() {

  if (!fabric.document.namespaces) return;

  var canvasEl = fabric.document.createElement('canvas');
  if (canvasEl && canvasEl.getContext && canvasEl.getContext.apply) return;

  if (fabric.document.namespaces.cvml == null) {
    fabric.document.namespaces.add('cvml', 'urn:schemas-microsoft-com:vml');
  }

  var check = fabric.document.createElement('cvml:shape');
  check.style.behavior = 'url(#default#VML)';
  if (!check.coordsize) return; // VML isn't supported
  check = null;

  fabric.document.write('<style type="text/css">' +
    '.cufon-vml-canvas{text-indent:0}' +
    '@media screen{' +
      'cvml\\:shape,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute}' +
      '.cufon-vml-canvas{position:absolute;text-align:left}' +
      '.cufon-vml{display:inline-block;position:relative;vertical-align:middle}' +
      '.cufon-vml .cufon-alt{position:absolute;left:-10000in;font-size:1px}' +
      'a .cufon-vml{cursor:pointer}' +
    '}' +
    '@media print{' +
      '.cufon-vml *{display:none}' +
      '.cufon-vml .cufon-alt{display:inline}' +
    '}' +
  '</style>');

  function getFontSizeInPixels(el, value) {
    return getSizeInPixels(el, /(?:em|ex|%)$/i.test(value) ? '1em' : value);
  }

  // Original by Dead Edwards.
  // Combined with getFontSizeInPixels it also works with relative units.
  function getSizeInPixels(el, value) {
    if (/px$/i.test(value)) return parseFloat(value);
    var style = el.style.left, runtimeStyle = el.runtimeStyle.left;
    el.runtimeStyle.left = el.currentStyle.left;
    el.style.left = value;
    var result = el.style.pixelLeft;
    el.style.left = style;
    el.runtimeStyle.left = runtimeStyle;
    return result;
  }

  return function(font, text, style, options, node, el, hasNext) {
    var redraw = (text === null);

    if (redraw) text = node.alt;

    // @todo word-spacing, text-decoration

    var viewBox = font.viewBox;

    var size = style.computedFontSize ||
      (style.computedFontSize = new Cufon.CSS.Size(getFontSizeInPixels(el, style.get('fontSize')) + 'px', font.baseSize));

    var letterSpacing = style.computedLSpacing;

    if (letterSpacing == undefined) {
      letterSpacing = style.get('letterSpacing');
      style.computedLSpacing = letterSpacing =
        (letterSpacing == 'normal') ? 0 : ~~size.convertFrom(getSizeInPixels(el, letterSpacing));
    }

    var wrapper, canvas;

    if (redraw) {
      wrapper = node;
      canvas = node.firstChild;
    }
    else {
      wrapper = fabric.document.createElement('span');
      wrapper.className = 'cufon cufon-vml';
      wrapper.alt = text;

      canvas = fabric.document.createElement('span');
      canvas.className = 'cufon-vml-canvas';
      wrapper.appendChild(canvas);

      if (options.printable) {
        var print = fabric.document.createElement('span');
        print.className = 'cufon-alt';
        print.appendChild(fabric.document.createTextNode(text));
        wrapper.appendChild(print);
      }

      // ie6, for some reason, has trouble rendering the last VML element in the document.
      // we can work around this by injecting a dummy element where needed.
      // @todo find a better solution
      if (!hasNext) wrapper.appendChild(fabric.document.createElement('cvml:shape'));
    }

    var wStyle = wrapper.style;
    var cStyle = canvas.style;

    var height = size.convert(viewBox.height), roundedHeight = Math.ceil(height);
    var roundingFactor = roundedHeight / height;
    var minX = viewBox.minX, minY = viewBox.minY;

    cStyle.height = roundedHeight;
    cStyle.top = Math.round(size.convert(minY - font.ascent));
    cStyle.left = Math.round(size.convert(minX));

    wStyle.height = size.convert(font.height) + 'px';

    var textDecoration = Cufon.getTextDecoration(options);

    var color = style.get('color');

    var chars = Cufon.CSS.textTransform(text, style).split('');

    var width = 0, offsetX = 0, advance = null;

    var glyph, shape, shadows = options.textShadow;

    // pre-calculate width
    for (var i = 0, k = 0, l = chars.length; i < l; ++i) {
      glyph = font.glyphs[chars[i]] || font.missingGlyph;
      if (glyph) width += advance = ~~(glyph.w || font.w) + letterSpacing;
    }

    if (advance === null) return null;

    var fullWidth = -minX + width + (viewBox.width - advance);

    var shapeWidth = size.convert(fullWidth * roundingFactor), roundedShapeWidth = Math.round(shapeWidth);

    var coordSize = fullWidth + ',' + viewBox.height, coordOrigin;
    var stretch = 'r' + coordSize + 'nsnf';

    for (i = 0; i < l; ++i) {

      glyph = font.glyphs[chars[i]] || font.missingGlyph;
      if (!glyph) continue;

      if (redraw) {
        // some glyphs may be missing so we can't use i
        shape = canvas.childNodes[k];
        if (shape.firstChild) shape.removeChild(shape.firstChild); // shadow
      }
      else {
        shape = fabric.document.createElement('cvml:shape');
        canvas.appendChild(shape);
      }

      shape.stroked = 'f';
      shape.coordsize = coordSize;
      shape.coordorigin = coordOrigin = (minX - offsetX) + ',' + minY;
      shape.path = (glyph.d ? 'm' + glyph.d + 'xe' : '') + 'm' + coordOrigin + stretch;
      shape.fillcolor = color;

      // it's important to not set top/left or IE8 will grind to a halt
      var sStyle = shape.style;
      sStyle.width = roundedShapeWidth;
      sStyle.height = roundedHeight;

      if (shadows) {
        // due to the limitations of the VML shadow element there
        // can only be two visible shadows. opacity is shared
        // for all shadows.
        var shadow1 = shadows[0], shadow2 = shadows[1];
        var color1 = Cufon.CSS.color(shadow1.color), color2;
        var shadow = fabric.document.createElement('cvml:shadow');
        shadow.on = 't';
        shadow.color = color1.color;
        shadow.offset = shadow1.offX + ',' + shadow1.offY;
        if (shadow2) {
          color2 = Cufon.CSS.color(shadow2.color);
          shadow.type = 'double';
          shadow.color2 = color2.color;
          shadow.offset2 = shadow2.offX + ',' + shadow2.offY;
        }
        shadow.opacity = color1.opacity || (color2 && color2.opacity) || 1;
        shape.appendChild(shadow);
      }

      offsetX += ~~(glyph.w || font.w) + letterSpacing;

      ++k;

    }

    wStyle.width = Math.max(Math.ceil(size.convert(width * roundingFactor)), 0);

    return wrapper;

  };

})());

Cufon.getTextDecoration = function(options) {
  return {
    underline: options.textDecoration === 'underline',
    overline: options.textDecoration === 'overline',
    'line-through': options.textDecoration === 'line-through'
  };
};

if (typeof exports != 'undefined') {
  exports.Cufon = Cufon;
}
/**
 * Wrapper around `console.log` (when available)
 * @method log
 * @param {Any} Values to log
 */
fabric.log = function() { };

/**
 * Wrapper around `console.warn` (when available)
 * @method warn
 * @param {Any} Values to log as a warning
 */
fabric.warn = function() { };

if (typeof console !== 'undefined') {
  if (typeof console.log !== 'undefined' && console.log.apply) {
    fabric.log = function() {
      return console.log.apply(console, arguments);
    };
  }
  if (typeof console.warn !== 'undefined' && console.warn.apply) {
    fabric.warn = function() {
      return console.warn.apply(console, arguments);
    };
  }
}

/**
 * @namespace
 */
fabric.Observable = {

  /**
   * Observes specified event
   * @method observe
   * @param {String} eventName
   * @param {Function} handler
   */
  observe: function(eventName, handler) {
    if (!this.__eventListeners) {
      this.__eventListeners = { };
    }
    // one object with key/value pairs was passed
    if (arguments.length === 1) {
      for (var prop in eventName) {
        this.observe(prop, eventName[prop]);
      }
    }
    else {
      if (!this.__eventListeners[eventName]) {
        this.__eventListeners[eventName] = [ ];
      }
      this.__eventListeners[eventName].push(handler);
    }
  },

  /**
   * Stops event observing for a particular event handler
   * @method stopObserving
   * @param {String} eventName
   * @param {Function} handler
   */
  stopObserving: function(eventName, handler) {
    if (!this.__eventListeners) {
      this.__eventListeners = { };
    }
    if (this.__eventListeners[eventName]) {
      fabric.util.removeFromArray(this.__eventListeners[eventName], handler);
    }
  },

  /**
   * Fires event with an optional memo object
   * @method fire
   * @param {String} eventName
   * @param {Object} [memo]
   */
  fire: function(eventName, memo) {
    if (!this.__eventListeners) {
      this.__eventListeners = { }
    }
    var listenersForEvent = this.__eventListeners[eventName];
    if (!listenersForEvent) return;
    for (var i = 0, len = listenersForEvent.length; i < len; i++) {
      // avoiding try/catch for perf. reasons
      listenersForEvent[i]({ memo: memo });
    }
  }
};
(function() {

  /**
   * @namespace
   */
  fabric.util = { };

  /**
   * Removes value from an array.
   * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
   * @static
   * @memberOf fabric.util
   * @method removeFromArray
   * @param {Array} array
   * @param {Any} value
   * @return {Array} original array
   */
  function removeFromArray(array, value) {
    var idx = array.indexOf(value);
    if (idx !== -1) {
      array.splice(idx, 1);
    }
    return array;
  };

  /**
   * Returns random number between 2 specified ones.
   * @static
   * @method getRandomInt
   * @memberOf fabric.util
   * @param {Number} min lower limit
   * @param {Number} max upper limit
   * @return {Number} random value (between min and max)
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var PiBy180 = Math.PI / 180;

  /**
   * Transforms degrees to radians.
   * @static
   * @method degreesToRadians
   * @memberOf fabric.util
   * @param {Number} degrees value in degrees
   * @return {Number} value in radians
   */
  function degreesToRadians(degrees) {
    return degrees * PiBy180;
  }

  /**
   * A wrapper around Number#toFixed, which contrary to native method returns number, not string.
   * @static
   * @method toFixed
   * @memberOf fabric.util
   * @param {Number | String} number number to operate on
   * @param {Number} fractionDigits number of fraction digits to "leave"
   * @return {Number}
   */
   function toFixed(number, fractionDigits) {
     return parseFloat(Number(number).toFixed(fractionDigits));
   }

   /**
    * Function which always returns `false`.
    * @static
    * @method falseFunction
    * @memberOf fabric.util
    * @return {Boolean}
    */
   function falseFunction() {
     return false;
   }

   /**
    * Changes value from one to another within certain period of time, invoking callbacks as value is being changed.
    * @method animate
    * @memberOf fabric.util
    * @param {Object} [options] Animation options
    * @param {Function} [options.onChange] Callback; invoked on every value change
    * @param {Function} [options.onComplete] Callback; invoked when value change is completed
    * @param {Number} [options.startValue=0] Starting value
    * @param {Number} [options.endValue=100] Ending value
    * @param {Function} [options.easing] Easing function
    * @param {Number} [options.duration=500] Duration of change
    */
   function animate(options) {

     options || (options = { });

     var start = +new Date(),
         duration = options.duration || 500,
         finish = start + duration, time, pos,
         onChange = options.onChange || function() { },
         abort = options.abort || function() { return false; },
         easing = options.easing || function(pos) { return (-Math.cos(pos * Math.PI) / 2) + 0.5; },
         startValue = 'startValue' in options ? options.startValue : 0,
         endValue = 'endValue' in options ? options.endValue : 100;

     options.onStart && options.onStart();

     var interval = setInterval(function() {
       time = +new Date();
       pos = time > finish ? 1 : (time - start) / duration;
       onChange(startValue + (endValue - startValue) * easing(pos));
       if (time > finish || abort()) {
         clearInterval(interval);
         options.onComplete && options.onComplete();
       }
     }, 10);

     return interval;
   }

  fabric.util.removeFromArray = removeFromArray;
  fabric.util.degreesToRadians = degreesToRadians;
  fabric.util.toFixed = toFixed;
  fabric.util.getRandomInt = getRandomInt;
  fabric.util.falseFunction = falseFunction;
  fabric.util.animate = animate;

})();

(function() {

  var slice = Array.prototype.slice;

  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
      if (this === void 0 || this === null) {
        throw new TypeError();
      }
      var t = Object(this), len = t.length >>> 0;
      if (len === 0) {
        return -1;
      }
      var n = 0;
      if (arguments.length > 0) {
        n = Number(arguments[1]);
        if (n !== n) { // shortcut for verifying if it's NaN
          n = 0;
        }
        else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
          n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
      }
      if (n >= len) {
        return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
        if (k in t && t[k] === searchElement) {
          return k;
        }
      }
      return -1;
    }
  }

  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fn, context) {
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this) {
          fn.call(context, this[i], i, this);
        }
      }
    };
  }

  if (!Array.prototype.map) {
    Array.prototype.map = function(fn, context) {
      var result = [ ];
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this) {
          result[i] = fn.call(context, this[i], i, this);
        }
      }
      return result;
    };
  }

  if (!Array.prototype.every) {
    Array.prototype.every = function(fn, context) {
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this && !fn.call(context, this[i], i, this)) {
          return false;
        }
      }
      return true;
    };
  }

  if (!Array.prototype.some) {
    Array.prototype.some = function(fn, context) {
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this && fn.call(context, this[i], i, this)) {
          return true;
        }
      }
      return false;
    };
  }

  if (!Array.prototype.filter) {
    Array.prototype.filter = function(fn, context) {
      var result = [ ], val;
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this) {
          val = this[i]; // in case fn mutates this
          if (fn.call(context, val, i, this)) {
            result.push(val);
          }
        }
      }
      return result;
    };
  }

  if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(fn /*, initial*/) {
      var len = this.length >>> 0,
          i = 0,
          rv;

      if (arguments.length > 1) {
        rv = arguments[1];
      }
      else {
        do {
          if (i in this) {
            rv = this[i++];
            break;
          }
          // if array contains no values, no initial value to return
          if (++i >= len) {
            throw new TypeError();
          }
        }
        while (true);
      }
      for (; i < len; i++) {
        if (i in this) {
          rv = fn.call(null, rv, this[i], i, this);
        }
      }
      return rv;
    };
  }

  /**
   * Invokes method on all items in a given array
   * @method invoke
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} method Name of a method to invoke
   */
  function invoke(array, method) {
    var args = slice.call(arguments, 2), result = [ ];
    for (var i = 0, len = array.length; i < len; i++) {
      result[i] = args.length ? array[i][method].apply(array[i], args) : array[i][method].call(array[i]);
    }
    return result;
  }

  /**
   * Finds maximum value in array (not necessarily "first" one)
   * @method max
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} byProperty
   */
  function max(array, byProperty) {
    if (!array || array.length === 0) return undefined;

    var i = array.length - 1,
        result = byProperty ? array[i][byProperty] : array[i];
    if (byProperty) {
      while (i--) {
        if (array[i][byProperty] >= result) {
          result = array[i][byProperty];
        }
      }
    }
    else {
      while (i--) {
        if (array[i] >= result) {
          result = array[i];
        }
      }
    }
    return result;
  }

  /**
   * Finds minimum value in array (not necessarily "first" one)
   * @method min
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} byProperty
   */
  function min(array, byProperty) {
    if (!array || array.length === 0) return undefined;

    var i = array.length - 1,
        result = byProperty ? array[i][byProperty] : array[i];

    if (byProperty) {
      while (i--) {
        if (array[i][byProperty] < result) {
          result = array[i][byProperty];
        }
      }
    }
    else {
      while (i--) {
        if (array[i] < result) {
          result = array[i];
        }
      }
    }
    return result;
  }

  /** @namespace */
  fabric.util.array = {
    invoke: invoke,
    min: min,
    max: max
  };

})();
(function(){

  /**
   * Copies all enumerable properties of one object to another
   * @memberOf fabric.util.object
   * @method extend
   * @param {Object} destination Where to copy to
   * @param {Object} source Where to copy from
   */
  function extend(destination, source) {
    // JScript DontEnum bug is not taken care of
    for (var property in source) {
      destination[property] = source[property];
    }
    return destination;
  }

  /**
   * Creates an empty object and copies all enumerable properties of another object to it
   * @method clone
   * @memberOf fabric.util.object
   * @param {Object} object Object to clone
   */
  function clone(object) {
    return extend({ }, object);
  }

  /** @namespace fabric.util.object */
  fabric.util.object = {
    extend: extend,
    clone: clone
  };

})();
if (!String.prototype.trim) {
  /**
   * Trims a string (removing whitespace from the beginning and the end)
   * @method trim
   * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/Trim">String#trim on MDN</a>
   */
  String.prototype.trim = function () {
    // this trim is not fully ES3 or ES5 compliant, but it should cover most cases for now
    return this.replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, '');
  };
}

/**
 * Camelizes a string
 * @memberOf fabric.util.string
 * @method camelize
 * @param {String} string String to camelize
 * @return {String} Camelized version of a string
 */
function camelize(string) {
  return string.replace(/-+(.)?/g, function(match, character) {
    return character ? character.toUpperCase() : '';
  });
}

/**
 * Capitalizes a string
 * @memberOf fabric.util.string
 * @method capitalize
 * @param {String} string String to capitalize
 * @return {String} Capitalized version of a string
 */
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/** @namespace */
fabric.util.string = {
  camelize: camelize,
  capitalize: capitalize
};
(function() {

  var slice = Array.prototype.slice,
      apply = Function.prototype.apply,
      dummy = function() { };

  if (!Function.prototype.bind) {
    /**
     * Cross-browser approximation of ES5 Function.prototype.bind (not fully spec conforming)
     * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind">Function#bind on MDN</a>
     * @param {Object} thisArg Object to bind function to
     * @param {Any[]} [...] Values to pass to a bound function
     * @return {Function}
     */
     Function.prototype.bind = function(thisArg) {
       var fn = this, args = slice.call(arguments, 1), bound;
       if (args.length) {
         bound = function() {
           return apply.call(fn, this instanceof dummy ? this : thisArg, args.concat(slice.call(arguments)));
         };
       }
       else {
         bound = function() {
           return apply.call(fn, this instanceof dummy ? this : thisArg, arguments);
         };
       }
       dummy.prototype = this.prototype;
       bound.prototype = new dummy;

       return bound;
     };
  }

})();
(function() {

  var slice = Array.prototype.slice, emptyFunction = function() { };

  var IS_DONTENUM_BUGGY = (function(){
    for (var p in { toString: 1 }) {
      if (p === 'toString') return false;
    }
    return true;
  })();

  var addMethods;
  if (IS_DONTENUM_BUGGY) {
    /** @ignore */
    addMethods = function(klass, source) {
      if (source.toString !== Object.prototype.toString) {
        klass.prototype.toString = source.toString;
      }
      if (source.valueOf !== Object.prototype.valueOf) {
        klass.prototype.valueOf = source.valueOf;
      }
      for (var property in source) {
        klass.prototype[property] = source[property];
      }
    };
  }
  else {
    /** @ignore */
    addMethods = function(klass, source) {
      for (var property in source) {
        klass.prototype[property] = source[property];
      }
    };
  }

  function subclass() { };

  /**
   * Helper for creation of "classes"
   * @method createClass
   * @memberOf fabric.util
   */
  function createClass() {
    var parent = null,
        properties = slice.call(arguments, 0);

    if (typeof properties[0] === 'function') {
      parent = properties.shift();
    }
    function klass() {
      this.initialize.apply(this, arguments);
    }

    klass.superclass = parent;
    klass.subclasses = [ ];

    if (parent) {
      subclass.prototype = parent.prototype;
      klass.prototype = new subclass;
      parent.subclasses.push(klass);
    }
    for (var i = 0, length = properties.length; i < length; i++) {
      addMethods(klass, properties[i]);
    }
    if (!klass.prototype.initialize) {
      klass.prototype.initialize = emptyFunction;
    }
    klass.prototype.constructor = klass;
    return klass;
  }

  fabric.util.createClass = createClass;
})();
(function (global) {

  /* EVENT HANDLING */

  function areHostMethods(object) {
    var methodNames = Array.prototype.slice.call(arguments, 1),
        t, i, len = methodNames.length;
    for (i = 0; i < len; i++) {
      t = typeof object[methodNames[i]];
      if (!(/^(?:function|object|unknown)$/).test(t)) return false;
    }
    return true;
  }
  var getUniqueId = (function () {
    if (typeof fabric.document.documentElement.uniqueID !== 'undefined') {
      return function (element) {
        return element.uniqueID;
      };
    }
    var uid = 0;
    return function (element) {
      return element.__uniqueID || (element.__uniqueID = 'uniqueID__' + uid++);
    };
  })();

  /** @ignore */
  var getElement, setElement;

  (function () {
    var elements = { };
    /** @ignore */
    getElement = function (uid) {
      return elements[uid];
    };
    /** @ignore */
    setElement = function (uid, element) {
      elements[uid] = element;
    };
  })();

  function createListener(uid, handler) {
    return {
      handler: handler,
      wrappedHandler: createWrappedHandler(uid, handler)
    };
  }

  function createWrappedHandler(uid, handler) {
    return function (e) {
      handler.call(getElement(uid), e || fabric.window.event);
    };
  }

  function createDispatcher(uid, eventName) {
    return function (e) {
      if (handlers[uid] && handlers[uid][eventName]) {
        var handlersForEvent = handlers[uid][eventName];
        for (var i = 0, len = handlersForEvent.length; i < len; i++) {
          handlersForEvent[i].call(this, e || fabric.window.event);
        }
      }
    };
  }

  var shouldUseAddListenerRemoveListener = (
        areHostMethods(fabric.document.documentElement, 'addEventListener', 'removeEventListener') &&
        areHostMethods(fabric.window, 'addEventListener', 'removeEventListener')),

      shouldUseAttachEventDetachEvent = (
        areHostMethods(fabric.document.documentElement, 'attachEvent', 'detachEvent') &&
        areHostMethods(fabric.window, 'attachEvent', 'detachEvent')),

      // IE branch
      listeners = { },

      // DOM L0 branch
      handlers = { },

      addListener, removeListener;

  if (shouldUseAddListenerRemoveListener) {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      element.addEventListener(eventName, handler, false);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      element.removeEventListener(eventName, handler, false);
    };
  }

  else if (shouldUseAttachEventDetachEvent) {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      setElement(uid, element);
      if (!listeners[uid]) {
        listeners[uid] = { };
      }
      if (!listeners[uid][eventName]) {
        listeners[uid][eventName] = [ ];

      }
      var listener = createListener(uid, handler);
      listeners[uid][eventName].push(listener);
      element.attachEvent('on' + eventName, listener.wrappedHandler);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      var uid = getUniqueId(element), listener;
      if (listeners[uid] && listeners[uid][eventName]) {
        for (var i = 0, len = listeners[uid][eventName].length; i < len; i++) {
          listener = listeners[uid][eventName][i];
          if (listener && listener.handler === handler) {
            element.detachEvent('on' + eventName, listener.wrappedHandler);
            listeners[uid][eventName][i] = null;
          }
        }
      }
    };
  }
  else {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      if (!handlers[uid]) {
        handlers[uid] = { };
      }
      if (!handlers[uid][eventName]) {
        handlers[uid][eventName] = [ ];
        var existingHandler = element['on' + eventName];
        if (existingHandler) {
          handlers[uid][eventName].push(existingHandler);
        }
        element['on' + eventName] = createDispatcher(uid, eventName);
      }
      handlers[uid][eventName].push(handler);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      if (handlers[uid] && handlers[uid][eventName]) {
        var handlersForEvent = handlers[uid][eventName];
        for (var i = 0, len = handlersForEvent.length; i < len; i++) {
          if (handlersForEvent[i] === handler) {
            handlersForEvent.splice(i, 1);
          }
        }
      }
    };
  }

  /**
   * Adds an event listener to an element
   * @mthod addListener
   * @memberOf fabric.util
   * @function
   * @param {HTMLElement} element
   * @param {String} eventName
   * @param {Function} handler
   */
  fabric.util.addListener = addListener;

  /**
   * Removes an event listener from an element
   * @mthod removeListener
   * @memberOf fabric.util
   * @function
   * @param {HTMLElement} element
   * @param {String} eventName
   * @param {Function} handler
   */
  fabric.util.removeListener = removeListener;

  /**
   * Cross-browser wrapper for getting event's coordinates
   * @method getPointer
   * @memberOf fabric.util
   * @param {Event} event
   */
  function getPointer(event) {
    // TODO (kangax): this method needs fixing
    return { x: pointerX(event), y: pointerY(event) };
  }

  function pointerX(event) {
    var docElement = fabric.document.documentElement,
        body = fabric.document.body || { scrollLeft: 0 };

    // looks like in IE (<9) clientX at certain point (apparently when mouseup fires on VML element)
    // is represented as COM object, with all the consequences, like "unknown" type and error on [[Get]]
    // need to investigate later
    return event.pageX || ((typeof event.clientX != 'unknown' ? event.clientX : 0) +
      (docElement.scrollLeft || body.scrollLeft) -
      (docElement.clientLeft || 0));
  }

  function pointerY(event) {
    var docElement = fabric.document.documentElement,
        body = fabric.document.body || { scrollTop: 0 };

    return  event.pageY || ((typeof event.clientY != 'unknown' ? event.clientY : 0) +
       (docElement.scrollTop || body.scrollTop) -
       (docElement.clientTop || 0));
  }

  if (fabric.isTouchSupported) {
    pointerX = function(event) {
      return event.touches && event.touches[0].pageX;
    };
    pointerY = function(event) {
      return event.touches && event.touches[0].pageY;
    };
  }

  fabric.util.getPointer = getPointer;

  fabric.util.object.extend(fabric.util, fabric.Observable);

})(this);
(function () {

  /**
   * Cross-browser wrapper for setting element's style
   * @method setStyle
   * @memberOf fabric.util
   * @param {HTMLElement} element
   * @param {Object} styles
   * @return {HTMLElement} Element that was passed as a first argument
   */
  function setStyle(element, styles) {
    var elementStyle = element.style, match;
    if (typeof styles === 'string') {
      element.style.cssText += ';' + styles;
      return styles.indexOf('opacity') > -1
        ? setOpacity(element, styles.match(/opacity:\s*(\d?\.?\d*)/)[1])
        : element;
    }
    for (var property in styles) {
      if (property === 'opacity') {
        setOpacity(element, styles[property]);
      }
      else {
        var normalizedProperty = (property === 'float' || property === 'cssFloat')
          ? (typeof elementStyle.styleFloat === 'undefined' ? 'cssFloat' : 'styleFloat')
          : property;
        elementStyle[normalizedProperty] = styles[property];
      }
    }
    return element;
  }

  var parseEl = fabric.document.createElement('div'),
      supportsOpacity = typeof parseEl.style.opacity === 'string',
      supportsFilters = typeof parseEl.style.filter === 'string',
      view = fabric.document.defaultView,
      supportsGCS = view && typeof view.getComputedStyle !== 'undefined',
      reOpacity = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,

      /** @ignore */
      setOpacity = function (element) { return element; };

  if (supportsOpacity) {
    /** @ignore */
    setOpacity = function(element, value) {
      element.style.opacity = value;
      return element;
    };
  }
  else if (supportsFilters) {
    /** @ignore */
    setOpacity = function(element, value) {
      var es = element.style;
      if (element.currentStyle && !element.currentStyle.hasLayout) {
        es.zoom = 1;
      }
      if (reOpacity.test(es.filter)) {
        value = value >= 0.9999 ? '' : ('alpha(opacity=' + (value * 100) + ')');
        es.filter = es.filter.replace(reOpacity, value);
      }
      else {
        es.filter += ' alpha(opacity=' + (value * 100) + ')';
      }
      return element;
    };
  }

  fabric.util.setStyle = setStyle;

})();
(function() {

  var _slice = Array.prototype.slice;

  /**
   * Takes id and returns an element with that id (if one exists in a document)
   * @method getById
   * @memberOf fabric.util
   * @param {String|HTMLElement} id
   * @return {HTMLElement|null}
   */
  function getById(id) {
    return typeof id === 'string' ? fabric.document.getElementById(id) : id;
  }

  /**
   * Converts an array-like object (e.g. arguments or NodeList) to an array
   * @method toArray
   * @memberOf fabric.util
   * @param {Object} arrayLike
   * @return {Array}
   */
  function toArray(arrayLike) {
    return _slice.call(arrayLike, 0);
  }

  try {
    var sliceCanConvertNodelists = toArray(fabric.document.childNodes) instanceof Array;
  }
  catch(err) { }

  if (!sliceCanConvertNodelists) {
    toArray = function(arrayLike) {
      var arr = new Array(arrayLike.length), i = arrayLike.length;
      while (i--) {
        arr[i] = arrayLike[i];
      }
      return arr;
    };
  }

  /**
   * Creates specified element with specified attributes
   * @method makeElement
   * @memberOf fabric.util
   * @param {String} tagName Type of an element to create
   * @param {Object} [attributes] Attributes to set on an element
   * @return {HTMLElement} Newly created element
   */
  function makeElement(tagName, attributes) {
    var el = fabric.document.createElement(tagName);
    for (var prop in attributes) {
      if (prop === 'class') {
        el.className = attributes[prop];
      }
      else if (prop === 'for') {
        el.htmlFor = attributes[prop];
      }
      else {
        el.setAttribute(prop, attributes[prop]);
      }
    }
    return el;
  }

  /**
   * Adds class to an element
   * @method addClass
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to add class to
   * @param {String} className Class to add to an element
   */
  function addClass(element, className) {
    if ((' ' + element.className + ' ').indexOf(' ' + className + ' ') === -1) {
      element.className += (element.className ? ' ' : '') + className;
    }
  }

  /**
   * Wraps element with another element
   * @method wrapElement
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to wrap
   * @param {HTMLElement|String} wrapper Element to wrap with
   * @param {Object} [attributes] Attributes to set on a wrapper
   * @return {HTMLElement} wrapper
   */
  function wrapElement(element, wrapper, attributes) {
    if (typeof wrapper === 'string') {
      wrapper = makeElement(wrapper, attributes);
    }
    if (element.parentNode) {
      element.parentNode.replaceChild(wrapper, element);
    }
    wrapper.appendChild(element);
    return wrapper;
  }

  /**
   * Returns offset for a given element
   * @method getElementOffset
   * @function
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to get offset for
   * @return {Object} Object with "left" and "top" properties
   */
  function getElementOffset(element) {
    // TODO (kangax): need to fix this method
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
    }
    while (element);
    return ({ left: valueL, top: valueT });
  }

  (function () {
    var style = fabric.document.documentElement.style;

    var selectProp = 'userSelect' in style
      ? 'userSelect'
      : 'MozUserSelect' in style
        ? 'MozUserSelect'
        : 'WebkitUserSelect' in style
          ? 'WebkitUserSelect'
          : 'KhtmlUserSelect' in style
            ? 'KhtmlUserSelect'
            : '';

    /**
     * Makes element unselectable
     * @method makeElementUnselectable
     * @memberOf fabric.util
     * @param {HTMLElement} element Element to make unselectable
     * @return {HTMLElement} Element that was passed in
     */
    function makeElementUnselectable(element) {
      if (typeof element.onselectstart !== 'undefined') {
        element.onselectstart = fabric.util.falseFunction;
      }
      if (selectProp) {
        element.style[selectProp] = 'none';
      }
      else if (typeof element.unselectable == 'string') {
        element.unselectable = 'on';
      }
      return element;
    }

    /**
     * Makes element selectable
     * @method makeElementSelectable
     * @memberOf fabric.util
     * @param {HTMLElement} element Element to make selectable
     * @return {HTMLElement} Element that was passed in
     */
    function makeElementSelectable(element) {
      if (typeof element.onselectstart !== 'undefined') {
        element.onselectstart = null;
      }
      if (selectProp) {
        element.style[selectProp] = '';
      }
      else if (typeof element.unselectable == 'string') {
        element.unselectable = '';
      }
      return element;
    }

    fabric.util.makeElementUnselectable = makeElementUnselectable;
    fabric.util.makeElementSelectable = makeElementSelectable;
  })();

  (function() {

    /**
     * Inserts a script element with a given url into a document; invokes callback, when that script is finished loading
     * @method getScript
     * @memberOf fabric.util
     * @param {String} url URL of a script to load
     * @param {Function} callback Callback to execute when script is finished loading
     */
    function getScript(url, callback) {
    	var headEl = fabric.document.getElementsByTagName("head")[0],
    	    scriptEl = fabric.document.createElement('script'),
    	    loading = true;

    	scriptEl.type = 'text/javascript';
    	scriptEl.setAttribute('runat', 'server');

    	/** @ignore */
    	scriptEl.onload = /** @ignore */ scriptEl.onreadystatechange = function(e) {
    	  if (loading) {
    	    if (typeof this.readyState == 'string' &&
    	        this.readyState !== 'loaded' &&
    	        this.readyState !== 'complete') return;
      	  loading = false;
      		callback(e || fabric.window.event);
      		scriptEl = scriptEl.onload = scriptEl.onreadystatechange = null;
      	}
    	};
    	scriptEl.src = url;
    	headEl.appendChild(scriptEl);
    	// causes issue in Opera
    	// headEl.removeChild(scriptEl);
    }

    fabric.util.getScript = getScript;
  })();

  fabric.util.getById = getById;
  fabric.util.toArray = toArray;
  fabric.util.makeElement = makeElement;
  fabric.util.addClass = addClass;
  fabric.util.wrapElement = wrapElement;
  fabric.util.getElementOffset = getElementOffset;

})();
(function(){

  function addParamToUrl(url, param) {
    return url + (/\?/.test(url) ? '&' : '?') + param;
  }

  var makeXHR = (function() {
    var factories = [
      function() { return new ActiveXObject("Microsoft.XMLHTTP"); },
      function() { return new ActiveXObject("Msxml2.XMLHTTP"); },
      function() { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); },
      function() { return new XMLHttpRequest(); }
    ];
    for (var i = factories.length; i--; ) {
      try {
        var req = factories[i]();
        if (req) {
          return factories[i];
        }
      }
      catch (err) { }
    }
  })();

  function emptyFn() { };

  /**
   * Cross-browser abstraction for sending XMLHttpRequest
   * @method request
   * @memberOf fabric.util
   * @param {String} url URL to send XMLHttpRequest to
   * @param {Object} [options] Options object
   * @param {String} [options.method="GET"]
   * @param {Function} options.onComplete Callback to invoke when request is completed
   * @return {XMLHttpRequest} request
   */
  function request(url, options) {

    options || (options = { });

    var method = options.method ? options.method.toUpperCase() : 'GET',
        onComplete = options.onComplete || function() { },
        request = makeXHR(),
        body;

    /** @ignore */
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        onComplete(request);
        request.onreadystatechange = emptyFn;
      }
    };

    if (method === 'GET') {
      body = null;
      if (typeof options.parameters == 'string') {
        url = addParamToUrl(url, options.parameters);
      }
    }

    request.open(method, url, true);

    if (method === 'POST' || method === 'PUT') {
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    request.send(body);
    return request;
  };

  fabric.util.request = request;
})();
(function(global) {

  "use strict";

  /**
   * @name fabric
   * @namespace
   */

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      capitalize = fabric.util.string.capitalize,
      clone = fabric.util.object.clone;

  var attributesMap = {
    'cx':             'left',
    'x':              'left',
    'cy':             'top',
    'y':              'top',
    'r':              'radius',
    'fill-opacity':   'opacity',
    'fill-rule':      'fillRule',
    'stroke-width':   'strokeWidth',
    'transform':      'transformMatrix'
  };

  /**
   * Returns an object of attributes' name/value, given element and an array of attribute names;
   * Parses parent "g" nodes recursively upwards.
   * @static
   * @memberOf fabric
   * @method parseAttributes
   * @param {DOMElement} element Element to parse
   * @param {Array} attributes Array of attributes to parse
   * @return {Object} object containing parsed attributes' names/values
   */
  function parseAttributes(element, attributes) {

    if (!element) {
      return;
    }

    var value,
        parsed,
        parentAttributes = { };

    // if there's a parent container (`g` node), parse its attributes recursively upwards
    if (element.parentNode && /^g$/i.test(element.parentNode.nodeName)) {
      parentAttributes = fabric.parseAttributes(element.parentNode, attributes);
    }

    var ownAttributes = attributes.reduce(function(memo, attr) {
      value = element.getAttribute(attr);
      parsed = parseFloat(value);
      if (value) {
        // "normalize" attribute values
        if ((attr === 'fill' || attr === 'stroke') && value === 'none') {
          value = '';
        }
        if (attr === 'fill-rule') {
          value = (value === 'evenodd') ? 'destination-over' : value;
        }
        if (attr === 'transform') {
          value = fabric.parseTransformAttribute(value);
        }
        // transform attribute names
        if (attr in attributesMap) {
          attr = attributesMap[attr];
        }
        memo[attr] = isNaN(parsed) ? value : parsed;
      }
      return memo;
    }, { });

    // add values parsed from style, which take precedence over attributes
    // (see: http://www.w3.org/TR/SVG/styling.html#UsingPresentationAttributes)

    ownAttributes = extend(ownAttributes, extend(getGlobalStylesForElement(element), fabric.parseStyleAttribute(element)));
    return extend(parentAttributes, ownAttributes);
  };

  /**
   * Parses "transform" attribute, returning an array of values
   * @static
   * @function
   * @memberOf fabric
   * @method parseTransformAttribute
   * @param attributeValue {String} string containing attribute value
   * @return {Array} array of 6 elements representing transformation matrix
   */
  fabric.parseTransformAttribute = (function() {
    function rotateMatrix(matrix, args) {
      var angle = args[0];

      matrix[0] = Math.cos(angle);
      matrix[1] = Math.sin(angle);
      matrix[2] = -Math.sin(angle);
      matrix[3] = Math.cos(angle);
    }

    function scaleMatrix(matrix, args) {
      var multiplierX = args[0],
          multiplierY = (args.length === 2) ? args[1] : args[0];

      matrix[0] = multiplierX;
      matrix[3] = multiplierY;
    }

    function skewXMatrix(matrix, args) {
      matrix[2] = args[0];
    }

    function skewYMatrix(matrix, args) {
      matrix[1] = args[0];
    }

    function translateMatrix(matrix, args) {
      matrix[4] = args[0];
      if (args.length === 2) {
        matrix[5] = args[1];
      }
    }

    // identity matrix
    var iMatrix = [
          1, // a
          0, // b
          0, // c
          1, // d
          0, // e
          0  // f
        ],

        // == begin transform regexp
        number = '(?:[-+]?\\d+(?:\\.\\d+)?(?:e[-+]?\\d+)?)',
        comma_wsp = '(?:\\s+,?\\s*|,\\s*)',

        skewX = '(?:(skewX)\\s*\\(\\s*(' + number + ')\\s*\\))',
        skewY = '(?:(skewY)\\s*\\(\\s*(' + number + ')\\s*\\))',
        rotate = '(?:(rotate)\\s*\\(\\s*(' + number + ')(?:' + comma_wsp + '(' + number + ')' + comma_wsp + '(' + number + '))?\\s*\\))',
        scale = '(?:(scale)\\s*\\(\\s*(' + number + ')(?:' + comma_wsp + '(' + number + '))?\\s*\\))',
        translate = '(?:(translate)\\s*\\(\\s*(' + number + ')(?:' + comma_wsp + '(' + number + '))?\\s*\\))',

        matrix = '(?:(matrix)\\s*\\(\\s*' +
                  '(' + number + ')' + comma_wsp +
                  '(' + number + ')' + comma_wsp +
                  '(' + number + ')' + comma_wsp +
                  '(' + number + ')' + comma_wsp +
                  '(' + number + ')' + comma_wsp +
                  '(' + number + ')' +
                  '\\s*\\))',

        transform = '(?:' +
                    matrix + '|' +
                    translate + '|' +
                    scale + '|' +
                    rotate + '|' +
                    skewX + '|' +
                    skewY +
                    ')',

        transforms = '(?:' + transform + '(?:' + comma_wsp + transform + ')*' + ')',

        transform_list = '^\\s*(?:' + transforms + '?)\\s*$',

        // http://www.w3.org/TR/SVG/coords.html#TransformAttribute
        reTransformList = new RegExp(transform_list),
        // == end transform regexp

        reTransform = new RegExp(transform);

    return function(attributeValue) {

      // start with identity matrix
      var matrix = iMatrix.concat();

      // return if no argument was given or
      // an argument does not match transform attribute regexp
      if (!attributeValue || (attributeValue && !reTransformList.test(attributeValue))) {
        return matrix;
      }

      attributeValue.replace(reTransform, function(match) {

        var m = new RegExp(transform).exec(match).filter(function (match) {
              return (match !== '' && match != null);
            }),
            operation = m[1],
            args = m.slice(2).map(parseFloat);

        switch(operation) {
          case 'translate':
            translateMatrix(matrix, args);
            break;
          case 'rotate':
            rotateMatrix(matrix, args);
            break;
          case 'scale':
            scaleMatrix(matrix, args);
            break;
          case 'skewX':
            skewXMatrix(matrix, args);
            break;
          case 'skewY':
            skewYMatrix(matrix, args);
            break;
          case 'matrix':
            matrix = args;
            break;
        }
      })
      return matrix;
    }
  })();

  /**
   * Parses "points" attribute, returning an array of values
   * @static
   * @memberOf fabric
   * @method parsePointsAttribute
   * @param points {String} points attribute string
   * @return {Array} array of points
   */
  function parsePointsAttribute(points) {

    // points attribute is required and must not be empty
    if (!points) return null;

    points = points.trim();
    var asPairs = points.indexOf(',') > -1;

    points = points.split(/\s+/);
    var parsedPoints = [ ];

    // points could look like "10,20 30,40" or "10 20 30 40"
    if (asPairs) {
     for (var i = 0, len = points.length; i < len; i++) {
       var pair = points[i].split(',');
       parsedPoints.push({ x: parseFloat(pair[0]), y: parseFloat(pair[1]) });
     }
    }
    else {
      for (var i = 0, len = points.length; i < len; i+=2) {
        parsedPoints.push({ x: parseFloat(points[i]), y: parseFloat(points[i+1]) });
      }
    }

    // odd number of points is an error
    if (parsedPoints.length % 2 !== 0) {
      // return null;
    }

    return parsedPoints;
  };

  /**
   * Parses "style" attribute, retuning an object with values
   * @static
   * @memberOf fabric
   * @method parseStyleAttribute
   * @param {SVGElement} element Element to parse
   * @return {Object} Objects with values parsed from style attribute of an element
   */
  function parseStyleAttribute(element) {
    var oStyle = { },
        style = element.getAttribute('style');
    if (style) {
      if (typeof style == 'string') {
        style = style.replace(/;$/, '').split(';');
        oStyle = style.reduce(function(memo, current) {
          var attr = current.split(':'),
              key = attr[0].trim(),
              value = attr[1].trim();
          memo[key] = value;
          return memo;
        }, { });
      }
      else {
        for (var prop in style) {
          if (typeof style[prop] !== 'undefined') {
            oStyle[prop] = style[prop];
          }
        }
      }
    }
    return oStyle;
  };

  function resolveGradients(instances) {
    var activeInstance = fabric.Canvas.activeInstance,
        ctx = activeInstance ? activeInstance.getContext() : null;

    if (!ctx) return;

    for (var i = instances.length; i--; ) {
      var instanceFillValue = instances[i].get('fill');

      if (/^url\(/.test(instanceFillValue)) {

        var gradientId = instanceFillValue.slice(5, instanceFillValue.length - 1);

        if (fabric.gradientDefs[gradientId]) {
          instances[i].set('fill',
            fabric.Gradient.fromElement(fabric.gradientDefs[gradientId], ctx, instances[i]));
        }
      }
    }
  }

  /**
   * Transforms an array of svg elements to corresponding fabric.* instances
   * @static
   * @memberOf fabric
   * @method parseElements
   * @param {Array} elements Array of elements to parse
   * @param {Function} callback Being passed an array of fabric instances (transformed from SVG elements)
   * @param {Object} options Options object
   */
  function parseElements(elements, callback, options) {
    var instances = Array(elements.length), i = elements.length;

    function checkIfDone() {
      if (--i === 0) {
        instances = instances.filter(function(el) {
          return el != null;
        });
        resolveGradients(instances);
        callback(instances);
      }
    }

    for (var index = 0, el, len = elements.length; index < len; index++) {
      el = elements[index];
      var klass = fabric[capitalize(el.tagName)];
      if (klass && klass.fromElement) {
        try {
          if (klass.async) {
            klass.fromElement(el, (function(index) {
              return function(obj) {
                instances.splice(index, 0, obj);
                checkIfDone();
              };
            })(index), options);
          }
          else {
            instances.splice(index, 0, klass.fromElement(el, options));
            checkIfDone();
          }
        }
        catch(e) {
          fabric.log(e.message || e);
        }
      }
      else {
        checkIfDone();
      }
    }
  };

  /**
   * Returns CSS rules for a given SVG document
   * @static
   * @function
   * @memberOf fabric
   * @method getCSSRules
   * @param {SVGDocument} doc SVG document to parse
   * @return {Object} CSS rules of this document
   */
  function getCSSRules(doc) {
    var styles = doc.getElementsByTagName('style'),
        allRules = { },
        rules;

    // very crude parsing of style contents
    for (var i = 0, len = styles.length; i < len; i++) {
      var styleContents = styles[0].textContent;

      // remove comments
      styleContents = styleContents.replace(/\/\*[\s\S]*?\*\//g, '');

      rules = styleContents.match(/[^{]*\{[\s\S]*?\}/g);
      rules = rules.map(function(rule) { return rule.trim() });

      rules.forEach(function(rule) {
        var match = rule.match(/([\s\S]*?)\s*\{([^}]*)\}/),
            rule = match[1],
            declaration = match[2].trim(),
            propertyValuePairs = declaration.replace(/;$/, '').split(/\s*;\s*/);

        if (!allRules[rule]) {
          allRules[rule] = { };
        }

        for (var i = 0, len = propertyValuePairs.length; i < len; i++) {
          var pair = propertyValuePairs[i].split(/\s*:\s*/),
              property = pair[0],
              value = pair[1];

          allRules[rule][property] = value;
        }
      });
    }

    return allRules;
  }

  function getGlobalStylesForElement(element) {
    var nodeName = element.nodeName,
        className = element.getAttribute('class'),
        id = element.getAttribute('id'),
        styles = { };

    for (var rule in fabric.cssRules) {
      var ruleMatchesElement = (className && new RegExp('^\\.' + className).test(rule)) ||
                               (id && new RegExp('^#' + id).test(rule)) ||
                               (new RegExp('^' + nodeName).test(rule));

      if (ruleMatchesElement) {
        for (var property in fabric.cssRules[rule]) {
          styles[property] = fabric.cssRules[rule][property];
        }
      }
    }

    return styles;
  }

  /**
   * Parses an SVG document, converts it to an array of corresponding fabric.* instances and passes them to a callback
   * @static
   * @function
   * @memberOf fabric
   * @method parseSVGDocument
   * @param {SVGDocument} doc SVG document to parse
   * @param {Function} callback Callback to call when parsing is finished; It's being passed an array of elements (parsed from a document).
   */
  fabric.parseSVGDocument = (function() {

    var reAllowedSVGTagNames = /^(path|circle|polygon|polyline|ellipse|rect|line|image)$/;

    // http://www.w3.org/TR/SVG/coords.html#ViewBoxAttribute
    // \d doesn't quite cut it (as we need to match an actual float number)

    // matches, e.g.: +14.56e-12, etc.
    var reNum = '(?:[-+]?\\d+(?:\\.\\d+)?(?:e[-+]?\\d+)?)';

    var reViewBoxAttrValue = new RegExp(
      '^' +
      '\\s*(' + reNum + '+)\\s*,?' +
      '\\s*(' + reNum + '+)\\s*,?' +
      '\\s*(' + reNum + '+)\\s*,?' +
      '\\s*(' + reNum + '+)\\s*' +
      '$'
    );

    function hasAncestorWithNodeName(element, nodeName) {
      while (element && (element = element.parentNode)) {
        if (nodeName.test(element.nodeName)) {
          return true;
        }
      }
      return false;
    }

    return function(doc, callback) {
      if (!doc) return;

      var startTime = new Date(),
          descendants = fabric.util.toArray(doc.getElementsByTagName('*'));

      if (descendants.length === 0) {
        // we're likely in node, where "o3-xml" library fails to gEBTN("*")
        // https://github.com/ajaxorg/node-o3-xml/issues/21
        descendants = doc.selectNodes("//*[name(.)!='svg']");
        var arr = [ ];
        for (var i = 0, len = descendants.length; i < len; i++) {
          arr[i] = descendants[i];
        }
        descendants = arr;
      }

      var elements = descendants.filter(function(el) {
        return reAllowedSVGTagNames.test(el.tagName) &&
              !hasAncestorWithNodeName(el, /^(?:pattern|defs)$/); // http://www.w3.org/TR/SVG/struct.html#DefsElement
      });

      if (!elements || (elements && !elements.length)) return;

      var viewBoxAttr = doc.getAttribute('viewBox'),
          widthAttr = doc.getAttribute('width'),
          heightAttr = doc.getAttribute('height'),
          width = null,
          height = null,
          minX,
          minY;

      if (viewBoxAttr && (viewBoxAttr = viewBoxAttr.match(reViewBoxAttrValue))) {
        minX = parseInt(viewBoxAttr[1], 10);
        minY = parseInt(viewBoxAttr[2], 10);
        width = parseInt(viewBoxAttr[3], 10);
        height = parseInt(viewBoxAttr[4], 10);
      }

      // values of width/height attributes overwrite those extracted from viewbox attribute
      width = widthAttr ? parseFloat(widthAttr) : width;
      height = heightAttr ? parseFloat(heightAttr) : height;

      var options = {
        width: width,
        height: height
      };

      fabric.gradientDefs = fabric.getGradientDefs(doc);
      fabric.cssRules = getCSSRules(doc);

      // Precedence of rules:   style > class > attribute

      fabric.parseElements(elements, function(instances) {
        fabric.documentParsingTime = new Date() - startTime;
        if (callback) {
          callback(instances, options);
        }
      }, clone(options));
    };
  })();

  /**
    * Used for caching SVG documents (loaded via `fabric.Canvas#loadSVGFromURL`)
    * @property
    * @namespace
    */
   var svgCache = {

     /**
      * @method has
      * @param {String} name
      * @param {Function} callback
      */
     has: function (name, callback) {
       callback(false);
     },

     /**
      * @method get
      * @param {String} url
      * @param {Function} callback
      */
     get: function (url, callback) {
       /* NOOP */
     },

     /**
      * @method set
      * @param {String} url
      * @param {Object} object
      */
     set: function (url, object) {
       /* NOOP */
     }
   };

   /**
    * Takes url corresponding to an SVG document, and parses it into a set of fabric objects
    * @method loadSVGFromURL
    * @param {String} url
    * @param {Function} callback
    */
   function loadSVGFromURL(url, callback) {

     url = url.replace(/^\n\s*/, '').replace(/\?.*$/, '').trim();

     svgCache.has(url, function (hasUrl) {
       if (hasUrl) {
         svgCache.get(url, function (value) {
           var enlivedRecord = _enlivenCachedObject(value);
           callback(enlivedRecord.objects, enlivedRecord.options);
         });
       }
       else {
         new fabric.util.request(url, {
           method: 'get',
           onComplete: onComplete
         });
       }
     });

     function onComplete(r) {

       var xml = r.responseXML;
       if (!xml) return;

       var doc = xml.documentElement;
       if (!doc) return;

       fabric.parseSVGDocument(doc, function (results, options) {
         svgCache.set(url, {
           objects: fabric.util.array.invoke(results, 'toObject'),
           options: options
         });
         callback(results, options);
       });
     }
   }

  /**
  * @method _enlivenCachedObject
  */
  function _enlivenCachedObject(cachedObject) {

   var objects = cachedObject.objects,
       options = cachedObject.options;

   objects = objects.map(function (o) {
     return fabric[capitalize(o.type)].fromObject(o);
   });

   return ({ objects: objects, options: options });
  }

  /**
    * Takes string corresponding to an SVG document, and parses it into a set of fabric objects
    * @method loadSVGFromString
    * @param {String} string
    * @param {Function} callback
    */
  function loadSVGFromString(string, callback) {
    string = string.trim();
    var doc;
    if (typeof DOMParser !== 'undefined') {
      var parser = new DOMParser();
      if (parser && parser.parseFromString) {
        doc = parser.parseFromString(string, 'text/xml');
      }
    }
    else if (fabric.window.ActiveXObject) {
      var doc = new ActiveXObject('Microsoft.XMLDOM');
      if (doc && doc.loadXML) {
        doc.async = 'false';
        doc.loadXML(string);
      }
    }

    fabric.parseSVGDocument(doc.documentElement, function (results, options) {
      callback(results, options);
    });
  }

  extend(fabric, {
    parseAttributes:        parseAttributes,
    parseElements:          parseElements,
    parseStyleAttribute:    parseStyleAttribute,
    parsePointsAttribute:   parsePointsAttribute,
    getCSSRules:            getCSSRules,

    loadSVGFromURL:         loadSVGFromURL,
    loadSVGFromString:      loadSVGFromString
  });

})(typeof exports != 'undefined' ? exports : this);
(function() {

  function getColorStopFromStyle(el) {
    var style = el.getAttribute('style');

    if (style) {
      var keyValuePairs = style.split(/\s*;\s*/);

      for (var i = keyValuePairs.length; i--; ) {

        var split = keyValuePairs[i].split(/\s*:\s*/),
            key = split[0].trim(),
            value = split[1].trim();

        if (key === 'stop-color') {
          return value;
        }
      }
    }
  }

  /** @namespace */

  fabric.Gradient = {

    /**
     * @method create
     * @static
     */
    create: function(ctx, options) {
      options || (options = { });

      var x1 = options.x1 || 0,
          y1 = options.y1 || 0,
          x2 = options.x2 || ctx.canvas.width,
          y2 = options.y2 || 0,
          colorStops = options.colorStops;

      var gradient = ctx.createLinearGradient(x1, y1, x2, y2);

      for (var position in colorStops) {
        var colorValue = colorStops[position];
        gradient.addColorStop(parseFloat(position), colorValue);
      }
      return gradient;
    },

    /**
     * @method fromElement
     * @static
     * @see http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement
     */
    fromElement: function(el, ctx, instance) {

      /**
       *  @example:
       *
       *  <linearGradient id="grad1">
       *    <stop offset="0%" stop-color="white"/>
       *    <stop offset="100%" stop-color="black"/>
       *  </linearGradient>
       *
       *  OR
       *
       *  <linearGradient id="grad1">
       *    <stop offset="0%" style="stop-color:rgb(255,255,255)"/>
       *    <stop offset="100%" style="stop-color:rgb(0,0,0)"/>
       *  </linearGradient>
       *
       */

      var colorStopEls = el.getElementsByTagName('stop'),
          el,
          offset,
          colorStops = { },
          colorStopFromStyle;

      for (var i = colorStopEls.length; i--; ) {
        el = colorStopEls[i];
        offset = parseInt(el.getAttribute('offset'), 10) / 100;
        colorStops[offset] = getColorStopFromStyle(el) || el.getAttribute('stop-color');
      }

      var coords = {
        x1: el.getAttribute('x1') || 0,
        y1: el.getAttribute('y1') || 0,
        x2: el.getAttribute('x2') || '100%',
        y2: el.getAttribute('y2') || 0
      };

      _convertPercentUnitsToValues(instance, coords);

      return fabric.Gradient.create(ctx, {
        x1: coords.x1,
        y1: coords.y1,
        x2: coords.x2,
        y2: coords.y2,
        colorStops: colorStops
      });
    },

    /**
     * @method forObject
     * @static
     */
    forObject: function(obj, ctx, options) {
      options || (options = { });

      _convertPercentUnitsToValues(obj, options);

      var gradient = fabric.Gradient.create(ctx, {
        x1: options.x1,
        y1: options.y1,
        x2: options.x2,
        y2: options.y2,
        colorStops: options.colorStops
      });

      return gradient;
    }
  };

  function _convertPercentUnitsToValues(object, options) {
    for (var prop in options) {
      if (typeof options[prop] === 'string' && /^\d+%$/.test(options[prop])) {
        var percents = parseFloat(options[prop], 10);
        if (prop === 'x1' || prop === 'x2') {
          options[prop] = object.width * percents / 100;
        }
        else if (prop === 'y1' || prop === 'y2') {
          options[prop] = object.height * percents / 100;
        }
      }
      // normalize rendering point (should be from top/left corner rather than center of the shape)
      if (prop === 'x1' || prop === 'x2') {
        options[prop] -= object.width / 2;
      }
      else if (prop === 'y1' || prop === 'y2') {
        options[prop] -= object.height / 2;
      }
    }
  }

  /**
   * Parses an SVG document, returning all of the gradient declarations found in it
   * @static
   * @function
   * @memberOf fabric
   * @method getGradientDefs
   * @param {SVGDocument} doc SVG document to parse
   * @return {Object} Gradient definitions; key corresponds to element id, value -- to gradient definition element
   */
  function getGradientDefs(doc) {
    var linearGradientEls = doc.getElementsByTagName('linearGradient'),
        radialGradientEls = doc.getElementsByTagName('radialGradient'),
        el,
        gradientDefs = { };

    for (var i = linearGradientEls.length; i--; ) {
      el = linearGradientEls[i];
      gradientDefs[el.id] = el;
    }

    for (var i = radialGradientEls.length; i--; ) {
      el = radialGradientEls[i];
      gradientDefs[el.id] = el;
    }

    return gradientDefs;
  }

  fabric.getGradientDefs = getGradientDefs;

})();
(function(global) {

  "use strict";

  /* Adaptation of work of Kevin Lindsey (kevin@kevlindev.com) */

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Point) {
    fabric.warn('fabric.Point is already defined');
    return;
  }

  fabric.Point = Point;

  /**
   * @name Point
   * @memberOf fabric
   * @constructor
   * @param {Number} x
   * @param {Number} y
   * @return {fabric.Point} thisArg
   */
  function Point(x, y) {
    if (arguments.length > 0) {
      this.init(x, y);
    }
  }

  Point.prototype = /** @scope fabric.Point.prototype */ {

    constructor: Point,

    /**
     * @method init
     * @param {Number} x
     * @param {Number} y
     */
    init: function (x, y) {
      this.x = x;
      this.y = y;
    },

    /**
     * @method add
     * @param {fabric.Point} that
     * @return {fabric.Point} new Point instance with added values
     */
    add: function (that) {
      return new Point(this.x + that.x, this.y + that.y);
    },

    /**
     * @method addEquals
     * @param {fabric.Point} that
     * @return {fabric.Point} thisArg
     */
    addEquals: function (that) {
      this.x += that.x;
      this.y += that.y;
      return this;
    },

    /**
     * @method scalarAdd
     * @param {Number} scalar
     * @return {fabric.Point} new Point with added value
     */
    scalarAdd: function (scalar) {
      return new Point(this.x + scalar, this.y + scalar);
    },

    /**
     * @method scalarAddEquals
     * @param {Number} scalar
     * @param {fabric.Point} thisArg
     */
    scalarAddEquals: function (scalar) {
      this.x += scalar;
      this.y += scalar;
      return this;
    },

    /**
     * @method subtract
     * @param {fabric.Point} that
     * @return {fabric.Point} new Point object with subtracted values
     */
    subtract: function (that) {
      return new Point(this.x - that.x, this.y - that.y);
    },

    /**
     * @method subtractEquals
     * @param {fabric.Point} that
     * @return {fabric.Point} thisArg
     */
    subtractEquals: function (that) {
      this.x -= that.x;
      this.y -= that.y;
      return this;
    },

    scalarSubtract: function (scalar) {
      return new Point(this.x - scalar, this.y - scalar);
    },

    scalarSubtractEquals: function (scalar) {
      this.x -= scalar;
      this.y -= scalar;
      return this;
    },

    multiply: function (scalar) {
      return new Point(this.x * scalar, this.y * scalar);
    },

    multiplyEquals: function (scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    },

    divide: function (scalar) {
      return new Point(this.x / scalar, this.y / scalar);
    },

    divideEquals: function (scalar) {
      this.x /= scalar;
      this.y /= scalar;
      return this;
    },

    eq: function (that) {
      return (this.x == that.x && this.y == that.y);
    },

    lt: function (that) {
      return (this.x < that.x && this.y < that.y);
    },

    lte: function (that) {
      return (this.x <= that.x && this.y <= that.y);
    },

    gt: function (that) {
      return (this.x > that.x && this.y > that.y);
    },

    gte: function (that) {
      return (this.x >= that.x && this.y >= that.y);
    },

    lerp: function (that, t) {
      return new Point(this.x + (that.x - this.x) * t, this.y + (that.y - this.y) * t);
    },

    distanceFrom: function (that) {
      var dx = this.x - that.x,
          dy = this.y - that.y;
      return Math.sqrt(dx * dx + dy * dy);
    },

    min: function (that) {
      return new Point(Math.min(this.x, that.x), Math.min(this.y, that.y));
    },

    max: function (that) {
      return new Point(Math.max(this.x, that.x), Math.max(this.y, that.y));
    },

    toString: function () {
      return this.x + "," + this.y;
    },

    setXY: function (x, y) {
      this.x = x;
      this.y = y;
    },

    setFromPoint: function (that) {
      this.x = that.x;
      this.y = that.y;
    },

    swap: function (that) {
      var x = this.x,
          y = this.y;
      this.x = that.x;
      this.y = that.y;
      that.x = x;
      that.y = y;
    }
  };

})(typeof exports != 'undefined' ? exports : this);
//= require 'point.class'

(function(global) {

  "use strict";

  /* Adaptation of work of Kevin Lindsey (kevin@kevlindev.com) */

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Intersection) {
    fabric.warn('fabric.Intersection is already defined');
    return;
  }

  /**
   * @class Intersection
   * @memberOf fabric
   */
  function Intersection(status) {
    if (arguments.length > 0) {
      this.init(status);
    }
  }

  fabric.Intersection = Intersection;

  fabric.Intersection.prototype = /** @scope fabric.Intersection.prototype */ {

    /**
     * @method init
     * @param {String} status
     */
    init: function (status) {
      this.status = status;
      this.points = [];
    },

    /**
     * @method appendPoint
     * @param {String} status
     */
    appendPoint: function (point) {
      this.points.push(point);
    },

    /**
     * @method appendPoints
     * @param {String} status
     */
    appendPoints: function (points) {
      this.points = this.points.concat(points);
    }
  };

  /**
   * @static
   * @method intersectLineLine
   */
  fabric.Intersection.intersectLineLine = function (a1, a2, b1, b2) {
    var result,
        ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x),
        ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x),
        u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
    if (u_b != 0) {
      var ua = ua_t / u_b,
          ub = ub_t / u_b;
      if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
        result = new Intersection("Intersection");
        result.points.push(new fabric.Point(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
      }
      else {
        result = new Intersection("No Intersection");
      }
    }
    else {
      if (ua_t == 0 || ub_t == 0) {
        result = new Intersection("Coincident");
      }
      else {
        result = new Intersection("Parallel");
      }
    }
    return result;
  };

  /**
   * @method intersectLinePolygon
   */
  fabric.Intersection.intersectLinePolygon = function(a1,a2,points){
    var result = new Intersection("No Intersection"),
        length = points.length;

    for (var i = 0; i < length; i++) {
      var b1 = points[i],
          b2 = points[(i+1) % length],
          inter = Intersection.intersectLineLine(a1, a2, b1, b2);

      result.appendPoints(inter.points);
    }
    if (result.points.length > 0) {
      result.status = "Intersection";
    }
    return result;
  };

  /**
   * @method intersectPolygonPolygon
   */
  fabric.Intersection.intersectPolygonPolygon = function (points1, points2) {
    var result = new Intersection("No Intersection"),
        length = points1.length;

    for (var i = 0; i < length; i++) {
      var a1 = points1[i],
          a2 = points1[(i+1) % length],
          inter = Intersection.intersectLinePolygon(a1, a2, points2);

      result.appendPoints(inter.points);
    }
    if (result.points.length > 0) {
      result.status = "Intersection";
    }
    return result;
  };

  /**
   * @method intersectPolygonRectangle
   */
  fabric.Intersection.intersectPolygonRectangle = function (points, r1, r2) {
    var min = r1.min(r2),
        max = r1.max(r2),
        topRight = new fabric.Point(max.x, min.y),
        bottomLeft = new fabric.Point(min.x, max.y),
        inter1 = Intersection.intersectLinePolygon(min, topRight, points),
        inter2 = Intersection.intersectLinePolygon(topRight, max, points),
        inter3 = Intersection.intersectLinePolygon(max, bottomLeft, points),
        inter4 = Intersection.intersectLinePolygon(bottomLeft, min, points),
        result = new Intersection("No Intersection");

    result.appendPoints(inter1.points);
    result.appendPoints(inter2.points);
    result.appendPoints(inter3.points);
    result.appendPoints(inter4.points);
    if (result.points.length > 0) {
      result.status="Intersection";
    }
    return result;
  };

})(typeof exports != 'undefined' ? exports : this);
(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Color) {
    fabric.warn('fabric.Color is already defined.');
    return;
  }

  /**
   * The purpose of {@link fabric.Color} is to abstract and encapsulate common color operations;
   * {@link fabric.Color} is a constructor and creates instances of {@link fabric.Color} objects.
   *
   * @class Color
   * @memberOf fabric
   * @param {String} color (optional) in hex or rgb(a) format
   */
  function Color(color) {
    if (!color) {
      this.setSource([0, 0, 0, 1]);
    }
    else {
      this._tryParsingColor(color);
    }
  }

  fabric.Color = Color;

  fabric.Color.prototype = /** @scope fabric.Color.prototype */ {

    /**
     * @private
     * @method _tryParsingColor
     */
    _tryParsingColor: function(color) {
      var source = Color.sourceFromHex(color);
      if (!source) {
        source = Color.sourceFromRgb(color);
      }
      if (source) {
        this.setSource(source);
      }
    },

    /**
     * Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])
     * @method getSource
     * @return {Array}
     */
    getSource: function() {
      return this._source;
    },

    /**
     * Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])
     * @method setSource
     * @param {Array} source
     */
    setSource: function(source) {
      this._source = source;
    },

    /**
     * Returns color represenation in RGB format
     * @method toRgb
     * @return {String} ex: rgb(0-255,0-255,0-255)
     */
    toRgb: function() {
      var source = this.getSource();
      return 'rgb(' + source[0] + ',' + source[1] + ',' + source[2] + ')';
    },

    /**
     * Returns color represenation in RGBA format
     * @method toRgba
     * @return {String} ex: rgba(0-255,0-255,0-255,0-1)
     */
    toRgba: function() {
      var source = this.getSource();
      return 'rgba(' + source[0] + ',' + source[1] + ',' + source[2] + ',' + source[3] + ')';
    },

    /**
     * Returns color represenation in HEX format
     * @method toHex
     * @return {String} ex: FF5555
     */
    toHex: function() {
      var source = this.getSource();

      var r = source[0].toString(16);
      r = (r.length == 1) ? ('0' + r) : r;

      var g = source[1].toString(16);
      g = (g.length == 1) ? ('0' + g) : g;

      var b = source[2].toString(16);
      b = (b.length == 1) ? ('0' + b) : b;

      return r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
    },

    /**
     * Gets value of alpha channel for this color
     * @method getAlpha
     * @return {Number} 0-1
     */
    getAlpha: function() {
      return this.getSource()[3];
    },

    /**
     * Sets value of alpha channel for this color
     * @method setAlpha
     * @param {Number} 0-1
     * @return {fabric.Color} thisArg
     */
    setAlpha: function(alpha) {
      var source = this.getSource();
      source[3] = alpha;
      this.setSource(source);
      return this;
    },

    /**
     * Transforms color to its grayscale representation
     * @method toGrayscale
     * @return {fabric.Color} thisArg
     */
    toGrayscale: function() {
      var source = this.getSource(),
          average = parseInt((source[0] * 0.3 + source[1] * 0.59 + source[2] * 0.11).toFixed(0), 10),
          currentAlpha = source[3];
      this.setSource([average, average, average, currentAlpha]);
      return this;
    },

    /**
     * Transforms color to its black and white representation
     * @method toGrayscale
     * @return {fabric.Color} thisArg
     */
    toBlackWhite: function(threshold) {
      var source = this.getSource(),
          average = (source[0] * 0.3 + source[1] * 0.59 + source[2] * 0.11).toFixed(0),
          currentAlpha = source[3],
          threshold = threshold || 127;

      average = (Number(average) < Number(threshold)) ? 0 : 255;
      this.setSource([average, average, average, currentAlpha]);
      return this;
    },

    /**
     * Overlays color with another color
     * @method overlayWith
     * @param {String|fabric.Color} otherColor
     * @return {fabric.Color} thisArg
     */
    overlayWith: function(otherColor) {
      if (!(otherColor instanceof Color)) {
        otherColor = new Color(otherColor);
      }

      var result = [],
          alpha = this.getAlpha(),
          otherAlpha = 0.5,
          source = this.getSource(),
          otherSource = otherColor.getSource();

      for (var i = 0; i < 3; i++) {
        result.push(Math.round((source[i] * (1 - otherAlpha)) + (otherSource[i] * otherAlpha)));
      }

      result[3] = alpha;
      this.setSource(result);
      return this;
    }
  };

  /**
   * Regex matching color in RGB or RGBA formats (ex: rgb(0, 0, 0), rgb(255, 100, 10, 0.5), rgb(1,1,1))
   * @static
   * @field
   */
  fabric.Color.reRGBa = /^rgba?\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(\d+(?:\.\d+)?))?\)$/;

  /**
   * Regex matching color in HEX format (ex: #FF5555, 010155, aff)
   * @static
   * @field
   */
  fabric.Color.reHex = /^#?([0-9a-f]{6}|[0-9a-f]{3})$/i;

  /**
   * Returns new color object, when given a color in RGB format
   * @method fromRgb
   * @param {String} color ex: rgb(0-255,0-255,0-255)
   * @return {fabric.Color}
   */
  fabric.Color.fromRgb = function(color) {
    return Color.fromSource(Color.sourceFromRgb(color));
  };

  /**
   * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in RGB or RGBA format
   * @method sourceFromRgb
   * @param {String} color ex: rgb(0-255,0-255,0-255)
   * @return {Array} source
   */
  fabric.Color.sourceFromRgb = function(color) {
    var match = color.match(Color.reRGBa);
    if (match) {
      return [
        parseInt(match[1], 10),
        parseInt(match[2], 10),
        parseInt(match[3], 10),
        match[4] ? parseFloat(match[4]) : 1
      ];
    }
  };

  /**
   * Returns new color object, when given a color in RGBA format
   * @static
   * @function
   * @method fromRgba
   * @param {String} color
   * @return {fabric.Color}
   */
  fabric.Color.fromRgba = Color.fromRgb;

  /**
   * Returns new color object, when given a color in HEX format
   * @static
   * @method fromHex
   * @return {fabric.Color}
   */
  fabric.Color.fromHex = function(color) {
    return Color.fromSource(Color.sourceFromHex(color));
  };

  /**
   * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in HEX format
   * @static
   * @method sourceFromHex
   * @param {String} color ex: FF5555
   * @return {Array} source
   */
  fabric.Color.sourceFromHex = function(color) {
    if (color.match(Color.reHex)) {
      var value = color.slice(color.indexOf('#') + 1),
          isShortNotation = (value.length === 3),
          r = isShortNotation ? (value.charAt(0) + value.charAt(0)) : value.substring(0, 2),
          g = isShortNotation ? (value.charAt(1) + value.charAt(1)) : value.substring(2, 4),
          b = isShortNotation ? (value.charAt(2) + value.charAt(2)) : value.substring(4, 6);

      return [
        parseInt(r, 16),
        parseInt(g, 16),
        parseInt(b, 16),
        1
      ];
    }
  };

  /**
   * Returns new color object, when given color in array representation (ex: [200, 100, 100, 0.5])
   * @static
   * @method fromSource
   * @return {fabric.Color}
   */
  fabric.Color.fromSource = function(source) {
    var oColor = new Color();
    oColor.setSource(source);
    return oColor;
  };

})(typeof exports != 'undefined' ? exports : this);
(function (global) {

  "use strict";

  if (fabric.Canvas) {
    fabric.warn('fabric.Canvas is already defined.');
    return;
  }

  // aliases for faster resolution
  var extend = fabric.util.object.extend,
      capitalize = fabric.util.string.capitalize,
      camelize = fabric.util.string.camelize,
      getPointer = fabric.util.getPointer,
      getElementOffset = fabric.util.getElementOffset,
      removeFromArray = fabric.util.removeFromArray,
      addListener = fabric.util.addListener,
      removeListener = fabric.util.removeListener,

      utilMin = fabric.util.array.min,
      utilMax = fabric.util.array.max,

      sqrt = Math.sqrt,
      pow = Math.pow,
      atan2 = Math.atan2,
      abs = Math.abs,
      min = Math.min,
      max = Math.max,

      CANVAS_INIT_ERROR = new Error('Could not initialize `canvas` element'),
      STROKE_OFFSET = 0.5,

      cursorMap = {
        'tr': 'ne-resize',
        'br': 'se-resize',
        'bl': 'sw-resize',
        'tl': 'nw-resize',
        'ml': 'w-resize',
        'mt': 'n-resize',
        'mr': 'e-resize',
        'mb': 's-resize'
      };

  /**
   * @class fabric.Canvas
   * @constructor
   * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
   * @param {Object} [options] Options object
   */
  fabric.Canvas = function (el, options) {

    options || (options = { });

    /**
     * The object literal containing mouse position if clicked in an empty area (no image)
     * @property _groupSelector
     * @type object
     */
    this._groupSelector = null;

    /**
     * The array literal containing all objects on canvas
     * @property _objects
     * @type array
     */
    this._objects = [];

    /**
     * The element that references the canvas interface implementation
     * @property _context
     * @type object
     */
    this._context = null;

    /**
     * The object literal containing the current x,y params of the transformation
     * @property _currentTransform
     * @type object
     */
    this._currentTransform = null;

    /**
     * References instance of fabric.Group - when multiple objects are selected
     * @property _activeGroup
     * @type object
     */
    this._activeGroup = null;

    /**
     * X coordinates of a path, captured during free drawing
     */
    this._freeDrawingXPoints = [ ];

    /**
     * Y coordinates of a path, captured during free drawing
     */
    this._freeDrawingYPoints = [ ];

    this._createUpperCanvas(el);
    this._initOptions(options);
    this._initWrapperElement();
    this._createLowerCanvas();

    this._initEvents();

    if (options.overlayImage) {
      this.setOverlayImage(options.overlayImage);
    }
    if (options.backgroundImage) {
      this.setBackgroundImage(options.backgroundImage, this.renderAll.bind(this));
    }

    this.calcOffset();

    fabric.Canvas.activeInstance = this;
  };

  extend(fabric.Canvas.prototype, fabric.Observable);

  extend(fabric.Canvas.prototype, /** @scope fabric.Canvas.prototype */ {

    /**
     * Background color of this canvas instance
     * @property
     * @type String
     */
    backgroundColor:        'rgba(0, 0, 0, 0)',

    /**
     * Background image of this canvas instance
     * Should be set via `setBackgroundImage`
     * @property
     * @type String
     */
    backgroundImage:        '',

    /**
     * Indicates whether group selection should be enabled
     * @property
     * @type Boolean
     */
    selection:              true,

    /**
     * Color of selection
     * @property
     * @type String
     */
    selectionColor:         'rgba(100, 100, 255, 0.3)', // blue

    /**
     * Color of the border of selection (usually slightly darker than color of selection itself)
     * @property
     * @type String
     */
    selectionBorderColor:   'rgba(255, 255, 255, 0.3)',

    /**
     * Width of a line used in selection
     * @property
     * @type Number
     */
    selectionLineWidth:     1,

    /**
     * Color of the line used in free drawing mode
     * @property
     * @type String
     */
    freeDrawingColor:       'rgb(0, 0, 0)',

    /**
     * Width of a line used in free drawing mode
     * @property
     * @type Number
     */
    freeDrawingLineWidth:   1,

    /**
     * @property
     * @type Boolean
     */
    includeDefaultValues:   true,

    /**
     * Indicates whether images loaded via `fabric.Canvas#loadImageFromUrl` should be cached
     * @property
     * @type Boolean
     */
    shouldCacheImages:      false,

    /**
     * Indicates whether objects' state should be saved
     * @property
     * @type Boolean
     */
    stateful:               true,

    /**
     * Indicates whether fabric.Canvas#add should also re-render canvas.
     * Disabling this option could give a great performance boost when adding a lot of objects to canvas at once
     * (followed by a manual rendering after addition)
     */
    renderOnAddition:       true,

    /**
     * @constant
     * @type Number
     */
    CANVAS_WIDTH:           600,

    /**
     * @constant
     * @type Number
     */
    CANVAS_HEIGHT:          600,

    /**
     * @constant
     * @type String
     */
    CONTAINER_CLASS:        'canvas-container',

    /**
     * @constant
     * @type String
     */
    HOVER_CURSOR:           'move',

    /**
     * @constant
     * @type String
     */
    CURSOR:                 'default',

    /**
     * Callback; invoked right before object is about to be scaled/rotated
     * @method onBeforeScaleRotate
     * @param {fabric.Object} target Object that's about to be scaled/rotated
     */
    onBeforeScaleRotate: function (target) {
      /* NOOP */
    },

    /**
     * Callback; invoked on every redraw of canvas and is being passed a number indicating current fps
     * @method onFpsUpdate
     * @param {Number} fps
     */
    onFpsUpdate: null,

    /**
     * Calculates canvas element offset relative to the document
     * This method is also attached as "resize" event handler of window
     * @method calcOffset
     * @return {fabric.Canvas} instance
     * @chainable
     */
    calcOffset: function () {
      this._offset = getElementOffset(this.upperCanvasEl);
      return this;
    },

    /**
     * @private
     */
    _loadImage: function(url, callback) {
      if (url) {
        var _this = this, img = new Image();

        /** @ignore */
        img.onload = function () {
          callback.call(_this, img);
          img = img.onload = null;
        };
        img.src = url;
      }
      return this;
    },

    /**
     * Sets overlay image for this canvas
     * @method setOverlayImage
     * @param {String} url url of an image to set overlay to
     * @param {Function} callback callback to invoke when image is loaded and set as an overlay
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setOverlayImage: function (url, callback) { // TODO (kangax): test callback
      return this._loadImage(url, function(img) {
        this.overlayImage = img;
        callback && callback();
      });
    },

    /**
     * Sets background image for this canvas
     * @method setBackgroundImage
     * @param {String} url url of an image to set background to
     * @param {Function} callback callback to invoke when image is loaded and set as background
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setBackgroundImage: function (url, callback) {
      return this._loadImage(url, function(img) {
        this.backgroundImage = img;
        callback && callback();
      });
    },

    /**
     * @private
     * @method _initWrapperElement
     * @param {Number} width
     * @param {Number} height
     */
    _initWrapperElement: function () {
      this.wrapperEl = fabric.util.wrapElement(this.upperCanvasEl, 'div', {
        'class': this.CONTAINER_CLASS
      });
      fabric.util.setStyle(this.wrapperEl, {
        width: this.getWidth() + 'px',
        height: this.getHeight() + 'px',
        position: 'relative'
      });
      fabric.util.makeElementUnselectable(this.wrapperEl);
    },

    /**
     * @private
     * @method _applyCanvasStyle
     * @param {Element} element
     */
    _applyCanvasStyle: function (element) {
      var width = this.getWidth() || element.width,
          height = this.getHeight() || element.height;

      fabric.util.setStyle(element, {
        position: 'absolute',
        width: width + 'px',
        height: height + 'px',
        left: 0,
        top: 0
      });
      element.width = width;
      element.height = height;
      fabric.util.makeElementUnselectable(element);
    },

    /**
     * @private
     * @method _createCanvasElement
     * @param {Element} element
     */
    _createCanvasElement: function() {
      var element = fabric.document.createElement('canvas');
      if (!element.style) {
        element.style = { };
      }
      if (!element) {
        throw CANVAS_INIT_ERROR;
      }
      this._initCanvasElement(element);
      return element;
    },

    _initCanvasElement: function(element) {
      if (typeof element.getContext === 'undefined' &&
          typeof G_vmlCanvasManager !== 'undefined' &&
          G_vmlCanvasManager.initElement) {

        G_vmlCanvasManager.initElement(element);
      }
      if (typeof element.getContext === 'undefined') {
        throw CANVAS_INIT_ERROR;
      }
    },

    /**
     * @method _initOptions
     * @param {Object} options
     */
    _initOptions: function (options) {
      for (var prop in options) {
        this[prop] = options[prop];
      }

      this.width = parseInt(this.upperCanvasEl.width, 10) || 0;
      this.height = parseInt(this.upperCanvasEl.height, 10) || 0;

      this.upperCanvasEl.style.width = this.width + 'px';
      this.upperCanvasEl.style.height = this.height + 'px';
    },

    /**
     * Adds mouse listeners to  canvas
     * @method _initEvents
     * @private
     * See configuration documentation for more details.
     */
    _initEvents: function () {
      var _this = this;

      this._onMouseDown = function (e) {
        _this.__onMouseDown(e);

        addListener(fabric.document, 'mouseup', _this._onMouseUp);
        fabric.isTouchSupported && addListener(fabric.document, 'touchend', _this._onMouseUp);

        addListener(fabric.document, 'mousemove', _this._onMouseMove);
        fabric.isTouchSupported && addListener(fabric.document, 'touchmove', _this._onMouseMove);

        removeListener(_this.upperCanvasEl, 'mousemove', _this._onMouseMove);
        fabric.isTouchSupported && removeListener(_this.upperCanvasEl, 'touchmove', _this._onMouseMove);
      };

      this._onMouseUp = function (e) {
        _this.__onMouseUp(e);

        removeListener(fabric.document, 'mouseup', _this._onMouseUp);
        fabric.isTouchSupported && removeListener(fabric.document, 'touchend', _this._onMouseUp);

        removeListener(fabric.document, 'mousemove', _this._onMouseMove);
        fabric.isTouchSupported && removeListener(fabric.document, 'touchmove', _this._onMouseMove);

        addListener(_this.upperCanvasEl, 'mousemove', _this._onMouseMove);
        fabric.isTouchSupported && addListener(_this.upperCanvasEl, 'touchmove', _this._onMouseMove);
      };

      this._onMouseMove = function (e) {
        e.preventDefault && e.preventDefault();
        _this.__onMouseMove(e);
      };

      this._onResize = function (e) {
        _this.calcOffset();
      };


      addListener(fabric.window, 'resize', this._onResize);

      if (fabric.isTouchSupported) {
        addListener(this.upperCanvasEl, 'touchstart', this._onMouseDown);
        addListener(this.upperCanvasEl, 'touchmove', this._onMouseMove);
      }
      else {
        addListener(this.upperCanvasEl, 'mousedown', this._onMouseDown);
        addListener(this.upperCanvasEl, 'mousemove', this._onMouseMove);
      }
    },

    /**
     * @method _createUpperCanvas
     * @param {HTMLElement|String} canvasEl Canvas element
     * @throws {CANVAS_INIT_ERROR} If canvas can not be initialized
     */
    _createUpperCanvas: function (canvasEl) {
      this.upperCanvasEl = fabric.util.getById(canvasEl) || this._createCanvasElement();
      this._initCanvasElement(this.upperCanvasEl);

      fabric.util.addClass(this.upperCanvasEl, 'upper-canvas');
      this._applyCanvasStyle(this.upperCanvasEl);

      this.contextTop = this.upperCanvasEl.getContext('2d');
    },

    /**
     * Creates a secondary canvas
     * @method _createLowerCanvas
     */
    _createLowerCanvas: function () {
      this.lowerCanvasEl = this._createCanvasElement();
      this.lowerCanvasEl.className = 'lower-canvas';

      this.wrapperEl.insertBefore(this.lowerCanvasEl, this.upperCanvasEl);

      this._applyCanvasStyle(this.lowerCanvasEl);
      this.contextContainer = this.lowerCanvasEl.getContext('2d');
    },

    /**
     * Returns canvas width
     * @method getWidth
     * @return {Number}
     */
    getWidth: function () {
      return this.width;
    },

    /**
     * Returns canvas height
     * @method getHeight
     * @return {Number}
     */
    getHeight: function () {
      return this.height;
    },

    /**
     * Sets width of this canvas instance
     * @method setWidth
     * @param {Number} width value to set width to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setWidth: function (value) {
      return this._setDimension('width', value);
    },

    /**
     * Sets height of this canvas instance
     * @method setHeight
     * @param {Number} height value to set height to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setHeight: function (value) {
      return this._setDimension('height', value);
    },

    /**
     * Sets dimensions (width, height) of this canvas instance
     * @method setDimensions
     * @param {Object} dimensions
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setDimensions: function(dimensions) {
      for (var prop in dimensions) {
        this._setDimension(prop, dimensions[prop]);
      }
      return this;
    },

    /**
     * Helper for setting width/height
     * @private
     * @method _setDimensions
     * @param {String} prop property (width|height)
     * @param {Number} value value to set property to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    _setDimension: function (prop, value) {
      this.lowerCanvasEl[prop] = value;
      this.lowerCanvasEl.style[prop] = value + 'px';

      this.upperCanvasEl[prop] = value;
      this.upperCanvasEl.style[prop] = value + 'px';

      this.wrapperEl.style[prop] = value + 'px';

      this[prop] = value;

      this.calcOffset();
      this.renderAll();

      return this;
    },

    /**
     * Method that defines the actions when mouse is released on canvas.
     * The method resets the currentTransform parameters, store the image corner
     * position in the image object and render the canvas on top.
     * @method __onMouseUp
     * @param {Event} e Event object fired on mouseup
     *
     */
    __onMouseUp: function (e) {

      if (this.isDrawingMode && this._isCurrentlyDrawing) {
        this._finalizeDrawingPath();
        return;
      }

      if (this._currentTransform) {

        var transform = this._currentTransform,
            target = transform.target;

        if (target._scaling) {
          target._scaling = false;
        }

        // determine the new coords everytime the image changes its position
        var i = this._objects.length;
        while (i--) {
          this._objects[i].setCoords();
        }

        // only fire :modified event if target coordinates were changed during mousedown-mouseup
        if (this.stateful && target.hasStateChanged()) {
          target.isMoving = false;
          this.fire('object:modified', { target: target });
        }
      }

      this._currentTransform = null;

      if (this._groupSelector) {
        // group selection was completed, determine its bounds
        this._findSelectedObjects(e);
      }
      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        activeGroup.setObjectsCoords();
        activeGroup.set('isMoving', false);
        this._setCursor(this.CURSOR);
      }

      // clear selection
      this._groupSelector = null;
      this.renderAll();

      this._setCursorFromEvent(e, target);

      // fix for FF
      this._setCursor('');

      var _this = this;
      setTimeout(function () {
        _this._setCursorFromEvent(e, target);
      }, 50);

      this.fire('mouse:up', { target: target, e: e });
    },

    _shouldClearSelection: function (e) {
      var target = this.findTarget(e),
          activeGroup = this.getActiveGroup();
      return (
        !target || (
          target &&
          activeGroup &&
          !activeGroup.contains(target) &&
          activeGroup !== target &&
          !e.shiftKey
        )
      );
    },

    /**
     * Method that defines the actions when mouse is clic ked on canvas.
     * The method inits the currentTransform parameters and renders all the
     * canvas so the current image can be placed on the top canvas and the rest
     * in on the container one.
     * @method __onMouseDown
     * @param e {Event} Event object fired on mousedown
     *
     */
    __onMouseDown: function (e) {

      // accept only left clicks
      if (e.which !== 1 && !fabric.isTouchSupported) return;

      if (this.isDrawingMode) {
        this._prepareForDrawing(e);

        // capture coordinates immediately; this allows to draw dots (when movement never occurs)
        this._captureDrawingPath(e);

        return;
      }

      // ignore if some object is being transformed at this moment
      if (this._currentTransform) return;

      var target = this.findTarget(e),
          pointer = this.getPointer(e),
          activeGroup = this.getActiveGroup(),
          corner;

      if (this._shouldClearSelection(e)) {

        this._groupSelector = {
          ex: pointer.x,
          ey: pointer.y,
          top: 0,
          left: 0
        };

        this.deactivateAllWithDispatch();
      }
      else {
        // determine if it's a drag or rotate case
        // rotate and scale will happen at the same time
        this.stateful && target.saveState();

        if (corner = target._findTargetCorner(e, this._offset)) {
          this.onBeforeScaleRotate(target);
        }

        this._setupCurrentTransform(e, target);

        var shouldHandleGroupLogic = e.shiftKey && (activeGroup || this.getActiveObject());
        if (shouldHandleGroupLogic) {
          this._handleGroupLogic(e, target);
        }
        else {
          if (target !== this.getActiveGroup()) {
            this.deactivateAll();
          }
          this.setActiveObject(target);
        }
      }
      // we must renderAll so that active image is placed on the top canvas
      this.renderAll();

      this.fire('mouse:down', { target: target, e: e });
    },

    /**
     * Returns &lt;canvas> element corresponding to this instance
     * @method getElement
     * @return {HTMLCanvasElement}
     */
    getElement: function () {
      return this.upperCanvasEl;
    },

    /**
     * Deactivates all objects and dispatches appropriate events
     * @method deactivateAllWithDispatch
     * @return {fabric.Canvas} thisArg
     */
    deactivateAllWithDispatch: function () {
      var activeObject = this.getActiveGroup() || this.getActiveObject();
      if (activeObject) {
        this.fire('before:selection:cleared', { target: activeObject });
      }
      this.deactivateAll();
      if (activeObject) {
        this.fire('selection:cleared');
      }
      return this;
    },

    /**
     * @private
     * @method _setupCurrentTransform
     */
    _setupCurrentTransform: function (e, target) {
      var action = 'drag',
          corner,
          pointer = getPointer(e);

      if (corner = target._findTargetCorner(e, this._offset)) {
        action = (corner === 'ml' || corner === 'mr')
          ? 'scaleX'
          : (corner === 'mt' || corner === 'mb')
            ? 'scaleY'
            : 'rotate';
      }

      this._currentTransform = {
        target: target,
        action: action,
        scaleX: target.scaleX,
        scaleY: target.scaleY,
        offsetX: pointer.x - target.left,
        offsetY: pointer.y - target.top,
        ex: pointer.x,
        ey: pointer.y,
        left: target.left,
        top: target.top,
        theta: target.theta,
        width: target.width * target.scaleX
      };

      this._currentTransform.original = {
        left: target.left,
        top: target.top
      };
    },

    _handleGroupLogic: function (e, target) {
      if (target.isType('group')) {
        // if it's a group, find target again, this time skipping group
        target = this.findTarget(e, true);
        // if even object is not found, bail out
        if (!target || target.isType('group')) {
          return;
        }
      }
      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        if (activeGroup.contains(target)) {
          activeGroup.remove(target);
          target.setActive(false);
          if (activeGroup.size() === 1) {
            // remove group alltogether if after removal it only contains 1 object
            this.discardActiveGroup();
          }
        }
        else {
          activeGroup.add(target);
        }
        this.fire('selection:created', { target: activeGroup });
        activeGroup.setActive(true);
      }
      else {
        // group does not exist
        if (this._activeObject) {
          // only if there's an active object
          if (target !== this._activeObject) {
            // and that object is not the actual target
            var group = new fabric.Group([ this._activeObject,target ]);
            this.setActiveGroup(group);
            activeGroup = this.getActiveGroup();
          }
        }
        // activate target object in any case
        target.setActive(true);
      }

      if (activeGroup) {
        activeGroup.saveCoords();
      }
    },

    /**
     * @private
     * @method _prepareForDrawing
     */
    _prepareForDrawing: function(e) {

      this._isCurrentlyDrawing = true;

      this.discardActiveObject().renderAll();

      var pointer = this.getPointer(e);

      this._freeDrawingXPoints.length = this._freeDrawingYPoints.length = 0;

      this._freeDrawingXPoints.push(pointer.x);
      this._freeDrawingYPoints.push(pointer.y);

      this.contextTop.beginPath();
      this.contextTop.moveTo(pointer.x, pointer.y);
      this.contextTop.strokeStyle = this.freeDrawingColor;
      this.contextTop.lineWidth = this.freeDrawingLineWidth;
      this.contextTop.lineCap = this.contextTop.lineJoin = 'round';
    },

    /**
     * @private
     * @method _captureDrawingPath
     */
    _captureDrawingPath: function(e) {
      var pointer = this.getPointer(e);

      this._freeDrawingXPoints.push(pointer.x);
      this._freeDrawingYPoints.push(pointer.y);

      this.contextTop.lineTo(pointer.x, pointer.y);
      this.contextTop.stroke();
    },

    /**
     * @private
     * @method _finalizeDrawingPath
     */
    _finalizeDrawingPath: function() {

      this.contextTop.closePath();

      this._isCurrentlyDrawing = false;

      var minX = utilMin(this._freeDrawingXPoints),
          minY = utilMin(this._freeDrawingYPoints),
          maxX = utilMax(this._freeDrawingXPoints),
          maxY = utilMax(this._freeDrawingYPoints),
          ctx = this.contextTop,
          path = [ ],
          xPoint,
          yPoint,
          xPoints = this._freeDrawingXPoints,
          yPoints = this._freeDrawingYPoints;

      path.push('M ', xPoints[0] - minX, ' ', yPoints[0] - minY, ' ');

      for (var i = 1; xPoint = xPoints[i], yPoint = yPoints[i]; i++) {
        path.push('L ', xPoint - minX, ' ', yPoint - minY, ' ');
      }

      // TODO (kangax): maybe remove Path creation from here, to decouple fabric.Canvas from fabric.Path,
      // and instead fire something like "drawing:completed" event with path string

      path = path.join('');

      if (path === "M 0 0 L 0 0 ") {
        // do not create 0 width/height paths, as they are rendered inconsistently across browsers
        // Firefox 4, for example, renders a dot, whereas Chrome 10 renders nothing
        return;
      }

      var p = new fabric.Path(path);

      p.fill = null;
      p.stroke = this.freeDrawingColor;
      p.strokeWidth = this.freeDrawingLineWidth;
      this.add(p);
      p.set("left", minX + (maxX - minX) / 2).set("top", minY + (maxY - minY) / 2).setCoords();
      this.renderAll();
      this.fire('path:created', { path: p });
    },

   /**
    * Method that defines the actions when mouse is hovering the canvas.
    * The currentTransform parameter will definde whether the user is rotating/scaling/translating
    * an image or neither of them (only hovering). A group selection is also possible and would cancel
    * all any other type of action.
    * In case of an image transformation only the top canvas will be rendered.
    * @method __onMouseMove
    * @param e {Event} Event object fired on mousemove
    *
    */
    __onMouseMove: function (e) {

      if (this.isDrawingMode) {
        if (this._isCurrentlyDrawing) {
          this._captureDrawingPath(e);
        }
        return;
      }

      var groupSelector = this._groupSelector;

      // We initially clicked in an empty area, so we draw a box for multiple selection.
      if (groupSelector !== null) {
        var pointer = getPointer(e);
        groupSelector.left = pointer.x - this._offset.left - groupSelector.ex;
        groupSelector.top = pointer.y - this._offset.top - groupSelector.ey;
        this.renderTop();
      }
      else if (!this._currentTransform) {

        // alias style to elimintate unnecessary lookup
        var style = this.upperCanvasEl.style;

        // Here we are hovering the canvas then we will determine
        // what part of the pictures we are hovering to change the caret symbol.
        // We won't do that while dragging or rotating in order to improve the
        // performance.
        var target = this.findTarget(e);

        if (!target) {
          // image/text was hovered-out from, we remove its borders
          for (var i = this._objects.length; i--; ) {
            if (this._objects[i] && !this._objects[i].active) {
              this._objects[i].setActive(false);
            }
          }
          style.cursor = this.CURSOR;
        }
        else {
          // set proper cursor
          this._setCursorFromEvent(e, target);
          if (target.isActive()) {
            // display corners when hovering over an image
            target.setCornersVisibility && target.setCornersVisibility(true);
          }
        }
      }
      else {
        // object is being transformed (scaled/rotated/moved/etc.)
        var pointer = getPointer(e),
            x = pointer.x,
            y = pointer.y;

        this._currentTransform.target.isMoving = true;

        if (this._currentTransform.action === 'rotate') {
          // rotate object only if shift key is not pressed
          // and if it is not a group we are transforming

          if (!e.shiftKey) {
            this._rotateObject(x, y);

            this.fire('object:rotating', {
              target: this._currentTransform.target
            });
          }

          this._scaleObject(x, y);
          this.fire('object:scaling', {
            target: this._currentTransform.target
          });
        }
        else if (this._currentTransform.action === 'scaleX') {
          this._scaleObject(x, y, 'x');

          this.fire('object:scaling', {
            target: this._currentTransform.target
          });
        }
        else if (this._currentTransform.action === 'scaleY') {
          this._scaleObject(x, y, 'y');

          this.fire('object:scaling', {
            target: this._currentTransform.target
          });
        }
        else {
          this._translateObject(x, y);

          this.fire('object:moving', {
            target: this._currentTransform.target
          });
        }
        // only commit here. when we are actually moving the pictures
        this.renderAll();
      }
      this.fire('mouse:move', { target: target, e: e });
    },

    /**
     * Translates object by "setting" its left/top
     * @method _translateObject
     * @param x {Number} pointer's x coordinate
     * @param y {Number} pointer's y coordinate
     */
    _translateObject: function (x, y) {
      var target = this._currentTransform.target;
      target.lockMovementX || target.set('left', x - this._currentTransform.offsetX);
      target.lockMovementY || target.set('top', y - this._currentTransform.offsetY);
    },

    /**
     * Scales object by invoking its scaleX/scaleY methods
     * @method _scaleObject
     * @param x {Number} pointer's x coordinate
     * @param y {Number} pointer's y coordinate
     * @param by {String} Either 'x' or 'y' - specifies dimension constraint by which to scale an object.
     *                    When not provided, an object is scaled by both dimensions equally
     */
    _scaleObject: function (x, y, by) {
      var t = this._currentTransform,
          offset = this._offset,
          target = t.target;

      if (target.lockScalingX && target.lockScalingY) return;

      var lastLen = sqrt(pow(t.ey - t.top - offset.top, 2) + pow(t.ex - t.left - offset.left, 2)),
          curLen = sqrt(pow(y - t.top - offset.top, 2) + pow(x - t.left - offset.left, 2));

      target._scaling = true;

      if (!by) {
        target.lockScalingX || target.set('scaleX', t.scaleX * curLen/lastLen);
        target.lockScalingY || target.set('scaleY', t.scaleY * curLen/lastLen);
      }
      else if (by === 'x' && !target.lockUniScaling) {
        target.lockScalingX || target.set('scaleX', t.scaleX * curLen/lastLen);
      }
      else if (by === 'y' && !target.lockUniScaling) {
        target.lockScalingY || target.set('scaleY', t.scaleY * curLen/lastLen);
      }
    },

    /**
     * Rotates object by invoking its rotate method
     * @method _rotateObject
     * @param x {Number} pointer's x coordinate
     * @param y {Number} pointer's y coordinate
     */
    _rotateObject: function (x, y) {

      var t = this._currentTransform,
          o = this._offset;

      if (t.target.lockRotation) return;

      var lastAngle = atan2(t.ey - t.top - o.top, t.ex - t.left - o.left),
          curAngle = atan2(y - t.top - o.top, x - t.left - o.left);

      t.target.set('theta', (curAngle - lastAngle) + t.theta);
    },

    /**
     * @method _setCursor
     */
    _setCursor: function (value) {
      this.upperCanvasEl.style.cursor = value;
    },

    /**
     * Sets the cursor depending on where the canvas is being hovered.
     * Note: very buggy in Opera
     * @method _setCursorFromEvent
     * @param e {Event} Event object
     * @param target {Object} Object that the mouse is hovering, if so.
     */
    _setCursorFromEvent: function (e, target) {
      var s = this.upperCanvasEl.style;
      if (!target) {
        s.cursor = this.CURSOR;
        return false;
      }
      else {
        var activeGroup = this.getActiveGroup();
        // only show proper corner when group selection is not active
        var corner = !!target._findTargetCorner
                      && (!activeGroup || !activeGroup.contains(target))
                      && target._findTargetCorner(e, this._offset);

        if (!corner) {
          s.cursor = this.HOVER_CURSOR;
        }
        else {
          if (corner in cursorMap) {
            s.cursor = cursorMap[corner];
          }
          else {
            s.cursor = this.CURSOR;
            return false;
          }
        }
      }
      return true;
    },

    /**
     * Given a context, renders an object on that context
     * @param ctx {Object} context to render object on
     * @param object {Object} object to render
     * @private
     */
    _draw: function (ctx, object) {
      object && object.render(ctx);
    },

    /**
     * @method _drawSelection
     * @private
     */
    _drawSelection: function () {
      var groupSelector = this._groupSelector,
          left = groupSelector.left,
          top = groupSelector.top,
          aleft = abs(left),
          atop = abs(top);

      this.contextTop.fillStyle = this.selectionColor;

      this.contextTop.fillRect(
        groupSelector.ex - ((left > 0) ? 0 : -left),
        groupSelector.ey - ((top > 0) ? 0 : -top),
        aleft,
        atop
      );

      this.contextTop.lineWidth = this.selectionLineWidth;
      this.contextTop.strokeStyle = this.selectionBorderColor;

      this.contextTop.strokeRect(
        groupSelector.ex + STROKE_OFFSET - ((left > 0) ? 0 : aleft),
        groupSelector.ey + STROKE_OFFSET - ((top > 0) ? 0 : atop),
        aleft,
        atop
      );
    },

    _findSelectedObjects: function (e) {
      var target,
          targetRegion,
          group = [ ],
          x1 = this._groupSelector.ex,
          y1 = this._groupSelector.ey,
          x2 = x1 + this._groupSelector.left,
          y2 = y1 + this._groupSelector.top,
          currentObject,
          selectionX1Y1 = new fabric.Point(min(x1, x2), min(y1, y2)),
          selectionX2Y2 = new fabric.Point(max(x1, x2), max(y1, y2));

      for (var i = 0, len = this._objects.length; i < len; ++i) {
        currentObject = this._objects[i];

        if (!currentObject) continue;

        if (currentObject.intersectsWithRect(selectionX1Y1, selectionX2Y2) ||
            currentObject.isContainedWithinRect(selectionX1Y1, selectionX2Y2)) {

          if (this.selection && currentObject.selectable) {
            currentObject.setActive(true);
            group.push(currentObject);
          }
        }
      }

      // do not create group for 1 element only
      if (group.length === 1) {
        this.setActiveObject(group[0]);
        this.fire('object:selected', {
          target: group[0]
        });
      }
      else if (group.length > 1) {
        var group = new fabric.Group(group);
        this.setActiveGroup(group);
        group.saveCoords();
        this.fire('selection:created', { target: group });
      }

      this.renderAll();
    },

    /**
     * Adds objects to canvas, then renders canvas;
     * Objects should be instances of (or inherit from) fabric.Object
     * @method add
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    add: function () {
      this._objects.push.apply(this._objects, arguments);
      for (var i = arguments.length; i--; ) {
        this.stateful && arguments[i].setupState();
        arguments[i].setCoords();
      }
      this.renderOnAddition && this.renderAll();
      return this;
    },

    /**
     * Inserts an object to canvas at specified index and renders canvas.
     * An object should be an instance of (or inherit from) fabric.Object
     * @method insertAt
     * @param object {Object} Object to insert
     * @param index {Number} index to insert object at
     * @param nonSplicing {Boolean} when `true`, no splicing (shifting) of objects occurs
     * @return {fabric.Canvas} instance
     */
    insertAt: function (object, index, nonSplicing) {
      if (nonSplicing) {
        this._objects[index] = object;
      }
      else {
        this._objects.splice(index, 0, object);
      }
      this.stateful && object.setupState();
      object.setCoords();
      this.renderAll();
      return this;
    },

    /**
     * Returns an array of objects this instance has
     * @method getObjects
     * @return {Array}
     */
    getObjects: function () {
      return this._objects;
    },

    /**
     * Returns topmost canvas context
     * @method getContext
     * @return {CanvasRenderingContext2D}
     */
    getContext: function () {
      return this.contextTop;
    },

    /**
     * Clears specified context of canvas element
     * @method clearContext
     * @param context {Object} ctx context to clear
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    clearContext: function(ctx) {
      ctx.clearRect(0, 0, this.width, this.height);
      return this;
    },

    /**
     * Clears all contexts (background, main, top) of an instance
     * @method clear
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    clear: function () {
      this._objects.length = 0;
      this.clearContext(this.contextTop);
      this.clearContext(this.contextContainer);
      this.renderAll();
      return this;
    },

    /**
     * Renders both the top canvas and the secondary container canvas.
     * @method renderAll
     * @param allOnTop {Boolean} optional Whether we want to force all images to be rendered on the top canvas
     * @return {fabric.Canvas} instance
     * @chainable
     */
    renderAll: function (allOnTop) {

      var canvasToDrawOn = this[allOnTop ? 'contextTop' : 'contextContainer'];

      this.clearContext(this.contextTop);

      if (!allOnTop) {
        this.clearContext(canvasToDrawOn);
      }

      var length = this._objects.length,
          activeGroup = this.getActiveGroup(),
          startTime = new Date();

      if (this.clipTo) {
        canvasToDrawOn.save();
        canvasToDrawOn.beginPath();
        this.clipTo(canvasToDrawOn);
        canvasToDrawOn.clip();
      }

      canvasToDrawOn.fillStyle = this.backgroundColor;
      canvasToDrawOn.fillRect(0, 0, this.width, this.height);

      if (typeof this.backgroundImage == 'object') {
        canvasToDrawOn.drawImage(this.backgroundImage, 0, 0, this.width, this.height);
      }

      if (length) {
        for (var i = 0; i < length; ++i) {
          if (!activeGroup ||
              (activeGroup && this._objects[i] && !activeGroup.contains(this._objects[i]))) {
            this._draw(canvasToDrawOn, this._objects[i]);
          }
        }
      }

      if (this.clipTo) {
        canvasToDrawOn.restore();
      }

      // delegate rendering to group selection (if one exists)
      if (activeGroup) {
        this._draw(this.contextTop, activeGroup);
      }

      if (this.overlayImage) {
        this.contextTop.drawImage(this.overlayImage, 0, 0);
      }

      if (this.onFpsUpdate) {
        var elapsedTime = new Date() - startTime;
        this.onFpsUpdate(~~(1000 / elapsedTime));
      }

      this.fire('after:render');

      return this;
    },

    /**
     * Method to render only the top canvas.
     * Also used to render the group selection box.
     * @method renderTop
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    renderTop: function () {

      this.clearContext(this.contextTop);
      if (this.overlayImage) {
        this.contextTop.drawImage(this.overlayImage, 0, 0);
      }

      // we render the top context - last object
      if (this.selection && this._groupSelector) {
        this._drawSelection();
      }

      // delegate rendering to group selection if one exists
      // used for drawing selection borders/corners
      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        activeGroup.render(this.contextTop);
      }

      this.fire('after:render');

      return this;
    },

    /**
     * Applies one implementation of 'point inside polygon' algorithm
     * @method containsPoint
     * @param e { Event } event object
     * @param target { fabric.Object } object to test against
     * @return {Boolean} true if point contains within area of given object
     */
    containsPoint: function (e, target) {
      var pointer = this.getPointer(e),
          xy = this._normalizePointer(target, pointer),
          x = xy.x,
          y = xy.y;

      // http://www.geog.ubc.ca/courses/klink/gis.notes/ncgia/u32.html
      // http://idav.ucdavis.edu/~okreylos/TAship/Spring2000/PointInPolygon.html

      // we iterate through each object. If target found, return it.
      var iLines = target._getImageLines(target.oCoords),
          xpoints = target._findCrossPoints(x, y, iLines);

      // if xcount is odd then we clicked inside the object
      // For the specific case of square images xcount === 1 in all true cases
      if ((xpoints && xpoints % 2 === 1) || target._findTargetCorner(e, this._offset)) {
        return true;
      }
      return false;
    },

    /**
     * @private
     * @method _normalizePointer
     */
    _normalizePointer: function (object, pointer) {

      var activeGroup = this.getActiveGroup(),
          x = pointer.x,
          y = pointer.y;

      var isObjectInGroup = (
        activeGroup &&
        object.type !== 'group' &&
        activeGroup.contains(object)
      );

      if (isObjectInGroup) {
        x -= activeGroup.left;
        y -= activeGroup.top;
      }
      return { x: x, y: y };
    },

    /**
     * Method that determines what object we are clicking on
     * @method findTarget
     * @param {Event} e mouse event
     * @param {Boolean} skipGroup when true, group is skipped and only objects are traversed through
     */
    findTarget: function (e, skipGroup) {

      var target,
          pointer = this.getPointer(e);

      // first check current group (if one exists)
      var activeGroup = this.getActiveGroup();

      if (activeGroup && !skipGroup && this.containsPoint(e, activeGroup)) {
        target = activeGroup;
        return target;
      }

      // then check all of the objects on canvas
      for (var i = this._objects.length; i--; ) {
        if (this._objects[i] && this.containsPoint(e, this._objects[i])) {
          target = this._objects[i];
          this.relatedTarget = target;
          break;
        }
      }
      if (target && target.selectable) {
        return target;
      }
    },

    /**
     * Exports canvas element to a dataurl image.
     * @method toDataURL
     * @param {String} format the format of the output image. Either "jpeg" or "png".
     * @return {String}
     */
    toDataURL: function (format) {
      this.renderAll(true);
      var data = this.upperCanvasEl.toDataURL('image/' + format);
      this.renderAll();
      return data;
    },

    /**
     * Exports canvas element to a dataurl image (allowing to change image size via multiplier).
     * @method toDataURLWithMultiplier
     * @param {String} format (png|jpeg)
     * @param {Number} multiplier
     * @return {String}
     */
    toDataURLWithMultiplier: function (format, multiplier) {

      var origWidth = this.getWidth(),
          origHeight = this.getHeight(),
          scaledWidth = origWidth * multiplier,
          scaledHeight = origHeight * multiplier,
          activeObject = this.getActiveObject();

      this.setWidth(scaledWidth).setHeight(scaledHeight);
      this.contextTop.scale(multiplier, multiplier);

      if (activeObject) {
        this.deactivateAll();
      }

      // restoring width, height for `renderAll` to draw
      // background properly (while context is scaled)
      this.width = origWidth;
      this.height = origHeight;

      this.renderAll(true);

      var dataURL = this.toDataURL(format);

      this.contextTop.scale(1 / multiplier,  1 / multiplier);
      this.setWidth(origWidth).setHeight(origHeight);

      if (activeObject) {
        this.setActiveObject(activeObject);
      }
      this.renderAll();

      return dataURL;
    },

    /**
     * Returns pointer coordinates relative to canvas.
     * @method getPointer
     * @return {Object} object with "x" and "y" number values
     */
    getPointer: function (e) {
      var pointer = getPointer(e);
      return {
        x: pointer.x - this._offset.left,
        y: pointer.y - this._offset.top
      };
    },

    /**
     * Returns coordinates of a center of canvas.
     * Returned value is an object with top and left properties
     * @method getCenter
     * @return {Object} object with "top" and "left" number values
     */
    getCenter: function () {
      return {
        top: this.getHeight() / 2,
        left: this.getWidth() / 2
      };
    },

    /**
     * Centers object horizontally.
     * @method centerObjectH
     * @param {fabric.Object} object Object to center
     * @return {fabric.Canvas} thisArg
     */
    centerObjectH: function (object) {
      object.set('left', this.getCenter().left);
      this.renderAll();
      return this;
    },

    /**
     * Centers object vertically.
     * @method centerObjectH
     * @param {fabric.Object} object Object to center
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    centerObjectV: function (object) {
      object.set('top', this.getCenter().top);
      this.renderAll();
      return this;
    },

    /**
     * Straightens object, then rerenders canvas
     * @method straightenObject
     * @param {fabric.Object} object Object to straighten
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    straightenObject: function (object) {
      object.straighten();
      this.renderAll();
      return this;
    },

    /**
     * Returs dataless JSON representation of canvas
     * @method toDatalessJSON
     * @return {String} json string
     */
    toDatalessJSON: function () {
      return this.toDatalessObject();
    },

    /**
     * Returns object representation of canvas
     * @method toObject
     * @return {Object}
     */
    toObject: function () {
      return this._toObjectMethod('toObject');
    },

    /**
     * Returns dataless object representation of canvas
     * @method toDatalessObject
     * @return {Object}
     */
    toDatalessObject: function () {
      return this._toObjectMethod('toDatalessObject');
    },

    /**
     * @private
     * @method _toObjectMethod
     */
    _toObjectMethod: function (methodName) {
      return {
        objects: this._objects.map(function (instance){
          // TODO (kangax): figure out how to clean this up
          if (!this.includeDefaultValues) {
            var originalValue = instance.includeDefaultValues;
            instance.includeDefaultValues = false;
          }
          var object = instance[methodName]();
          if (!this.includeDefaultValues) {
            instance.includeDefaultValues = originalValue;
          }
          return object;
        }, this),
        background: this.backgroundColor
      }
    },

    /**
     * Returns true if canvas contains no objects
     * @method isEmpty
     * @return {Boolean} true if canvas is empty
     */
    isEmpty: function () {
      return this._objects.length === 0;
    },

    /**
     * Loads an image from URL, creates an instance of fabric.Image and passes it to a callback
     * @function
     * @method loadImageFromURL
     * @param url {String} url of image to load
     * @param callback {Function} calback, invoked when image is loaded
     */
    loadImageFromURL: (function () {
      var imgCache = { };

      return function (url, callback) {
        // check cache first

        var _this = this;

        function checkIfLoaded() {
          var imgEl = fabric.document.getElementById(imgCache[url]);
          if (imgEl.width && imgEl.height) {
            callback(new fabric.Image(imgEl));
          }
          else {
            setTimeout(checkIfLoaded, 50);
          }
        }

        // get by id from cache
        if (imgCache[url]) {
          // id can be cached but image might still not be loaded, so we poll here
          checkIfLoaded();
        }
        // else append a new image element
        else {
          var imgEl = new Image();

          /** @ignore */
          imgEl.onload = function () {
            imgEl.onload = null;

            // setTimeout is to work around Chrome's issue,
            // when "load" event fires for (cached) image, yet its dimensions are 0

            setTimeout(function() {
              if (imgEl.width && imgEl.height) {
                callback(new fabric.Image(imgEl));
              }
            }, 0);
          };

          imgEl.className = 'canvas-img-clone';
          imgEl.style.cssText = 'position:absolute;left:-9999px;top:-9999px;';
          imgEl.src = url;

          if (this.shouldCacheImages) {
            // TODO (kangax): replace Element.identify w. fabric -based alternative
            imgCache[url] = Element.identify(imgEl);
          }

          fabric.document.body.appendChild(imgEl);
        }
      }
    })(),

    /**
     * Removes an object from canvas and returns it
     * @method remove
     * @param object {Object} Object to remove
     * @return {Object} removed object
     */
    remove: function (object) {
      removeFromArray(this._objects, object);
      if (this.getActiveObject() === object) {
        this.discardActiveObject();
      }
      this.renderAll();
      return object;
    },

    /**
     * Moves an object to the bottom of the stack of drawn objects
     * @method sendToBack
     * @param object {fabric.Object} Object to send to back
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    sendToBack: function (object) {
      removeFromArray(this._objects, object);
      this._objects.unshift(object);
      return this.renderAll();
    },

    /**
     * Moves an object to the top of the stack of drawn objects
     * @method bringToFront
     * @param object {fabric.Object} Object to send
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    bringToFront: function (object) {
      removeFromArray(this._objects, object);
      this._objects.push(object);
      return this.renderAll();
    },

    /**
     * Moves an object one level down in stack of drawn objects
     * @method sendBackwards
     * @param object {fabric.Object} Object to send
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    sendBackwards: function (object) {
      var idx = this._objects.indexOf(object),
          nextIntersectingIdx = idx;

      // if object is not on the bottom of stack
      if (idx !== 0) {

        // traverse down the stack looking for the nearest intersecting object
        for (var i=idx-1; i>=0; --i) {
          if (object.intersectsWithObject(this._objects[i]) || object.isContainedWithinObject(this._objects[i])) {
            nextIntersectingIdx = i;
            break;
          }
        }
        removeFromArray(this._objects, object);
        this._objects.splice(nextIntersectingIdx, 0, object);
      }
      return this.renderAll();
    },

    /**
     * Moves an object one level up in stack of drawn objects
     * @method sendForward
     * @param object {fabric.Object} Object to send
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    bringForward: function (object) {
      var objects = this.getObjects(),
          idx = objects.indexOf(object),
          nextIntersectingIdx = idx;


      // if object is not on top of stack (last item in an array)
      if (idx !== objects.length-1) {

        // traverse up the stack looking for the nearest intersecting object
        for (var i = idx + 1, l = this._objects.length; i < l; ++i) {
          if (object.intersectsWithObject(objects[i]) || object.isContainedWithinObject(this._objects[i])) {
            nextIntersectingIdx = i;
            break;
          }
        }
        removeFromArray(objects, object);
        objects.splice(nextIntersectingIdx, 0, object);
      }
      this.renderAll();
    },

    /**
     * Sets given object as active
     * @method setActiveObject
     * @param object {fabric.Object} Object to set as an active one
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setActiveObject: function (object) {
      if (this._activeObject) {
        this._activeObject.setActive(false);
      }
      this._activeObject = object;
      object.setActive(true);

      this.renderAll();

      this.fire('object:selected', { target: object });
      return this;
    },

    /**
     * Returns currently active object
     * @method getActiveObject
     * @return {fabric.Object} active object
     */
    getActiveObject: function () {
      return this._activeObject;
    },

    /**
     * Discards currently active object
     * @method discardActiveObject
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    discardActiveObject: function () {
      if (this._activeObject) {
        this._activeObject.setActive(false);
      }
      this._activeObject = null;
      return this;
    },

    /**
     * Sets active group to a speicified one
     * @method setActiveGroup
     * @param {fabric.Group} group Group to set as a current one
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setActiveGroup: function (group) {
      this._activeGroup = group;
      return this;
    },

    /**
     * Returns currently active group
     * @method getActiveGroup
     * @return {fabric.Group} Current group
     */
    getActiveGroup: function () {
      return this._activeGroup;
    },

    /**
     * Removes currently active group
     * @method discardActiveGroup
     * @return {fabric.Canvas} thisArg
     */
    discardActiveGroup: function () {
      var g = this.getActiveGroup();
      if (g) {
        g.destroy();
      }
      return this.setActiveGroup(null);
    },

    /**
     * Returns object at specified index
     * @method item
     * @param {Number} index
     * @return {fabric.Object}
     */
    item: function (index) {
      return this.getObjects()[index];
    },

    /**
     * Deactivates all objects by calling their setActive(false)
     * @method deactivateAll
     * @return {fabric.Canvas} thisArg
     */
    deactivateAll: function () {
      var allObjects = this.getObjects(),
          i = 0,
          len = allObjects.length;
      for ( ; i < len; i++) {
        allObjects[i].setActive(false);
      }
      this.discardActiveGroup();
      this.discardActiveObject();
      return this;
    },

    /**
     * Returns number representation of an instance complexity
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function () {
      return this.getObjects().reduce(function (memo, current) {
        memo += current.complexity ? current.complexity() : 0;
        return memo;
      }, 0);
    },

    /**
     * Iterates over all objects, invoking callback for each one of them
     * @method forEachObject
     * @return {fabric.Canvas} thisArg
     */
    forEachObject: function(callback, context) {
      var objects = this.getObjects(),
          i = objects.length;
      while (i--) {
        callback.call(context, objects[i], i, objects);
      }
      return this;
    },

    /**
     * Clears a canvas element and removes all event handlers.
     * @method dispose
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    dispose: function () {
      this.clear();
      removeListener(this.upperCanvasEl, 'mousedown', this._onMouseDown);
      removeListener(this.upperCanvasEl, 'mousemove', this._onMouseMove);
      removeListener(fabric.window, 'resize', this._onResize);
      return this;
    },

    /**
     * @private
     * @method _resizeImageToFit
     * @param {HTMLImageElement} imgEl
     */
    _resizeImageToFit: function (imgEl) {

      var imageWidth = imgEl.width || imgEl.offsetWidth,
          widthScaleFactor = this.getWidth() / imageWidth;

      // scale image down so that it has original dimensions when printed in large resolution
      if (imageWidth) {
        imgEl.width = imageWidth * widthScaleFactor;
      }
    }
  });

  /**
   * Returns a string representation of an instance
   * @method toString
   * @return {String} string representation of an instance
   */
  fabric.Canvas.prototype.toString = function () { // Assign explicitly since `extend` doesn't take care of DontEnum bug yet
    return '#<fabric.Canvas (' + this.complexity() + '): '+
           '{ objects: ' + this.getObjects().length + ' }>';
  };

  extend(fabric.Canvas, /** @scope fabric.Canvas */ {

    /**
     * @static
     * @property EMPTY_JSON
     * @type String
     */
    EMPTY_JSON: '{"objects": [], "background": "white"}',

    /**
     * Takes &lt;canvas> element and transforms its data in such way that it becomes grayscale
     * @static
     * @method toGrayscale
     * @param {HTMLCanvasElement} canvasEl
     */
    toGrayscale: function (canvasEl) {
       var context = canvasEl.getContext('2d'),
           imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
           data = imageData.data,
           iLen = imageData.width,
           jLen = imageData.height,
           index, average, i, j;

       for (i = 0; i < iLen; i++) {
         for (j = 0; j < jLen; j++) {

           index = (i * 4) * jLen + (j * 4);
           average = (data[index] + data[index + 1] + data[index + 2]) / 3;

           data[index]     = average;
           data[index + 1] = average;
           data[index + 2] = average;
         }
       }

       context.putImageData(imageData, 0, 0);
     },

    /**
     * Provides a way to check support of some of the canvas methods
     * (either those of HTMLCanvasElement itself, or rendering context)
     *
     * @method supports
     * @param methodName {String} Method to check support for;
     *                            Could be one of "getImageData" or "toDataURL"
     * @return {Boolean | null} `true` if method is supported (or at least exists),
     *                          `null` if canvas element or context can not be initialized
     */
    supports: function (methodName) {
      var el = fabric.document.createElement('canvas');

      if (typeof G_vmlCanvasManager !== 'undefined') {
        G_vmlCanvasManager.initElement(el);
      }
      if (!el || !el.getContext) {
        return null;
      }

      var ctx = el.getContext('2d');
      if (!ctx) {
        return null;
      }

      switch (methodName) {

        case 'getImageData':
          return typeof ctx.getImageData !== 'undefined';

        case 'toDataURL':
          return typeof el.toDataURL !== 'undefined';

        default:
          return null;
      }
    }
  });

  /**
   * Returs JSON representation of canvas
   * @function
   * @method toJSON
   * @return {String} json string
   */
  fabric.Canvas.prototype.toJSON = fabric.Canvas.prototype.toObject;

  /**
   * @class fabric.Element
   * @alias fabric.Canvas
   * @deprecated
   * @constructor
   */
  fabric.Element = fabric.Canvas;

  if (fabric.isTouchSupported) {
    fabric.Canvas.prototype._setCursorFromEvent = function() { };
  }

})(typeof exports != 'undefined' ? exports : this);
fabric.util.object.extend(fabric.Canvas.prototype, {

  /**
   * Centers object horizontally with animation.
   * @method fxCenterObjectH
   * @param {fabric.Object} object Object to center
   * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxCenterObjectH: function (object, callbacks) {
    callbacks = callbacks || { };

    var empty = function() { },
        onComplete = callbacks.onComplete || empty,
        onChange = callbacks.onChange || empty,
        _this = this;

    fabric.util.animate({
      startValue: object.get('left'),
      endValue: this.getCenter().left,
      duration: this.FX_DURATION,
      onChange: function(value) {
        object.set('left', value);
        _this.renderAll();
        onChange();
      },
      onComplete: function() {
        object.setCoords();
        onComplete();
      }
    });

    return this;
  },

  /**
   * Centers object vertically with animation.
   * @method fxCenterObjectV
   * @param {fabric.Object} object Object to center
   * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxCenterObjectV: function (object, callbacks) {
    callbacks = callbacks || { };

    var empty = function() { },
        onComplete = callbacks.onComplete || empty,
        onChange = callbacks.onChange || empty,
        _this = this;

    fabric.util.animate({
      startValue: object.get('top'),
      endValue: this.getCenter().top,
      duration: this.FX_DURATION,
      onChange: function(value) {
        object.set('top', value);
        _this.renderAll();
        onChange();
      },
      onComplete: function() {
        object.setCoords();
        onComplete();
      }
    });

    return this;
  },

  /**
   * Same as `fabric.Canvas#straightenObject`, but animated
   * @method fxStraightenObject
   * @param {fabric.Object} object Object to straighten
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxStraightenObject: function (object) {
    object.fxStraighten({
      onChange: this.renderAll.bind(this)
    });
    return this;
  },

  /**
   * Same as `fabric.Canvas#remove` but animated
   * @method fxRemove
   * @param {fabric.Object} object Object to remove
   * @param {Function} callback Callback, invoked on effect completion
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxRemove: function (object, callback) {
    var _this = this;
    object.fxRemove({
      onChange: this.renderAll.bind(this),
      onComplete: function () {
        _this.remove(object);
        if (typeof callback === 'function') {
          callback();
        }
      }
    });
    return this;
  }
});
fabric.util.object.extend(fabric.Canvas.prototype, {

  /**
   * Populates canvas with data from the specified dataless JSON
   * JSON format must conform to the one of `fabric.Canvas#toDatalessJSON`
   * @method loadFromDatalessJSON
   * @param {String} json JSON string
   * @param {Function} callback Callback, invoked when json is parsed
   *                            and corresponding objects (e.g: fabric.Image)
   *                            are initialized
   * @return {fabric.Canvas} instance
   * @chainable
   */
  loadFromDatalessJSON: function (json, callback) {

    if (!json) {
      return;
    }

    // serialize if it wasn't already
    var serialized = (typeof json === 'string')
      ? JSON.parse(json)
      : json;

    if (!serialized || (serialized && !serialized.objects)) return;

    this.clear();

    // TODO: test this
    this.backgroundColor = serialized.background;
    this._enlivenDatalessObjects(serialized.objects, callback);
  },

  /**
   * @method _enlivenDatalessObjects
   * @param {Array} objects
   * @param {Function} callback
   */
  _enlivenDatalessObjects: function (objects, callback) {

    /** @ignore */
    function onObjectLoaded(object, index) {
      _this.insertAt(object, index, true);
      object.setCoords();
      if (++numLoadedObjects === numTotalObjects) {
        callback && callback();
      }
    }

    var _this = this,
        numLoadedObjects = 0,
        numTotalObjects = objects.length;

    if (numTotalObjects === 0 && callback) {
      callback();
    }

    try {
      objects.forEach(function (obj, index) {

        var pathProp = obj.paths ? 'paths' : 'path';
        var path = obj[pathProp];

        delete obj[pathProp];

        if (typeof path !== 'string') {
          switch (obj.type) {
            case 'image':
            case 'text':
              fabric[fabric.util.string.capitalize(obj.type)].fromObject(obj, function (o) {
                onObjectLoaded(o, index);
              });
              break;
            default:
              var klass = fabric[fabric.util.string.camelize(fabric.util.string.capitalize(obj.type))];
              if (klass && klass.fromObject) {
                // restore path
                if (path) {
                  obj[pathProp] = path;
                }
                onObjectLoaded(klass.fromObject(obj), index);
              }
              break;
          }
        }
        else {
          if (obj.type === 'image') {
            _this.loadImageFromURL(path, function (image) {
              image.setSourcePath(path);

              fabric.util.object.extend(image, obj);
              image.setAngle(obj.angle);

              onObjectLoaded(image, index);
            });
          }
          else if (obj.type === 'text') {

            obj.path = path;
            var object = fabric.Text.fromObject(obj);
            var onscriptload = function () {
              // TODO (kangax): find out why Opera refuses to work without this timeout
              if (Object.prototype.toString.call(fabric.window.opera) === '[object Opera]') {
                setTimeout(function () {
                  onObjectLoaded(object, index);
                }, 500);
              }
              else {
                onObjectLoaded(object, index);
              }
            }

            fabric.util.getScript(path, onscriptload);
          }
          else {
            fabric.loadSVGFromURL(path, function (elements, options) {
              if (elements.length > 1) {
                var object = new fabric.PathGroup(elements, obj);
              }
              else {
                var object = elements[0];
              }
              object.setSourcePath(path);

              // copy parameters from serialied json to object (left, top, scaleX, scaleY, etc.)
              // skip this step if an object is a PathGroup, since we already passed it options object before
              if (!(object instanceof fabric.PathGroup)) {
                fabric.util.object.extend(object, obj);
                if (typeof obj.angle !== 'undefined') {
                  object.setAngle(obj.angle);
                }
              }

              onObjectLoaded(object, index);
            });
          }
        }
      }, this);
    }
    catch(e) {
      fabric.log(e.message);
    }
  },

  /**
   * Populates canvas with data from the specified JSON
   * JSON format must conform to the one of `fabric.Canvas#toJSON`
   * @method loadFromJSON
   * @param {String} json JSON string
   * @param {Function} callback Callback, invoked when json is parsed
   *                            and corresponding objects (e.g: fabric.Image)
   *                            are initialized
   * @return {fabric.Canvas} instance
   * @chainable
   */
  loadFromJSON: function (json, callback) {
    if (!json) return;

    var serialized = JSON.parse(json);
    if (!serialized || (serialized && !serialized.objects)) return;

    this.clear();
    var _this = this;
    this._enlivenObjects(serialized.objects, function () {
      _this.backgroundColor = serialized.background;
      if (callback) {
        callback();
      }
    });

    return this;
  },

  /**
   * @method _enlivenObjects
   * @param {Array} objects
   * @param {Function} callback
   */
  _enlivenObjects: function (objects, callback) {
    var numLoadedImages = 0,
        // get length of all images
        numTotalImages = objects.filter(function (o) {
          return o.type === 'image';
        }).length;

    var _this = this;

    objects.forEach(function (o, index) {
      if (!o.type) {
        return;
      }
      switch (o.type) {
        case 'image':
        case 'font':
          fabric[fabric.util.string.capitalize(o.type)].fromObject(o, function (o) {
            _this.insertAt(o, index, true);
            if (++numLoadedImages === numTotalImages) {
              if (callback) {
                callback();
              }
            }
          });
          break;
        default:
          var klass = fabric[fabric.util.string.camelize(fabric.util.string.capitalize(o.type))];
          if (klass && klass.fromObject) {
            _this.insertAt(klass.fromObject(o), index, true);
          }
          break;
      }
    });

    if (numTotalImages === 0 && callback) {
      callback();
    }
  },

  /**
   * @private
   * @method _toDataURL
   * @param {String} format
   * @param {Function} callback
   */
  _toDataURL: function (format, callback) {
    this.clone(function (clone) {
      callback(clone.toDataURL(format));
    });
  },

  /**
   * @private
   * @method _toDataURLWithMultiplier
   * @param {String} format
   * @param {Number} multiplier
   * @param {Function} callback
   */
  _toDataURLWithMultiplier: function (format, multiplier, callback) {
    this.clone(function (clone) {
      callback(clone.toDataURLWithMultiplier(format, multiplier));
    });
  },

  /**
   * Clones canvas instance
   * @method clone
   * @param {Object} [callback] Expects `onBeforeClone` and `onAfterClone` functions
   * @return {fabric.Canvas} Clone of this instance
   */
  clone: function (callback) {
    var el = fabric.document.createElement('canvas');

    el.width = this.getWidth();
    el.height = this.getHeight();

    // cache
    var clone = this.__clone || (this.__clone = new fabric.Canvas(el));
    clone.clipTo = this.clipTo;

    return clone.loadFromJSON(JSON.stringify(this.toJSON()), function () {
      if (callback) {
        callback(clone);
      }
    });
  }
});
(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      clone = fabric.util.object.clone,
      toFixed = fabric.util.toFixed,
      capitalize = fabric.util.string.capitalize,
      getPointer = fabric.util.getPointer,
      degreesToRadians = fabric.util.degreesToRadians,
      slice = Array.prototype.slice;

  if (fabric.Object) {
    return;
  }

  /**
   * @class Object
   * @memberOf fabric
   */
  fabric.Object = fabric.util.createClass(/** @scope fabric.Object.prototype */ {

    /**
     * Type of an object (rect, circle, path, etc)
     * @property
     * @type String
     */
    type:                       'object',

    /**
     * @property
     * @type Boolean
     */
    includeDefaultValues:       true,

    /**
     * @constant
     * @type Number
     */
    NUM_FRACTION_DIGITS:        2,

    /**
     * @constant
     * @type Number
     */
    FX_DURATION:                500,

    /**
     * @constant
     * @type Number
     */
    MIN_SCALE_LIMIT:            0.1,

    /**
     * List of properties to consider when checking if state of an object is changed (fabric.Object#hasStateChanged);
     * as well as for history (undo/redo) purposes
     * @property
     * @type Array
     */
    stateProperties:  ('top left width height scaleX scaleY flipX flipY ' +
                      'theta angle opacity cornersize fill overlayFill stroke ' +
                      'strokeWidth fillRule borderScaleFactor transformMatrix ' +
                      'selectable').split(' '),

    top:                      0,
    left:                     0,
    width:                    0,
    height:                   0,
    scaleX:                   1,
    scaleY:                   1,
    flipX:                    false,
    flipY:                    false,
    theta:                    0,
    opacity:                  1,
    angle:                    0,
    cornersize:               12,
    padding:                  0,
    borderColor:              'rgba(102,153,255,0.75)',
    cornerColor:              'rgba(102,153,255,0.5)',
    fill:                     'rgb(0,0,0)',
    fillRule:                 'source-over',
    overlayFill:              null,
    stroke:                   null,
    strokeWidth:              1,
    borderOpacityWhenMoving:  0.4,
    borderScaleFactor:        1,
    transformMatrix:          null,

    /**
     * When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection)
     * @property
     * @type Boolean
     */
    selectable:               true,

    /**
     * When set to `false`, object's controls are not displayed and can not be used to manipulate object
     * @property
     * @type Boolean
     */
    hasControls:              true,

    /**
     * When set to `false`, object's borders are not rendered
     * @property
     * @type Boolean
     */
    hasBorders:               true,

    /**
     * @method callSuper
     * @param {String} methodName
     */
    callSuper: function(methodName) {
      var fn = this.constructor.superclass.prototype[methodName];
      return (arguments.length > 1)
        ? fn.apply(this, slice.call(arguments, 1))
        : fn.call(this);
    },

    /**
     * Constructor
     * @method initialize
     * @param {Object} [options] Options object
     */
    initialize: function(options) {
      options && this.setOptions(options);
    },

    /**
     * @method setOptions
     * @param {Object} [options]
     */
    setOptions: function(options) {
      var i = this.stateProperties.length, prop;
      while (i--) {
        prop = this.stateProperties[i];
        if (prop in options) {
          this.set(prop, options[prop]);
        }
      }
    },

    /**
     * @method transform
     * @param {CanvasRenderingContext2D} ctx Context
     */
    transform: function(ctx) {
      ctx.globalAlpha = this.opacity;
      ctx.translate(this.left, this.top);
      ctx.rotate(this.theta);
      ctx.scale(
        this.scaleX * (this.flipX ? -1 : 1),
        this.scaleY * (this.flipY ? -1 : 1)
      );
    },

    /**
     * Returns an object representation of an instance
     * @method toObject
     * @return {Object}
     */
    toObject: function() {

      var object = {
        type:         this.type,
        left:         toFixed(this.left, this.NUM_FRACTION_DIGITS),
        top:          toFixed(this.top, this.NUM_FRACTION_DIGITS),
        width:        toFixed(this.width, this.NUM_FRACTION_DIGITS),
        height:       toFixed(this.height, this.NUM_FRACTION_DIGITS),
        fill:         this.fill,
        overlayFill:  this.overlayFill,
        stroke:       this.stroke,
        strokeWidth:  this.strokeWidth,
        scaleX:       toFixed(this.scaleX, this.NUM_FRACTION_DIGITS),
        scaleY:       toFixed(this.scaleY, this.NUM_FRACTION_DIGITS),
        angle:        toFixed(this.getAngle(), this.NUM_FRACTION_DIGITS),
        flipX:        this.flipX,
        flipY:        this.flipY,
        opacity:      toFixed(this.opacity, this.NUM_FRACTION_DIGITS),
        selectable:   this.selectable
      };

      if (!this.includeDefaultValues) {
        object = this._removeDefaultValues(object);
      }

      return object;
    },

    /**
     * Returns (dataless) object representation of an instance
     * @method toDatalessObject
     */
    toDatalessObject: function() {
      // will be overwritten by subclasses
      return this.toObject();
    },

    /**
     * @private
     * @method _removeDefaultValues
     */
    _removeDefaultValues: function(object) {
      var defaultOptions = fabric.Object.prototype.options;
      if (defaultOptions) {
        this.stateProperties.forEach(function(prop) {
          if (object[prop] === defaultOptions[prop]) {
            delete object[prop];
          }
        });
      }
      return object;
    },

    /**
     * Returns true if an object is in its active state
     * @return {Boolean} true if an object is in its active state
     */
    isActive: function() {
      return !!this.active;
    },

    /**
     * Sets state of an object - `true` makes it active, `false` - inactive
     * @param {Boolean} active
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setActive: function(active) {
      this.active = !!active;
      return this;
    },

    /**
     * Returns a string representation of an instance
     * @return {String}
     */
    toString: function() {
      return "#<fabric." + capitalize(this.type) + ">";
    },

    /**
     * Basic setter
     * @param {Any} property
     * @param {Any} value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    set: function(property, value) {
      var shouldConstrainValue = (property === 'scaleX' || property === 'scaleY') && value < this.MIN_SCALE_LIMIT;
      if (shouldConstrainValue) {
        value = this.MIN_SCALE_LIMIT;
      }
      if (typeof property == 'object') {
        for (var prop in property) {
          this.set(prop, property[prop]);
        }
      }
      else {
        if (property === 'angle') {
          this.setAngle(value);
        }
        else {
          this[property] = value;
        }
      }

      return this;
    },

    /**
     * Toggles specified property from `true` to `false` or from `false` to `true`
     * @method toggle
     * @param {String} property property to toggle
     * @return {fabric.Object} thisArg
     * @chainable
     */
    toggle: function(property) {
      var value = this.get(property);
      if (typeof value === 'boolean') {
        this.set(property, !value);
      }
      return this;
    },

    /**
     * @method setSourcePath
     * @param {String} value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setSourcePath: function(value) {
      this.sourcePath = value;
      return this;
    },

    /**
     * Basic getter
     * @method get
     * @param {Any} property
     * @return {Any} value of a property
     */
    get: function(property) {
      return (property === 'angle')
        ? this.getAngle()
        : this[property];
    },

    /**
     * @method render
     * @param {CanvasRenderingContext2D} ctx context to render on
     * @param {Boolean} noTransform
     */
    render: function(ctx, noTransform) {

      // do not render if width or height are zeros
      if (this.width === 0 || this.height === 0) return;

      ctx.save();

      var m = this.transformMatrix;
      if (m) {
        ctx.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);
      }

      if (!noTransform) {
        this.transform(ctx);
      }

      if (this.stroke) {
        ctx.lineWidth = this.strokeWidth;
        ctx.strokeStyle = this.stroke;
      }

      if (this.overlayFill) {
        ctx.fillStyle = this.overlayFill;
      }
      else if (this.fill) {
        ctx.fillStyle = this.fill;
      }

      if (this.group) {
        // TODO: this breaks some shapes, need to look into it
        // ctx.translate(
        //    -this.group.width / 2 + this.width / 2,
        //    -this.group.height / 2 + this.height / 2
        // );
      }
      this._render(ctx, noTransform);

      if (this.active && !noTransform) {
        this.drawBorders(ctx);
        this.hideCorners || this.drawCorners(ctx);
      }
      ctx.restore();
    },

    /**
     * Returns width of an object
     * @method getWidth
     * @return {Number} width value
     */
    getWidth: function() {
      return this.width * this.scaleX;
    },

    /**
     * Returns height of an object
     * @method getHeight
     * @return {Number} height value
     */
    getHeight: function() {
      return this.height * this.scaleY;
    },

    /**
     * Scales an object (equally by x and y)
     * @method scale
     * @param value {Number} scale factor
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scale: function(value) {
      this.scaleX = value;
      this.scaleY = value;
      return this;
    },

    /**
     * Scales an object to a given width (scaling by x/y equally)
     * @method scaleToWidth
     * @param value {Number} new width value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scaleToWidth: function(value) {
      return this.scale(value / this.width);
    },

    /**
     * Scales an object to a given height (scaling by x/y equally)
     * @method scaleToHeight
     * @param value {Number} new height value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scaleToHeight: function(value) {
      return this.scale(value / this.height);
    },

    /**
     * Sets object opacity
     * @method setOpacity
     * @param value {Number} value 0-1
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setOpacity: function(value) {
      this.set('opacity', value);
      return this;
    },

    /**
     * Returns object's angle value
     * @method getAngle
     * @return {Number} angle value
     */
    getAngle: function() {
      return this.theta * 180 / Math.PI;
    },

    /**
     * Sets object's angle
     * @method setAngle
     * @param value {Number} angle value
     * @return {Object} thisArg
     */
    setAngle: function(value) {
      this.theta = value / 180 * Math.PI;
      this.angle = value;
      return this;
    },

    /**
     * Sets corner position coordinates based on current angle, width and height.
     * @method setCoords
     * return {fabric.Object} thisArg
     * @chainable
     */
    setCoords: function() {

      this.currentWidth = this.width * this.scaleX;
      this.currentHeight = this.height * this.scaleY;

      this._hypotenuse = Math.sqrt(
        Math.pow(this.currentWidth / 2, 2) +
        Math.pow(this.currentHeight / 2, 2));

      this._angle = Math.atan(this.currentHeight / this.currentWidth);

      // offset added for rotate and scale actions
      var offsetX = Math.cos(this._angle + this.theta) * this._hypotenuse,
          offsetY = Math.sin(this._angle + this.theta) * this._hypotenuse,
          theta = this.theta,
          sinTh = Math.sin(theta),
          cosTh = Math.cos(theta);

      var tl = {
        x: this.left - offsetX,
        y: this.top - offsetY
      };
      var tr = {
        x: tl.x + (this.currentWidth * cosTh),
        y: tl.y + (this.currentWidth * sinTh)
      };
      var br = {
        x: tr.x - (this.currentHeight * sinTh),
        y: tr.y + (this.currentHeight * cosTh)
      };
      var bl = {
        x: tl.x - (this.currentHeight * sinTh),
        y: tl.y + (this.currentHeight * cosTh)
      };
      var ml = {
        x: tl.x - (this.currentHeight/2 * sinTh),
        y: tl.y + (this.currentHeight/2 * cosTh)
      };
      var mt = {
        x: tl.x + (this.currentWidth/2 * cosTh),
        y: tl.y + (this.currentWidth/2 * sinTh)
      };
      var mr = {
        x: tr.x - (this.currentHeight/2 * sinTh),
        y: tr.y + (this.currentHeight/2 * cosTh)
      }
      var mb = {
        x: bl.x + (this.currentWidth/2 * cosTh),
        y: bl.y + (this.currentWidth/2 * sinTh)
      }

      // debugging

      // setTimeout(function() {
      //         canvas.contextTop.fillStyle = 'green';
      //         canvas.contextTop.fillRect(mb.x, mb.y, 3, 3);
      //         canvas.contextTop.fillRect(bl.x, bl.y, 3, 3);
      //         canvas.contextTop.fillRect(br.x, br.y, 3, 3);
      //         canvas.contextTop.fillRect(tl.x, tl.y, 3, 3);
      //         canvas.contextTop.fillRect(tr.x, tr.y, 3, 3);
      //         canvas.contextTop.fillRect(ml.x, ml.y, 3, 3);
      //         canvas.contextTop.fillRect(mr.x, mr.y, 3, 3);
      //         canvas.contextTop.fillRect(mt.x, mt.y, 3, 3);
      //       }, 50);

      // clockwise
      this.oCoords = { tl: tl, tr: tr, br: br, bl: bl, ml: ml, mt: mt, mr: mr, mb: mb };

      // set coordinates of the draggable boxes in the corners used to scale/rotate the image
      this._setCornerCoords();

      return this;
    },

    /**
     * Draws borders of an object's bounding box.
     * Requires public properties: width, height
     * Requires public options: padding, borderColor
     * @method drawBorders
     * @param {CanvasRenderingContext2D} ctx Context to draw on
     * @return {fabric.Object} thisArg
     * @chainable
     */
    drawBorders: function(ctx) {
      if (!this.hasBorders) return;

      var padding = this.padding,
          padding2 = padding * 2;

      ctx.save();

      ctx.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
      ctx.strokeStyle = this.borderColor;

      var scaleX = 1 / (this.scaleX < this.MIN_SCALE_LIMIT ? this.MIN_SCALE_LIMIT : this.scaleX),
          scaleY = 1 / (this.scaleY < this.MIN_SCALE_LIMIT ? this.MIN_SCALE_LIMIT : this.scaleY);

      ctx.lineWidth = 1 / this.borderScaleFactor;

      ctx.scale(scaleX, scaleY);

      var w = this.getWidth(),
          h = this.getHeight();

      ctx.strokeRect(
        ~~(-(w / 2) - padding) + 0.5, // offset needed to make lines look sharper
        ~~(-(h / 2) - padding) + 0.5,
        ~~(w + padding2),
        ~~(h + padding2)
      );

      ctx.restore();
      return this;
    },

    /**
     * Draws corners of an object's bounding box.
     * Requires public properties: width, height, scaleX, scaleY
     * Requires public options: cornersize, padding
     * @method drawCorners
     * @param {CanvasRenderingContext2D} ctx Context to draw on
     * @return {fabric.Object} thisArg
     * @chainable
     */
    drawCorners: function(ctx) {
      if (!this.hasControls) return;

      var size = this.cornersize,
          size2 = size / 2,
          padding = this.padding,
          left = -(this.width / 2),
          top = -(this.height / 2),
          _left,
          _top,
          sizeX = size / this.scaleX,
          sizeY = size / this.scaleY,
          scaleOffsetY = (padding + size2) / this.scaleY,
          scaleOffsetX = (padding + size2) / this.scaleX,
          scaleOffsetSizeX = (padding + size2 - size) / this.scaleX,
          scaleOffsetSizeY = (padding + size2 - size) / this.scaleY,
          height = this.height;

      ctx.save();

      ctx.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
      ctx.fillStyle = this.cornerColor;

      // top-left
      _left = left - scaleOffsetX;
      _top = top - scaleOffsetY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // top-right
      _left = left + this.width - scaleOffsetX;
      _top = top - scaleOffsetY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // bottom-left
      _left = left - scaleOffsetX;
      _top = top + height + scaleOffsetSizeY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // bottom-right
      _left = left + this.width + scaleOffsetSizeX;
      _top = top + height + scaleOffsetSizeY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // middle-top
      _left = left + this.width/2 - scaleOffsetX;
      _top = top - scaleOffsetY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // middle-bottom
      _left = left + this.width/2 - scaleOffsetX;
      _top = top + height + scaleOffsetSizeY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // middle-right
      _left = left + this.width + scaleOffsetSizeX;
      _top = top + height/2 - scaleOffsetY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // middle-left
      _left = left - scaleOffsetX;
      _top = top + height/2 - scaleOffsetY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      ctx.restore();

      return this;
    },

    /**
     * Clones an instance
     * @method clone
     * @param {Object} options object
     * @return {fabric.Object} clone of an instance
     */
    clone: function(options) {
      if (this.constructor.fromObject) {
        return this.constructor.fromObject(this.toObject(), options);
      }
      return new fabric.Object(this.toObject());
    },

    /**
     * Creates an instance of fabric.Image out of an object
     * @method cloneAsImage
     * @param callback {Function} callback, invoked with an instance as a first argument
     * @return {fabric.Object} thisArg
     * @chainable
     */
    cloneAsImage: function(callback) {
      if (fabric.Image) {
        var i = new Image();

        /** @ignore */
        i.onload = function() {
          if (callback) {
            callback(new fabric.Image(i), orig);
          }
          i = i.onload = null;
        };

        var orig = {
          angle: this.get('angle'),
          flipX: this.get('flipX'),
          flipY: this.get('flipY')
        };

        // normalize angle
        this.set('angle', 0).set('flipX', false).set('flipY', false);
        this.toDataURL(function(dataURL) {
          i.src = dataURL;
        });
      }
      return this;
    },

    /**
     * Converts an object into a data-url-like string
     * @method toDataURL
     * @return {String} string of data
     */
    toDataURL: function(callback) {
      var el = fabric.document.createElement('canvas');

      // TODO: should probably use bounding rectangle dimensions instead

      el.width = this.getWidth();
      el.height = this.getHeight();

      fabric.util.wrapElement(el, 'div');

      var canvas = new fabric.Canvas(el);
      canvas.backgroundColor = 'transparent';
      canvas.renderAll();

      if (this.constructor.async) {
        this.clone(proceed);
      }
      else {
        proceed(this.clone());
      }

      function proceed(clone) {
        clone.left = el.width / 2;
        clone.top = el.height / 2;

        clone.setActive(false);

        canvas.add(clone);
        var data = canvas.toDataURL('png');

        canvas.dispose();
        canvas = clone = null;

        callback && callback(data);
      }
    },

    /**
     * @method hasStateChanged
     * @return {Boolean} true if instance' state has changed
     */
    hasStateChanged: function() {
      return this.stateProperties.some(function(prop) {
        return this[prop] !== this.originalState[prop];
      }, this);
    },

    /**
     * @method saveState
     * @return {fabric.Object} thisArg
     * @chainable
     */
    saveState: function() {
      this.stateProperties.forEach(function(prop) {
        this.originalState[prop] = this.get(prop);
      }, this);
      return this;
    },

    /**
     * @method setupState
     */
    setupState: function() {
      this.originalState = { };
      this.saveState();
    },

    /**
     * Returns true if object intersects with an area formed by 2 points
     * @method intersectsWithRect
     * @param {Object} selectionTL
     * @param {Object} selectionBR
     * @return {Boolean}
     */
    intersectsWithRect: function(selectionTL, selectionBR) {
      var oCoords = this.oCoords,
          tl = new fabric.Point(oCoords.tl.x, oCoords.tl.y),
          tr = new fabric.Point(oCoords.tr.x, oCoords.tr.y),
          bl = new fabric.Point(oCoords.bl.x, oCoords.bl.y),
          br = new fabric.Point(oCoords.br.x, oCoords.br.y);

      var intersection = fabric.Intersection.intersectPolygonRectangle(
        [tl, tr, br, bl],
        selectionTL,
        selectionBR
      );
      return (intersection.status === 'Intersection');
    },

    /**
     * Returns true if object intersects with another object
     * @method intersectsWithObject
     * @param {Object} other Object to test
     * @return {Boolean}
     */
    intersectsWithObject: function(other) {
      // extracts coords
      function getCoords(oCoords) {
        return {
          tl: new fabric.Point(oCoords.tl.x, oCoords.tl.y),
          tr: new fabric.Point(oCoords.tr.x, oCoords.tr.y),
          bl: new fabric.Point(oCoords.bl.x, oCoords.bl.y),
          br: new fabric.Point(oCoords.br.x, oCoords.br.y)
        }
      }
      var thisCoords = getCoords(this.oCoords),
          otherCoords = getCoords(other.oCoords);

      var intersection = fabric.Intersection.intersectPolygonPolygon(
        [thisCoords.tl, thisCoords.tr, thisCoords.br, thisCoords.bl],
        [otherCoords.tl, otherCoords.tr, otherCoords.br, otherCoords.bl]
      );

      return (intersection.status === 'Intersection');
    },

    /**
     * Returns true if object is fully contained within area of another object
     * @method isContainedWithinObject
     * @param {Object} other Object to test
     * @return {Boolean}
     */
    isContainedWithinObject: function(other) {
      return this.isContainedWithinRect(other.oCoords.tl, other.oCoords.br);
    },

    /**
     * Returns true if object is fully contained within area formed by 2 points
     * @method isContainedWithinRect
     * @param {Object} selectionTL
     * @param {Object} selectionBR
     * @return {Boolean}
     */
    isContainedWithinRect: function(selectionTL, selectionBR) {
      var oCoords = this.oCoords,
          tl = new fabric.Point(oCoords.tl.x, oCoords.tl.y),
          tr = new fabric.Point(oCoords.tr.x, oCoords.tr.y),
          bl = new fabric.Point(oCoords.bl.x, oCoords.bl.y),
          br = new fabric.Point(oCoords.br.x, oCoords.br.y);

      return tl.x > selectionTL.x
        && tr.x < selectionBR.x
        && tl.y > selectionTL.y
        && bl.y < selectionBR.y;
    },

    /**
     * @method isType
     * @param type {String} type to check against
     * @return {Boolean} true if specified type is identical to the type of instance
     */
    isType: function(type) {
      return this.type === type;
    },

    /**
     * Determines which one of the four corners has been clicked
     * @method _findTargetCorner
     * @private
     * @param e {Event} event object
     * @param offset {Object} canvas offset
     * @return {String|Boolean} corner code (tl, tr, bl, br, etc.), or false if nothing is found
     */
    _findTargetCorner: function(e, offset) {
      if (!this.hasControls) return false;

      var pointer = getPointer(e),
          ex = pointer.x - offset.left,
          ey = pointer.y - offset.top,
          xpoints,
          lines;

      for (var i in this.oCoords) {
        lines = this._getImageLines(this.oCoords[i].corner, i);
        // debugging
        // canvas.contextTop.fillRect(lines.bottomline.d.x, lines.bottomline.d.y, 2, 2);
        //         canvas.contextTop.fillRect(lines.bottomline.o.x, lines.bottomline.o.y, 2, 2);
        //
        //         canvas.contextTop.fillRect(lines.leftline.d.x, lines.leftline.d.y, 2, 2);
        //         canvas.contextTop.fillRect(lines.leftline.o.x, lines.leftline.o.y, 2, 2);
        //
        //         canvas.contextTop.fillRect(lines.topline.d.x, lines.topline.d.y, 2, 2);
        //         canvas.contextTop.fillRect(lines.topline.o.x, lines.topline.o.y, 2, 2);
        //
        //         canvas.contextTop.fillRect(lines.rightline.d.x, lines.rightline.d.y, 2, 2);
        //         canvas.contextTop.fillRect(lines.rightline.o.x, lines.rightline.o.y, 2, 2);

        xpoints = this._findCrossPoints(ex, ey, lines);
        if (xpoints % 2 == 1 && xpoints != 0) {
          this.__corner = i;
          return i;
        }
      }
      return false;
    },

    /**
     * Helper method to determine how many cross points are between the 4 image edges
     * and the horizontal line determined by the position of our mouse when clicked on canvas
     * @method _findCrossPoints
     * @private
     * @param ex {Number} x coordinate of the mouse
     * @param ey {Number} y coordinate of the mouse
     * @param oCoords {Object} Coordinates of the image being evaluated
     */
    _findCrossPoints: function(ex, ey, oCoords) {
      var b1, b2, a1, a2, xi, yi,
          xcount = 0,
          iLine;

      for (var lineKey in oCoords) {
        iLine = oCoords[lineKey];
        // optimisation 1: line below dot. no cross
        if ((iLine.o.y < ey) && (iLine.d.y < ey)) {
          continue;
        }
        // optimisation 2: line above dot. no cross
        if ((iLine.o.y >= ey) && (iLine.d.y >= ey)) {
          continue;
        }
        // optimisation 3: vertical line case
        if ((iLine.o.x == iLine.d.x) && (iLine.o.x >= ex)) {
          xi = iLine.o.x;
          yi = ey;
        }
        // calculate the intersection point
        else {
          b1 = 0;
          b2 = (iLine.d.y-iLine.o.y)/(iLine.d.x-iLine.o.x);
          a1 = ey-b1*ex;
          a2 = iLine.o.y-b2*iLine.o.x;

          xi = - (a1-a2)/(b1-b2);
          yi = a1+b1*xi;
        }
        // dont count xi < ex cases
        if (xi >= ex) {
          xcount += 1;
        }
        // optimisation 4: specific for square images
        if (xcount == 2) {
          break;
        }
      }
      return xcount;
    },

    /**
     * Method that returns an object with the image lines in it given the coordinates of the corners
     * @method _getImageLines
     * @private
     * @param oCoords {Object} coordinates of the image corners
     */
    _getImageLines: function(oCoords, i) {
      return {
        topline: {
          o: oCoords.tl,
          d: oCoords.tr
        },
        rightline: {
          o: oCoords.tr,
          d: oCoords.br
        },
        bottomline: {
          o: oCoords.br,
          d: oCoords.bl
        },
        leftline: {
          o: oCoords.bl,
          d: oCoords.tl
        }
      }
    },

    /**
     * Sets the coordinates of the draggable boxes in the corners of
     * the image used to scale/rotate it.
     * @method _setCornerCoords
     * @private
     */
    _setCornerCoords: function() {
      var coords = this.oCoords,
          theta = degreesToRadians(45 - this.getAngle()),
          cornerHypotenuse = Math.sqrt(2 * Math.pow(this.cornersize, 2)) / 2,
          cosHalfOffset = cornerHypotenuse * Math.cos(theta),
          sinHalfOffset = cornerHypotenuse * Math.sin(theta);

      coords.tl.corner = {
        tl: {
          x: coords.tl.x - sinHalfOffset,
          y: coords.tl.y - cosHalfOffset
        },
        tr: {
          x: coords.tl.x + cosHalfOffset,
          y: coords.tl.y - sinHalfOffset
        },
        bl: {
          x: coords.tl.x - cosHalfOffset,
          y: coords.tl.y + sinHalfOffset
        },
        br: {
          x: coords.tl.x + sinHalfOffset,
          y: coords.tl.y + cosHalfOffset
        }
      };

      coords.tr.corner = {
        tl: {
          x: coords.tr.x - sinHalfOffset,
          y: coords.tr.y - cosHalfOffset
        },
        tr: {
          x: coords.tr.x + cosHalfOffset,
          y: coords.tr.y - sinHalfOffset
        },
        br: {
          x: coords.tr.x + sinHalfOffset,
          y: coords.tr.y + cosHalfOffset
        },
        bl: {
          x: coords.tr.x - cosHalfOffset,
          y: coords.tr.y + sinHalfOffset
        }
      };

      coords.bl.corner = {
        tl: {
          x: coords.bl.x - sinHalfOffset,
          y: coords.bl.y - cosHalfOffset
        },
        bl: {
          x: coords.bl.x - cosHalfOffset,
          y: coords.bl.y + sinHalfOffset
        },
        br: {
          x: coords.bl.x + sinHalfOffset,
          y: coords.bl.y + cosHalfOffset
        },
        tr: {
          x: coords.bl.x + cosHalfOffset,
          y: coords.bl.y - sinHalfOffset
        }
      };

      coords.br.corner = {
        tr: {
          x: coords.br.x + cosHalfOffset,
          y: coords.br.y - sinHalfOffset
        },
        bl: {
          x: coords.br.x - cosHalfOffset,
          y: coords.br.y + sinHalfOffset
        },
        br: {
          x: coords.br.x + sinHalfOffset,
          y: coords.br.y + cosHalfOffset
        },
        tl: {
          x: coords.br.x - sinHalfOffset,
          y: coords.br.y - cosHalfOffset
        }
      };

      coords.ml.corner = {
        tl: {
          x: coords.ml.x - sinHalfOffset,
          y: coords.ml.y - cosHalfOffset
        },
        tr: {
          x: coords.ml.x + cosHalfOffset,
          y: coords.ml.y - sinHalfOffset
        },
        bl: {
          x: coords.ml.x - cosHalfOffset,
          y: coords.ml.y + sinHalfOffset
        },
        br: {
          x: coords.ml.x + sinHalfOffset,
          y: coords.ml.y + cosHalfOffset
        }
      };

      coords.mt.corner = {
        tl: {
          x: coords.mt.x - sinHalfOffset,
          y: coords.mt.y - cosHalfOffset
        },
        tr: {
          x: coords.mt.x + cosHalfOffset,
          y: coords.mt.y - sinHalfOffset
        },
        bl: {
          x: coords.mt.x - cosHalfOffset,
          y: coords.mt.y + sinHalfOffset
        },
        br: {
          x: coords.mt.x + sinHalfOffset,
          y: coords.mt.y + cosHalfOffset
        }
      };

      coords.mr.corner = {
        tl: {
          x: coords.mr.x - sinHalfOffset,
          y: coords.mr.y - cosHalfOffset
        },
        tr: {
          x: coords.mr.x + cosHalfOffset,
          y: coords.mr.y - sinHalfOffset
        },
        bl: {
          x: coords.mr.x - cosHalfOffset,
          y: coords.mr.y + sinHalfOffset
        },
        br: {
          x: coords.mr.x + sinHalfOffset,
          y: coords.mr.y + cosHalfOffset
        }
      };

      coords.mb.corner = {
        tl: {
          x: coords.mb.x - sinHalfOffset,
          y: coords.mb.y - cosHalfOffset
        },
        tr: {
          x: coords.mb.x + cosHalfOffset,
          y: coords.mb.y - sinHalfOffset
        },
        bl: {
          x: coords.mb.x - cosHalfOffset,
          y: coords.mb.y + sinHalfOffset
        },
        br: {
          x: coords.mb.x + sinHalfOffset,
          y: coords.mb.y + cosHalfOffset
        }
      };
    },

    /**
     * Makes object's color grayscale
     * @method toGrayscale
     * @return {fabric.Object} thisArg
     */
    toGrayscale: function() {
      var fillValue = this.get('fill');
      if (fillValue) {
        this.set('overlayFill', new fabric.Color(fillValue).toGrayscale().toRgb());
      }
      return this;
    },

    /**
     * @method complexity
     * @return {Number}
     */
    complexity: function() {
      return 0;
    },

    /**
     * @method getCenter
     * @return {Object} object with `x`, `y` properties corresponding to path center coordinates
     */
    getCenter: function() {
      return {
        x: this.get('left') + this.width / 2,
        y: this.get('top') + this.height / 2
      };
    },

    /**
     * @method straighten
     * @return {fabric.Object} thisArg
     * @chainable
     */
    straighten: function() {
      var angle = this._getAngleValueForStraighten();
      this.setAngle(angle);
      return this;
    },

    /**
     * @method fxStraighten
     * @param {Object} callbacks
     *                  - onComplete: invoked on completion
     *                  - onChange: invoked on every step of animation
     *
     * @return {fabric.Object} thisArg
     * @chainable
     */
    fxStraighten: function(callbacks) {
      callbacks = callbacks || { };

      var empty = function() { },
          onComplete = callbacks.onComplete || empty,
          onChange = callbacks.onChange || empty,
          _this = this;

      fabric.util.animate({
        startValue: this.get('angle'),
        endValue: this._getAngleValueForStraighten(),
        duration: this.FX_DURATION,
        onChange: function(value) {
          _this.setAngle(value);
          onChange();
        },
        onComplete: function() {
          _this.setCoords();
          onComplete();
        },
        onStart: function() {
          _this.setActive(false);
        }
      });

      return this;
    },

    /**
     * @method fxRemove
     * @param {Object} callbacks
     * @return {fabric.Object} thisArg
     * @chainable
     */
    fxRemove: function(callbacks) {
      callbacks || (callbacks = { });

      var empty = function() { },
          onComplete = callbacks.onComplete || empty,
          onChange = callbacks.onChange || empty,
          _this = this;

      fabric.util.animate({
        startValue: this.get('opacity'),
        endValue: 0,
        duration: this.FX_DURATION,
        onChange: function(value) {
          _this.set('opacity', value);
          onChange();
        },
        onComplete: onComplete,
        onStart: function() {
          _this.setActive(false);
        }
      });

      return this;
    },

    /**
     * @method _getAngleValueForStraighten
     * @return {Number} angle value
     * @private
     */
    _getAngleValueForStraighten: function() {
      var angle = this.get('angle');

      // TODO (kangax): can this be simplified?

      if      (angle > -225 && angle <= -135) { return -180;  }
      else if (angle > -135 && angle <= -45)  { return  -90;  }
      else if (angle > -45  && angle <= 45)   { return    0;  }
      else if (angle > 45   && angle <= 135)  { return   90;  }
      else if (angle > 135  && angle <= 225 ) { return  180;  }
      else if (angle > 225  && angle <= 315)  { return  270;  }
      else if (angle > 315)                   { return  360;  }

      return 0;
    },

    /**
     * Returns a JSON representation of an instance
     * @method toJSON
     * @return {String} json
     */
    toJSON: function() {
      // delegate, not alias
      return this.toObject();
    },

    setGradientFill: function(ctx, options) {
      this.set('fill', fabric.Gradient.forObject(this, ctx, options));
    },

    animate: function(property, to, options) {
      var obj = this;

      if (!('from' in options)) {
        options.from = this.get(property);
      }

      if (/[+-]/.test(to.charAt(0))) {
        to = this.get(property) + parseFloat(to);
      }

      fabric.util.animate({
        startValue: options.from,
        endValue: to,
        duration: options.duration,
        onChange: function(value) {
          obj.set(property, value);
          options.onChange && options.onChange();
        },
        onComplete: function() {
          obj.setCoords();
          options.onComplete && options.onComplete();
        }
      });
    }
  });

  /**
   * @alias rotate -> setAngle
   */
  fabric.Object.prototype.rotate = fabric.Object.prototype.setAngle;

  var proto = fabric.Object.prototype;
  for (var i = proto.stateProperties.length; i--; ) {

    var propName = proto.stateProperties[i],
        capitalizedPropName = propName.charAt(0).toUpperCase() + propName.slice(1),
        setterName = 'set' + capitalizedPropName,
        getterName = 'get' + capitalizedPropName;

    // using `new Function` for better introspection
    if (!proto[getterName]) {
      proto[getterName] = (function(property) {
        return new Function('return this.get("' + property + '")');
      })(propName);
    }
    if (!proto[setterName]) {
      proto[setterName] = (function(property) {
        return new Function('value', 'return this.set("' + property + '", value)');
      })(propName);
    }
  }

})(typeof exports != 'undefined' ? exports : this);
//= require "object.class"

(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      parentSet = fabric.Object.prototype.set,
      coordProps = { 'x1': 1, 'x2': 1, 'y1': 1, 'y2': 1 };

  if (fabric.Line) {
    fabric.warn('fabric.Line is already defined');
    return;
  }

  /**
   * @class Line
   * @extends fabric.Object
   */
  fabric.Line = fabric.util.createClass(fabric.Object, /** @scope fabric.Line.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'line',

    /**
     * Constructor
     * @method initialize
     * @param {Array} points Array of points
     * @param {Object} [options] Options object
     * @return {fabric.Line} thisArg
     */
    initialize: function(points, options) {
      if (!points) {
        points = [0, 0, 0, 0];
      }

      this.callSuper('initialize', options);

      this.set('x1', points[0]);
      this.set('y1', points[1]);
      this.set('x2', points[2]);
      this.set('y2', points[3]);

      this._setWidthHeight();
    },

    _setWidthHeight: function() {
      this.set('width', (this.x2 - this.x1) || 1);
      this.set('height', (this.y2 - this.y1) || 1);
      this.set('left', this.x1 + this.width / 2);
      this.set('top', this.y1 + this.height / 2);
    },

    set: function(name, value) {
      parentSet.call(this, name, value);
      if (name in coordProps) {
        this._setWidthHeight();
      }
      return this;
    },

    /**
     * @private
     * @method _render
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx) {
      ctx.beginPath();

      // move from center (of virtual box) to its left/top corner
      ctx.moveTo(-this.width / 2, -this.height / 2);
      ctx.lineTo(this.width / 2, this.height / 2);

      ctx.lineWidth = this.strokeWidth;

      // TODO: test this
      // make sure setting "fill" changes color of a line
      // (by copying fillStyle to strokeStyle, since line is stroked, not filled)
      var origStrokeStyle = ctx.strokeStyle;
      ctx.strokeStyle = ctx.fillStyle;
      ctx.stroke();
      ctx.strokeStyle = origStrokeStyle;
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    },

    /**
     * Returns object representation of an instance
     * @methd toObject
     * @return {Object}
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        x1: this.get('x1'),
        y1: this.get('y1'),
        x2: this.get('x2'),
        y2: this.get('y2')
      });
    }
  });

  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Line.fromElement`)
   * @static
   * @see http://www.w3.org/TR/SVG/shapes.html#LineElement
   */
  fabric.Line.ATTRIBUTE_NAMES = 'x1 y1 x2 y2 stroke stroke-width transform'.split(' ');

  /**
   * Returns fabric.Line instance from an SVG element
   * @static
   * @method fabric.Line.fromElement
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Line} instance of fabric.Line
   */
  fabric.Line.fromElement = function(element, options) {
    var parsedAttributes = fabric.parseAttributes(element, fabric.Line.ATTRIBUTE_NAMES);
    var points = [
      parsedAttributes.x1 || 0,
      parsedAttributes.y1 || 0,
      parsedAttributes.x2 || 0,
      parsedAttributes.y2 || 0
    ];
    return new fabric.Line(points, extend(parsedAttributes, options));
  };

  /**
   * Returns fabric.Line instance from an object representation
   * @static
   * @method fabric.Line.fromObject
   * @param {Object} object Object to create an instance from
   * @return {fabric.Line} instance of fabric.Line
   */
  fabric.Line.fromObject = function(object) {
    var points = [object.x1, object.y1, object.x2, object.y2];
    return new fabric.Line(points, object);
  };

})(typeof exports != 'undefined' ? exports : this);
//= require "object.class"

(function(global) {

  "use strict";

  var fabric  = global.fabric || (global.fabric = { }),
      piBy2   = Math.PI * 2,
      extend = fabric.util.object.extend;

  if (fabric.Circle) {
    fabric.warn('fabric.Circle is already defined.');
    return;
  }

  /**
   * @class Circle
   * @extends fabric.Object
   */
  fabric.Circle = fabric.util.createClass(fabric.Object, /** @scope fabric.Circle.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'circle',

    /**
     * Constructor
     * @method initialize
     * @param {Object} [options] Options object
     * @return {fabric.Circle} thisArg
     */
    initialize: function(options) {
      options = options || { };

      this.set('radius', options.radius || 0);
      this.callSuper('initialize', options);

      var radiusBy2ByScale = this.get('radius') * 2 * this.get('scaleX');
      this.set('width', radiusBy2ByScale).set('height', radiusBy2ByScale);
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        radius: this.get('radius')
      });
    },

    /**
     * @private
     * @method _render
     * @param ctx {CanvasRenderingContext2D} context to render on
     */
    _render: function(ctx, noTransform) {
      ctx.beginPath();
      // multiply by currently set alpha (the one that was set by path group where this object is contained, for example)
      ctx.globalAlpha *= this.opacity;
      ctx.arc(noTransform ? this.left : 0, noTransform ? this.top : 0, this.radius, 0, piBy2, false);
      ctx.closePath();
      if (this.fill) {
        ctx.fill();
      }
      if (this.stroke) {
        ctx.stroke();
      }
    },

    /**
     * Returns horizontal radius of an object (according to how an object is scaled)
     * @method getRadiusX
     * @return {Number}
     */
    getRadiusX: function() {
      return this.get('radius') * this.get('scaleX');
    },

    /**
     * Returns vertical radius of an object (according to how an object is scaled)
     * @method getRadiusY
     * @return {Number}
     */
    getRadiusY: function() {
      return this.get('radius') * this.get('scaleY');
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return 1;
    }
  });

  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Circle.fromElement})
   * @static
   * @see: http://www.w3.org/TR/SVG/shapes.html#CircleElement
   */
  fabric.Circle.ATTRIBUTE_NAMES = 'cx cy r fill fill-opacity opacity stroke stroke-width transform'.split(' ');

  /**
   * Returns {@link fabric.Circle} instance from an SVG element
   * @static
   * @method fabric.Circle.fromElement
   * @param element {SVGElement} element to parse
   * @param options {Object} options object
   * @throws {Error} If value of `r` attribute is missing or invalid
   * @return {Object} instance of fabric.Circle
   */
  fabric.Circle.fromElement = function(element, options) {
    options || (options = { });
    var parsedAttributes = fabric.parseAttributes(element, fabric.Circle.ATTRIBUTE_NAMES);
    if (!isValidRadius(parsedAttributes)) {
      throw Error('value of `r` attribute is required and can not be negative');
    }
    if ('left' in parsedAttributes) {
      parsedAttributes.left -= (options.width / 2) || 0;
    }
    if ('top' in parsedAttributes) {
      parsedAttributes.top -= (options.height / 2) || 0;
    }
    return new fabric.Circle(extend(parsedAttributes, options));
  };

  /**
   * @private
   */
  function isValidRadius(attributes) {
    return (('radius' in attributes) && (attributes.radius > 0));
  }

  /**
   * Returns {@link fabric.Circle} instance from an object representation
   * @static
   * @method fabric.Circle.fromObject
   * @param {Object} object Object to create an instance from
   * @return {Object} Instance of fabric.Circle
   */
  fabric.Circle.fromObject = function(object) {
    return new fabric.Circle(object);
  };

})(typeof exports != 'undefined' ? exports : this);
(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Triangle) {
    fabric.warn('fabric.Triangle is already defined');
    return;
  }

  /**
   * @class Triangle
   * @extends fabric.Object
   */
  fabric.Triangle = fabric.util.createClass(fabric.Object, /** @scope fabric.Triangle.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'triangle',

    /**
     * Constructor
     * @method initialize
     * @param options {Object} options object
     * @return {Object} thisArg
     */
    initialize: function(options) {
      options = options || { };

      this.callSuper('initialize', options);

      this.set('width', options.width || 100)
          .set('height', options.height || 100);
    },

    /**
     * @private
     * @method _render
     * @param ctx {CanvasRenderingContext2D} Context to render on
     */
    _render: function(ctx) {
      var widthBy2 = this.width / 2,
          heightBy2 = this.height / 2;

      ctx.beginPath();
      ctx.moveTo(-widthBy2, heightBy2);
      ctx.lineTo(0, -heightBy2);
      ctx.lineTo(widthBy2, heightBy2);
      ctx.closePath();

      if (this.fill) {
        ctx.fill();
      }
      if (this.stroke) {
        ctx.stroke();
      }
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return 1;
    }
  });

  /**
   * Returns fabric.Triangle instance from an object representation
   * @static
   * @method Canvas.Trangle.fromObject
   * @param object {Object} object to create an instance from
   * @return {Object} instance of Canvas.Triangle
   */
  fabric.Triangle.fromObject = function(object) {
    return new fabric.Triangle(object);
  };

})(typeof exports != 'undefined' ? exports : this);
//= require "object.class"

(function(global){

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      piBy2   = Math.PI * 2,
      extend = fabric.util.object.extend;

  if (fabric.Ellipse) {
    fabric.warn('fabric.Ellipse is already defined.');
    return;
  }

  /**
   * @class Ellipse
   * @extends fabric.Object
   */
  fabric.Ellipse = fabric.util.createClass(fabric.Object, /** @scope fabric.Ellipse.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'ellipse',

    /**
     * Constructor
     * @method initialize
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function(options) {
      options = options || { };

      this.callSuper('initialize', options);

      this.set('rx', options.rx || 0);
      this.set('ry', options.ry || 0);

      this.set('width', this.get('rx') * 2);
      this.set('height', this.get('ry') * 2);
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        rx: this.get('rx'),
        ry: this.get('ry')
      });
    },

    /**
     * Renders this instance on a given context
     * @method render
     * @param ctx {CanvasRenderingContext2D} context to render on
     * @param noTransform {Boolean} context is not transformed when set to true
     */
    render: function(ctx, noTransform) {
      // do not use `get` for perf. reasons
      if (this.rx === 0 || this.ry === 0) return;
      return this.callSuper('render', ctx, noTransform);
    },

    /**
     * @private
     * @method _render
     * @param ctx {CanvasRenderingContext2D} context to render on
     */
    _render: function(ctx, noTransform) {
      ctx.beginPath();
      ctx.save();
      ctx.globalAlpha *= this.opacity;
      ctx.transform(1, 0, 0, this.ry/this.rx, 0, 0);
      ctx.arc(noTransform ? this.left : 0, noTransform ? this.top : 0, this.rx, 0, piBy2, false);
      if (this.stroke) {
        ctx.stroke();
      }
      if (this.fill) {
        ctx.fill();
      }
      ctx.restore();
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    }
  });

  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Ellipse.fromElement})
   * @static
   * @see http://www.w3.org/TR/SVG/shapes.html#EllipseElement
   */
  fabric.Ellipse.ATTRIBUTE_NAMES = 'cx cy rx ry fill fill-opacity opacity stroke stroke-width transform'.split(' ');

  /**
   * Returns {@link fabric.Ellipse} instance from an SVG element
   * @static
   * @method fabric.Ellipse.fromElement
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Ellipse}
   */
  fabric.Ellipse.fromElement = function(element, options) {
    options || (options = { });
    var parsedAttributes = fabric.parseAttributes(element, fabric.Ellipse.ATTRIBUTE_NAMES);
    if ('left' in parsedAttributes) {
      parsedAttributes.left -= (options.width / 2) || 0;
    }
    if ('top' in parsedAttributes) {
      parsedAttributes.top -= (options.height / 2) || 0;
    }
    return new fabric.Ellipse(extend(parsedAttributes, options));
  };

  /**
   * Returns fabric.Ellipse instance from an object representation
   * @static
   * @method fabric.Ellipse.fromObject
   * @param {Object} object Object to create an instance from
   * @return {fabric.Ellipse}
   */
  fabric.Ellipse.fromObject = function(object) {
    return new fabric.Ellipse(object);
  };

})(typeof exports != 'undefined' ? exports : this);
//= require "object.class"

(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Rect) {
    console.warn('fabric.Rect is already defined');
    return;
  }

  /**
   * @class Rect
   * @extends fabric.Object
   */
  fabric.Rect = fabric.util.createClass(fabric.Object, /** @scope fabric.Rect.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'rect',

    /**
     * @property
     * @type Object
     */
    options: {
      rx: 0,
      ry: 0
    },

    /**
     * Constructor
     * @method initialize
     * @param options {Object} options object
     * @return {Object} thisArg
     */
    initialize: function(options) {
      this._initStateProperties();
      this.callSuper('initialize', options);
      this._initRxRy();
    },

    /**
     * Creates `stateProperties` list on an instance, and adds `fabric.Rect` -specific ones to it
     * (such as "rx", "ry", etc.)
     * @private
     * @method _initStateProperties
     */
    _initStateProperties: function() {
      this.stateProperties = this.stateProperties.concat(['rx', 'ry']);
    },

    /**
     * @private
     * @method _initRxRy
     */
    _initRxRy: function() {
      if (this.rx && !this.ry) {
        this.ry = this.rx;
      }
      else if (this.ry && !this.rx) {
        this.rx = this.ry;
      }
    },

    /**
     * @private
     * @method _render
     * @param ctx {CanvasRenderingContext2D} context to render on
     */
    _render: function(ctx) {
      var rx = this.rx || 0,
          ry = this.ry || 0,
          x = -this.width / 2,
          y = -this.height / 2,
          w = this.width,
          h = this.height;

      ctx.beginPath();
      ctx.globalAlpha *= this.opacity;

      if (this.group) {
        ctx.translate(this.x, this.y);
      }

      ctx.moveTo(x+rx, y);
      ctx.lineTo(x+w-rx, y);
      ctx.bezierCurveTo(x+w, y, x+w, y+ry, x+w, y+ry);
      ctx.lineTo(x+w, y+h-ry);
      ctx.bezierCurveTo(x+w,y+h,x+w-rx,y+h,x+w-rx,y+h);
      ctx.lineTo(x+rx,y+h);
      ctx.bezierCurveTo(x,y+h,x,y+h-ry,x,y+h-ry);
      ctx.lineTo(x,y+ry);
      ctx.bezierCurveTo(x,y,x+rx,y,x+rx,y);
      ctx.closePath();

      if (this.fill) {
        ctx.fill();
      }
      if (this.stroke) {
        ctx.stroke();
      }
    },

    // since our coordinate system differs from that of SVG
    _normalizeLeftTopProperties: function(parsedAttributes) {
      if (parsedAttributes.left) {
        this.set('left', parsedAttributes.left + this.getWidth() / 2);
      }
      this.set('x', parsedAttributes.left || 0);
      if (parsedAttributes.top) {
        this.set('top', parsedAttributes.top + this.getHeight() / 2);
      }
      this.set('y', parsedAttributes.top || 0);
      return this;
    },

    /**
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    }
  });

  // TODO (kangax): implement rounded rectangles (both parsing and rendering)

  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Rect.fromElement`)
   * @static
   */
  fabric.Rect.ATTRIBUTE_NAMES = 'x y width height rx ry fill fill-opacity opacity stroke stroke-width transform'.split(' ');

  /**
   * @private
   */
  function _setDefaultLeftTopValues(attributes) {
    attributes.left = attributes.left || 0;
    attributes.top  = attributes.top  || 0;
    return attributes;
  }

  /**
   * Returns fabric.Rect instance from an SVG element
   * @static
   * @method fabric.Rect.fromElement
   * @param element {SVGElement} element to parse
   * @param options {Object} options object
   * @return {fabric.Rect} instance of fabric.Rect
   */
  fabric.Rect.fromElement = function(element, options) {
    if (!element) {
      return null;
    }

    var parsedAttributes = fabric.parseAttributes(element, fabric.Rect.ATTRIBUTE_NAMES);
    parsedAttributes = _setDefaultLeftTopValues(parsedAttributes);

    var rect = new fabric.Rect(fabric.util.object.extend((options ? fabric.util.object.clone(options) : { }), parsedAttributes));
    rect._normalizeLeftTopProperties(parsedAttributes);

    return rect;
  };

  /**
   * Returns fabric.Rect instance from an object representation
   * @static
   * @method fabric.Rect.fromObject
   * @param object {Object} object to create an instance from
   * @return {Object} instance of fabric.Rect
   */
  fabric.Rect.fromObject = function(object) {
    return new fabric.Rect(object);
  };

})(typeof exports != 'undefined' ? exports : this);
//= require "object.class"

(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Polyline) {
    fabric.warn('fabric.Polyline is already defined');
    return;
  }

  /**
   * @class Polyline
   * @extends fabric.Object
   */
  fabric.Polyline = fabric.util.createClass(fabric.Object, /** @scope fabric.Polyline.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'polyline',

    /**
     * Constructor
     * @method initialize
     * @param {Array} points array of points
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function(points, options) {
      options = options || { };
      this.set('points', points);
      this.callSuper('initialize', options);
      this._calcDimensions();
    },

    /**
     * @private
     * @method _calcDimensions
     */
    _calcDimensions: function() {
      return fabric.Polygon.prototype._calcDimensions.call(this);
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return fabric.Polygon.prototype.toObject.call(this);
    },

    /**
     * @private
     * @method _render
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx) {
      var point;
      ctx.beginPath();
      for (var i = 0, len = this.points.length; i < len; i++) {
        point = this.points[i];
        ctx.lineTo(point.x, point.y);
      }
      if (this.fill) {
        ctx.fill();
      }
      if (this.stroke) {
        ctx.stroke();
      }
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return this.get('points').length;
    }
  });

  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Polyline.fromElement`)
   * @static
   * @see: http://www.w3.org/TR/SVG/shapes.html#PolylineElement
   */
  fabric.Polyline.ATTRIBUTE_NAMES = 'fill fill-opacity opacity stroke stroke-width transform'.split(' ');

  /**
   * Returns fabric.Polyline instance from an SVG element
   * @static
   * @method fabric.Polyline.fromElement
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {Object} instance of fabric.Polyline
   */
  fabric.Polyline.fromElement = function(element, options) {
    if (!element) {
      return null;
    }
    options || (options = { });

    var points = fabric.parsePointsAttribute(element.getAttribute('points')),
        parsedAttributes = fabric.parseAttributes(element, fabric.Polyline.ATTRIBUTE_NAMES);

    for (var i = 0, len = points.length; i < len; i++) {
      // normalize coordinates, according to containing box (dimensions of which are passed via `options`)
      points[i].x -= (options.width / 2) || 0;
      points[i].y -= (options.height / 2) || 0;
    }

    return new fabric.Polyline(points, fabric.util.object.extend(parsedAttributes, options));
  };

  /**
   * Returns fabric.Polyline instance from an object representation
   * @static
   * @method fabric.Polyline.fromObject
   * @param {Object} [object] Object to create an instance from
   * @return {fabric.Polyline}
   */
  fabric.Polyline.fromObject = function(object) {
    var points = object.points;
    return new fabric.Polyline(points, object);
  };

})(typeof exports != 'undefined' ? exports : this);
//= require "object.class"

(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      min = fabric.util.array.min,
      max = fabric.util.array.max;

  if (fabric.Polygon) {
    fabric.warn('fabric.Polygon is already defined');
    return;
  }

  function byX(p) { return p.x; }
  function byY(p) { return p.y; }

  /**
   * @class Polygon
   * @extends fabric.Object
   */
  fabric.Polygon = fabric.util.createClass(fabric.Object, /** @scope fabric.Polygon.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'polygon',

    /**
     * Constructor
     * @method initialize
     * @param {Array} points Array of points
     * @param {Object} options Options object
     * @return {fabric.Polygon} thisArg
     */
    initialize: function(points, options) {
      options = options || { };
      this.points = points;
      this.callSuper('initialize', options);
      this._calcDimensions();
    },

    /**
     * @private
     * @method _calcDimensions
     */
    _calcDimensions: function() {

      var points = this.points,
          minX = min(points, 'x'),
          minY = min(points, 'y'),
          maxX = max(points, 'x'),
          maxY = max(points, 'y');

      this.width = maxX - minX;
      this.height = maxY - minY;
      this.minX = minX;
      this.minY = minY;
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        points: this.points.concat()
      });
    },

    /**
     * @private
     * @method _render
     * @param ctx {CanvasRenderingContext2D} context to render on
     */
    _render: function(ctx) {
      var point;
      ctx.beginPath();
      for (var i = 0, len = this.points.length; i < len; i++) {
        point = this.points[i];
        ctx.lineTo(point.x, point.y);
      }
      if (this.fill) {
        ctx.fill();
      }
      if (this.stroke) {
        ctx.closePath();
        ctx.stroke();
      }
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return this.points.length;
    }
  });

  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Polygon.fromElement`)
   * @static
   * @see: http://www.w3.org/TR/SVG/shapes.html#PolygonElement
   */
  fabric.Polygon.ATTRIBUTE_NAMES = 'fill fill-opacity opacity stroke stroke-width transform'.split(' ');

  /**
   * Returns fabric.Polygon instance from an SVG element
   * @static
   * @method fabric.Polygon.fromElement
   * @param {SVGElement} element Element to parse
   * @param {Object} options Options object
   * @return {fabric.Polygon}
   */
  fabric.Polygon.fromElement = function(element, options) {
    if (!element) {
      return null;
    }
    options || (options = { });

    var points = fabric.parsePointsAttribute(element.getAttribute('points')),
        parsedAttributes = fabric.parseAttributes(element, fabric.Polygon.ATTRIBUTE_NAMES);

    for (var i = 0, len = points.length; i < len; i++) {
      // normalize coordinates, according to containing box (dimensions of which are passed via `options`)
      points[i].x -= (options.width / 2) || 0;
      points[i].y -= (options.height / 2) || 0;
    }

    return new fabric.Polygon(points, extend(parsedAttributes, options));
  };

  /**
   * Returns fabric.Polygon instance from an object representation
   * @static
   * @method fabric.Polygon.fromObject
   * @param {Object} object Object to create an instance from
   * @return {fabric.Polygon}
   */
  fabric.Polygon.fromObject = function(object) {
    return new fabric.Polygon(object.points, object);
  };

})(typeof exports != 'undefined' ? exports : this);
//= require "object.class"

(function(global) {

  var commandLengths = {
    m: 2,
    l: 2,
    h: 1,
    v: 1,
    c: 6,
    s: 4,
    q: 4,
    t: 2,
    a: 7
  };

  function drawArc(ctx, x, y, coords) {
    var rx = coords[0];
    var ry = coords[1];
    var rot = coords[2];
    var large = coords[3];
    var sweep = coords[4];
    var ex = coords[5];
    var ey = coords[6];
    var segs = arcToSegments(ex, ey, rx, ry, large, sweep, rot, x, y);
    for (var i=0; i<segs.length; i++) {
     var bez = segmentToBezier.apply(this, segs[i]);
     ctx.bezierCurveTo.apply(ctx, bez);
    }
  }

  var arcToSegmentsCache = { },
      segmentToBezierCache = { },
      _join = Array.prototype.join,
      argsString;

  // Copied from Inkscape svgtopdf, thanks!
  function arcToSegments(x, y, rx, ry, large, sweep, rotateX, ox, oy) {
    argsString = _join.call(arguments);
    if (arcToSegmentsCache[argsString]) {
      return arcToSegmentsCache[argsString];
    }

    var th = rotateX * (Math.PI/180);
    var sin_th = Math.sin(th);
    var cos_th = Math.cos(th);
    rx = Math.abs(rx);
    ry = Math.abs(ry);
    var px = cos_th * (ox - x) * 0.5 + sin_th * (oy - y) * 0.5;
    var py = cos_th * (oy - y) * 0.5 - sin_th * (ox - x) * 0.5;
    var pl = (px*px) / (rx*rx) + (py*py) / (ry*ry);
    if (pl > 1) {
      pl = Math.sqrt(pl);
      rx *= pl;
      ry *= pl;
    }

    var a00 = cos_th / rx;
    var a01 = sin_th / rx;
    var a10 = (-sin_th) / ry;
    var a11 = (cos_th) / ry;
    var x0 = a00 * ox + a01 * oy;
    var y0 = a10 * ox + a11 * oy;
    var x1 = a00 * x + a01 * y;
    var y1 = a10 * x + a11 * y;

    var d = (x1-x0) * (x1-x0) + (y1-y0) * (y1-y0);
    var sfactor_sq = 1 / d - 0.25;
    if (sfactor_sq < 0) sfactor_sq = 0;
    var sfactor = Math.sqrt(sfactor_sq);
    if (sweep == large) sfactor = -sfactor;
    var xc = 0.5 * (x0 + x1) - sfactor * (y1-y0);
    var yc = 0.5 * (y0 + y1) + sfactor * (x1-x0);

    var th0 = Math.atan2(y0-yc, x0-xc);
    var th1 = Math.atan2(y1-yc, x1-xc);

    var th_arc = th1-th0;
    if (th_arc < 0 && sweep == 1){
      th_arc += 2*Math.PI;
    } else if (th_arc > 0 && sweep == 0) {
      th_arc -= 2 * Math.PI;
    }

    var segments = Math.ceil(Math.abs(th_arc / (Math.PI * 0.5 + 0.001)));
    var result = [];
    for (var i=0; i<segments; i++) {
      var th2 = th0 + i * th_arc / segments;
      var th3 = th0 + (i+1) * th_arc / segments;
      result[i] = [xc, yc, th2, th3, rx, ry, sin_th, cos_th];
    }

    return (arcToSegmentsCache[argsString] = result);
  }

  function segmentToBezier(cx, cy, th0, th1, rx, ry, sin_th, cos_th) {
    argsString = _join.call(arguments);
    if (segmentToBezierCache[argsString]) {
      return segmentToBezierCache[argsString];
    }

    var a00 = cos_th * rx;
    var a01 = -sin_th * ry;
    var a10 = sin_th * rx;
    var a11 = cos_th * ry;

    var th_half = 0.5 * (th1 - th0);
    var t = (8/3) * Math.sin(th_half * 0.5) * Math.sin(th_half * 0.5) / Math.sin(th_half);
    var x1 = cx + Math.cos(th0) - t * Math.sin(th0);
    var y1 = cy + Math.sin(th0) + t * Math.cos(th0);
    var x3 = cx + Math.cos(th1);
    var y3 = cy + Math.sin(th1);
    var x2 = x3 + t * Math.sin(th1);
    var y2 = y3 - t * Math.cos(th1);

    return (segmentToBezierCache[argsString] = [
      a00 * x1 + a01 * y1,      a10 * x1 + a11 * y1,
      a00 * x2 + a01 * y2,      a10 * x2 + a11 * y2,
      a00 * x3 + a01 * y3,      a10 * x3 + a11 * y3
    ]);
  }

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      min = fabric.util.array.min,
      max = fabric.util.array.max,
      extend = fabric.util.object.extend,
      _toString = Object.prototype.toString;

  if (fabric.Path) {
    fabric.warn('fabric.Path is already defined');
    return;
  }
  if (!fabric.Object) {
    fabric.warn('fabric.Path requires fabric.Object');
    return;
  }

  /**
   * @private
   */
  function getX(item) {
    if (item[0] === 'H') {
      return item[1];
    }
    return item[item.length - 2];
  }

  /**
   * @private
   */
  function getY(item) {
    if (item[0] === 'V') {
      return item[1];
    }
    return item[item.length - 1];
  }

  /**
   * @class Path
   * @extends fabric.Object
   */
  fabric.Path = fabric.util.createClass(fabric.Object, /** @scope fabric.Path.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'path',

    /**
     * Constructor
     * @method initialize
     * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
     * @param {Object} [options] Options object
     */
    initialize: function(path, options) {
      options = options || { };

      this.setOptions(options);

      if (!path) {
        throw Error('`path` argument is required');
      }

      var fromArray = _toString.call(path) === '[object Array]';

      this.path = fromArray
        ? path
        : path.match && path.match(/[a-zA-Z][^a-zA-Z]*/g);

      if (!this.path) return;

      // TODO (kangax): rewrite this idiocracy
      if (!fromArray) {
        this._initializeFromArray(options);
      }

      if (options.sourcePath) {
        this.setSourcePath(options.sourcePath);
      }
    },

    /**
     * @private
     * @method _initializeFromArray
     */
    _initializeFromArray: function(options) {
      var isWidthSet = 'width' in options,
          isHeightSet = 'height' in options;

      this.path = this._parsePath();

      if (!isWidthSet || !isHeightSet) {
        extend(this, this._parseDimensions());
        if (isWidthSet) {
          this.width = options.width;
        }
        if (isHeightSet) {
          this.height = options.height;
        }
      }
    },

    /**
     * @private
     * @method _render
     */
    _render: function(ctx) {
      var current, // current instruction
          x = 0, // current x
          y = 0, // current y
          controlX = 0, // current control point x
          controlY = 0, // current control point y
          tempX,
          tempY,
          l = -(this.width / 2),
          t = -(this.height / 2);

      for (var i = 0, len = this.path.length; i < len; ++i) {

        current = this.path[i];

        switch (current[0]) { // first letter

          case 'l': // lineto, relative
            x += current[1];
            y += current[2];
            ctx.lineTo(x + l, y + t);
            break;

          case 'L': // lineto, absolute
            x = current[1];
            y = current[2];
            ctx.lineTo(x + l, y + t);
            break;

          case 'h': // horizontal lineto, relative
            x += current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'H': // horizontal lineto, absolute
            x = current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'v': // vertical lineto, relative
            y += current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'V': // verical lineto, absolute
            y = current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'm': // moveTo, relative
            x += current[1];
            y += current[2];
            ctx.moveTo(x + l, y + t);
            break;

          case 'M': // moveTo, absolute
            x = current[1];
            y = current[2];
            ctx.moveTo(x + l, y + t);
            break;

          case 'c': // bezierCurveTo, relative
            tempX = x + current[5];
            tempY = y + current[6];
            controlX = x + current[3];
            controlY = y + current[4];
            ctx.bezierCurveTo(
              x + current[1] + l, // x1
              y + current[2] + t, // y1
              controlX + l, // x2
              controlY + t, // y2
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            break;

          case 'C': // bezierCurveTo, absolute
            x = current[5];
            y = current[6];
            controlX = current[3];
            controlY = current[4];
            ctx.bezierCurveTo(
              current[1] + l,
              current[2] + t,
              controlX + l,
              controlY + t,
              x + l,
              y + t
            );
            break;

          case 's': // shorthand cubic bezierCurveTo, relative
            // transform to absolute x,y
            tempX = x + current[3];
            tempY = y + current[4];
            // calculate reflection of previous control points
            controlX = 2 * x - controlX;
            controlY = 2 * y - controlY;
            ctx.bezierCurveTo(
              controlX + l,
              controlY + t,
              x + current[1] + l,
              y + current[2] + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            break;

          case 'S': // shorthand cubic bezierCurveTo, absolute
            tempX = current[3];
            tempY = current[4];
            // calculate reflection of previous control points
            controlX = 2*x - controlX;
            controlY = 2*y - controlY;
            ctx.bezierCurveTo(
              controlX + l,
              controlY + t,
              current[1] + l,
              current[2] + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            break;

          case 'q': // quadraticCurveTo, relative
            x += current[3];
            y += current[4];
            ctx.quadraticCurveTo(
              current[1] + l,
              current[2] + t,
              x + l,
              y + t
            );
            break;

          case 'Q': // quadraticCurveTo, absolute
            x = current[3];
            y = current[4];
            controlX = current[1];
            controlY = current[2];
            ctx.quadraticCurveTo(
              controlX + l,
              controlY + t,
              x + l,
              y + t
            );
            break;

          case 'T':
            tempX = x;
            tempY = y;
            x = current[1];
            y = current[2];
            // calculate reflection of previous control points
            controlX = -controlX + 2 * tempX;
            controlY = -controlY + 2 * tempY;
            ctx.quadraticCurveTo(
              controlX + l,
              controlY + t,
              x + l,
              y + t
            );
            break;

          case 'a':
            // TODO: optimize this
            drawArc(ctx, x + l, y + t, [
              current[1],
              current[2],
              current[3],
              current[4],
              current[5],
              current[6] + x + l,
              current[7] + y + t
            ]);
            x += current[6];
            y += current[7];
            break;

          case 'A':
            // TODO: optimize this
            drawArc(ctx, x + l, y + t, [
              current[1],
              current[2],
              current[3],
              current[4],
              current[5],
              current[6] + l,
              current[7] + t
            ]);
            x = current[6];
            y = current[7];
            break;

          case 'z':
          case 'Z':
            ctx.closePath();
            break;
        }
      }
    },

    /**
     * Renders path on a specified context
     * @method render
     * @param {CanvasRenderingContext2D} ctx context to render path on
     * @param {Boolean} noTransform When true, context is not transformed
     */
    render: function(ctx, noTransform) {
      ctx.save();
      var m = this.transformMatrix;
      if (m) {
        ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      }
      if (!noTransform) {
        this.transform(ctx);
      }
      // ctx.globalCompositeOperation = this.fillRule;

      if (this.overlayFill) {
        ctx.fillStyle = this.overlayFill;
      }
      else if (this.fill) {
        ctx.fillStyle = this.fill;
      }

      if (this.stroke) {
        ctx.strokeStyle = this.stroke;
      }
      ctx.beginPath();

      this._render(ctx);

      if (this.fill) {
        ctx.fill();
      }
      if (this.stroke) {
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = this.strokeWidth;
        ctx.lineCap = ctx.lineJoin = 'round';
        ctx.stroke();
      }
      if (!noTransform && this.active) {
        this.drawBorders(ctx);
        this.hideCorners || this.drawCorners(ctx);
      }
      ctx.restore();
    },

    /**
     * Returns string representation of an instance
     * @method toString
     * @return {String} string representation of an instance
     */
    toString: function() {
      return '#<fabric.Path (' + this.complexity() +
        '): { "top": ' + this.top + ', "left": ' + this.left + ' }>';
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object}
     */
    toObject: function() {
      var o = extend(this.callSuper('toObject'), {
        path: this.path
      });
      if (this.sourcePath) {
        o.sourcePath = this.sourcePath;
      }
      if (this.transformMatrix) {
        o.transformMatrix = this.transformMatrix;
      }
      return o;
    },

    /**
     * Returns dataless object representation of an instance
     * @method toDatalessObject
     * @return {Object}
     */
    toDatalessObject: function() {
      var o = this.toObject();
      if (this.sourcePath) {
        o.path = this.sourcePath;
      }
      delete o.sourcePath;
      return o;
    },

    /**
     * Returns number representation of an instance complexity
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return this.path.length;
    },

    /**
     * @private
     * @method _parsePath
     */
    _parsePath: function() {
      var result = [ ],
          currentPath,
          chunks,
          parsed;

      for (var i = 0, j, chunksParsed, len = this.path.length; i < len; i++) {
        currentPath = this.path[i];
        chunks = currentPath.slice(1).trim().replace(/(\d)-/g, '$1###-').split(/\s|,|###/);
        chunksParsed = [ currentPath.charAt(0) ];

        for (var j = 0, jlen = chunks.length; j < jlen; j++) {
          parsed = parseFloat(chunks[j]);
          if (!isNaN(parsed)) {
            chunksParsed.push(parsed);
          }
        }

        var command = chunksParsed[0].toLowerCase(),
            commandLength = commandLengths[command];

        if (chunksParsed.length - 1 > commandLength) {
          for (var k = 1, klen = chunksParsed.length; k < klen; k += commandLength) {
            result.push([command].concat(chunksParsed.slice(k, k + commandLength)));
          }
        }
        else {
          result.push(chunksParsed);
        }
      }

      return result;
    },

    /**
     * @method _parseDimensions
     */
    _parseDimensions: function() {
      var aX = [],
          aY = [],
          previousX,
          previousY,
          isLowerCase = false,
          x,
          y;

      this.path.forEach(function(item, i) {
        if (item[0] !== 'H') {
          previousX = (i === 0) ? getX(item) : getX(this.path[i-1]);
        }
        if (item[0] !== 'V') {
          previousY = (i === 0) ? getY(item) : getY(this.path[i-1]);
        }

        // lowercased letter denotes relative position;
        // transform to absolute
        if (item[0] === item[0].toLowerCase()) {
          isLowerCase = true;
        }

        // last 2 items in an array of coordinates are the actualy x/y (except H/V);
        // collect them

        // TODO (kangax): support relative h/v commands

        x = isLowerCase
          ? previousX + getX(item)
          : item[0] === 'V'
            ? previousX
            : getX(item);

        y = isLowerCase
          ? previousY + getY(item)
          : item[0] === 'H'
            ? previousY
            : getY(item);

        var val = parseInt(x, 10);
        if (!isNaN(val)) aX.push(val);

        val = parseInt(y, 10);
        if (!isNaN(val)) aY.push(val);

      }, this);

      var minX = min(aX),
          minY = min(aY),
          deltaX = 0,
          deltaY = 0;

      var o = {
        top: minY - deltaY,
        left: minX - deltaX,
        bottom: max(aY) - deltaY,
        right: max(aX) - deltaX
      };

      o.width = o.right - o.left;
      o.height = o.bottom - o.top;

      return o;
    }
  });

  /**
   * Creates an instance of fabric.Path from an object
   * @static
   * @method fabric.Path.fromObject
   * @return {fabric.Path} Instance of fabric.Path
   */
  fabric.Path.fromObject = function(object) {
    return new fabric.Path(object.path, object);
  };

  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Path.fromElement`)
   * @static
   * @see http://www.w3.org/TR/SVG/paths.html#PathElement
   */
  fabric.Path.ATTRIBUTE_NAMES = 'd fill fill-opacity opacity fill-rule stroke stroke-width transform'.split(' ');

  /**
   * Creates an instance of fabric.Path from an SVG <path> element
   * @static
   * @method fabric.Path.fromElement
   * @param {SVGElement} element to parse
   * @param {Object} options object
   * @return {fabric.Path} Instance of fabric.Path
   */
  fabric.Path.fromElement = function(element, options) {
    var parsedAttributes = fabric.parseAttributes(element, fabric.Path.ATTRIBUTE_NAMES);
    return new fabric.Path(parsedAttributes.d, extend(parsedAttributes, options));
  };

})(typeof exports != 'undefined' ? exports : this);
//= require "path.class"

(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      invoke = fabric.util.array.invoke,
      parentSet = fabric.Object.prototype.set,
      parentToObject = fabric.Object.prototype.toObject,
      camelize = fabric.util.string.camelize,
      capitalize = fabric.util.string.capitalize;

  if (fabric.PathGroup) {
    fabric.warn('fabric.PathGroup is already defined');
    return;
  }

  /**
   * @class PathGroup
   * @extends fabric.Path
   */
  fabric.PathGroup = fabric.util.createClass(fabric.Path, /** @scope fabric.PathGroup.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'path-group',

    /**
     * @property
     * @type Boolean
     */
    forceFillOverwrite: false,

    /**
     * Constructor
     * @method initialize
     * @param {Array} paths
     * @param {Object} [options] Options object
     * @return {fabric.PathGroup} thisArg
     */
    initialize: function(paths, options) {

      options = options || { };
      this.paths = paths || [ ];

      for (var i = this.paths.length; i--; ) {
        this.paths[i].group = this;
      }

      this.setOptions(options);
      this.setCoords();

      if (options.sourcePath) {
        this.setSourcePath(options.sourcePath);
      }
    },

    /**
     * @private
     * @method _initProperties
     */
    // _initProperties: function() {
    //       this.stateProperties.forEach(function(prop) {
    //         if (prop === 'fill') {
    //           this.set(prop, this.options[prop]);
    //         }
    //         else if (prop === 'angle') {
    //           this.setAngle(this.options[prop]);
    //         }
    //         else {
    //           this[prop] = this.options[prop];
    //         }
    //       }, this);
    //     },

    /**
     * Renders this group on a specified context
     * @method render
     * @param {CanvasRenderingContext2D} ctx Context to render this instance on
     */
    render: function(ctx) {
      if (this.stub) {
        // fast-path, rendering image stub
        ctx.save();

        this.transform(ctx);
        this.stub.render(ctx, false /* no transform */);
        if (this.active) {
          this.drawBorders(ctx);
          this.drawCorners(ctx);
        }
        ctx.restore();
      }
      else {
        ctx.save();

        var m = this.transformMatrix;
        if (m) {
          ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
        }

        this.transform(ctx);
        for (var i = 0, l = this.paths.length; i < l; ++i) {
          this.paths[i].render(ctx, true);
        }
        if (this.active) {
          this.drawBorders(ctx);
          this.hideCorners || this.drawCorners(ctx);
        }
        ctx.restore();
      }
    },

    /**
     * Sets certain property to a certain value
     * @method set
     * @param {String} prop
     * @param {Any} value
     * @return {fabric.PathGroup} thisArg
     */
    set: function(prop, value) {
      if ((prop === 'fill' || prop === 'overlayFill') && this.isSameColor()) {
        this[prop] = value;
        var i = this.paths.length;
        while (i--) {
          this.paths[i].set(prop, value);
        }
      }
      else {
        // skipping parent "class" - fabric.Path
        parentSet.call(this, prop, value);
      }
      return this;
    },

    /**
     * Returns object representation of this path group
     * @method toObject
     * @return {Object} object representation of an instance
     */
    toObject: function() {
      return extend(parentToObject.call(this), {
        paths: invoke(this.getObjects(), 'clone'),
        sourcePath: this.sourcePath
      });
    },

    /**
     * Returns dataless object representation of this path group
     * @method toDatalessObject
     * @return {Object} dataless object representation of an instance
     */
    toDatalessObject: function() {
      var o = this.toObject();
      if (this.sourcePath) {
        o.paths = this.sourcePath;
      }
      return o;
    },

     /**
      * Returns a string representation of this path group
      * @method toString
      * @return {String} string representation of an object
      */
    toString: function() {
      return '#<fabric.PathGroup (' + this.complexity() +
        '): { top: ' + this.top + ', left: ' + this.left + ' }>';
    },

    /**
     * Returns true if all paths in this group are of same color
     * @method isSameColor
     * @return {Boolean} true if all paths are of the same color (`fill`)
     */
    isSameColor: function() {
      var firstPathFill = this.getObjects()[0].get('fill');
      return this.getObjects().every(function(path) {
        return path.get('fill') === firstPathFill;
      });
    },

    /**
      * Returns number representation of object's complexity
      * @method complexity
      * @return {Number} complexity
      */
    complexity: function() {
      return this.paths.reduce(function(total, path) {
        return total + ((path && path.complexity) ? path.complexity() : 0);
      }, 0);
    },

    /**
      * Makes path group grayscale
      * @method toGrayscale
      * @return {fabric.PathGroup} thisArg
      */
    toGrayscale: function() {
      var i = this.paths.length;
      while (i--) {
        this.paths[i].toGrayscale();
      }
      return this;
    },

    /**
     * Returns all paths in this path group
     * @method getObjects
     * @return {Array} array of path objects included in this path group
     */
    getObjects: function() {
      return this.paths;
    }
  });

  /**
   * @private
   * @method instantiatePaths
   */
  function instantiatePaths(paths) {
    for (var i = 0, len = paths.length; i < len; i++) {
      if (!(paths[i] instanceof fabric.Object)) {
        var klassName = camelize(capitalize(paths[i].type));
        paths[i] = fabric[klassName].fromObject(paths[i]);
      }
    }
    return paths;
  }

  /**
   * Creates fabric.Triangle instance from an object representation
   * @static
   * @method fabric.PathGroup.fromObject
   * @param {Object} object
   * @return {fabric.PathGroup}
   */
  fabric.PathGroup.fromObject = function(object) {
    var paths = instantiatePaths(object.paths);
    return new fabric.PathGroup(paths, object);
  };

})(typeof exports != 'undefined' ? exports : this);
//= require "object.class"

(function(global){

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      min = fabric.util.array.min,
      max = fabric.util.array.max,
      invoke = fabric.util.array.invoke,
      removeFromArray = fabric.util.removeFromArray;

  if (fabric.Group) {
    return;
  }

  /**
   * @class Group
   * @extends fabric.Object
   */
  fabric.Group = fabric.util.createClass(fabric.Object, /** @scope fabric.Group.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'group',

    /**
     * Constructor
     * @method initialized
     * @param {Object} objects Group objects
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function(objects, options) {
      this.objects = objects || [];
      this.originalState = { };

      this.callSuper('initialize');

      this._calcBounds();
      this._updateObjectsCoords();

      if (options) {
        extend(this, options);
      }
      this._setOpacityIfSame();

      // group is active by default
      this.setCoords(true);
      this.saveCoords();

      this.activateAllObjects();
    },

    /**
     * @private
     * @method _updateObjectsCoords
     */
    _updateObjectsCoords: function() {
      var groupDeltaX = this.left,
          groupDeltaY = this.top;

      this.forEachObject(function(object) {

        var objectLeft = object.get('left'),
            objectTop = object.get('top');

        object.set('originalLeft', objectLeft);
        object.set('originalTop', objectTop);

        object.set('left', objectLeft - groupDeltaX);
        object.set('top', objectTop - groupDeltaY);

        object.setCoords();

        // do not display corners of objects enclosed in a group
        object.hideCorners = true;
      }, this);
    },

    /**
     * Returns string represenation of a group
     * @method toString
     * @return {String}
     */
    toString: function() {
      return '#<fabric.Group: (' + this.complexity() + ')>';
    },

    /**
     * Returns an array of all objects in this group
     * @method getObjects
     * @return {Array} group objects
     */
    getObjects: function() {
      return this.objects;
    },

    /**
     * Adds an object to a group; Then recalculates group's dimension, position.
     * @method add
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    add: function(object) {
      this._restoreObjectsState();
      this.objects.push(object);
      object.setActive(true);
      this._calcBounds();
      this._updateObjectsCoords();
      return this;
    },

    /**
     * Removes an object from a group; Then recalculates group's dimension, position.
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    remove: function(object) {
      this._restoreObjectsState();
      removeFromArray(this.objects, object);
      object.setActive(false);
      this._calcBounds();
      this._updateObjectsCoords();
      return this;
    },

    /**
     * Returns a size of a group (i.e: length of an array containing its objects)
     * @return {Number} Group size
     */
    size: function() {
      return this.getObjects().length;
    },

    /**
     * Sets property to a given value
     * @method set
     * @param {String} name
     * @param {Object|Function} value
     * @return {fabric.Group} thisArg
     * @chainable
     */
    set: function(name, value) {
      if (typeof value == 'function') {
        // recurse
        this.set(name, value(this[name]));
      }
      else {
        if (name === 'fill' || name === 'opacity') {
          var i = this.objects.length;
          this[name] = value;
          while (i--) {
            this.objects[i].set(name, value);
          }
        }
        else {
          this[name] = value;
        }
      }
      return this;
    },

    /**
     * Returns true if a group contains an object
     * @method contains
     * @param {Object} object Object to check against
     * @return {Boolean} `true` if group contains an object
     */
    contains: function(object) {
      return this.objects.indexOf(object) > -1;
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        objects: invoke(this.objects, 'clone')
      });
    },

    /**
     * Renders instance on a given context
     * @method render
     * @param {CanvasRenderingContext2D} ctx context to render instance on
     */
    render: function(ctx) {
      ctx.save();
      this.transform(ctx);

      var groupScaleFactor = Math.max(this.scaleX, this.scaleY);

      for (var i = 0, len = this.objects.length, object; object = this.objects[i]; i++) {
        var originalScaleFactor = object.borderScaleFactor;
        object.borderScaleFactor = groupScaleFactor;
        object.render(ctx);
        object.borderScaleFactor = originalScaleFactor;
      }
      this.hideBorders || this.drawBorders(ctx);
      this.hideCorners || this.drawCorners(ctx);
      ctx.restore();
      this.setCoords();
    },

    /**
     * Returns object from the group at the specified index
     * @method item
     * @param index {Number} index of item to get
     * @return {fabric.Object}
     */
    item: function(index) {
      return this.getObjects()[index];
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return this.getObjects().reduce(function(total, object) {
        total += (typeof object.complexity == 'function') ? object.complexity() : 0;
        return total;
      }, 0);
    },

    /**
     * Retores original state of each of group objects (original state is that which was before group was created).
     * @private
     * @method _restoreObjectsState
     * @return {fabric.Group} thisArg
     * @chainable
     */
    _restoreObjectsState: function() {
      this.objects.forEach(this._restoreObjectState, this);
      return this;
    },

    /**
     * Restores original state of a specified object in group
     * @private
     * @method _restoreObjectState
     * @param {fabric.Object} object
     * @return {fabric.Group} thisArg
     */
    _restoreObjectState: function(object) {

      var groupLeft = this.get('left'),
          groupTop = this.get('top'),
          groupAngle = this.getAngle() * (Math.PI / 180),
          objectLeft = object.get('originalLeft'),
          objectTop = object.get('originalTop'),
          rotatedTop = Math.cos(groupAngle) * object.get('top') + Math.sin(groupAngle) * object.get('left'),
          rotatedLeft = -Math.sin(groupAngle) * object.get('top') + Math.cos(groupAngle) * object.get('left');

      object.setAngle(object.getAngle() + this.getAngle());

      object.set('left', groupLeft + rotatedLeft * this.get('scaleX'));
      object.set('top', groupTop + rotatedTop * this.get('scaleY'));

      object.set('scaleX', object.get('scaleX') * this.get('scaleX'));
      object.set('scaleY', object.get('scaleY') * this.get('scaleY'));

      object.setCoords();
      object.hideCorners = false;
      object.setActive(false);
      object.setCoords();

      return this;
    },

    /**
     * Destroys a group (restoring state of its objects)
     * @method destroy
     * @return {fabric.Group} thisArg
     * @chainable
     */
    destroy: function() {
      return this._restoreObjectsState();
    },

    /**
     * Saves coordinates of this instance (to be used together with `hasMoved`)
     * @saveCoords
     * @return {fabric.Group} thisArg
     * @chainable
     */
    saveCoords: function() {
      this._originalLeft = this.get('left');
      this._originalTop = this.get('top');
      return this;
    },

    /**
     * Checks whether this group was moved (since `saveCoords` was called last)
     * @method hasMoved
     * @return {Boolean} true if an object was moved (since fabric.Group#saveCoords was called)
     */
    hasMoved: function() {
      return this._originalLeft !== this.get('left') ||
             this._originalTop !== this.get('top');
    },

    /**
     * Sets coordinates of all group objects
     * @method setObjectsCoords
     * @return {fabric.Group} thisArg
     * @chainable
     */
    setObjectsCoords: function() {
      this.forEachObject(function(object) {
        object.setCoords();
      });
      return this;
    },

    /**
     * Activates (makes active) all group objects
     * @method activateAllObjects
     * @return {fabric.Group} thisArg
     * @chainable
     */
    activateAllObjects: function() {
      return this.setActive(true);
    },

    /**
     * Activates (makes active) all group objects
     * @method setActive
     * @param {Boolean} value `true` to activate object, `false` otherwise
     * @return {fabric.Group} thisArg
     * @chainable
     */
    setActive: function(value) {
      this.forEachObject(function(object) {
        object.setActive(value);
      });
      return this;
    },

    /**
     * Executes given function for each object in this group
     * @method forEachObject
     * @param {Function} callback
     *                   Callback invoked with current object as first argument,
     *                   index - as second and an array of all objects - as third.
     *                   Iteration happens in reverse order (for performance reasons).
     *                   Callback is invoked in a context of Global Object (e.g. `window`)
     *                   when no `context` argument is given
     *
     * @param {Object} context Context (aka thisObject)
     *
     * @return {fabric.Group} thisArg
     * @chainable
     */
    forEachObject: fabric.Canvas.prototype.forEachObject,

    /**
     * @private
     * @method _setOpacityIfSame
     */
    _setOpacityIfSame: function() {
      var objects = this.getObjects(),
          firstValue = objects[0] ? objects[0].get('opacity') : 1;

      var isSameOpacity = objects.every(function(o) {
        return o.get('opacity') === firstValue;
      });

      if (isSameOpacity) {
        this.opacity = firstValue;
      }
    },

    /**
     * @private
     * @method _calcBounds
     */
    _calcBounds: function() {
      var aX = [],
          aY = [],
          minX, minY, maxX, maxY, o, width, height,
          i = 0,
          len = this.objects.length;

      for (; i < len; ++i) {
        o = this.objects[i];
        o.setCoords();
        for (var prop in o.oCoords) {
          aX.push(o.oCoords[prop].x);
          aY.push(o.oCoords[prop].y);
        }
      };

      minX = min(aX);
      maxX = max(aX);
      minY = min(aY);
      maxY = max(aY);

      width = (maxX - minX) || 0;
      height = (maxY - minY) || 0;

      this.width = width;
      this.height = height;

      this.left = (minX + width / 2) || 0;
      this.top = (minY + height / 2) || 0;
    },

    /**
     * Checks if point is contained within the group
     * @method containsPoint
     * @param {fabric.Point} point point with `x` and `y` properties
     * @return {Boolean} true if point is contained within group
     */
    containsPoint: function(point) {

      var halfWidth = this.get('width') / 2,
          halfHeight = this.get('height') / 2,
          centerX = this.get('left'),
          centerY = this.get('top');

      return  centerX - halfWidth < point.x &&
              centerX + halfWidth > point.x &&
              centerY - halfHeight < point.y &&
              centerY + halfHeight > point.y;
    },

    /**
     * Makes all of this group's objects grayscale (i.e. calling `toGrayscale` on them)
     * @method toGrayscale
     */
    toGrayscale: function() {
      var i = this.objects.length;
      while (i--) {
        this.objects[i].toGrayscale();
      }
    }
  });

  /**
   * Returns fabric.Group instance from an object representation
   * @static
   * @method fabric.Group.fromObject
   * @param object {Object} object to create a group from
   * @param options {Object} options object
   * @return {fabric.Group} an instance of fabric.Group
   */
  fabric.Group.fromObject = function(object) {
    return new fabric.Group(object.objects, object);
  };

})(typeof exports != 'undefined' ? exports : this);
//= require "object.class"

(function(global) {

  "use strict";

  var extend = fabric.util.object.extend;

  if (!global.fabric) {
    global.fabric = { };
  }

  if (global.fabric.Image) {
    fabric.warn('fabric.Image is already defined.');
    return;
  };

  if (!fabric.Object) {
    fabric.warn('fabric.Object is required for fabric.Image initialization');
    return;
  }

  /**
   * @class Image
   * @extends fabric.Object
   */
  fabric.Image = fabric.util.createClass(fabric.Object, /** @scope fabric.Image.prototype */ {

    /**
     * @property
     * @type Number
     */
    maxwidth: null,

    /**
     * @property
     * @type Number
     */
    maxheight: null,

    /**
     * @property
     * @type Boolean
     */
    active: false,

    /**
     * @property
     * @type Boolean
     */
    bordervisibility: false,

    /**
     * @property
     * @type Boolean
     */
    cornervisibility: false,

    /**
     * @property
     * @type String
     */
    type: 'image',

    /**
     * Filters to be applied to an image (when calling `applyFilters`)
     * @property
     * @type Array
     */
    filters: [ ],

    /**
     * Constructor
     * @param {HTMLImageElement | String} element Image element
     * @param {Object} options optional
     */
    initialize: function(element, options) {
      options || (options = { });

      this.callSuper('initialize', options);
      this._initElement(element);
      this._originalImage = this.getElement();
      this._initConfig(options);

      if (options.filters) {
        this.filters = options.filters;
        this.applyFilters();
      }
    },

    /**
     * Returns image element which this instance if based on
     * @method getElement
     * @return {HTMLImageElement} image element
     */
    getElement: function() {
      return this._element;
    },

    /**
     * Sets image element for this instance to a specified one
     * @method setElement
     * @param {HTMLImageElement} element
     * @return {fabric.Image} thisArg
     * @chainable
     */
    setElement: function(element) {
      this._element = element;
      this._initConfig();
      return this;
    },

    /**
     * Resizes an image depending on whether maxwidth and maxheight are set up;
     * Width and height have to mantain the same proportion in the final image as it was in the initial one.
     * @method getNormalizedSize
     * @param {Object} oImg
     * @param {Number} maxwidth maximum width of the image (in px)
     * @param {Number} maxheight maximum height of the image (in px)
     */
    getNormalizedSize: function(oImg, maxwidth, maxheight) {
      if (maxheight && maxwidth && (oImg.width > oImg.height && (oImg.width / oImg.height) < (maxwidth / maxheight))) {
        // height is the constraining dimension.
        normalizedWidth = ~~((oImg.width * maxheight) / oImg.height);
        normalizedHeight = maxheight;
      }
      else if (maxheight && ((oImg.height == oImg.width) || (oImg.height > oImg.width) || (oImg.height > maxheight))) {
        // height is the constraining dimension.
        normalizedWidth = ~~((oImg.width * maxheight) / oImg.height);
        normalizedHeight = maxheight;
      }
      else if (maxwidth && (maxwidth < oImg.width)) {
        // width is the constraining dimension.
        normalizedHeight = ~~((oImg.height * maxwidth) / oImg.width);
        normalizedWidth = maxwidth;
      }
      else {
        normalizedWidth = oImg.width;
        normalizedHeight = oImg.height;
      }

      return {
        width: normalizedWidth,
        height: normalizedHeight
      };
    },

    /**
     * Returns original size of an image
     * @method getOriginalSize
     * @return {Object} object with "width" and "height" properties
     */
    getOriginalSize: function() {
      var element = this.getElement();
      return {
        width: element.width,
        height: element.height
      };
    },

    /**
     * Sets border visibility
     * @method setBorderVisibility
     * @param {Boolean} visible When true, border is set to be visible
     */
    setBorderVisibility: function(visible) {
      this._resetWidthHeight();
      this._adjustWidthHeightToBorders(showBorder);
      this.setCoords();
    },

    /**
     * Sets corner visibility
     * @method setCornersVisibility
     * @param {Boolean} visible When true, corners are set to be visible
     */
    setCornersVisibility: function(visible) {
      this.cornervisibility = !!visible;
    },

    /**
     * Renders image on a specified context
     * @method render
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    render: function(ctx, noTransform) {
      ctx.save();
      if (!noTransform) {
        this.transform(ctx);
      }
      this._render(ctx);
      if (this.active && !noTransform) {
        this.drawBorders(ctx);
        this.hideCorners || this.drawCorners(ctx);
      }
      ctx.restore();
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        src: this._originalImage.src,
        filters: this.filters.concat()
      });
    },

    /**
     * Returns source of an image
     * @method getSrc
     * @return {String} Source of an image
     */
    getSrc: function() {
      return this.getElement().src;
    },

    /**
     * Returns string representation of an instance
     * @method toString
     * @return {String} String representation of an instance
     */
    toString: function() {
      return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
    },

    /**
     * Returns a clone of an instance
     * @mthod clone
     * @param {Function} callback Callback is invoked with a clone as a first argument
     */
    clone: function(callback) {
      this.constructor.fromObject(this.toObject(), callback);
    },

    /**
     * Applies filters assigned to this image (from "filters" array)
     * @mthod applyFilters
     * @param {Function} callback Callback is invoked when all filters have been applied and new image is generated
     */
    applyFilters: function(callback) {

      if (this.filters.length === 0) {
        this.setElement(this._originalImage);
        callback && callback();
        return;
      }

      var isLikelyNode = typeof Buffer !== 'undefined' && typeof window === 'undefined',
          imgEl = this._originalImage,
          canvasEl = fabric.document.createElement('canvas'),
          replacement = isLikelyNode ? new (require('canvas').Image) : fabric.document.createElement('img'),
          _this = this;

      canvasEl.width = imgEl.width;
      canvasEl.height = imgEl.height;

      canvasEl.getContext('2d').drawImage(imgEl, 0, 0);

      this.filters.forEach(function(filter) {
        filter && filter.applyTo(canvasEl);
      });

       /** @ignore */
      replacement.onload = function() {
        _this.setElement(replacement);
        callback && callback();
        replacement.onload = canvasEl = imgEl = null;
      };
      replacement.width = imgEl.width;
      replacement.height = imgEl.height;

      if (isLikelyNode) {
        var base64str = canvasEl.toDataURL('image/png').replace(/data:image\/png;base64,/, '');
        replacement.src = new Buffer(base64str, 'base64');
        _this.setElement(replacement);

        // onload doesn't fire in node, so we invoke callback manually
        callback && callback();
      }
      else {
        replacement.src = canvasEl.toDataURL('image/png');
      }

      return this;
    },

    /**
     * @private
     */
    _render: function(ctx) {
      var originalImgSize = this.getOriginalSize();
      ctx.drawImage(
        this.getElement(),
        - originalImgSize.width / 2,
        - originalImgSize.height / 2,
        originalImgSize.width,
        originalImgSize.height
      );
    },

    /**
     * @private
     */
    _adjustWidthHeightToBorders: function(showBorder) {
      if (showBorder) {
        this.currentBorder = this.borderwidth;
        this.width += (2 * this.currentBorder);
        this.height += (2 * this.currentBorder);
      }
      else {
        this.currentBorder = 0;
      }
    },

    /**
     * @private
     */
    _resetWidthHeight: function() {
      var element = this.getElement();

      this.set('width', element.width);
      this.set('height', element.height);
    },

    /**
     * The Image class's initialization method. This method is automatically
     * called by the constructor.
     * @method _initElement
     * @param {HTMLImageElement|String} el The element representing the image
     */
    _initElement: function(element) {
      this.setElement(fabric.util.getById(element));
      fabric.util.addClass(this.getElement(), fabric.Image.CSS_CANVAS);
    },

    /**
     * @method _initConfig
     * @param {Object} options Options object
     */
    _initConfig: function(options) {
      this.setOptions(options || { });
      this._setBorder();
      this._setWidthHeight();
    },

    /**
     * @method _initFilters
     * @param {Object} object Object with filters property
     */
    _initFilters: function(object) {
      if (object.filters && object.filters.length) {
        this.filters = object.filters.map(function(filterObj) {
          return fabric.Image.filters[filterObj.type].fromObject(filterObj);
        });
      }
    },

    /**
     * @private
     */
    _setBorder: function() {
      if (this.bordervisibility) {
        this.currentBorder = this.borderwidth;
      }
      else {
        this.currentBorder = 0;
      }
    },

    /**
     * @private
     */
    _setWidthHeight: function() {
      var sidesBorderWidth = 2 * this.currentBorder;
      this.width = (this.getElement().width || 0) + sidesBorderWidth;
      this.height = (this.getElement().height || 0) + sidesBorderWidth;
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    }
  });

  /**
   * Default CSS class name for canvas
   * @static
   * @type String
   */
  fabric.Image.CSS_CANVAS = "canvas-img";

  /**
   * Creates an instance of fabric.Image from its object representation
   * @static
   * @method fromObject
   * @param object {Object}
   * @param callback {Function} optional
   */
  fabric.Image.fromObject = function(object, callback) {
    var img = fabric.document.createElement('img'),
        src = object.src;

    if (object.width) {
      img.width = object.width;
    }
    if (object.height) {
      img.height = object.height;
    }

    /** @ignore */
    img.onload = function() {
      fabric.Image.prototype._initFilters.call(object, object);

      var instance = new fabric.Image(img, object);
      callback && callback(instance);
      img = img.onload = null;
    };
    img.src = src;
  };

  /**
   * Creates an instance of fabric.Image from an URL string
   * @static
   * @method fromURL
   * @param {String} url URL to create an image from
   * @param {Function} [callback] Callback to invoke when image is created (newly created image is passed as a first argument)
   * @param {Object} [imgOptions] Options object
   */
  fabric.Image.fromURL = function(url, callback, imgOptions) {
    var img = fabric.document.createElement('img');

    /** @ignore */
    img.onload = function() {
      if (callback) {
        callback(new fabric.Image(img, imgOptions));
      }
      img = img.onload = null;
    };
    img.src = url;
  };

  /**
   * Creates an instance of fabric.Image from a Data URL string
   * @static
   * @method fromDataURL
   * @param {String} dataUrl URL to create an image from
   * @param {Object} [imgOptions] Options object
   */
  fabric.Image.fromDataURL = function(dataUrl, imgOptions) {
    var img = fabric.document.createElement('img');

    img.src = dataUrl;

    return new fabric.Image(img, imgOptions);
  };

  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Image.fromElement})
   * @static
   * @see http://www.w3.org/TR/SVG/struct.html#ImageElement
   */
  fabric.Image.ATTRIBUTE_NAMES = 'x y width height fill fill-opacity opacity stroke stroke-width transform xlink:href'.split(' ');

  /**
   * Returns {@link fabric.Image} instance from an SVG element
   * @static
   * @method fabric.Image.fromElement
   * @param {SVGElement} element Element to parse
   * @param {Function} callback Callback to execute when fabric.Image object is created
   * @param {Object} [options] Options object
   * @return {fabric.Image}
   */
  fabric.Image.fromElement = function(element, callback, options) {
    options || (options = { });

    var parsedAttributes = fabric.parseAttributes(element, fabric.Image.ATTRIBUTE_NAMES);

    fabric.Image.fromURL(parsedAttributes['xlink:href'], callback, extend(parsedAttributes, options));
  };

  fabric.Image.async = true;

})(typeof exports != 'undefined' ? exports : this);
/**
 * @namespace
 */
fabric.Image.filters = { };

/**
 * @class fabric.Image.filters.Grayscale
 * @memberOf fabric.Image.filters
 */
fabric.Image.filters.Grayscale = fabric.util.createClass( /** @scope fabric.Image.filters.Grayscale.prototype */ {

  /**
   * @param {String} type
   */
  type: "Grayscale",

  /**
   * @method applyTo
   * @memberOf fabric.Image.filters.Grayscale.prototype
   * @param {Object} canvasEl Canvas element to apply filter to
   */
  applyTo: function(canvasEl) {
    var context = canvasEl.getContext('2d'),
        imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
        data = imageData.data,
        iLen = imageData.width,
        jLen = imageData.height,
        index, average, i, j;

     for (i = 0; i < iLen; i++) {
       for (j = 0; j < jLen; j++) {

         index = (i * 4) * jLen + (j * 4);
         average = (data[index] + data[index + 1] + data[index + 2]) / 3;

         data[index]     = average;
         data[index + 1] = average;
         data[index + 2] = average;
       }
     }

     context.putImageData(imageData, 0, 0);
  },

  /**
   * @method toJSON
   * @return {String} json representation of filter
   */
  toJSON: function() {
    return { type: this.type };
  }
});

fabric.Image.filters.Grayscale.fromObject = function() {
  return new fabric.Image.filters.Grayscale();
};

/**
 * @class fabric.Image.filters.RemoveWhite
 * @memberOf fabric.Image.filters
 */
fabric.Image.filters.RemoveWhite = fabric.util.createClass( /** @scope fabric.Image.filters.RemoveWhite.prototype */ {

  /**
   * @param {String} type
   */
  type: "RemoveWhite",

  /**
   * @memberOf fabric.Image.filters.RemoveWhite.prototype
   * @param {Object} [options] Options object
   */
  initialize: function(options) {
    options || (options = { });
    this.threshold = options.threshold || 30;
    this.distance = options.distance || 20;
  },

  /**
   * @method applyTo
   * @param {Object} canvasEl Canvas element to apply filter to
   */
  applyTo: function(canvasEl) {
    var context = canvasEl.getContext('2d'),
        imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
        data = imageData.data,
        threshold = this.threshold,
        distance = this.distance,
        limit = 255 - threshold,
        abs = Math.abs,
        r, g, b;

    for (var i = 0, len = data.length; i < len; i += 4) {

      r = data[i];
      g = data[i+1];
      b = data[i+2];

      if (r > limit &&
          g > limit &&
          b > limit &&
          abs(r-g) < distance &&
          abs(r-b) < distance &&
          abs(g-b) < distance) {

        data[i+3] = 1;
      }
    }

    context.putImageData(imageData, 0, 0);
  },

  /**
   * @method toJSON
   * @return {String} json representation of filter
   */
  toJSON: function() {
    return {
      type: this.type,
      threshold: this.threshold,
      distance: this.distance
    };
  }
});

fabric.Image.filters.RemoveWhite.fromObject = function(object) {
  return new fabric.Image.filters.RemoveWhite(object);
};
//= require "object.class"

(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      clone = fabric.util.object.clone;

  if (fabric.Text) {
    fabric.warn('fabric.Text is already defined');
    return;
  }
  if (!fabric.Object) {
    fabric.warn('fabric.Text requires fabric.Object');
    return;
  }

  /**
   * @class Text
   * @extends fabric.Object
   */
  fabric.Text = fabric.util.createClass(fabric.Object, /** @scope fabric.Text.prototype */ {

    /**
     * @property
     * @type Number
     */
    fontSize:         40,

    /**
     * @property
     * @type Number
     */
    fontWeight:       100,

    /**
     * @property
     * @type String
     */
    fontFamily:       'Times_New_Roman',

    /**
     * @property
     * @type String
     */
    textDecoration:   '',

    /**
     * @property
     * @type String | null
     */
    textShadow:       null,

    /**
     * Determines text alignment. Possible values: "left", "center", or "right".
     * @property
     * @type String
     */
    textAlign:        'left',

    /**
     * @property
     * @type String
     */
    fontStyle:        '',

    /**
     * @property
     * @type Number
     */
    lineHeight:       1.6,

    /**
     * @property
     * @type String
     */
    strokeStyle:      '',

    /**
     * @property
     * @type Number
     */
    strokeWidth:      1,

    /**
     * @property
     * @type String
     */
    backgroundColor:  '',


    /**
     * @property
     * @type String | null
     */
    path:             null,

    /**
     * @property
     * @type String
     */
    type:             'text',

    /**
     * Constructor
     * @method initialize
     * @param {String} text
     * @param {Object} [options]
     * @return {fabric.Text} thisArg
     */
    initialize: function(text, options) {
      this._initStateProperties();
      this.text = text;
      this.setOptions(options);
      this.theta = this.angle * Math.PI / 180;
      this.width = this.getWidth();
      this.setCoords();
    },

    /**
     * Creates `stateProperties` list on an instance, and adds `fabric.Text` -specific ones to it
     * (such as "fontFamily", "fontWeight", etc.)
     * @private
     * @method _initStateProperties
     */
    _initStateProperties: function() {
      this.stateProperties = this.stateProperties.concat();
      this.stateProperties.push(
        'fontFamily',
        'fontWeight',
        'fontSize',
        'path',
        'text',
        'textDecoration',
        'textShadow',
        'textAlign',
        'fontStyle',
        'lineHeight',
        'strokeStyle',
        'strokeWidth',
        'backgroundColor'
      );
      fabric.util.removeFromArray(this.stateProperties, 'width');
    },

    /**
     * Returns string representation of an instance
     * @method toString
     * @return {String} String representation of text object
     */
    toString: function() {
      return '#<fabric.Text (' + this.complexity() +
        '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
    },

    /**
     * @private
     * @method _render
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx) {
      var o = Cufon.textOptions || (Cufon.textOptions = { });

      // export options to be used by cufon.js
      o.left = this.left;
      o.top = this.top;
      o.context = ctx;
      o.color = this.fill;

      var el = this._initDummyElement();

      // set "cursor" to top/left corner
      this.transform(ctx);

      // draw text
      Cufon.replaceElement(el, {
        separate: 'none',
        fontFamily: this.fontFamily,
        textDecoration: this.textDecoration,
        textShadow: this.textShadow,
        textAlign: this.textAlign,
        fontStyle: this.fontStyle,
        lineHeight: this.lineHeight,
        strokeStyle: this.strokeStyle,
        strokeWidth: this.strokeWidth,
        backgroundColor: this.backgroundColor
      });

      // update width, height
      this.width = o.width;
      this.height = o.height;

      // need to set coords _after_ the width/height was retreived from Cufon
      this.setCoords();
    },

    // _render: function(context) {
    //       context.fillStyle = this.fill;
    //       context.font = this.fontSize + 'px ' + this.fontFamily;
    //       this.transform(context);
    //       this.width = context.measureText(this.text).width;
    //       this.height = this.fontSize;
    //       context.fillText(this.text, -this.width / 2, 0);
    //       this.setCoords();
    //     },

    /**
     * @private
     * @method _initDummyElement
     */
    _initDummyElement: function() {
      var el = fabric.document.createElement('div'),
          container = fabric.document.createElement('div');

      // Cufon doesn't play nice with textDecoration=underline if element doesn't have a parent
      container.appendChild(el);
      el.innerHTML = this.text;

      el.style.fontSize = this.fontSize + 'px';
      el.style.letterSpacing = 'normal';

      return el;
    },

    /**
     * Renders text instance on a specified context
     * @method render
     * @param ctx {CanvasRenderingContext2D} context to render on
     */
    render: function(ctx, noTransform) {
      ctx.save();
      this._render(ctx);
      if (!noTransform && this.active) {
        this.drawBorders(ctx);
        this.hideCorners || this.drawCorners(ctx);
      }
      ctx.restore();
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} Object representation of text object
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        text:           this.text,
        fontSize:       this.fontSize,
        fontWeight:     this.fontWeight,
        fontFamily:     this.fontFamily,
        fontStyle:      this.fontStyle,
        lineHeight:     this.lineHeight,
        textDecoration: this.textDecoration,
        textShadow:     this.textShadow,
        textAlign:      this.textAlign,
        path:           this.path,
        strokeStyle:    this.strokeStyle,
        strokeWidth:    this.strokeWidth,
        backgroundColor: this.backgroundColor
      });
    },

    /**
     * Sets "color" of an instance (alias of `set('fill', &hellip;)`)
     * @method setColor
     * @param {String} value
     * @return {fabric.Text} thisArg
     * @chainable
     */
    setColor: function(value) {
      this.set('fill', value);
      return this;
    },

    /**
     * Sets fontSize of an instance and updates its coordinates
     * @method setFontsize
     * @param {Number} value
     * @return {fabric.Text} thisArg
     * @chainable
     */
    setFontsize: function(value) {
      this.set('fontSize', value);
      this.setCoords();
      return this;
    },

    /**
     * Returns actual text value of an instance
     * @method getText
     * @return {String}
     */
    getText: function() {
      return this.text;
    },

    /**
     * Sets text of an instance, and updates its coordinates
     * @method setText
     * @param {String} value
     * @return {fabric.Text} thisArg
     * @chainable
     */
    setText: function(value) {
      this.set('text', value);
      this.setCoords();
      return this;
    },

    /**
     * Sets specified property to a specified value
     * @method set
     * @param {String} name
     * @param {Any} value
     * @return {fabric.Text} thisArg
     * @chainable
     */
    set: function(name, value) {
      if (typeof name == 'object') {
        for (var prop in name) {
          this.set(prop, name[prop]);
        }
      }
      else {
        this[name] = value;
        if (name === 'fontFamily' && this.path) {
          this.path = this.path.replace(/(.*?)([^\/]*)(\.font\.js)/, '$1' + value + '$3');
        }
      }
      return this;
    }
  });

  /**
   * Returns fabric.Text instance from an object representation
   * @static
   * @method fromObject
   * @param {Object} object to create an instance from
   * @return {fabric.Text} an instance
   */
  fabric.Text.fromObject = function(object) {
    return new fabric.Text(object.text, clone(object));
  };

  /**
   * Returns fabric.Text instance from an SVG element (<b>not yet implemented</b>)
   * @static
   * @method fabric.Text.fromElement
   * @return {fabric.Text} an instance
   */
  fabric.Text.fromElement = function(element) {
    // TODO (kangax): implement this
  };

})(typeof exports != 'undefined' ? exports : this);
(function() {

  if (typeof document != 'undefined' && typeof window != 'undefined') {
    return;
  }

  var XML = require('o3-xml'),
      URL = require('url'),
      HTTP = require('http'),

      Canvas = require('canvas'),
      Image = require('canvas').Image;

  function request(url, encoding, callback) {
    var oURL = URL.parse(url),
        client = HTTP.createClient(80, oURL.hostname),
        request = client.request('GET', oURL.pathname, { 'host': oURL.hostname });

    client.addListener('error', function(err) {
      if (err.errno === process.ECONNREFUSED) {
        fabric.log('ECONNREFUSED: connection refused to ' + client.host + ':' + client.port);
      }
      else {
        fabric.log(err.message);
      }
    });

    request.end();
    request.on('response', function (response) {
      var body = "";
      if (encoding) {
        response.setEncoding(encoding);
      }
      response.on('end', function () {
        callback(body);
      });
      response.on('data', function (chunk) {
        if (response.statusCode == 200) {
          body += chunk;
        }
      });
    });
  }

  fabric.Canvas.prototype.loadImageFromURL = function(url, callback) {
    request(url, 'binary', function(body) {
      var img = new Image();
      img.src = new Buffer(body, 'binary');
      callback(new fabric.Image(img));
    });
  };

  fabric.loadSVGFromURL = function(url, callback) {
    url = url.replace(/^\n\s*/, '').replace(/\?.*$/, '').trim();
    request(url, '', function(body) {
      var doc = XML.parseFromString(body);
      fabric.parseSVGDocument(doc.documentElement, function(results, options) {
        callback(results, options);
      });
    });
  };

  fabric.util.getScript = function(url, callback) {
    request(url, '', function(body) {
      eval(body);
      callback && callback();
    });
  };

  fabric.Image.fromObject = function(object, callback) {
    fabric.Canvas.prototype.loadImageFromURL(object.src, function(oImg) {
      oImg._initConfig(object);
      oImg._initFilters(object);
      callback(oImg);
    });
  };

  fabric.createCanvasForNode = function(width, height) {

    var canvasEl = fabric.document.createElement('canvas'),
        nodeCanvas = new Canvas(width || 600, height || 600);

    // jsdom doesn't create style on canvas element, so here be temp. workaround
    canvasEl.style = { };

    canvasEl.width = nodeCanvas.width;
    canvasEl.height = nodeCanvas.height;

    var fabricCanvas = new fabric.Canvas(canvasEl);
    fabricCanvas.contextContainer = nodeCanvas.getContext('2d');
    fabricCanvas.nodeCanvas = nodeCanvas;

    return fabricCanvas;
  };

  fabric.Canvas.prototype.createPNGStream = function() {
    return this.nodeCanvas.createPNGStream();
  };

  var origSetWidth = fabric.Canvas.prototype.setWidth;
  fabric.Canvas.prototype.setWidth = function(width) {
    origSetWidth.call(this);
    this.nodeCanvas.width = width;
    return this;
  };

  var origSetHeight = fabric.Canvas.prototype.setHeight;
  fabric.Canvas.prototype.setHeight = function(height) {
    origSetHeight.call(this);
    this.nodeCanvas.height = height;
    return this;
  };

})();
if(!window.topo) window.topo = {};

topo.utils = {};

topo.utils.camelize = function(prop) {
    return prop.replace(/-+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    }).replace(/^([a-z])/, function(match, chr) {
    	return chr.toUpperCase()
    });
};

topo.utils.xetterize = function(obj, props) {
	for(var i = 0, l = props.length; i < l; i++) {
		(function(prop, camelized) {
			obj['get' + camelized] = function() {
				return this[prop];
			};

			obj['set' + camelized] = function(value) {
				var old = this['get' + camelized]();
				this[prop] = value;

				this.emit('set', [prop, value, old]);

				return this;
			};
		})(props[i], topo.utils.camelize(props[i]));
	}
};

topo.utils.eventize = function(obj) {
	obj.emit = function(ev, args, scope) {
		if(!this.__handlers || !this.__handlers[ev]) {
			return this;
		}

		this.__handlers[ev].forEach(function(handler) {
			handler.apply(scope, args);
		});

		return this;
	};

	obj.on = function(ev, handler) {
		this.__handlers = this.__handlers || {};
		this.__handlers[ev] = this.__handlers[ev] || [];
		this.__handlers[ev].push(handler);

		return this;
	};
};

topo.utils.configurize = function(obj) {
	obj.config = function(props) {
		for(var p in props) if(props.hasOwnProperty(p)) {
			this[p] = props[p];
		}
		return this;
	}
};

topo.utils.debounce = function(fn, delay, scope) {
    return function() {
        var args = arguments;

        clearTimeout(fn.lastExecution);

        fn.lastExecution = setTimeout(function() {
            fn.apply(scope, args);
        }, delay);
    }
};

topo.utils.extend = function(parent, subject) {
	subject.prototype = new parent;
	subject.prototype.constructor = subject;
	return subject;
};

if (!window.topo) window.topo = {};

topo.Editor = function(opts) {
    var
        self = this,
        element;

    opts = opts || {};

    if (!opts.element || typeof opts.element == 'string' && !document.getElementById(opts.element)) {
        throw new Error('Invalid canvas element');
    }

    if (typeof opts.element == 'string') {
        opts.element = document.getElementById(opts.element);
    }

    this.canvas = new fabric.Canvas(opts.element);

    this.setHeight(
        opts.height || this.canvas.CANVAS_HEIGHT
    );

    this.setWidth(
        opts.width || this.canvas.CANVAS_WIDTH
    );

    this.initEvents();

    // Limita los refresh consecutivos (performance)
    this.refresh = topo.utils.debounce(this.refresh, 0, this);

    // Limita los next consecutivos (bug fix)
    this.next = topo.utils.debounce(this.next, 150, this);

    this.refresh();

    this.on('change', function(attr, value) {
        self.onChange(attr, value);
    });
};

topo.Editor.prototype = {
    exec: function(method, args) {
        if (!args) {
            args = [];
        }

        if (!Array.isArray(args)) {
            args = [args];
        }

        if (this.canvas) {
            return this.canvas[method].apply(
                this.canvas,
                args
            );
        }

        if (method != 'refreshAll') {
            this.refresh();
        }

        return null;
    },
    /**
     * @return {topo.Editor}
     */
    refresh: function() {
        if (this.canvas.CANVAS_HEIGHT != this.getHeight()) {
            this.exec('setHeight', this.getHeight());
        }

        if (this.canvas.CANVAS_WIDTH != this.getWidth()) {
            this.exec('setWidth', this.getWidth());
        }

        fabric.log('Refreshing canvas');
        this.exec('renderAll');

        return this;
    },
    /**
     * @return {String}
     */
    serialize: function() {
        return this.exec('toDatalessJSON');
    },
    toDataURI: function() {
        this.exec('deactivateAll');
        return this.exec('toDataURL', 'png');
    },
    initEvents: function() {
        var
            self = this;

        this.on('set', function(prop, value, oldValue) {
            // Refrescamos el canvas
            self.refresh();
        });

        this.canvas.observe('object:selected', function(e) {
            var fabricObject = e.memo.target;

            if (self.canvas.getActiveGroup()) {
                return;
            }

            self.emit('selected', [fabricObject]);
        });


        this.canvas.observe('object:moving', topo.utils.debounce(function(e) {
            if (self.canvas.getActiveGroup()) {
                return;
            }

            if (!self.canvas.getActiveObject()) {
                return;
            }

            var fabricObject = e.memo.target;

            self.emit('selected', [fabricObject]);
        }, 50, this));

        this.canvas.observe('selection:cleared', function() {
            self.emit('selected:none');
        });
    },
    /**
     *
     * @param {String} text
     * @param {Object} opts
     * @return {fabric.Text}
     */
    text: function(text, opts) {
        opts = opts || {};

        var
            self = this,
            fabricObject = new fabric.Text(text || opts.text || '', {
                fill: '#000',
                fontFamily: Object.keys(CufonWebbie.getRegisteredFonts())[0],
                top: this.getCenterY(),
                left: this.getCenterX()

            });

        fabric.log(this.getCenterX(), this.getCenterY());

        if (opts.color) {
            fabricObject.set('fill', opts.color);
        }

        if (opts.fontFamily) {
            fabricObject.set('fontFamily', opts.fontFamily);
        }

        this.exec('add', fabricObject);
        this.refresh();
        this.setActiveObject(fabricObject);

        return fabricObject;
    },
    svg: function(file) {
        var
            self = this;

        fabric.loadSVGFromURL('/asset/svg/svg/' + file + '.svg', function(objects, options) {
            var fabricObject;

            if (objects.length > 1) {
                fabricObject = new fabric.PathGroup(objects, options);
            } else {
                fabricObject = objects[0];
            }

            fabricObject.set('top', self.getCenterY());
            fabricObject.set('left', self.getCenterX());
            fabricObject.set('angle', 0);

            if (self.getCenterX() > self.getCenterY()) {
                fabricObject.scaleToWidth(self.getCenterY());
            } else {
                fabricObject.scaleToHeight(self.getCenterX());
            }

            self.add(fabricObject);
            self.exec('calcOffset');
            self.refresh();
            self.setActiveObject(fabricObject);
        });
    },
    image: function(file) {
        var
            self = this;

        fabric.Image.fromURL(file, function(fabricObject) {
            fabricObject.set('top', self.getCenterY());
            fabricObject.set('left', self.getCenterX());
            fabricObject.set('angle', 0);

            if (self.getCenterX() > self.getCenterY()) {
                fabricObject.scaleToWidth(self.getCenterY());
            } else {
                fabricObject.scaleToHeight(self.getCenterX());
            }

            self.add(fabricObject);
            self.exec('calcOffset');
            self.refresh();
            self.setActiveObject(fabricObject);
        });
    },
    imageFromDataUri: function(dataUri) {
        var
            self = this,
            fabricObject = fabric.Image.fromDataURL(dataUri);

        fabricObject.set('top', this.getCenterY());
        fabricObject.set('left', this.getCenterX());
        fabricObject.set('angle', 0);

        if (this.getCenterX() > this.getCenterY()) {
            fabricObject.scaleToWidth(this.getCenterY());
        } else {
            fabricObject.scaleToHeight(this.getCenterX());
        }

        setTimeout(function () {
            self.add(fabricObject);
            self.exec('calcOffset');
            self.setActiveObject(fabricObject);
            self.refresh();
        }, 1000);

    },
    /**
     * TODO adelgazar
     *
     * @param data
     */
    shape: function(data) {
        var
            fabricObject,
            type;

        if (typeof data == 'string') {
            data = {
                type: data
            };
        }

        if (!fabric[data.type]) {
            fabric.warn('Invalid type: ' + data.type);
            return;
        }

        if (data.type == 'Circle') {
            return this.circle(data);
        }

        fabricObject = new fabric[data.type];

        if (data.strokeWidth) {
            fabricObject.set('strokeWidth', data.strokeWidth);
        }


        if (data.type == 'Rect') {
            fabricObject.set('fill', '#0F8311');
            fabricObject.set('stroke', '#0F8311');
        } else {
            if (data.type == 'Triangle') {
                fabricObject.set('fill', '#0D6FCE');
                fabricObject.set('stroke', '#0D6FCE');
            } else {
                fabricObject.set('fill', '#000000');
            }
        }

        if (data != 'Line') {
            fabricObject.set('height', this.getCenterY() * 2 / 3);
        }

        fabricObject.set('width', this.getCenterX() * 2 / 3);
        fabricObject.set('angle', 0);

        fabricObject.set('top', this.getCenterY());
        fabricObject.set('left', this.getCenterX());

        this.add(fabricObject);
        this.exec('calcOffset');
        this.refresh();
        this.setActiveObject(fabricObject);

    },
    circle: function(data) {
        data = data || {};

        var fabricObject = new fabric.Circle({
            left: data.left || this.getCenterX(),
            top: data.top || this.getCenterY(),
            strokeWidth: data.strokeWidth || 1,
            radius: data.radius || this.getCenterY() / 2,
            fill: data.fill || '#961111',
            stroke: data.stroke || '#961111'
        });

        this.add(fabricObject);
        this.exec('calcOffset');
        this.refresh();
        this.setActiveObject(fabricObject);
    },
    add: function(fabricObject) {
        this.exec('add', fabricObject);
        return this;
    },
    getCenterX: function() {
        return this.exec('getCenter').left;
    },
    getCenterY: function() {
        return this.exec('getCenter').top;
    },
    clear: function() {
        this.exec('dispose');
        return this;
    },
    remove: function(fabricObject) {
        this.exec('remove', fabricObject);
        return this;
    },
    item: function(index) {
        return this.exec('item', index);
    },
    getFromFabricObject: function(fabricObject) {
        return null;
    },
    getActive: function() {
        return this.canvas.getActiveObject() || this.canvas.getActiveGroup();
    },
    getActiveObject: function() {
        return this.canvas.getActiveObject();
    },
    /**
     * Trata de eliminar la seleccion
     *
     * @return {topo.Editor}
     */
    removeActive: function() {
        var
            canvas = this.canvas,
            obj, i, l, dirty;

        if (canvas.getActiveGroup()) {
            dirty = true;

            obj = canvas.getActiveGroup().objects;

            canvas.discardActiveGroup();

            for (i = 0,l = obj.length; i < l; i++) {
                canvas.remove(obj[i]);
            }
        }

        if (canvas.getActiveObject()) {
            dirty = true;
            canvas.remove(canvas.getActiveObject());
        }

        if (dirty) {
            this.refresh();
        }

        this.emit('selected:none');

        return this;
    },
    copyboard: null,
    /**
     * Clona y referencia el objeto activo
     * para futuros pastes
     *
     * @return {topo.Editor}
     */
    copyActive: function() {
        var
            canvas = this.canvas;

        if (canvas.getActiveObject()) {
            this.copyboard = canvas.getActiveObject();
        }

        return this;
    },
    /**
     * Clona y pega el elemento del clipboard
     * si es que existiera
     *
     * @return {topo.Editor}
     */
    paste: function() {
        if (!this.copyboard) {
            return this;
        }

        var copy = this.copyboard.clone();

        copy.set('top', copy.top + 5);
        copy.set('left', copy.left + 5);

        this.exec('deactivateAll');
        this.exec('add', copy);
        this.setActiveObject(copy);

        return this;
    },
    onChange: function(attr, value) {
        var canvas = this.canvas,
            activeObject,
            self = this;

        activeObject = canvas.getActiveObject();

        if (!activeObject) {
            return;
        }

        switch (attr) {
            case 'angle':
                activeObject.setAngle(value);
                break;
            case 'height':
                activeObject.scaleToHeight(value);
                break;
            case 'width':
                activeObject.scaleToWidth(value);
                break;
            case 'opacity':
                activeObject.setOpacity(value);
                break;
            default:
                activeObject.set(attr, value);
        }

        this.refresh();

        setTimeout(function() {
            self.emit('selected', [activeObject]);
        }, 0);

    },
    up: function(px) {
        var
            fabricObject = this.getActive();

        if (!fabricObject) {
            return;
        }

        px = px || 1;

        fabricObject.set('top', fabricObject.get('top') - px);

        this.refresh();
        this.emit('selected', [fabricObject]);
    },
    down: function(px) {
        var
            fabricObject = this.getActive();

        if (!fabricObject) {
            return;
        }

        px = px || 1;

        fabricObject.set('top', fabricObject.get('top') + px);

        this.refresh();
        this.emit('selected', [fabricObject]);
    },
    left: function(px) {
        var
            fabricObject = this.getActive();

        if (!fabricObject) {
            return;
        }

        px = px || 1;

        fabricObject.set('left', fabricObject.get('left') - px);

        this.refresh();
        this.emit('selected', [fabricObject]);
    },
    right: function(px, emit) {
        var
            fabricObject = this.getActive();

        if (!fabricObject) {
            return;
        }

        px = px || 1;

        fabricObject.set('left', fabricObject.get('left') + px);

        this.refresh();
        this.emit('selected', [fabricObject]);
    },
    toFront: function() {
        var
            fabricObject = this.getActive(),
            canvas = this.canvas;

        if (!fabricObject) {
            return;
        }

        canvas.bringToFront(fabricObject);

        this.refresh();
        this.emit('selected', [fabricObject]);
    },
    toBack: function() {
        var
            fabricObject = this.getActive(),
            canvas = this.canvas;

        if (!fabricObject) {
            return;
        }

        canvas.sendToBack(fabricObject);

        this.refresh();
        this.emit('selected', [fabricObject]);
    },
    next: function() {
        var
            canvas = this.canvas,
            objects = canvas._objects,
            active = this.getActive(),
            activeIndex;

        // Si no hay elemento seleccionado
        if (!active) {
            this.setItemActive(0);
            return;
        }

        activeIndex = objects.indexOf(active);

        // Si es un path group
        if (activeIndex == -1) {
            this.setItemActive(0);
            return;
        }

        // Si es el ultimo elemento
        if (!objects[activeIndex + 1]) {
            this.setItemActive(0);
        }

        // Next!
        this.setItemActive(activeIndex + 1);
    },
    setActiveObject: function(item) {
        this.exec('setActiveObject', item);
        return this;
    },
    setItemActive: function(index) {
        var
            canvas = this.canvas,
            objects = canvas._objects;

        index = index || 0;

        this.exec('deactivateAll');

        if (!objects[index]) {
            if (objects[0]) {
                canvas.setActiveObject(objects[0]);
            }

            return;
        }

        this.setActiveObject(objects[index]);
        return this;
    },
    open: function(serialized) {
        this.canvas.loadFromJSON(serialized);
        this.refresh();
    }
};

topo.Editor.__attrs = [
    'element',
    'height',
    'width',
    'backgroundColor'
];

topo.utils.xetterize(topo.Editor.prototype, topo.Editor.__attrs);
topo.utils.eventize(topo.Editor.prototype);
topo.utils.configurize(topo.Editor.prototype);

/*
 * fabricMode iwage.mode(iwage.MODES.FABRIC)
 */

(function(fabricMode) {
    /**
     * @param {Object} options
     */
    fabricMode.start = function(options) {
        setTimeout(function() {
            fabricMode.initTopo(options);
            fabricMode.start = function() {
            };
        }, 0);

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