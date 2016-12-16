var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../../tscode/app/views/PageViewLayout', '../../tscode/app/models/BoardModels', '../../tscode/app/models/FilterModels', '../../tscode/app/events/BoardAppEvents'], function (require, exports, pvl, bm, fm, ev) {
    var BoardSalesApp = (function (_super) {
        __extends(BoardSalesApp, _super);
        function BoardSalesApp(options) {
            if (!options)
                options = {};
            _super.call(this);
            _.bindAll(this, 'CollectionLoaded');
            _.bindAll(this, 'CollectionLoadError');
            this.viewLayout = new pvl.PageViewLayout();
        }
        BoardSalesApp.prototype.onStart = function () {
            this.viewLayout.render();
            this._manufCollection = new bm.ManufacturerCollection();
            TypeScriptTinyIoC.register(this._manufCollection, bm.IIManufacturerCollection);
            TypeScriptTinyIoC.register(this._manufCollection, fm.IIFilterProvider);
            this._manufCollection.fetch({
                success: this.CollectionLoaded,
                error: this.CollectionLoadError
            });
        };
        BoardSalesApp.prototype.CollectionLoaded = function () {
            TypeScriptTinyIoC.raiseEvent(new ev.NotifyEvent(0 /* ManufacturerDataLoaded */), ev.IINotifyEvent);
        };
        BoardSalesApp.prototype.CollectionLoadError = function (err) {
            TypeScriptTinyIoC.raiseEvent(new ev.ErrorEvent(err), ev.IIErrorEvent);
        };
        return BoardSalesApp;
    })(Marionette.Application);
    exports.BoardSalesApp = BoardSalesApp;
});
//# sourceMappingURL=BoardSalesApp.js.map