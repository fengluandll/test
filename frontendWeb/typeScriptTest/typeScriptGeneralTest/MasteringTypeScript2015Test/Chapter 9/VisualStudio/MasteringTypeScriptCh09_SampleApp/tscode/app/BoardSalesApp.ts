import pvl = require('../../tscode/app/views/PageViewLayout');
import bm = require('../../tscode/app/models/BoardModels');
import fm = require('../../tscode/app/models/FilterModels');
import ev = require('../../tscode/app/events/BoardAppEvents');

export class BoardSalesApp extends Marionette.Application {
	viewLayout: pvl.PageViewLayout;
	_manufCollection: bm.ManufacturerCollection;
	
	constructor(options?: any) {
		if (!options)
			options = {};
		super();
		_.bindAll(this, 'CollectionLoaded');
		_.bindAll(this, 'CollectionLoadError');
		this.viewLayout = new pvl.PageViewLayout();
	}

	onStart() {
		this.viewLayout.render();
		this._manufCollection = new bm.ManufacturerCollection();
		TypeScriptTinyIoC.register(this._manufCollection, 
            bm.IIManufacturerCollection);
		TypeScriptTinyIoC.register(this._manufCollection,
            fm.IIFilterProvider);
		this._manufCollection.fetch({ 
            success: this.CollectionLoaded, 
            error: this.CollectionLoadError });
	}

	CollectionLoaded() {
		TypeScriptTinyIoC.raiseEvent(new ev.NotifyEvent(ev.EventType.ManufacturerDataLoaded), 
            ev.IINotifyEvent);
	}

	CollectionLoadError(err) {
		TypeScriptTinyIoC.raiseEvent(new ev.ErrorEvent(err), ev.IIErrorEvent);
	}
}

