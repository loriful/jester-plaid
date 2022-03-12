const inquirer = require('inquirer');

class Employee {
    constructor (emp) {
        this.name = emp.employee;
        this.id = emp.id;
        this.email = emp.email;
        this.role = 'Employee';
    }

getName() { 
      return `${this.name}`;     
} // method getName

getId() {
      return `ID:  ${this.id}`;
      
} //  end getId  

getEmail() {
      return `${this.email}`;
    
} // method getEmail

getRole() {
      return `${this.role}`;  
} // method getRole


} // end class

module.exports = Employee;