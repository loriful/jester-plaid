const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const instructions = require('./lib/instructions');
const buildHTML = require('./lib/buildHTML');

const fileName = './dist/index.html';
const team = [];

const mgrQuestion = () => {
  // gather the manager data
  return inquirer.prompt([
    {
      type: 'input',
      name: 'employee',        
      message: "What is the Managers's name? (Required)",
      validate: value => {       // required field
        if (value) {
          return true;
        } else {
          console.log("Please enter the required name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the Manager's id number? (Required)",
      validate: value => {      // required field
        if (value) {
          return true;
        } else {
          console.log('Please enter the required id.');
          return false;
        }
      }   
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Manager's email address? (Required)",
        validate: mailInput => {
            if (mailInput.includes("@")) {        // check validity
              return true;
            } else {
              console.log('Please enter a valid e-mail address.');
              return false;
          }
        }   
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the Manager's office number?. (Required)",
        validate: value => {        // required field
          if (value) {
            return true;
          } else {
            console.log('Please enter the office number.');
            return false;
          }
        }
      }
    ])
    
  };  // mgrQuestion

const engQuestion = () => {
  // gather tne engineer data
  return inquirer.prompt([
      {
          type: 'input',
          name: 'employee',        
          message: "What is the Engineer's name? (Required)",
          validate: value => {       // required field
            if (value) {
              return true;
            } else {
              console.log("Please enter the required name.");
              return false;
            }
          }
      },
      {
          type: 'input',
          name: 'id',
          message: "What is the Engineer's id number? (Required)",
          validate: value => {      // required field
            if (value) {
              return true;
            } else {
              console.log('Please enter the required id.');
              return false;
            }
          }   
      },
      {
          type: 'input',
          name: 'email',
          message: "What is the Engineer's email address? (Required)",
          validate: mailInput => {
              if (mailInput.includes("@")) {        // check validity
                return true;
              } else {
                console.log('Please enter a valid e-mail address.');
                return false;
            }
          } 
      },   
      {
        type: 'input',
        name: 'gitname',
        message: "What is the Engineer's github user name. (Required)",
        validate: value => {        // required field
          if (value) {
            return true;
          } else {
            console.log('Please the REQUIRED github user name.');
            return false;
          }
        }
      }
  ]); // prompt
}; // engQuestion

const intQuestion = () => {
  // gather the intern data
  return inquirer.prompt([
    {
      type: 'input',
      name: 'employee',        
      message: "What is the Intern's name? (Required)",
      validate: value => {       // required field
        if (value) {
          return true;
        } else {
          console.log("Please enter the required name.");
          return false;
        }
      }
  },
  {
      type: 'input',
      name: 'id',
      message: "What is the Intern's id number? (Required)",
      validate: value => {      // required field
        if (value) {
          return true;
        } else {
          console.log('Please enter the required id.');
          return false;
        }
      }   
  },
  {
      type: 'input',
      name: 'email',
      message: "What is the Intern's email address? (Required)",
      validate: mailInput => {
          if (mailInput.includes("@")) {        // check validity
            return true;
          } else {
            console.log('Please enter a valid e-mail address.');
            return false;
        }
      } 
  },  
    {
      type: 'input',
      name: 'school',
      message: "What is the Intern's school name. (Required)",
      validate: value => {        // required field
        if (value) {
          return true;
        } else {
          console.log('Please enter the REQUIRED school.');
          return false;
        }
      }
    }
  ]); // prompt
}; // intQuestion
function writeToFile(fileOut, data) {

  return new Promise((resolve, reject) => {
      fs.writeFile(fileOut, data, err => {
          if (err) {
              reject(err);
              return;
          }
          resolve({
              ok: true,           // tell the user where the file is
              message: '\n \n ======================================== \n Your README was successfully created at this location: ' + fileOut + '\n \n ========================================'
          });
      });
  });
}; // end function writeToFile

function ask() {
  // add employees from team until user signal's complete then build the html & write

  const doWhat = () => {
    return inquirer.prompt([
    {
      type: 'checkbox',
      name: 'next',
      message: 'Choose the next action. (One selection is required.)',
      choices: ['Add Engineer','Add Intern','All done!'],
      default: 'All done!',
    }
  ]);
  }; // doWhat

     doWhat()
     .then((result) => {
      console.log('before switch' + result.next.toString());
        switch (result.next.toString()) {
          case 'Add Engineer':
            engQuestion()
            .then (engineer => {
              console.log('in add eng');
              team.push(new Engineer(engineer));
              ask();
            });
            break;
            
          case 'Add Intern':
            intQuestion()
            .then (intern => {
              team.push(new Intern(intern));
              ask();
            });
            break;
          default:
            // build the html and write to output
            writeToFile(fileName, buildHTML(team));
            break;
        }; // switch
      }); // then
  }; // ask

////////////////////////////////////////////////////////////////////

console.log(instructions());                   // instruct the user

mgrQuestion()                              // get the manager data
    .then((manager) => { 
        team.push(new Manager(manager));    // build the array
        console.log('next we ask');
        ask();                            // ask for more
    })         
    .catch(err => {                     // display error, if any
        console.log(err);
    });