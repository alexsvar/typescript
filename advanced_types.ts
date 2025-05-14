// // ADVANCED TYPES
// // UNION
// // Union используется для возможности обозначить,
// // что в той или иной переменной у нас могут находиться
// // различные типы при различных обстоятельствах.
// // const arr: (string | number)[] = ['str', 1];
//
// // string, number, boolean:
// function logId(id: string | number | boolean) {
//   // Cужение типов для union types:
//   if (typeof id === 'string') {
//     console.log(id);
//   } else if (typeof id === 'number') {
//     console.log(id);
//   } else {
//     console.log(id);
//   }
// }
// logId(1);
// logId('str');
// logId(true);
//
// // arrays:
// function logError(err: string | string[]) {
//   if (Array.isArray(err)) {
//     console.log(err);
//   } else {
//     console.log(err);
//   }
// }
//
// // objects:
// function logObject(obj: { a: number } | { b: number }) {
//   if ('a' in obj) {
//     console.log(obj.a);
//   } else {
//     console.log(obj.b);
//   }
// }
//
// // parameters with similar types:
// function logMultipleIds(a: string | number, b: string | boolean) {
//   if (a === b) {
//   } else {
//     console.log(a);
//   }
// }
//
// // LITERAL
// // Можно сделать enum
// // enum RequestType {
// //   GET = 'get',
// //   POST = 'post'
// // }
// // enum делать для каждого такого случая является плохой практикой.
// //
// // string literal types:
// function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
//   return 1;
// }
//
// // Когда объявляем константу const a = 'str', то у a будет тип 'str'.
// // В таком виде тип бесполезен, мы ничего другого присвоить не можем.
// const a = 'str';
//
// // Если мы объявим переменную b let b = 'asdasd', то тип будет 'string'.
// // Но мы можем чётко написать let b: 'asdasd' = 'asdasd'
// // и b становится константой.
// let b: 'asdasd' = 'asdasd';
//
// // На фронте используется в React для задания props
// fetchWithAuth('http://asd.asd', 'get');
//
// // Если явно не указать тип 'post', то будет ошибка, потому что идёт проверка на тип.
// // let method: 'post' = 'post';
// // Или можем сделать method константой.
// // const method = 'post';
// // Или же можем сделать каст к другому типу.
// // Но если в переменную мы передадим что-то другое, то типизация не покажет ошибку.
// let method = 'post';
// fetchWithAuth('http://asd.asd', method as 'post');
//
// // ALIASES (TYPES)
// // Позволяет более эффективно записывать типы.
// // Объявляется с помощью ключевого слова httpMethod.
// type httpMethod = 'post' | 'get';
// function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
//   return 1;
// }
//
// type User = {
//   name: string;
//   age: number;
//   skills: string[];
// };
// type Role = {
//   name: string;
//   id: number;
// };
// Можно создать intersection User2WithRole2, который будет типа User2 & Role2.
// Через "|" мы обозначаем union (или 1 или 2 ...).
// Через "&" мы обозначаем intersection (объединение, и 1 и 2).
// type UserWithRole = User & Role;
// let user: UserWithRole = {
//   name: 'Alex',
//   age: 36,
//   skills: ['1', '2'],
//   id: 1
// };
//
// // INTERFACES
// interface User {
//   name: string;
//   age: number;
//   skills: string[];
// }
// interface Role {
//   roleId: number;
// }
// interface UserWithRole extends User, Role {
//   createdAt: Date;
// }
// let user: UserWithRole = {
//   name: 'Alex',
//   age: 36,
//   skills: ['1', '2'],
//   roleId: 1,
//   createdAt: new Date()
// };
//
// functions:
// function log in interface User1
// interface User {
//   name: string;
//   age: number;
//   skills: string[];
//
//   log: (id: number) => string;
// }
// interface Role {
//   roleId: number;
// }
//
// interface User1WithRole1 extends User, Role {
//   createdAt: Date;
// }
// let user3: User1WithRole1 = {
//   name: 'Alex',
//   age: 36,
//   skills: ['1', '2'],
//   roleId: 1,
//   createdAt: new Date(),
//
//   log(id) {
//     return '';
//   }
// };
//
// interface UserDictionary {
//   [index: number]: User;
// }
//
// // TYPES OR INTERFACES
// // interfaces:
// // Один interface может дополнять другой, но это bad practice.
// // Такой код плохо поддерживаемый. Но это может быть полезным
// // при использовании типов из какой-либо библиотеки.
// // С type так делать нельзя.
// interface User {
//   name: string;
// }
// interface User {
//   age: number;
// }
// const user: User = {
//   name: 'Alex',
//   age: 33
// };
// //
// // types:
// // Позволяют расширяться от примитивных типов.
// // С interfaces так нельзя. Interfaces позволяют
// // работать с объектами, с описанием классов, но не с простыми типами.
// // Только внутри interface могут содержаться простые типы.
// type ID = string | number;
// interface IDS {
//   ID: string | number;
// }
// //
// // Рекомендации к использванию:
// // types: Для использования примитивных типов.
// // interface: Для работы с объектами и описания классов.
//
// // OPTIONAL
// // optional "?":
// // interfaces:
// interface User {
//   login: string;
//   password?: string;
// }
// const user: User = {
//   login: 'alex@mail.ru'
// };
//
// // types:
// type User = {
//   login: string;
//   password?: string;
// };
// const user: User = {
//   login: 'alex@mail.ru'
// };
//
// // Запись ниже не эквивалентна использованию optional
// // и выдаст ошибку.
// type User = {
//   login: string;
//   password: string | undefined;
// };
// const user: User = {
//   login: 'alex@mail.ru'
// };
//
// // functions:
// // в аргументах функции optional по типу эквивалентен
// // записи number | undefined.
// function multiply(first: number, second?: number): number {
//   if (!second) return first * first;
//   return first * second;
// }
// //
// // objects:
// interface UserPro {
//   login: 'alex@mail.ru';
//   password?: {
//     type: 'primary' | 'secondary';
//   };
// }
// // Запись const t = user.password!.type эквивалентна записи
// // const t = user.password.type ? user.password.type : undefined
// function testPass(user: UserPro) {
//   const t = user.password?.type;
// }
// //
// // optional "!":
// // Означает что мы уверены на 100%, что пароль не будет undefined.
// // Он всегда будет иметь тип.
// // function testPass(user: UserPro) {
// //   const t = user.password!.type;
// // }
//
// // nullish coalescing:
// // Запись const t = param ?? multiply(5) проверяет,
// // если param равен null или undefined, то в данном случае
// // мы выполняем эту функцию и возвращаем результат в t.
// function test(param?: string) {
//   const t = param ?? multiply(5);
// }
//
// // EXERCISE 3: TYPIFICATION OF SERVER'S RESPONSE
// // Запрос в виде платежа
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }
// // Ответ
// [
// 	{
// 		"status": "success",
// 		"data": {
// 			"databaseId": 567,
// 			"sum": 10000,
// 			"from": 2,
// 			"to": 4
// 		},
// 	},
// 	{
// 		"status": "failed",
// 		"data": {
// 			"errorMessage": "Недостаточно средств",
// 			"errorCode": 4
// 		}
// 	}
// ]
//
// my way:
// request:
// interface Payment {
//   sum: number;
//   from: number;
//   to: number;
// }
// interface PaymentServerRequest extends Payment {}
// const request: PaymentServerRequest = {
//   sum: 10000,
//   from: 2,
//   to: 4
// };
// //
// // response:
// interface IPaymentStatus {
//   Success: string;
//   Failed: string;
// }
// interface SuccessResponseData extends Payment {
//   databaseId: number;
// }
// interface FailedResponseData {
//   errorMessage: string;
//   errorCode: number;
// }
// interface SuccessServerResponse {
//   status: 'success';
//   data: SuccessResponseData;
// }
// interface FailedServerResponse {
//   status: 'failed';
//   data: FailedResponseData;
// }
// const successServerResponse: SuccessServerResponse = {
//   status: 'success',
//   data: {
//     databaseId: 567,
//     sum: 10000,
//     from: 2,
//     to: 4
//   }
// };
// const failedServerResponse: FailedServerResponse = {
//   status: 'failed',
//   data: {
//     errorMessage: 'Недостаточно средств',
//     errorCode: 4
//   }
// };
//
// // VOID
// void обозначает, что функция ничего не возвращает
// function logId(id: string | number): void {
//   console.log(id);
// }
// const a = logId(1);
//
// function multiply(b: number, c?: number): number | void {
//   if (!c) return b * b;
// }
//
// type voidFunc = () => void;
// const f1: voidFunc = () => {};
// const f2: voidFunc = () => true;
// const b = f2();
//
// const skills = ['dev', 'devOps'];
// const user = {
//   s: ['s']
// };
// skills.forEach((skill) => user.s.push(skill));
//
// // UNKNOWN
// Тип unknown означает, что мы не знаем что у нас лежит в переменной.
// Мы не можем unknown положить в любую переменную, пока не сделаем
// приведение типов или не определим, что это за тип.
// let input: unknown;
// input = 3;
// input = 'str';
// input = ['str1', 'str2'];
//
// function run(i: unknown) {
//   if (typeof i == 'number') i++;
//   else i;
// }
// run(input);
//
// // try...catch:
// async function getData() {
//   try {
//     await fetch('');
//   } catch (error) {
//     if (error instanceof Error) console.log(error.message);
//   }
// }
//
// async function getDataForce() {
//   try {
//     await fetch('');
//   } catch (error) {
//     const e = error as Error;
//     console.log(e.message);
//   }
// }
//
// // unknown и другие типы:
// // при union unknown и любого другого типа буд unknown.
// type U1 = unknown | null;
//
// // intersection:
// // Intersection unknown | любой другой тип - даёт другой тип.
// type I1 = unknown & string;
//
// // NEVER
// // Тип never означает что никогда такого не произойдёт.
// // Функция genenrateError никогда ничего не вернёт.
// function generateError(message: string): never {
//   throw new Error(message);
// }
// // Внутри функции цикл никогда не закончится,
// // значит функция никогда ничего не вернёт.
// function dumpError(): never {
//   while (true) {}
// }
// // Типу never ничег нельзя присвоить:
// // const a: never = 1; // error
// // const a: never = null; // error
// // Можно давать в качестве имени _, чтобы typescript
// // не ругался на неиспользуемую переменную:
// // const _: never;
// //
// // Проверка с помощью never, что мы никогда не зайдём в ту или иную ветку:
// type paymentAction = 'refund' | 'checkout' | 'reject';
// function processAction(action: paymentAction) {
//   switch (action) {
//     case 'refund':
//       // ...
//       break;
//     case 'checkout':
//       // ...
//       break;
//     case 'reject':
//       // ...
//       break;
//     default:
//       const _: never = action;
//       throw new Error('This action is not exists...');
//   }
// }

