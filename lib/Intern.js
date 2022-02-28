const Employee = require('../lib/Employee');
class Intern extends Employee {
    constructor(name = '', school = '') {
        super(name);
        this.school = school;
    }

getSchool() {

} // method getSchool

getRole() {

} // method getRole, overridden to return 'Intern'

}

module.exports = Intern;