/**
 * Created by Allbts-IT on 2/04/2016.
 */
'use strict';

$(function () {
    const message = 'log message';
    $('#log').append("<br/>" + message);

    $('h1').prepend('§');

    $('h1').before('<hr/>');

    $('h1').after('<hr/>');

    $('hr').replaceWith('<br/>');

    $('h2').each(function () {
       var h2 = $(this);
        h2.replaceWith('<h1>' + h2.html() + '</h1>');
    });

    $('h1').map(function () {
        return this.firstChild
    }).before('*');
});