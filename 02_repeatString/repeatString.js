const string = '';
const number = 10;

const repeatString = function(string,number) {
    if (number <= 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < number-1; i++) {
            string += '';
        }
    }
    
    return string;
};

// Do not edit below this line
module.exports = repeatString;
