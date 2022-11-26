// Inheritance

// Base class  ---> int a; 
class User {
  constructor(username, salary) {
    this.username = username;
    this.salary = salary;
  }

  show() {
    return "Hello !" + this.username + " , my salary is Rs." + this.salary;
  }
}

// Child class -> int b = base.a + base.a
class Employee extends User {
  constructor(username, salary, doj) {
    super(username,salary);  // super -> base class
    this.doj = doj;     // this -> current class
    

    console.log(super.show());
  }
}

let e = new Employee('vivek', 100000, 908070);