// // Исчерпывающая проверка, когда функция, которая возвращает never,
// // помогает улучшить ситуацию. В данном случае, функция generateError
// // убирает ошибку с возвращаемым значением типа boolean.
//
// function isString(x: string | number): boolean {
//   if (typeof x === 'string') return true;
//   if (typeof x === 'number') return false;
//   generateError('Error message');
// }
//
// // NULL
// // Тип null строго null, ему нельзя присвоить значение undefined.
// // В number/string/boolean/undefined нельзя положить null.
// // За это отвечает опция в tsconfig:
// // "strictNullChecks": true; - When type checking, take into account 'null' and 'undefined'.
// const n: null = null;
// const n1: any = null;
// // const n2: number = null; // error
// // const n3: string = null; // error
// // const n4: boolean = null; // error
// // const n4: undefined = null; // error
// //
// interface User {
//   name: string;
// }
// function getUser() {
//   if (Math.random() > 0.5) return null;
//   else return { name: 'Вася' } as User;
// }
// const user = getUser();
// if (user) {
//   const userName = user.name;
// }
// //
// //
// // Отличия между null и undefined:
// // null - явно заданный неопределённый объект.
// // undefined - говорит, что мы не задали объект.
//
// // TYPE CONVERSION
//
// Преобразование числа в строку:
// let num: number = 5;
// let str1: string = num.toString();
// let str2: string = new String(num).valueOf();
// let bool: boolean = new Boolean(num).valueOf();

