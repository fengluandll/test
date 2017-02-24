class Dispatcher{

    constructor() {
        this.isDispatching = false;
    }

    dispatch(action){
        if (this.isDispatching) {
            throw new Error('Cannot dispatch in the middle of a dispatch');
        }
        this.isDispatching = true;
        //TODO: TO STORE
        this.isDispatching = false;
    }
}

export default new Dispatcher();