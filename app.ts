// THE MAIN TYPES
// NUMBER
let revenue: number = 10_000;
let bonus: number = 500;
let result: number = revenue + bonus;

// STRING
let c: string = 'String!';

// BOOLEAN
let d: boolean = true;
console.log(result); // 10500

// FUNCTIONS
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

// OBJECTS
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

// ARRAYS
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

// TUPLES
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

// ENUMS
// A reference of answers, values, and parameters of a limited number of values.

// statusCodes:
// 1 - success,
// 2 - in process,
// 3 - failed

// heterogeneous enum:
enum StatusCode {
  SUCCESS = 1,
  IN_PROGRESS = 'p',
  FAILED = 'f'
}

const mainResult = {
  message: 'The payment was successful',
  statusCode: StatusCode.SUCCESS
};

function action(status: StatusCode) {}
action(StatusCode.SUCCESS);
action(1);
// action('p'); // ERROR

// constant enum
const enum Roles {
  ADMIN = 1,
  USER = 2,
  PREMIUM_USER = 3
}
const enumResult = Roles.ADMIN;

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

enum QuestionStatus {
  Published = 'published',
  Draft = 'draft',
  Deleted = 'deleted'
}

async function getFaqs(req: {
  topicId: number;
  status?: QuestionStatus;
}): Promise<
  {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus;
  }[]
> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req)
  });
  const data = await res.json();
  return data;
}
