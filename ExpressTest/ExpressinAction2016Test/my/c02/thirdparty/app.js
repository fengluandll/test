/**
 * Created by YunZhang on 1/3/17.
 */

var Mustache = require('Mustache');

var result = Mustache.render(
    'Hello, {{first}} {{last}}',{first:'Yun', last: 'Zhang'});
console.log(result);