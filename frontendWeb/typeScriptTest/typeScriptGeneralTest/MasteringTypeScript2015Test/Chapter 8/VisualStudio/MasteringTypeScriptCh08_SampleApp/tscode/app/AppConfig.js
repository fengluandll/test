require.config({
    baseUrl: "../../",
    paths: {
        'underscore': '/Scripts/underscore',
        'backbone': '/Scripts/backbone',
        'jquery': '/Scripts/jquery-2.1.1',
        'ContactViewApp': '/tscode/app/ContactViewApp',
        'text': '/Scripts/text',
        'jqueryui': '/Scripts/jquery-ui-1.11.2',
        'jqueryflip': '/Scripts/jquery.flip',
        'tinyioc': '/tscode/app/TypeScriptTinyIoC',
        'snippetservice': '/tscode/app/services/SnippetService',
        'notify': '/Scripts/notify-custom'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore'],
            exports: 'Backbone'
        },
        jqueryui: {
            deps: ['jquery']
        },
        jqueryflip: {
            deps: ['jqueryui'],
            exports: '$'
        },
        notify: {
            deps: ['jquery'],
            exports: '$'
        },
        ContactViewApp: {
            deps: ['backbone', 'jqueryflip', 'notify']
        }
    }
});
require([
    'ContactViewApp',
    'tinyioc',
    'snippetservice',
    'text!/tscode/app/views/ContactItemView.html'
], function (app, tinyioc, snippetservice, contactItemSnippet) {
    var snippetService = new SnippetService();
    snippetService.storeSnippet(0 /* CONTACT_ITEM_SNIPPET */, contactItemSnippet);
    TypeScriptTinyIoC.register(snippetService, IISnippetService);
    var appInstance = new app.ContactViewApp();
    appInstance.run();
});
//# sourceMappingURL=AppConfig.js.map