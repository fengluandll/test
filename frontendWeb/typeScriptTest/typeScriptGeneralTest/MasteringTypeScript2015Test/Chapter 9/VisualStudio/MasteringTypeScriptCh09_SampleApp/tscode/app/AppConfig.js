require.config({
    baseUrl: "../../",
    paths: {
        'underscore': '/Scripts/underscore',
        'backbone': '/Scripts/backbone',
        'jquery': '/Scripts/jquery-2.1.3',
        'bootstrap': '/Scripts/bootstrap',
        'text': '/Scripts/text',
        'jqueryui': '/Scripts/jquery-ui-1.11.2',
        'jqueryflip': '/Scripts/jquery.flip',
        'tinyioc': '/tscode/app/services/TypeScriptTinyIoC',
        'snippetservice': '/tscode/app/services/SnippetService',
        'marionette': '/Scripts/backbone.marionette',
        'BoardSalesApp': '/tscode/app/BoardSalesApp'
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
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        bootstrap: {
            deps: ['jquery'],
        },
        BoardSalesApp: {
            deps: ['marionette', 'bootstrap', 'jqueryflip']
        }
    }
});
require([
    'BoardSalesApp',
    'tinyioc',
    'snippetservice',
    'text!/tscode/app/views/PageViewLayout.html',
    'text!/tscode/app/views/FilterModelViewSnippet.html',
    'text!/tscode/app/views/BoardViewSnippet.html',
    'text!/tscode/app/views/BoardSizeMiniViewSnippet.html',
    'text!/tscode/app/views/BoardDetailViewSnippet.html',
    'text!/tscode/app/views/BoardSizeViewSnippet.html'
], function (app, tinyioc, snippetservice, pageViewLayoutSnippet, filterModelViewSnippet, boardViewSnippet, bsMiniViewSnippet, boardDetailViewSnippet, boardSizeViewSnippet) {
    var snippetService = new SnippetService();
    snippetService.storeSnippet(0 /* PAGE_VIEW_LAYOUT_SNIPPET */, pageViewLayoutSnippet);
    snippetService.storeSnippet(1 /* FILTER_MODEL_VIEW_SNIPPET */, filterModelViewSnippet);
    snippetService.storeSnippet(2 /* BOARD_VIEW_SNIPPET */, boardViewSnippet);
    snippetService.storeSnippet(3 /* BOARD_SIZE_MINI_VIEW_SNIPPET */, bsMiniViewSnippet);
    snippetService.storeSnippet(4 /* BOARD_DETAIL_VIEW_SNIPPET */, boardDetailViewSnippet);
    snippetService.storeSnippet(5 /* BOARD_SIZE_VIEW_SNIPPET */, boardSizeViewSnippet);
    TypeScriptTinyIoC.register(snippetService, IISnippetService);
    var boardSalesApp = new app.BoardSalesApp();
    boardSalesApp.start();
});
//# sourceMappingURL=AppConfig.js.map