const Employee = require('../lib/Employee');
class Manager extends Employee {
    constructor(name = '', email = '') {
        super(name);
        this.name = name;
        this.id = Math.floor(Math.random() * 1000 + 3000);          // generate random id between 1000-4000
        this.email = email;
    }

}

module.exports = Manager;