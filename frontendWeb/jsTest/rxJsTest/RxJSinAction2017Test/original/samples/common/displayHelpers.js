/**
 *  RxJS in action
 *  Chapter #
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
function input(builder, self) {

    return function() {
        const args = new Array(arguments.length);
        for (let i =0, ii = arguments.length; i < ii; ++i) { args[i] = arguments[i]; }
        return builder.apply(self, args);
    }
}

function output(target, tag, fmt) {
    const formatter = fmt || ((x, e) => {target.value += `\n${tag}: ${x || e || "Done"}`});
    return Rx.KitchenSink.Subscriber.create(
        (x) => formatter(x),
        (e) => formatter(null, e),
        () => formatter()
    )
}