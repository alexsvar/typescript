// CLASSES
// CREATING A CLASS
class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
}
const user1 = new User('Alex');
console.log(user1);
user1.name = 'Alexey';
console.log(user1);
// Чтобы было не инициализированно свойство role, чтобы использовать классы как интерфейсы,
// 1. В tsconfig нужно свойство strictPropertyInitialization установить в false:
// "strictPropertyInitialization": true; Check for class properties that are declared but not set in the constructor.
// 2. Пославить после role восклицательный знак: role!: number;
class Admin {
  role: number;
}
const admin = new Admin();
admin.role = 1;
