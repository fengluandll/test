/**
 * Created by Allbts-IT on 24/06/2016.
 */
'use strict';

var matrix = [[1,2,3],[4,5,6],[7,8,9]];

var sum = 0, success = false;

compute_sum: if (matrix){
    for (var x = 0; x < matrix.length; x++) {
        var row = matrix[x];
        if (!row) break compute_sum;
        for (var y = 0; y < row.length; y++) {
            var cell = row[y];
            if (isNaN(cell)) break compute_sum;
            sum += cell;
        }
    }
    success = true;
}

if (success) {
    console.log('the sum is ' + sum);
}