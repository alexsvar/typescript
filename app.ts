// THE MAIN TYPES
// number:
let revenue: number = 10_000;
let bonus: number = 500;
let result: number = revenue + bonus;

// string:
let c: string = 'String!';

// boolean:
let d: boolean = true;
// console.log(result);

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
// console.log(getFullName('Alex', 'Svar'));
