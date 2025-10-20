const findTheOldest = function(people) {

    let index = 0;
    let max_age = 0;

    for (let i = 0; i < people.length; i++){
        
        let person_age = 0;

        if (people[i].yearOfDeath){
            person_age = people[i].yearOfDeath - people[i].yearOfBirth;
        } else {
            person_age = (new Date().getFullYear()) - people[i].yearOfBirth;
        }

        if (person_age > max_age) {
            max_age = person_age;
            index = i;
        }

    }

    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
