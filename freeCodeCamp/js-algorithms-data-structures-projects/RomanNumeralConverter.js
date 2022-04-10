/* 

Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Test case:
    convertToRoman(2) should return the string II.

    convertToRoman(3) should return the string III.

    convertToRoman(4) should return the string IV.

    convertToRoman(5) should return the string V.

    convertToRoman(9) should return the string IX.

    convertToRoman(12) should return the string XII.

    convertToRoman(16) should return the string XVI.

    convertToRoman(29) should return the string XXIX.

    convertToRoman(44) should return the string XLIV.

    convertToRoman(45) should return the string XLV.

    convertToRoman(68) should return the string LXVIII

    convertToRoman(83) should return the string LXXXIII

    convertToRoman(97) should return the string XCVII

    convertToRoman(99) should return the string XCIX

    convertToRoman(400) should return the string CD

    convertToRoman(500) should return the string D

    convertToRoman(501) should return the string DI

    convertToRoman(649) should return the string DCXLIX

    convertToRoman(798) should return the string DCCXCVIII

    convertToRoman(891) should return the string DCCCXCI

    convertToRoman(1000) should return the string M

    convertToRoman(1004) should return the string MIV

    convertToRoman(1006) should return the string MVI

    convertToRoman(1023) should return the string MXXIII

    convertToRoman(2014) should return the string MMXIV

    convertToRoman(3999) should return the string MMMCMXCIX

*/

function convertToRoman(num) {
    if (num === 0) return "";

    const map = {
        1000: ["M"],
        100: ["C", "CD", "D", "CM"],
        10: ["X", "XL", "L", "XC"],
        1: ["I", "IV", "V", "IX"],
    };

    const getM = (n) => (num - (num % n)) / n;

    const convertDecimal = () => {
        if (n == 1000) return map[n][0].repeat(m);
        if (m <= 3) return map[n][0].repeat(m);
        if (m == 4) return map[n][1];
        if (m >= 5 && m < 9) return map[n][2] + map[n][0].repeat(m - 5);
        if (m == 9) return map[n][3];
    };

    const [n, m] = Object.keys(map)
        .reverse() // Object.keys sort the keys on an increasing order
        .map((e) => [e, getM(e)])
        .find((e) => e[1] > 0);

    return convertDecimal() + convertToRoman(num % n);
}

convertToRoman(6121);

