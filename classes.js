'use strict';
// CLASSES
// CREATING A CLASS
class User {
  constructor(name) {
    this.name = name;
  }
}
const user1 = new User('Alex');
console.log(user1);
user1.name = 'Alexey';
console.log(user1);
