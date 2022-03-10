const Employee = require('../lib/Employee');
class Intern extends Employee {
    constructor(emp) {
        super(emp);
        this.school = emp.school;
        this.role = 'Intern';
    }

getSchool() {
    return `School:  ${this.school}`;
} // method getSchool

getRole() {
    return `${this.role}`;
} // method getRole, overridden to return 'Intern'

}

module.exports = Intern;