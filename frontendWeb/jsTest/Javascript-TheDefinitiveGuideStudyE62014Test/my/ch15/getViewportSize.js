function getViewportSize(w) {
    w = w || window;

    if (innerWidth != null) {
        return {w: w.innerWidth, h: w.innerHeight};
    }

    var d = w.document;
    if (document.compatMode == 'CSS1Compat') return {
        w: d.documentElement.clientWidth,
        h: d.documentElement.clientHeight
    };

    return { w: d.body.clientWidth, h: d.body.clientWidth };
}

function onBodyClick() {
    alert(JSON.stringify(getViewportSize(window)));
}