// Given a roman numeral, convert it to an integer.

var romanToInt = function(s) {
    const romNums = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let int = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I" && s[i + 1] === "V") {
            int += 4;
            i++;
        } else if (s[i] === "I" && s[i + 1] === "X") {
            int += 9;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "L") {
            int += 40;
            i++
        } else if (s[i] === "X" && s[i + 1] === "C") {
            int += 90;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "D") {
            int += 400;
            i++
        } else if (s[i] === "C" && s[i + 1] === "M") {
            int += 900;
            i++;
        } else {
            int += romNums[s[i]];
        }
    }
    return int;
};