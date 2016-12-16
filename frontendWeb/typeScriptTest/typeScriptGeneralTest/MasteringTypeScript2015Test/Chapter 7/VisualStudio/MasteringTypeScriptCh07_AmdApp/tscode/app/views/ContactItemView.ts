import cm = require("../models/ContactModel");

export class ContactItemView extends Backbone.View<cm.ContactModel> {
    template: (properties?: any) => string;
    constructor(options?: any) {
        this.className = "contact-item-view";
        this.events = <any>{ 'click': this.onClicked };
        this.template = _.template(CONTACT_ITEM_SNIPPET);
        super(options);
    }

    render(): ContactItemView {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

    onClicked() {
        this.$el.flip({
            direction: 'tb',
            speed : 200
        });
    }
}

