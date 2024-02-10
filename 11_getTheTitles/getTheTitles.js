// const getTheTitles = function(books) {
//     let a = [];
//     books.forEach(element => {
//         a.push(element.title);
//     });
//     return a;
// };

const getTheTitles = function(books) {
    return books.map((book) => book.title);
};


// Do not edit below this line
module.exports = getTheTitles;
