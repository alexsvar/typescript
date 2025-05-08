// THE MAIN TYPES
// NUMBER:
let revenue: number = 10_000;
let bonus: number = 500;
let result: number = revenue + bonus;

// STRING:
let c: string = 'String!';

// BOOLEAN:
let d: boolean = true;
console.log(result); // 10500

// FUNCTIONS:
// tsconfig.json:
// "noImplicitAny": true, => "noImplicitAny": false,
//  Enable error reporting for expressions and declarations with an implied 'any' type.
function getFullName(firstname: string, surname: string): string {
  return `${firstname} ${surname}`;
}

const getFullNameArrow = (firstname: string, surname: string): string => {
  return `${firstname} ${surname}`;
};
console.log(getFullName('Alex', 'Svar')); // Alex Svar

// OBJECTS:
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
console.log(getName(user)); // Alex Svar

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

// ARRAYS:
const skills: string[] = ['Dev', 'DevOps', 'Testing'];

// iteration
for (const skill of skills) {
  console.log(skill.toLocaleLowerCase()); // dev devops
}

const res = skills
  .filter((skill: string) => skill !== 'DevOps')
  .map((skill) => skill + '! ')
  .reduce((a, b) => a + b);
console.log(res);

// TUPLES:
const skill: [number, string] = [1, 'dev'];
const [skillId, skillName] = skill;
// const q = skill[2]; // ERROR

const arr: [number, string, ...boolean[]] = [1, 'str', true, true, false];

// READONLY
// tuple:
const hobby: readonly [number, string] = [1, 'music'];
// hobby[0] = 2; // ERROR

// array:
const nums: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// nums[1] = 10; // ERROR
