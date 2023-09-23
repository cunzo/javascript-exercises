const array = [[1, 2, 3, 4], 3];
let giorgio = [];
const removeFromArray = function(...array) {
    for (const num of array) {
        if (array[num] === 3 ) {
           giorgio =  array.splice(num,1);
        }
        return giorgio;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
