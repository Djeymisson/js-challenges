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

function getLetter(s) {
    const c = s.charAt(0);
    switch (true) {
        case "aeiou".includes(c):
            return "A";
        case "bcdfg".includes(c):
            return "B";
        case "hjklm".includes(c):
            return "C";
        case "npqrstvwxyz".includes(c):
            return "D";
    }
}

function main() {
    const s = readLine();

    console.log(getLetter(s));
}

