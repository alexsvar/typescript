"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// THE MAIN TYPES
// NUMBER
let revenue1 = 10000;
let bonus1 = 500;
let result1 = revenue1 + bonus1;
// STRING
let c1 = 'String!';
// BOOLEAN
let d1 = true;
console.log(result1); // 10500
// FUNCTIONS
// tsconfig.json:
// "noImplicitAny": true, => "noImplicitAny": false,
//  Enable error reporting for expressions and declarations with an implied 'any' type.
function getFullName1(firstname1, surname1) {
    return `${firstname1} ${surname1}`;
}
const getFullNameArrow1 = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
console.log(getFullName1('Alex', 'Svar')); // Alex Svar
// OBJECTS
function getName1(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user1 = {
    firstname: 'Alex',
    surname: 'Svar',
    age: 36,
    city: 'Sarov',
    skills: {
        dev: true,
        devops: false
    }
};
console.log(getName1(user1)); // Alex Svar
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
let info1 = {
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
const skills1 = ['Dev', 'DevOps', 'Testing'];
// iteration
for (const skill of skills1) {
    console.log(skill.toLocaleLowerCase()); // dev devops
}
const res = skills1
    .filter((skill) => skill !== 'DevOps')
    .map((skill) => skill + '! ')
    .reduce((a, b) => a + b);
console.log(res);
// TUPLES
const skill1 = [1, 'dev'];
const [skill1Id, skill1Name] = skill1;
// const q = skill[2]; // ERROR
const arr1 = [1, 'str', true, true, false];
// READONLY
// tuple:
const hobby1 = [1, 'music'];
// hobby[0] = 2; // ERROR
// array:
const nums1 = [1, 2, 3, 4, 5];
// nums[1] = 10; // ERROR
// ENUMS
// Применяются для списоков ответов, значений и параметров с ограниченным числом значений
// statusCodes:
// 1 - success,
// 2 - in process,
// 3 - failed
// heterogeneous enum:
var StatusCode1;
(function (StatusCode1) {
    StatusCode1[StatusCode1["SUCCESS"] = 1] = "SUCCESS";
    StatusCode1["IN_PROGRESS"] = "p";
    StatusCode1["FAILED"] = "f";
})(StatusCode1 || (StatusCode1 = {}));
const mainResult1 = {
    message: 'The payment was successful',
    statusCode: StatusCode1.SUCCESS
};
function action(status) { }
action(StatusCode1.SUCCESS);
action(1);
const enumResult = 1 /* Roles1.ADMIN */;
// EXERCISE 2
// type a function:
// request:
// {
// 	"topicId": 5,
// 	"status": "published" // "draft", "deleted"
// }
// response:
// [
// 	{
// 		"question": "Как осуществляется доставка?",
// 		"answer": "Быстро!",
// 		"tags": [
// 			"popular",
// 			"new"
// 		],
// 		"likes": 3,
// 		"status": "publishes"
// 	}
// ]
// function:
// async function getFaqs(req) {
//   const res = await fetch('/faqs', {
//     method: 'POST',
//     body: JSON.stringify(req)
//   });
//   const data = await res.json();
//   return data;
// }
var QuestionStatus1;
(function (QuestionStatus1) {
    QuestionStatus1["Published"] = "published";
    QuestionStatus1["Draft"] = "draft";
    QuestionStatus1["Deleted"] = "deleted";
})(QuestionStatus1 || (QuestionStatus1 = {}));
function getFaqs1(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res1 = yield fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data1 = yield res1.json();
        return data1;
    });
}
