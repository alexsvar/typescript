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
// INTERFACES
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
// TYPES OR INTERFACES
// interfaces:
// Один interface может дополнять другой, но это bad practice.
// Такой код плохо поддерживаемый. Но это может быть полезным
// при использовании типов из какой-либо библиотеки.
// С type так делать нельзя.
interface User {
  name: string;
}
interface User {
  age: number;
}
const user: User = {
  name: 'Alex',
  age: 33
};
//
// types:
// Позволяют расширяться от примитивных типов.
// С interfaces так нельзя. Interfaces позволяют
// работать с объектами, с описанием классов, но не с простыми типами.
// Только внутри interface могут содержаться простые типы.
type ID = string | number;
interface IDS {
  ID: string | number;
}
//
// Рекомендации к использванию:
// types: Для использования примитивных типов.
// interface: Для работы с объектами и описания классов.
