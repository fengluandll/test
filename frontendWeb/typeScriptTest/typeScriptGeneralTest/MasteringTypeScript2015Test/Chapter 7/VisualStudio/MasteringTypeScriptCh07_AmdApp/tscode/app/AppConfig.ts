require.config(
    {
        baseUrl: "../../",
        paths: {
            'underscore': '/Scripts/underscore',
            'backbone': '/Scripts/backbone',
            'jquery': '/Scripts/jquery-2.1.1',
            'ContactViewApp': '/tscode/app/ContactViewApp',
            'text': '/Scripts/text',
            'jqueryui': '/Scripts/jquery-ui-1.11.2',
            'jqueryflip' : '/Scripts/jquery.flip'
        },
        shim: {
            underscore: {
                exports: '_'
            },
            backbone: {
                deps: ['underscore'],
                exports: 'Backbone'
            }
            ,jqueryui: {
                deps: ['jquery']
            }
            ,jqueryflip: {
                deps: ['jqueryui'],
                exports: '$'
            }
            ,ContactViewApp: {
                deps: ['backbone'
                    , 'jqueryflip'
                ]
            }
        }
    }
);

var CONTACT_ITEM_SNIPPET = "";

require([
    'ContactViewApp',
    'text!/tscode/app/views/ContactItemView.html'
    ], (app, contactItemSnippet) => {

    CONTACT_ITEM_SNIPPET = contactItemSnippet;
    var appInstance = new app.ContactViewApp();
    appInstance.run();
});

