const Employee = require('../lib/Employee');
class Engineer extends Employee {
    constructor(emp) {
        super(emp);
        this.github = emp.github;       // github username
        this.role = 'Engineer';
    }

getGithub() {
      return `GitHub:  ${this.github}`;
} // method getGithub

getRole() {
      return `${this.role}`;
} // method getRole, overridden to return 'Engineer'

}
module.exports = Engineer;