let set = new Set([1,2]);

let processor = {
    output(value){
        console.log(value);
    },
    process(dataSet){
        dataSet.forEach(value => this.output(value));
    }
};

processor.process(set);