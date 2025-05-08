// THE MAIN TYPES
// number:
let revenue: number = 10_000;
let bonus: number = 500;
let result: number = revenue + bonus;

// string:
let c: string = 'String!';

// boolean:
let d: boolean = true;
// console.log(result); // 10500

// types in functions:
// tsconfig.json:
// "noImplicitAny": true, => "noImplicitAny": false,
//  Enable error reporting for expressions and declarations with an implied 'any' type.
function getFullName(firstname: string, surname: string): string {
  return `${firstname} ${surname}`;
}

const getFullNameArrow = (firstname: string, surname: string): string => {
  return `${firstname} ${surname}`;
};
// console.log(getFullName('Alex', 'Svar')); // Alex Svar

// objects:
function getName(userEntity: { firstname: string; surname: string }): string {
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

let info: {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
} = {
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
