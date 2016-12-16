import cm = require("../models/ContactModel");
import iee = require("../events/ErrorEvent");

export class ContactItemView extends Backbone.View<cm.ContactModel> {
    template: (properties?: any) => string;
    constructor(options?: any) {

        var contactItemSnippet = "";
        var snippetService: ISnippetService =
            TypeScriptTinyIoC.resolve(IISnippetService);
        try {
            contactItemSnippet = snippetService.retrieveSnippet(
                SnippetKey.CONTACT_ITEM_SNIPPET);
        } catch (err) {
            contactItemSnippet = "There was an error loading CONTACT_ITEM_SNIPPET";
        }

        this.className = "contact-item-view";
        this.events = <any>{ 'click': this.onClicked };
        this.template = _.template(contactItemSnippet);
        
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
        var errorEvent = new iee.ErrorEvent("Dummy error message", this.model.Name);
        TypeScriptTinyIoC.raiseEvent(errorEvent, iee.IIErrorEvent);
    }
}

