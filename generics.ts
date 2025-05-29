// GENERICS
// GENERICS
// Generics - обобщённый тип, позволяющий резервировать место для типа,
// который будет при вызове заменён на определённый.
//
// EMBEDDED GENERICS
//
const nums: Array<number> = [1, 2, 3];

async function test() {
  const a = await new Promise<number>((resolve, reject) => {
    resolve(1);
  });
}

const check: Record<string, boolean> = {
  drive: true,
  kpp: false
};
