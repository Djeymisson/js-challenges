/* 

1. First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
2. Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in s.

*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
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
    let vowels = /[aeiou]/;

    Array.from(s).forEach((c) => {
        if (vowels.test(c)) console.log(c);
    });

    Array.from(s).forEach((c) => {
        if (!vowels.test(c)) console.log(c);
    });
}

function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}
