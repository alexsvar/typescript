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
// GENERICS LIMITATION
// Нельзя работать с generics как с определённым типом и обращаться к его свойствам.
class Vehicle {
  run: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
  vehicle.run = vehicle.run / 0.62;
  return vehicle;
}

class LCV extends Vehicle {
  capacity: number;
}

const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
kmToMiles({ run: 1 });
// kmToMiles({a: 1}); // Error

function logId<T extends string | number, Y>(
  id: T,
  additionalData: Y
): { id: T; data: Y } {
  console.log(id);
  console.log(additionalData);
  return { id, data: additionalData };
}
