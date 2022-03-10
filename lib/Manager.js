const Employee = require('../lib/Employee');
class Manager extends Employee {
    constructor(emp) {
        super(emp);
        this.role = 'Manager';
        this.office = emp.office;
    }

getOffice() {
    return `Office:  ${this.office}`;
} // end method getOffice

getRole() {
    return `${this.role}`;
} // method getRole, overridden to return 'Manager'

} // class

module.exports = Manager;