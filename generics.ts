// // GENERICS
// // GENERICS
// // Generics - обобщённый тип, позволяющий резервировать место для типа,
// // который будет при вызове заменён на определённый.
//
// // EMBEDDED GENERICS
//
// const nums: Array<number> = [1, 2, 3];
//
// async function test() {
//   const a = await new Promise<number>((resolve, reject) => {
//     resolve(1);
//   });
// }
//
// const check: Record<string, boolean> = {
//   drive: true,
//   kpp: false
// };
//
// // GENERICS IN FUNCTIONS
// // Generics в функции принято называть либо одной большой буквой,
// // либо названием с какой-либо смысловой нагрузкой.
// function logMiddleware<T>(data: T): T {
//   console.log(data);
//   return data;
// }
//
// const res1 = logMiddleware<number>(10);
// const res2 = logMiddleware<string>('asdf');
//
// function getSplittedHalf<T>(data: Array<T>): Array<T> {
//   const l = data.length / 2;
//   return data.splice(0, l);
// }
//
// getSplittedHalf<number>([1, 3, 4]);
//
// // EXERCISE 7: CREATE FUNCTION toString()
// Написать функцию toString, которая принимает любой тип
// и возвращает его строковое представление. Если не может,
// то возвращает undefined.
//
// // My way:
// function toString<T>(data: T): string | undefined {
//   const str = String(data);
//   console.log(str);
//   return str;
// }
// toString<number>(10);
// toString<boolean>(true);
// toString<undefined>(undefined);
// toString<Array<number>>([10, 20, 30]);
//
// function toString<T>(data: T): string | undefined {
//   if (Array.isArray(data)) {
//     return data.toString();
//   }
//
//   switch (typeof data) {
//     case 'string':
//       return data;
//     case 'number':
//     case 'symbol':
//     case 'bigint':
//     case 'boolean':
//     case 'function':
//       return data.toString();
//     case 'object':
//       return JSON.stringify(data);
//     default:
//       return undefined;
//   }
// }
// console.log(toString(3)); // '3'
// console.log(toString(true)); // 'true'
// console.log(toString(['a', 1])); // 'a,1'
// console.log(toString({ a: 1, b: 2 })); // '{"a":1,"b":2}'
// console.log(toString(Infinity)); // 'Infinity'
// console.log(toString()); // undefined
//
// // USING GENERICS IN TYPES
//
// function getSplittedHalf<T>(data: Array<T>): Array<T> {
//   const l = data.length / 2;
//   return data.splice(0, l);
// }
//
// const split1: <T>(data: Array<T>) => Array<T> = getSplittedHalf;
// const split2: <Y>(data: Array<Y>) => Array<Y> = getSplittedHalf;
//
// // Using generics in interfaces
// interface ILogLine<T> {
//   timeStamp: Date;
//   data: T;
// }
//
// const logLine1: ILogLine<{ a: number }> = {
//   timeStamp: new Date(),
//   data: {
//     a: 1
//   }
// };
//
// // Using generics in types
// type LogLineType<T> = {
//   timeStamp: Date;
//   data: T;
// };
//
// const logLine2: LogLineType<{ a: number }> = {
//   timeStamp: new Date(),
//   data: {
//     a: 1
//   }
// };
//
// // GENERICS LIMITATION
// // Нельзя работать с generics как с определённым типом и обращаться к его свойствам.
// class Vehicle {
//   run: number;
// }
//
// function kmToMiles<T extends Vehicle>(vehicle: T): T {
//   vehicle.run = vehicle.run / 0.62;
//   return vehicle;
// }
//
// class LCV extends Vehicle {
//   capacity: number;
// }
//
// const vehicle = kmToMiles(new Vehicle());
// const lcv = kmToMiles(new LCV());
// kmToMiles({ run: 1 });
// // kmToMiles({a: 1}); // Error
//
// function logId<T extends string | number, Y>(
//   id: T,
//   additionalData: Y
// ): { id: T; data: Y } {
//   console.log(id);
//   console.log(additionalData);
//   return { id, data: additionalData };
// }
//
// // EXERCISE 8: ID SORTING FUNCTION
// // Написать функцию сортировки любых объектов,
// // которые имеют id, по убыванию и возрастанию.
//
// const data = [
//   { id: 1, name: 'Вася' },
//   { id: 2, name: 'Петя' },
//   { id: 3, name: 'Надя' }
// ];
//
// interface ID {
//   id: number;
// }
//
// function sort<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
//   return data.sort((a, b) => {
//     switch (type) {
//       case 'asc':
//         return a.id - b.id;
//       case 'desc':
//         return b.id - a.id;
//     }
//   });
// }
// console.log(sort(data, 'desc'));
// console.log(sort(data, 'asc'));
//
// // GENERIC CLASSES
//
// class Resp<D, E> {
//   data?: D;
//   error?: E;
//
//   constructor(data?: D, error?: E) {
//     if (data) {
//       this.data = data;
//     }
//     if (error) {
//       this.error = error;
//     }
//   }
// }
//
// const resp1 = new Resp<string, number>('data', 0);
// const resp2 = new Resp<string, number>('data'); // error's type is unknown
//
// // Нельзя наследоваться от классов, которые содержат generics,
// // при наследовании нужно определить data и error.
// // Так же можно задавать дополнительные generics.
// class HTTPResp<F> extends Resp<string, number> {
//   code: F;
//
//   setCode(code: F) {
//     this.code = code;
//   }
// }
// const resp3 = new HTTPResp();
//
// // MIXINS
// // Миксин - функция.
// // Миксины используются для реализации возможности наследования от одного/нескольких
// // классов, либо при создания примеси дополнительных свойств тому или иному объекту
// // без явного наследования.
//
// type Constructor = new (...args: any[]) => {};
// type GConstructor<T = {}> = new (...args: any[]) => T;
//
// class List {
//   constructor(public items: string[]) {}
// }
//
// class Accordion {
//   isOpened: boolean;
// }
//
// type ListType = GConstructor<List>;
// type AccordionType = GConstructor<Accordion>;
//
// class ExtendedListClass extends List {
//   first() {
//     return this.items[0];
//   }
// }
//
// function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
//   return class ExtendedList extends Base {
//     first() {
//       return this.items[0];
//     }
//   };
// }
//
// class AccordionList {
//   isOpened: boolean;
//
//   constructor(public items: string[]) {}
// }
//
// const list = ExtendedList(AccordionList);
// const res = new list(['first', 'second']);
// console.log(res.first());
