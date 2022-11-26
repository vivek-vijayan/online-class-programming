
let user = {
    'username' : 'Vivek',
    'salary' : 100000,
    'showName' : function() {
        console.log(`${user.username}`);
    }
}


/* Using class concept */

class User {
    username = 'Vivek';
    salary = 100000;

    constructor(name, sal) {
        this.username = name;
        this.salary = sal;
    }

    showName() {
        console.log(this.username);
    }
}

let u = new User('Vijayan', 300000);

u.showName();

