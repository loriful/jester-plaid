const Employee = require('../lib/Employee');
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;       // github username
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