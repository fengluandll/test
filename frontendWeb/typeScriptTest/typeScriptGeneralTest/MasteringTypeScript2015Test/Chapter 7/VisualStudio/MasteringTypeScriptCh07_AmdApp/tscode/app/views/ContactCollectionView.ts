import cm = require("../models/ContactModel");
import civ = require("./ContactItemView");

export class ContactCollectionView extends Backbone.View<Backbone.Model> {
    constructor(options?: any) {
        super(options);
        _.bindAll(this, 'renderChildItem');
    }

    render(): ContactCollectionView {
        this.collection.each(this.renderChildItem);
        return this;
    }        
    renderChildItem(element: Backbone.Model, index: number) {
        var itemView = new civ.ContactItemView({ model: element });
        this.$el.append(itemView.render().$el);
    }
}