/**
 * Created by Allbts-IT on 18/05/2016.
 */
'use strict';

var path = new Path.Circle({
    center: view.center,
    radius: 30,
    strokeColor: 'black'
});

function onResize(event) {
    // Whenever the window is resized, recenter the path:
    path.position = view.center;
}