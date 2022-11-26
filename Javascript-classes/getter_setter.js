// Getter & setter

class Student {
  constructor(name) {
    this.studentname = name;
  }

  get sname() {
    return this.studentname;
  }

  set sname(input_name) {
    this.studentname = input_name;
  }
}

let s = new Student('vivek')

// setter
s.sname = 'Prisha'

// getter
console.log(s.sname);
