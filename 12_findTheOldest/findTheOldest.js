const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear();
    people.forEach(element => {
        if (element.yearOfDeath != undefined) {
            element.age = element.yearOfDeath - element.yearOfBirth;
        } else {
            element.age = thisYear - element.yearOfBirth;
        }
    });

    let oldestPerson = null;

    people.forEach(element => {
        if (oldestPerson === null || element.age > oldestPerson.age) {
            oldestPerson = element;
        }
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
