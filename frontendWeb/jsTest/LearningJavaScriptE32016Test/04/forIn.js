/**
 * Created by Allbts-IT on 2/04/2016.
 */
'use strict';

const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };
for(let prop in player) {
    if(!player.hasOwnProperty(prop)) continue; // see explanation below
    console.log(prop + ': ' + player[prop]);
}