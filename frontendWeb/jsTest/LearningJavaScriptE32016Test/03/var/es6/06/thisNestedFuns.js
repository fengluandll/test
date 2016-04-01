"use strict";

const o = {
    name: 'Julie',
    greetBackwards: function() {
        const self = this;
        function getReverseName() {
            let nameBackwards = '';
            for(let i=self.name.length-1; i>=0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()}`;
    }
};
console.log(o.greetBackwards());