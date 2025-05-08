"use strict";
// THE MAIN TYPES
// NUMBER
let revenue = 10000;
let bonus = 500;
let result = revenue + bonus;
// STRING
let c = 'String!';
// BOOLEAN
let d = true;
console.log(result); // 10500
// FUNCTIONS
// tsconfig.json:
// "noImplicitAny": true, => "noImplicitAny": false,
//  Enable error reporting for expressions and declarations with an implied 'any' type.
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
console.log(getFullName('Alex', 'Svar')); // Alex Svar
// OBJECTS
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
console.log(getName(user)); // Alex Svar
// EXERCISE 1
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
// ARRAYS
const skills = ['Dev', 'DevOps', 'Testing'];
// iteration
for (const skill of skills) {
    console.log(skill.toLocaleLowerCase()); // dev devops
}
const res = skills
    .filter((skill) => skill !== 'DevOps')
    .map((skill) => skill + '! ')
    .reduce((a, b) => a + b);
console.log(res);
// TUPLES
const skill = [1, 'dev'];
const [skillId, skillName] = skill;
// const q = skill[2]; // ERROR
const arr = [1, 'str', true, true, false];
// READONLY
// tuple:
const hobby = [1, 'music'];
// hobby[0] = 2; // ERROR
// array:
const nums = [1, 2, 3, 4, 5];
// nums[1] = 10; // ERROR
// ENUMS
// A reference of answers, values, and parameters of a limited number of values.
// statusCodes:
// 1 - success,
// 2 - in process,
// 3 - failed
// heterogeneous enum:
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROGRESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
const mainResult = {
    message: 'The payment was successful',
    statusCode: StatusCode.SUCCESS
};
function action(status) { }
action(StatusCode.SUCCESS);
action(1);
const enumResult = 1 /* Roles.ADMIN */;
