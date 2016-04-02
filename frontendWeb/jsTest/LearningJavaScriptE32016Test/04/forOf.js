/**
 * Created by Allbts-IT on 2/04/2016.
 */
'use strict';

function randFace() {
    let face = Math.ceil(Math.random() * 6);
    if (face === 0) face = 1;
    return face;
}

const hand = [randFace(), randFace(), randFace()];
for(let face of hand)
    console.log(`You rolled...${face}!`);