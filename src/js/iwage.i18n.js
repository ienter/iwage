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

