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
// console.log(result);
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
console.log(getFullName('Alex', 'Svar'));
