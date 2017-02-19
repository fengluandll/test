function delay(time) {

    return function (obj, prop, descriptor) {
        const delegate = descriptor.value;
        descriptor.value = function () {
            const context = this;
            const args = arguments;
            return new Promise(function (success) {
                setTimeout(function () {
                    success(delegate.apply(context, arguments));
                }, time);
            });
        };
    };

}
class Doer {

    @delay(1000) doItLater() {
        console.log('I did it!');
    }
}

const doer = new Doer();
doer.doItLater(); // I did it! (after 1 second)