// THE MAIN TYPES
// NUMBER
let revenue1: number = 10_000;
let bonus1: number = 500;
let result1: number = revenue1 + bonus1;

// STRING
let c1: string = 'String!';

// BOOLEAN
let d1: boolean = true;
console.log(result1); // 10500

// FUNCTIONS
// tsconfig.json:
// "noImplicitAny": true, => "noImplicitAny": false,
//  Enable error reporting for expressions and declarations with an implied 'any' type.
function getFullName1(firstname1: string, surname1: string): string {
  return `${firstname1} ${surname1}`;
}

const getFullNameArrow1 = (firstname: string, surname: string): string => {
  return `${firstname} ${surname}`;
};
console.log(getFullName1('Alex', 'Svar')); // Alex Svar

// OBJECTS
function getName1(userEntity: { firstname: string; surname: string }): string {
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

let info1: {
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
const skills1: string[] = ['Dev', 'DevOps', 'Testing'];

// iteration
for (const skill of skills1) {
  console.log(skill.toLocaleLowerCase()); // dev devops
}

const res = skills1
  .filter((skill: string) => skill !== 'DevOps')
  .map((skill) => skill + '! ')
  .reduce((a, b) => a + b);
console.log(res);

// TUPLES
const skill1: [number, string] = [1, 'dev'];
const [skill1Id, skill1Name] = skill1;
// const q = skill[2]; // ERROR

const arr1: [number, string, ...boolean[]] = [1, 'str', true, true, false];

// READONLY
// tuple:
const hobby1: readonly [number, string] = [1, 'music'];
// hobby[0] = 2; // ERROR

// array:
const nums1: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// nums[1] = 10; // ERROR

// ENUMS
// Применяются для списоков ответов, значений и параметров с ограниченным числом значений

// statusCodes:
// 1 - success,
// 2 - in process,
// 3 - failed

// heterogeneous enum:
enum StatusCode1 {
  SUCCESS = 1,
  IN_PROGRESS = 'p',
  FAILED = 'f'
}

const mainResult1 = {
  message: 'The payment was successful',
  statusCode: StatusCode1.SUCCESS
};

function action(status: StatusCode1) {}
action(StatusCode1.SUCCESS);
action(1);
// action('p'); // ERROR

// constant enum
const enum Roles1 {
  ADMIN = 1,
  USER = 2,
  PREMIUM_USER = 3
}
const enumResult = Roles1.ADMIN;

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

enum QuestionStatus1 {
  Published = 'published',
  Draft = 'draft',
  Deleted = 'deleted'
}

async function getFaqs1(req: {
  topicId: number;
  status?: QuestionStatus1;
}): Promise<
  {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus1;
  }[]
> {
  const res1 = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req)
  });
  const data1 = await res1.json();
  return data1;
}
