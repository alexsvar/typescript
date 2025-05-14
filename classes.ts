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
// // EXTENDS
// //
// type PaymentStatus = 'new' | 'paid';
// class Payment {
//   constructor(id: number) {
//     this.id = id;
//   }
//   id: number;
//   status: PaymentStatus = 'new';
//   pay() {
//     this.status = 'paid';
//   }
// }
// class PersistedPayment extends Payment {
//   constructor() {
//     const id = Math.random();
//     super(id);
//   }
//   databaseId: number;
//   paidAt: Date;
//   save() {
//     //
//   }
//   // Override method - переопределение метода.
//   override pay(date?: Date) {
//     // super.pay();
//     if (date) {
//       this.paidAt = date;
//     }
//   }
// }
//
// // FEATURES OF INHERITANCE
//
// class User {
//   constructor() {
//     console.log(this.name);
//   }
//   name: string = 'user';
// }
// class Admin extends User {
//   constructor() {
//     super();
//     console.log(this.name);
//   }
//   name: string = 'admin';
// }
// new Admin();
// new Error('');

// class HttpError extends Error {
//   constructor(message: string, code?: number) {
//     super(message);
//     this.code = code ?? 500;
//   }
//   code: number;
// }
//
// // COMPOSITION VS INHERITANCE
// // Наследование нужно использовать когда:
// // Мы наследуемся в рамках одной доменной области.
// // Наследование не нужно использовать когда:
// // Мы наследуемся от сложных встроенных массивов
// class User {
//   constructor(name: string) {
//     this.name = name;
//   }
//   name: string;
// }
//
// class Users extends Array<User> {
//   searchByName(name: string) {
//     return this.filter((u) => u.name === name);
//   }
//   override toString(): string {
//     return this.map((u) => u.name).join(', ');
//   }
// }
// const users = new Users();
// users.push(new User('Vasya'));
// users.push(new User('Petya'));
// console.log(users.toString());
//
// class UserList {
//   users: User[];
//   push(u: User) {
//     this.users.push(u);
//   }
// }
//
// class Payment {
//   date: Date;
// }
// // Inheritance:
// class UserWithPayment1 extends Payment {
//   name: string;
// }
// // Composition:
// class UserWithPayment2 {
//   constructor(user: User, payment: Payment) {
//     this.user = user;
//     this.payment = payment;
//   }
//   user: User;
//   payment: Payment;
// }
//
// // VISIBILITY OF PROPERTIES
// // public - публичные свойства, доступные внутри класса и снаружи.
// // private - привантные свойства, доступные только внутри класса.
// // protected - защищённые свойства, доступные внутри класса и внутри наследуемого класса.
// class Vehicle {
//   public make: string;
//   private damages: string[];
//   private _model: string;
//   protected run: number;
//   #price: number;
//   set model(m: string) {
//     this._model = m;
//   }
//   get model() {
//     return this._model;
//   }
//   isPriceEqual(v: Vehicle) {
//     return this.#price === v.#price;
//   }
//   addDamage(damage: string) {
//     this.damages.push(damage);
//   }
// }
// class EuroTruck extends Vehicle {
//   setRun(km: number) {
//     this.run = km / 0.62;
//     // this.damages; // error
//   }
// }
// new Vehicle();
//
// // EXERCISE 5: CREATING PRODUCT'S CART
// // Необходимо сделать корзину (Cart) на сайте,
// // которая имееет список продуктов (Product), добавленных в корзину
// // и переметры доставки (Delivery). Для Cart реализовать методы:
// // - Добавить продукт в корзину
// // - Удалить продукт из корзины по ID
// // - Посчитать стоимость товаров в корзине
// // - Задать доставку
// // - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// // Product: id, название и цена
// // Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
//
class Product {
  constructor(public id: number, public name: string, public price: number) {}
}
class Delivery {
  constructor(public date: Date) {}
}
class HomeDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date);
  }
}
class ShopDelivery extends Delivery {
  constructor(public shopId: string) {
    super(new Date());
  }
}
type DeliveryOptions = HomeDelivery | ShopDelivery;
class Cart {
  private products: Product[] = [];
  private delivery: DeliveryOptions;

  public addProductToCart(product: Product): void {
    this.products.push(product);
  }
  public removeProductFromCart(id: number): void {
    this.products = this.products.filter((p: Product) => p.id !== id);
  }
  public countTotalPrice(): number {
    return this.products
      .map((p: Product) => p.price)
      .reduce((acc: number, p: number) => {
        return acc + p;
      }, 0);
  }
  public setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }
  public checkout() {
    if (this.products.length === 0)
      throw new Error('Добавьте товар в корзину!');
    if (!this.delivery) throw new Error('Укажите способ доставки!');
    return { success: true };
  }
}
const cart = new Cart();
cart.addProductToCart(new Product(1, 'Печенье', 10));
cart.addProductToCart(new Product(2, 'Вафли', 20));
cart.addProductToCart(new Product(3, 'Торт', 35));
cart.removeProductFromCart(1);
cart.setDelivery(new HomeDelivery(new Date(), "unost' street"));
console.log(cart.countTotalPrice());
console.log(cart.checkout());
