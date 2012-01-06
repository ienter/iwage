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