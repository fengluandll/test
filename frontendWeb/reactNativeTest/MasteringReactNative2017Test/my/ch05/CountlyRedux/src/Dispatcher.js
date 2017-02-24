class Dispatcher{

    constructor() {
        this.isDispatching = false;
        this.actionHanlers = [];
    }

    dispatch(action){
        if (this.isDispatching) {
            throw new Error('Cannot dispatch in the middle of a dispatch');
        }
        this.isDispatching = true;
        this.actionHanlers.forEach(handler => handler(action));
        this.isDispatching = false;
    }

    register(actionHandler){
        this.actionHanlers.push(actionHandler);
    }
}

export default new Dispatcher();