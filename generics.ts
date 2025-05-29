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
// GENERICS IN FUNCTIONS
// Generics в функции принято называть либо одной большой буквой,
// либо названием с какой-либо смысловой нагрузкой.
function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

const res1 = logMiddleware<number>(10);
const res2 = logMiddleware<string>('asdf');

function getSplittedHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, l);
}

getSplittedHalf<number>([1, 3, 4]);
