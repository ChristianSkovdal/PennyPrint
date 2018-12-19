Ext.define('PennyPrint.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',

    requires: [
        'Ext.MessageBox',
        'PennyPrint.view.MainController',
        'PennyPrint.view.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    html: 'Hello, world!'
});
