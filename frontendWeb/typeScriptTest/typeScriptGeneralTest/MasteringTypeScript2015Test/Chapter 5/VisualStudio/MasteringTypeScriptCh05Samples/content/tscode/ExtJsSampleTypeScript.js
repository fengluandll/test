Ext.application({
    name: 'SampleApp',
    appFolder: '/code/sample',
    controllers: ['SampleController'],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [{
                xtype: 'panel',
                title: 'Sample App',
                html: 'This is a Sample Viewport'
            }]
        });
    }
});
Ext.application({});
//# sourceMappingURL=ExtJsSampleTypeScript.js.map