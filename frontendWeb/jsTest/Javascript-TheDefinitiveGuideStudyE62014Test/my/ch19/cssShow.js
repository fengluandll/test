/**
 * Created by Allbts-IT on 8/07/2016.
 */
'use strict';

$(function () {
   $('#showDetails').click(function () {
      $('p.details').css('background-color','yellow').show('fast');
   });

    $('#hideDetails').click(function () {
        $('p.details').hide();
    });
});