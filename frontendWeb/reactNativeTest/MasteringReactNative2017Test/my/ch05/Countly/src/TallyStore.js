import EventEmitter from 'EventEmitter';
import Dispatcher from './Dispatcher';
var tally = {
    count: 0
};

const increment = () =>{
    tally.count+=1;
};

const decrement = () =>{
    tally.count-=1;
};

const zero = () =>{
    tally.count = 0;
};

const handleAction = (action) => {
    switch (action.type){
        case 'INCREMENT':
            increment();
            break;
        case 'DECREMENT':
            decrement();
            break;
        case 'ZERO':
            zero();
            break;
        default:
            //do nothing
    }
    instance.emit('CHANGE');
};

Dispatcher.register(handleAction);

class TallyStore extends EventEmitter{
    getTally(){
        return Object.assign({},tally);
        //return tally;
    }

    addChangeListener(callback){
        this.addListener('CHANGE',callback);
    }

    removeChangeListener(callback){
        this.removeListener('CHANGE',callback);
    }

    emitChange(){
        this.emitChange('CHANGE');
    }
}

const instance = new TallyStore();
export default instance;