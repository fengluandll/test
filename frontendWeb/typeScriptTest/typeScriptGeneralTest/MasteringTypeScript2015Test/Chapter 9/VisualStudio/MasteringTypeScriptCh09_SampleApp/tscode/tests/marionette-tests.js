var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Marionette;
(function (Marionette) {
    var Tests;
    (function (Tests) {
        var DestroyWarn = (function (_super) {
            __extends(DestroyWarn, _super);
            function DestroyWarn() {
                _super.apply(this, arguments);
                // you can set default options
                // just like you can in your Backbone Models
                // they will be overriden if you pass in an option with the same key
                this.defaults = {
                    "message": "you are destroying!"
                };
                // behaviors have events that are bound to the views DOM
                this.events = {
                    "click @ui.destroy": "warnBeforeDestroy"
                };
            }
            DestroyWarn.prototype.warnBeforeDestroy = function () {
                alert(this.options.message);
                // every Behavior has a hook into the
                // view that it is attached to
                this.view.destroy();
            };
            return DestroyWarn;
        })(Marionette.Behavior);
        Marionette.Behaviors.getBehaviorClass = function (options, key) {
            if (key === "DestroyWarn")
                return DestroyWarn;
            return undefined;
        };
        var MyRouter = (function (_super) {
            __extends(MyRouter, _super);
            function MyRouter() {
                _super.apply(this, arguments);
                // "someMethod" must exist at controller.someMethod
                this.appRoutes = {
                    "some/route": "someMethod"
                };
                /* standard routes can be mixed with appRoutes/Controllers above */
                this.routes = {
                    "some/otherRoute": "someOtherMethod"
                };
            }
            MyRouter.prototype.someOtherMethod = function () {
                // do something here.
            };
            return MyRouter;
        })(Marionette.AppRouter);
        var MyApplication = (function (_super) {
            __extends(MyApplication, _super);
            function MyApplication() {
                _super.apply(this, arguments);
            }
            MyApplication.prototype.initialize = function (options) {
                console.log("initializing application");
                this.layoutView = new AppLayoutView();
            };
            MyApplication.prototype.onStart = function () {
                this.mainRegion = new Marionette.Region({ el: '#main' });
                this.layoutView.addRegion('main', this.mainRegion);
                this.layoutView.render();
            };
            return MyApplication;
        })(Marionette.Application);
        var AppLayoutView = (function (_super) {
            __extends(AppLayoutView, _super);
            function AppLayoutView() {
                _super.call(this, { el: 'body' });
            }
            AppLayoutView.prototype.template = function () {
                return "<div id='main'></div>";
            };
            AppLayoutView.prototype.initialize = function (options) {
                console.log("initializing layoutview");
            };
            return AppLayoutView;
        })(Marionette.LayoutView);
        var MyModel = (function (_super) {
            __extends(MyModel, _super);
            function MyModel(options) {
                _super.call(this, options);
            }
            MyModel.prototype.getName = function () {
                return this.get('name');
            };
            MyModel.prototype.setName = function (value) {
                this.set(value);
            };
            return MyModel;
        })(Backbone.Model);
        var MyView = (function (_super) {
            __extends(MyView, _super);
            function MyView(model) {
                this.ui = {
                    destroy: '.destroy'
                };
                this.behaviors = {
                    DestroyWarn: {
                        message: 'hello'
                    }
                };
                _super.call(this, { model: model });
            }
            MyView.prototype.template = function () {
                return '<h1>' + this.model.getName() + '</h1> <button class="destroy">Destroy Me</button>';
            };
            return MyView;
        })(Marionette.ItemView);
        ;
        var MainRegion = (function (_super) {
            __extends(MainRegion, _super);
            function MainRegion() {
                this.el = '#main';
                _super.call(this);
            }
            return MainRegion;
        })(Marionette.Region);
        var MyObject = (function (_super) {
            __extends(MyObject, _super);
            function MyObject() {
                this.name = 'Adam';
                this.options = {
                    name: 'Foo'
                };
                _super.call(this);
                this.on("before:destroy", function () {
                    console.log("before:destroy");
                });
            }
            MyObject.prototype.onBeforeDestroy = function (arg) {
                console.log("in onBeforeDestroy with arg " + arg);
            };
            return MyObject;
        })(Marionette.Object);
        var MyRegion = (function (_super) {
            __extends(MyRegion, _super);
            function MyRegion() {
                this.el = '#main-nav';
                _super.call(this);
            }
            return MyRegion;
        })(Marionette.Region);
        var MyJQueryRegion = (function (_super) {
            __extends(MyJQueryRegion, _super);
            function MyJQueryRegion() {
                this.el = $('#main-nav');
                _super.call(this);
            }
            return MyJQueryRegion;
        })(Marionette.Region);
        var MyHtmlElRegion = (function (_super) {
            __extends(MyHtmlElRegion, _super);
            function MyHtmlElRegion() {
                this.el = document.querySelector("body");
                _super.call(this);
            }
            return MyHtmlElRegion;
        })(Marionette.Region);
        var MyCollectionView = (function (_super) {
            __extends(MyCollectionView, _super);
            function MyCollectionView() {
                this.childView = MyView;
                this.childEvents = {
                    render: function () {
                        console.log("a childView has been rendered");
                    }
                };
                this.childViewOptions = function (model, index) {
                    // do some calculations based on the model
                    return {
                        foo: "bar",
                        childIndex: index
                    };
                };
                this.childViewOptions = {
                    foo: "bar"
                };
                this.childViewEventPrefix = "some:prefix";
                _super.call(this);
                this.on('some:prefix:render', function () {
                });
            }
            return MyCollectionView;
        })(Marionette.CollectionView);
        Tests.app;
        function ApplicationTests() {
            Tests.app = new MyApplication();
            Tests.app.start();
            var view = new MyView(new MyModel());
            Tests.app.mainRegion.show(view);
        }
        function ObjectTests() {
            var obj = new MyObject();
            console.log(obj.getOption('name'));
            obj.destroy("goodbye");
        }
        function RegionManagerTests() {
            var rm = new Marionette.RegionManager();
            rm.addRegions({
                contentRegion: {
                    el: '#content',
                    regionClass: MainRegion
                },
                navigationRegion: {
                    el: '#navigation',
                    regionClass: MainRegion,
                    // Options passed to instance of `MyOtherRegion` for
                    // the `navigationRegion` on `App`
                    navigationOption: 42,
                    anotherNavigationOption: 'foo'
                },
                footerRegion: {
                    regionClass: MainRegion,
                    someOption: 42,
                    someValue: 'value'
                }
            });
        }
        function RegionTests() {
            var myView = new MyView(new MyModel());
            // render and display the view
            Tests.app.mainRegion.show(myView);
            // empties the current view
            Tests.app.mainRegion.empty();
            myView = new MyView(new MyModel());
            Tests.app.mainRegion.show(myView, { preventDestroy: true, forceShow: true, triggerAttach: true, triggerBeforeAttach: false });
            var hasView = Tests.app.mainRegion.hasView();
            Tests.app.mainRegion.reset();
            Marionette.Region.prototype.attachHtml = function (view) {
                this.$el.empty().append(view.el);
            };
            myView = new Marionette.View({
                el: $("#existing-view-stuff")
            });
            Tests.app.mainRegion.attachView(myView);
            Tests.app.mainRegion.on("empty", function (view, region, options) {
                // manipulate the `view` or do something extra
                // with the `region`
                // you also have access to the `options` that were passed to the Region.show call
            });
        }
        function CollectionViewTests() {
            var cv = new MyCollectionView();
            cv.collection.add(new MyModel());
            Tests.app.mainRegion.attachView(cv);
        }
        var MyController = (function (_super) {
            __extends(MyController, _super);
            function MyController() {
                _super.apply(this, arguments);
            }
            return MyController;
        })(Marionette.Controller);
        function AppRouterTests() {
            var myController = new MyController();
            var router = new MyRouter();
            router.appRoute("/foo", "fooThat");
            router.processAppRoutes(myController, {
                "foo": "doFoo",
                "bar/:id": "doBar"
            });
        }
    })(Tests = Marionette.Tests || (Marionette.Tests = {}));
})(Marionette || (Marionette = {}));
//# sourceMappingURL=marionette-tests.js.map