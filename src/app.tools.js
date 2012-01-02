// Herramientas activas (visibles)
app.tools.active = [];

app.tools.launch = function (toolName, options) {
    var tool;

    toolName = 'app.' + app.getMode().toLowerCase() + '.tools.' + toolName;

    app.log('Tool: ' + toolName);

    // Eliminamos las herramientas volatiles
    app.tools.clear();

    options = Ext.apply({
        dataUri: app.file.getDataUri(),
        width: app.file.getWidth(),
        height: app.file.getHeight(),
        tool: tool
    }, options || {});

    tool = Ext.create(toolName, options);

    if (tool.unique) {
        app.tools.clearByType(tool.$className);
    }

    tool.use(options);

    app.tools.active.push(tool);

    return tool;
};

app.tools.launcher = function (tool, options) {
    return function () {
        app.tools.launch(tool, options);
    }
};

/**
 * Mata las herramientas activas NO PERSISTENTES
 */
app.tools.clear = function () {
    var actives = app.tools.active;
    for (var i = 0, l = actives.length; i < l; i++) {
        if (!actives[i].persist) {
            actives[i].destroy();
            actives.splice(i, 1);
        }
    }

    app.exec('tools.onClear');
};

/**
 * Mata las herramientas activas NO PERSISTENTES
 */
app.tools.clearByType = function (className) {
    var actives = app.tools.active;

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

app.tools.getByType = function (className) {
    var actives = app.tools.active;
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

app.tools.setMode = function (mode) {
    var actives = app.tools.active;
    for (var i = 0, l = actives.length; i < l; i++) {
        if (!actives[i].mode) {
            // Toda tool deberia tener un modo
            app.warn('Modeless tool: ' + actives[i].$className);
            continue;
        }

        if (actives[i].onModeChanged) {
            actives[i].onModeChanged(mode);
            continue;
        }

        if (actives[i].mode != app.getMode()) {
            actives[i].hide();
        } else {
            actives[i].show();
        }
    }
};

app.tools.getStatic = function () {
    var components = [];

    // TODO mover a cada modo
    app.tools.active = app.tools.active.concat([
        //Ext.create('app.fabric.tools.ImageEditionReady'),
        Ext.create('app.fabric.tools.EditImage'),
        Ext.create('app.fabric.tools.ImageEditionReady'),
        Ext.create('app.image.tools.FabricImageReady'),
        Ext.create('app.image.tools.EditAsFabric'),

        Ext.create('app.image.tools.Zoom'),

        Ext.create('app.fabric.tools.Position'),
        Ext.create('app.fabric.tools.Appearance')
    ]);

    Ext.each(app.tools.active, function (current, index) {
        components.push(current.getComponent());

        if (current.mode != app.getMode()) {
            current.hide();
        }
    });

    return components;
};
