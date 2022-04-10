/* 

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Test cases:
    fearNotLetter("abce") should return the string d.

    fearNotLetter("abcdefghjklmno") should return the string i.

    fearNotLetter("stvwx") should return the string u.

    fearNotLetter("bcdf") should return the string e.

    fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

*/

function fearNotLetter(str) {
    const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
    const range = alphabet.splice(alphabet.indexOf(str.charAt(0)), str.length);

    return range.reduce(
        (prev, curr) =>
            !prev ? (str.includes(curr) ? undefined : curr) : prev,
        undefined
    );
}

console.log(fearNotLetter("stvwx"));

