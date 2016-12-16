var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BoardSalesApp23 = (function (_super) {
    __extends(BoardSalesApp23, _super);
    function BoardSalesApp23() {
        _super.apply(this, arguments);
    }
    //mainRegion: Marionette.Region;
    //layoutView: App
    BoardSalesApp23.prototype.initialize = function (options) {
        this.mainView = new MainViewLayout23();
    };
    BoardSalesApp23.prototype.onStart = function () {
        //this.mainRegion = new Marionette.Region({ el: '#contentRegion' });
        //this.mainView.addRegion('main', this.mainRegion);
        this.mainView.render();
        this.mainView.renderSecondRegion();
    };
    return BoardSalesApp23;
})(Marionette.Application);
var MainViewLayout23 = (function (_super) {
    __extends(MainViewLayout23, _super);
    //el = 'body';
    function MainViewLayout23(options) {
        if (!options)
            options = {};
        options.el = '#contentRegion';
        options.template = "#main_layout_template";
        _super.call(this, options);
        this.addRegions({ testRegionSecond: "#testRegionSecond" });
    }
    MainViewLayout23.prototype.renderSecondRegion = function () {
        this.testRegionSecond.show(new SecondRegionView());
    };
    return MainViewLayout23;
})(Marionette.LayoutView);
var SecondRegionView = (function (_super) {
    __extends(SecondRegionView, _super);
    function SecondRegionView(options) {
        if (!options)
            options = {};
        options.template = "#testRegionTemplate";
        _super.call(this, options);
    }
    return SecondRegionView;
})(Marionette.ItemView);
//# sourceMappingURL=BoardSalesApp23.js.map