// // Преобразование строки в число:
// let str = 'full_string';
// let num1: number = +str;
// let enum2: number = parseInt(str);

// // Преобразование объектов:
// interface User {
//   name: string;
//   email: string;
//   login: string;
// }
// // Способ 1: явное указание interface
// const user1: User = {
//   name: 'Вася',
//   email: 'vasily@MediaList.ru',
//   login: 'Vasya'
// };
// // Способ 2: каст к типу
// const user2 = {
//   name: 'Саня',
//   email: 'sanya@MediaList.ru',
//   login: 'Sanya'
// } as User;
// // Способ 3: generic type
// // Не рекомендуется к использованию.
// // Его невозможно использовать с React:
// const user3 = <User>{
//   name: 'Сергей',
//   email: 'sergey@MediaList.ru',
//   login: 'Sergey'
// };
// //
// //
// interface Admin {
//   name: string;
//   role: number;
// }
// // Вариант: преобразование user к admin
// // Минусы: сохраняются ненужные поля email и login.
// const admin: Admin = {
//   ...user1,
//   role: 1
// };
// // Правильно делать функции преобразования одного типа в другой:
// function userToAdmin(user1: User): Admin {
//   return {
//     name: user1.name,
//     role: 1
//   };
// }
//
// // TYPE GUARD
// Type Guard - функция,
interface User {
  name: string;
  email: string;
  login: string;
}
const user: User = {
  name: 'Alex',
  email: 'alex@mail.ru',
  login: 'Alex'
};
interface Admin {
  name: string;
  role: number;
}
// Запись функции без использования type guard:
// function logId(id: string | number) {
//   if (typeof id === 'string') console.log(id);
//   // if (typeof id === 'number') console.log(id);
//   // id; // id: string | number
// }
// Простая функция type guard с возвратом:
// x is string это boolean.
function isString(x: string | number): x is string {
  return typeof x === 'string';
}
// Запись функции с использованием type guard:
function logId(id: string | number) {
  if (isString(id)) console.log(id);
  else console.log(id);
}
// Функция, которая меняет роль поьзователя:
// Type Guard Варинт 1:
function isAdmin(user: User | Admin): user is Admin {
  return 'role' in user;
}
// Type Guard Вариант 2:
function isAdminAlt(user: User | Admin): user is Admin {
  return (user as Admin).role !== undefined;
}
// Функция, которая меняет роль поьзователя:
function setRoleZero(user: User | Admin) {
  if (isAdmin(user)) user.role = 0;
  else throw new Error('User is not admin');
}
