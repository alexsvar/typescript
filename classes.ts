// // CLASSES
// // CREATING A CLASS
// class User {
//   constructor(name: string) {
//     this.name = name;
//   }
//   name: string;
// }
// const user1 = new User('Alex');
// console.log(user1);
// user1.name = 'Alexey';
// console.log(user1);
// // Чтобы было не инициализированно свойство role, чтобы использовать классы как интерфейсы,
// // 1. В tsconfig нужно свойство strictPropertyInitialization установить в false:
// // "strictPropertyInitialization": true; Check for class properties that are declared but not set in the constructor.
// // 2. Пославить после role восклицательный знак: role!: number;
// class Admin {
//   role: number;
// }
// const admin = new Admin();
// admin.role = 1;
// //
// // CONSTRUCTOR
// // В TS нельзя типизировать возврат constructor.
// class User {
//   constructor();
//   constructor(name: string);
//   constructor(age: number);
//   constructor(name: string, age: number);
//   constructor(nameOrAge?: string | number, age?: number) {
//     if (typeof nameOrAge === 'string') this.name = nameOrAge;
//     else if (typeof nameOrAge === 'number') this.age = nameOrAge;
//     if (typeof age === 'number') this.age = age;
//   }
//   name: string;
//   age: number;
// }
// const user1 = new User('Alex');
// // Чтобы создать instance класса User без имени, нужно определить в классе
// // overload function (функции перегрузки) - в данном случае, пустой constructor.
// // Это будет означать что поле name должно быть хоть в одном конструкторе
// // экземпляра класса User.
// const user2 = new User();
// const user3 = new User(33);
// const user4 = new User('Alex', 33);
//
// // METHODS
// // Метод - функция, которая находится внутри класса и выполняет какие-либо действия.
// enum PaymentStatus {
//   Holded,
//   Processed,
//   Reversed
// }
// class Payment {
//   constructor(id: number) {
//     this.id = id;
//   }
//   id: number;
//   status: PaymentStatus = PaymentStatus.Holded;
//   createdAt: Date = new Date();
//   updatedAt: Date;
//   getPaymentLifeTime(): number {
//     return new Date().getTime() - this.createdAt.getTime();
//   }
//   unholdPayment(): void {
//     if (this.status == PaymentStatus.Processed)
//       throw new Error('Платёж не может быть возвращён.');
//     this.status = PaymentStatus.Reversed;
//     this.updatedAt = new Date();
//   }
// }
// const payment = new Payment(1);
// payment.unholdPayment();
// console.log(payment);
// const time = payment.getPaymentLifeTime();
// console.log(time);
//
// // EXERCISE 5: OVERLOAD METHOD
// // overload methods:
// class User {
//   skills: string[];
//   addSkill(skill: string): void;
//   addSkill(skills: string[]): void;
//   addSkill(skillOrSkills: string | string[]): void {
//     if (typeof skillOrSkills == 'string') this.skills.push(skillOrSkills);
//     else this.skills.concat(skillOrSkills);
//   }
// }
// // overload functions:
// function run(distance: number): number;
// function run(distance: string): string;
// function run(distance: number | string): number | string {
//   if (typeof distance === 'number') return 1;
//   else return '';
// }
//
// // GETTERS & SETTERS
// // То что возвращает getter, то и должен получать setter.
// // Объявляя только getter без setter, свойство login становится readonly.
// // Setters & getters не могут быть асинхронными.
// class User {
//   _login: string;
//   password: string;
//   createdAt: Date;
//   set login(log: string | number) {
//     this._login = 'user-' + log;
//     this.createdAt = new Date();
//   }
//   get login() {
//     return this._login;
//   }
//   async getPassword(pass: string) {}
// }
// const user1 = new User();
// user1.login = 'myLogin';
// console.log(user1);
// console.log(user1.login);
//
// // IMPLEMENTATION
//
// interface ILogger {
//   log(...args: any[]): void;
//   error(...args: any[]): void;
// }
// class Logger implements ILogger {
//   log(...args: any[]): void {
//     console.log(...args);
//   }
//   async error(...args: any[]): Promise<void> {
//     console.log(...args);
//   }
// }
// interface IPayable {
//   pay(paymentId: number): void;
//   price?: number;
// }
// interface IDeletable {
//   delete(): void;
// }
// class User implements IPayable, IDeletable {
//   delete(): void {
//     throw new Error('Method not implemented.');
//   }
//   pay(paymentId: number | string): void {
//     // ...
//   }
// }
//
// EXTENDS
//
type PaymentStatus = 'new' | 'paid';
class Payment {
  constructor(id: number) {
    this.id = id;
  }
  id: number;
  status: PaymentStatus = 'new';
  pay() {
    this.status = 'paid';
  }
}
class PersistedPayment extends Payment {
  constructor() {
    const id = Math.random();
    super(id);
  }
  databaseId: number;
  paidAt: Date;
  save() {
    //
  }
  // Override method - переопределение метода.
  override pay(date?: Date) {
    // super.pay();
    if (date) {
      this.paidAt = date;
    }
  }
}
