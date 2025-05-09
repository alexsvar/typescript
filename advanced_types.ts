// ADVANCED TYPES
// UNION
// Union используется для возможности обозначить, что в той или иной переменной у нас
// могут находиться различные типы при различных обстоятельствах.
// const arr2: (string | number)[] = ['str', 1];

// string, number, boolean:
function logId2(id: string | number | boolean) {
  // Cужение типов для union types:
  if (typeof id === 'string') {
    console.log(id);
  } else if (typeof id === 'number') {
    console.log(id);
  } else {
    console.log(id);
  }
}
logId2(1);
logId2('str');
logId2(true);

// arrays:
function logError2(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

// objects:
function logObject2(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

// parameters with similar types:
function logMultipleIds2(a: string | number, b: string | boolean) {
  if (a === b) {
  } else {
    console.log(a);
  }
}

// LITERAL
// Можно сделать enum
// enum RequestType {
//   GET = 'get',
//   POST = 'post'
// }
// enum делать для каждого такого случая является плохой практикой.
//
// string literal types:
function fetchWithAuth2(url: string, method: 'post' | 'get'): 1 | -1 {
  return 1;
}

// Когда объявляем константу const a2 = 'str', то у a будет тип 'str'.
// В таком виде тип бесполезен, мы ничего другого присвоить не можем.
const a2 = 'str';

// Если мы объявим переменную b2 let b2 = 'asdasd', то тип будет 'string'.
// Но мы можем чётко написать let b2: 'asdasd' = 'asdasd' и b2 становится константой.
let b2: 'asdasd' = 'asdasd';

// На фронте используется в React для задания props
fetchWithAuth2('http://asd.asd', 'get');

// Если явно не указать тип 'post', то будет ошибка, потому что идёт проверка на тип.
// let method: 'post' = 'post';
// Или можем сделать method константой.
// const method = 'post';
// Или же можем сделать каст к другому типу.
// Но если в переменную мы передадим что-то другое, то типизация не покажет ошибку.
let method = 'post';
fetchWithAuth2('http://asd.asd', method as 'post');

// ALIASES
// Позволяет более эффективно записывать типы.
// Объявляется с помощью ключевого слова httpMethod.
type httpMethod = 'post' | 'get';
function fetchWithAuth3(url: string, method: httpMethod): 1 | -1 {
  return 1;
}

type User2 = {
  name: string;
  age: number;
  skills: string[];
};
type Role2 = {
  name: string;
  id: number;
};
// Можно создать intersection User2WithRole2, который будет типа User2 & Role2.
// Через "|" мы обозначаем union (или 1 или 2 ...).
// Через "&" мы обозначаем intersection (объединение, и 1 и 2).
type User2WithRole2 = User2 & Role2;
let user2: User2WithRole2 = {
  name: 'Alex',
  age: 36,
  skills: ['1', '2'],
  id: 1
};

// INTERFACES
interface User {
  name: string;
  age: number;
  skills: string[];
}
interface Role {
  roleId: number;
}
interface UserWithRole extends User, Role {
  createdAt: Date;
}
let user: UserWithRole = {
  name: 'Alex',
  age: 36,
  skills: ['1', '2'],
  roleId: 1,
  createdAt: new Date()
};

// functions:
// function log in interface User1
interface User1 {
  name: string;
  age: number;
  skills: string[];

  log: (id: number) => string;
}
interface Role1 {
  roleId: number;
}

interface User1WithRole1 extends User1, Role1 {
  createdAt: Date;
}
let user3: User1WithRole1 = {
  name: 'Alex',
  age: 36,
  skills: ['1', '2'],
  roleId: 1,
  createdAt: new Date(),

  log(id) {
    return '';
  }
};

interface UserDictionary {
  [index: number]: User1;
}
