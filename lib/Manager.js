const Employee = require('../lib/Employee');
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.role = 'Manager';
        this.office = office;
    }

getOffice() {
    return `Office:  ${this.office}`;
} // end method getOffice

getRole() {
    return `${this.role}`;
} // method getRole, overridden to return 'Manager'

} // class

module.exports = Manager;