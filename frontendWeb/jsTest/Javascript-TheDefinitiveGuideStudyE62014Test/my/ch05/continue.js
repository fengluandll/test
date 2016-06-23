/**
 * Created by Allbts-IT on 24/06/2016.
 */

var data = [1,2,,3,null,4];

var total = 0;
for (var i = 0; i < data.length; i++) {
    if (!data[i]) continue;
    total += data[i];
}

console.log('total: ' + total);