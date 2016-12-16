require.config(
    {
        baseUrl: "../../",
        paths: {
            'jasmine': '/Scripts/jasmine/jasmine',
            'jasmine-html': '/Scripts/jasmine/jasmine-html',
            'jasmine-boot': '/Scripts/jasmine/boot',
            'underscore' : '/Scripts/underscore',
            'backbone': '/Scripts/backbone',
            'jquery': '/Scripts/jquery-2.1.1',
            'text': '/Scripts/text',
            'tinyioc': '/tscode/app/TypeScriptTinyIoC',
            'snippetservice': '/tscode/app/services/SnippetService'
        },
        shim: {
            underscore: {
                exports: '_'
            },
            backbone : {
                deps: ['underscore'],
                exports: 'Backbone'
            },
            'jasmine' : {
                exports: 'window.jasmineRequire'
            },
            'jasmine-html': {
                deps : ['jasmine'],
                exports: 'window.jasmineRequire'
            },
            'jasmine-boot': {
                deps : ['jasmine-html', 'backbone'],
                exports: 'window.jasmineRequire'
            }
        }
    }
);

var specs = [
    'tscode/tests/models/ContactModelTests',
    'tscode/tests/models/ContactCollectionTests',
    'tscode/tests/views/ContactItemViewTests',
    'tscode/tests/views/ContactCollectionViewTests',
    'tscode/tests/BasicObject',
    'tscode/tests/InterfaceCheckerTests',
    'tscode/tests/services/SnippetServiceTests',
    'tscode/tests/events/ErrorEventTests',
    'tscode/tests/EventHandlerTests'
];

require(
    ['jasmine-boot', 'tinyioc', 'snippetservice',
     'text!/tscode/app/views/ContactItemView.html'],
    (jb, tinyioc, snippetservice, contactItemSnippet) => {
        var snippetService = new SnippetService();
        snippetService.storeSnippet(SnippetKey.CONTACT_ITEM_SNIPPET, contactItemSnippet);
        TypeScriptTinyIoC.register(snippetService, IISnippetService);
        require(specs, () => {
            (<any>window).onload();
        });
    }
);

