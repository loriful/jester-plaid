const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const instructions = require('./lib/instructions');
const buildHTML = require('./lib/buildHTML');    
const fileName = './dist/index.html';             // the output of the app
const team = [];                                // the gathered data

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
    ]);
    
  };  // mgrQuestion

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
          name: 'github',
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
  
  //////////////////////////////////////////////////////////////////

     doWhat()             // prompt the user for what's next (add more or quit)
     .then((result) => {
      
        switch (result.next.toString()) {
          case 'Add Engineer':
            engQuestion()                            // get the engr data
            .then (engineer => {
                team.push(new Engineer(engineer));  // add data to team
                ask();                              // recur for next step
            });
            break;
            
          case 'Add Intern':
            intQuestion()                           // get the intern data
            .then (intern => {
              team.push(new Intern(intern));       // add data to team
              ask();                              // recur for next step
            });
            break;

          default:
            // build the html and write to output
            writeToFile(fileName, buildHTML(team))
            .then(writeFileResponse => {            // inform user where the file is
              console.log(writeFileResponse.message);
            });
            break;
        }; // switch
      }); // then
      
  }; // ask

////////////////////////////////////////////////////////////////////

console.log(instructions());                   // instruct the user

mgrQuestion()                                 // get the manager data
    .then((manager) => { 
        team.push(new Manager(manager));    // add the mgr as the first array element
  
        ask();                            // ask for more, then write the output
    });