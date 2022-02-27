const Employee = require('../lib/Employee');
class Intern extends Employee {
    constructor(name = '', email = '') {
        super(name);
        this.name = name;
        this.id = Math.floor(Math.random() * 1000 + 3000);          // generate random id between 1000-4000
        this.email = email;
    }

}

module.exports = Intern;