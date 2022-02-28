const Employee = require('../lib/Employee');
class Manager extends Employee {
    constructor(name = '', officenumber = '') {
        super(name);
        this.officenumber = officenumber;
    }

getRole() {

} // method getRole, overridden to return 'Manager'

}

module.exports = Manager;