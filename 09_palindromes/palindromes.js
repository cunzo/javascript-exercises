const palindromes = function (a) {
    if (typeof a !== "string") {return 'non e` possibile stabilire se la parola/frase inserita e` palindroma';}
    let arr = a.split("");
    arr = arr.filter(element => /^[A-Za-z0-9]$/.test(element));
    arr2 = arr.slice().reverse();
    if (arr.join('').toLowerCase() === arr2.join('').toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
