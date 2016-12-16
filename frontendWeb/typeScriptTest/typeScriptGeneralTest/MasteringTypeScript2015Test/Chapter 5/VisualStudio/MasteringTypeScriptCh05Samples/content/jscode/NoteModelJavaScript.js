var Note = Backbone.Model.extend(
    {
        initialize: function() {
            alert("Note Model JavaScript initialize"); 
        },
        author: function () { },
        coordinates: function () { },
        allowedToEdit: function(account) {
            return true;
        }
    }
);