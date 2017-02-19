function logAccess(obj, prop, descriptor) {
    const delegate = descriptor.value;
    descriptor.value = function () {
        console.log(`${prop} was called`);
        return delegate.apply(this,arguments);
    };
}

class MoneySafe{
    @logAccess
    openSafe(){
        this.open = true;
    }
}

const safe = new MoneySafe();
safe.openSafe();