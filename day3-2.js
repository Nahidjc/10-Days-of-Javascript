// const s = 'javascriptloops';

// const usingSplit = s.split('');
// const usingSpread = [...s];
// const usingArrayFrom = Array.from(s);
// const usingObjectAssign = Object.assign([], s);
// let vowelList = [];
// let consonentList = [];

// for (let i = 0; i < usingObjectAssign.length; i++) {
//     if (usingObjectAssign[i] === 'a' || usingObjectAssign[i] === 'e' || usingObjectAssign[i] === 'i' || usingObjectAssign[i] === 'o' || usingObjectAssign[i] === 'u') {
//         vowelList.push(usingObjectAssign[i]);
//     } else if (usingObjectAssign[i] === ' ') {
//         continue;
//     } else {
//         consonentList.push(usingObjectAssign[i]);
//     }

// }

// vowelList.map(vowel => {
//     console.log(vowel);
// })

// consonentList.map(consonent => {
//     console.log(consonent);
// })


// Original Code 

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {

    //const s = 'javascriptloops';

    const usingSplit = s.split('');
    const usingSpread = [...s];
    const usingArrayFrom = Array.from(s);
    const usingObjectAssign = Object.assign([], s);
    let vowelList = [];
    let consonentList = [];

    for (let i = 0; i < usingObjectAssign.length; i++) {
        if (usingObjectAssign[i] === 'a' || usingObjectAssign[i] === 'e' || usingObjectAssign[i] === 'i' || usingObjectAssign[i] === 'o' || usingObjectAssign[i] === 'u') {
            vowelList.push(usingObjectAssign[i]);
        } else if (usingObjectAssign[i] === ' ') {
            continue;
        } else {
            consonentList.push(usingObjectAssign[i]);
        }

    }

    vowelList.map(vowel => {
        console.log(vowel);
    })

    consonentList.map(consonent => {
        console.log(consonent);
    })


}


function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}