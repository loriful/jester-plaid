const Employee = require('../lib/Employee');
class Engineer extends Employee {
    constructor(name = '', github = '') {
        super(name);
        this.github = github;       // github username
    }

getGithub() {

} // method getGithub

getRole() {

} // method getRole, overridden to return 'Engineer'

}
module.exports = Engineer;