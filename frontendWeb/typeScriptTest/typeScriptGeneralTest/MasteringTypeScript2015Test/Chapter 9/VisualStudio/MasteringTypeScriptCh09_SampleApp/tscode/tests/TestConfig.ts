require.config(
    {
        baseUrl: "../../",
        paths: {
            'underscore': '/Scripts/underscore',
            'backbone': '/Scripts/backbone',
            'jquery': '/Scripts/jquery-2.1.3',
            'bootstrap': '/Scripts/bootstrap',
            'text': '/Scripts/text',
			'jasmine': '/Scripts/jasmine/jasmine',
            'jasmine-html': '/Scripts/jasmine/jasmine-html',
            'jasmine-boot': '/Scripts/jasmine/boot',
            //'jqueryui': '/Scripts/jquery-ui-1.11.2',
            //'jqueryflip': '/Scripts/jquery.flip',
            'tinyioc': '/tscode/app/services/TypeScriptTinyIoC',
            'snippetservice': '/tscode/app/services/SnippetService'
			, 'marionette': '/Scripts/backbone.marionette'
			, 'BoardSalesApp': '/tscode/app/BoardSalesApp'
			//,'notify': '/Scripts/notify-custom'
        },
        shim: {
            underscore: {
                exports: '_'
            },
            backbone: {
                deps: ['underscore'],
                exports: 'Backbone'
            }
            , jqueryui: {
                deps: ['jquery']
            }
            , jqueryflip: {
                deps: ['jqueryui'],
                exports: '$'
            }
            , notify: {
                deps: ['jquery'],
                exports: '$'
            }
			, marionette: {
				deps: ['backbone'],
				exports: 'Marionette'
			}
			, bootstrap: {
				deps: ['jquery'],
			}
            , BoardSalesApp: {
                deps: ['marionette'
                    , 'bootstrap']
            },
			'jasmine': {
                exports: 'window.jasmineRequire'
            },
            'jasmine-html': {
                deps: ['jasmine'],
                exports: 'window.jasmineRequire'
            },
            'jasmine-boot': {
                deps: ['jasmine-html', 'backbone'],
                exports: 'window.jasmineRequire'
            }
        }
    }
	);


var specs = [
    'tscode/tests/models/BoardModelTests'
    , 'tscode/tests/models/FilterModelTests'
	, 'tscode/tests/state/AllStatesTests'
];


require(['jasmine-boot',
    'BoardSalesApp', 'tinyioc', 'snippetservice'
	, 'text!/tscode/app/views/PageViewLayout.html'
],( jb,app, tinyioc, snippetservice, pageViewLayoutSnippet) => {

		var snippetService = new SnippetService();
        snippetService.storeSnippet(SnippetKey.PAGE_VIEW_LAYOUT_SNIPPET, pageViewLayoutSnippet);
        TypeScriptTinyIoC.register(snippetService, IISnippetService);

		require(specs,() => {
			(<any>window).onload();
		});

	});

