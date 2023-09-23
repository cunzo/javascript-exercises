const sumAll = function(arg1,arg2) {
    let sum = 0 ;

    if (Math.sign(arg1) == -1 || Math.sign(arg2) == -1 || typeof arg1 != 'number' || typeof arg2 != 'number'   ) {
        return 'ERROR';
    }

    if (arg1<arg2) {
        for (let i = arg1; i < arg2+1; i++) {
            sum += i;
        }
    } else {
        for (let i = arg2; i < arg1+1; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
