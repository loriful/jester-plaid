class Employee {
    constructor(name = '', email = '') {
        this.name = name;
        this.id = Math.floor(Math.random() * 1000 + 3000);          // generate random id between 1000-4000
        this.email = email;
    }

getName() {

} // method getName

getId() {

} // method getId

getEmail() {

} // method getEmail

getRole() {

} // method getRole

}
module.exports = Employee;