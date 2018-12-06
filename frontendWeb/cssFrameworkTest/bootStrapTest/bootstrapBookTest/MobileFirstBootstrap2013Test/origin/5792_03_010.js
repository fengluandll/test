$('form').on('submit', function(e){
    var action = e.target.action;
    var name = $('input[name]').val();
    var $self = $(this);
    $.post(action,{name: name},function(data, status){
        if(status=='success'){
             $self.append('<p> success </p>');
        }
    });
    return false;
});