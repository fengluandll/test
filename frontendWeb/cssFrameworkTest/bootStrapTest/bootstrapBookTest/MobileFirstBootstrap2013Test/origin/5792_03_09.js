$(function(){
    $('.link').on('click', function(){
        $('form').trigger('submit',['called by link']);
        return false;
    });
    $('form').submit(function(e, whocalls){
        if(whocalls){
            alert(whocalls);
        }
       alert('form submit default');
    });
});