function getScrollOffsets(w) {
    w = w || window;

    if (w.pageXOffset) {
        return {x: w.pageXOffset, y: w.pageYOffset}
    }

    var d = w.document;
    if (d.compatMode === 'CSS1Compat') {
        return {x:d.documentElement.scrollLeft, y:d.documentElement.scrollTop};
    }

    return { x: d.body.scrollLeft, y: d.body.scrollTop };
}

function onBodyClick() {
    alert(JSON.stringify(getScrollOffsets(window)));
}