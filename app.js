Ext.application({
    name: 'PennyPrint',

    extend: 'Ext.app.Application',

    launch: function () {

    },

    requires: [
        'PennyPrint.view.Main'
    ],

    mainView: 'PennyPrint.view.Main'
});
