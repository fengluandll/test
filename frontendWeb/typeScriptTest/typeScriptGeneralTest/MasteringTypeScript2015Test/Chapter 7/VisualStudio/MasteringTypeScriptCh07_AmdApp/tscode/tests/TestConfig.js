require.config({
    baseUrl: "../../",
    paths: {
        'jasmine': '/Scripts/jasmine/jasmine',
        'jasmine-html': '/Scripts/jasmine/jasmine-html',
        'jasmine-boot': '/Scripts/jasmine/boot',
        'underscore': '/Scripts/underscore',
        'backbone': '/Scripts/backbone',
        'jquery': '/Scripts/jquery-2.1.1',
        'text': '/Scripts/text'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore'],
            exports: 'Backbone'
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
});
var specs = [
    'tscode/tests/models/ContactModelTests',
    'tscode/tests/models/ContactCollectionTests',
    'tscode/tests/views/ContactItemViewTests',
    'tscode/tests/views/ContactCollectionViewTests'
];
var CONTACT_ITEM_SNIPPET = "";
require(['jasmine-boot', 'text!/tscode/app/views/ContactItemView.html'], function (jb, contactItemSnippet) {
    CONTACT_ITEM_SNIPPET = contactItemSnippet;
    require(specs, function () {
        window.onload();
    });
});
//# sourceMappingURL=TestConfig.js.map