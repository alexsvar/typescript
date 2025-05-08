"use strict";
// THE MAIN TYPES
// number:
let revenue = 10000;
let bonus = 500;
let result = revenue + bonus;
// string:
let c = 'String!';
// boolean:
let d = true;
// console.log(result); // 10500
// types in functions:
// tsconfig.json:
// "noImplicitAny": true, => "noImplicitAny": false,
//  Enable error reporting for expressions and declarations with an implied 'any' type.
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
// console.log(getFullName('Alex', 'Svar')); // Alex Svar
// objects:
function getName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Alex',
    surname: 'Svar',
    age: 36,
    city: 'Sarov',
    skills: {
        dev: true,
        devops: false
    }
};
// console.log(getName(user)); // Alex Svar
// EXERCISE 1:
// type object:
// {
//   "officeId": 45,
//   "isOpened": false,
//   "contacts": {
//     "phone": "+79100000000",
//     "email": "my@mail.ru",
//     "address": {
//       "city": "Moscow"
//     }
//   }
// }
let info = {
    officeId: 45,
    isOpened: false,
    contacts: {
        phone: '+79100000000',
        email: 'my@mail.ru',
        address: {
            city: 'Moscow'
        }
    }
};
