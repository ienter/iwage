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
