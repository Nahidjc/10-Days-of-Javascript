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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let sortValues = nums;
    sortValues.sort(function (a, b) { return b - a });
    const largest = sortValues[0];
    for (let i = 0; i < sortValues.length; i++) {
        if (largest === sortValues[i]) {
            continue;
        } else if (largest !== sortValues[i]) {

            return sortValues[i];
        }

    }
}

