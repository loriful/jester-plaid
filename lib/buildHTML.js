function buildHTML(team) {
    // build the html to write out
    
    function empLoop (team) {
        // loop through the employee array and create cards for each
        // return as one chunk to the HTML file
        
        function writeCard (emp, blurb) {
        
            // create a div container for each employee
            return `
            <div class="card">
                <div class="card-header">
                    <h2>${emp.getName()}</h2>
                    <h3>${emp.getRole()}</h3>
                </div>
                <div class="card-body">
                    <p>${emp.getId()}</p>
                    <a href="mailto:${emp.getEmail()}">Email:  ${emp.getEmail()}</a>
                    <p>${blurb}</p>
                </div>
            </div>`
            ;

        }; // end function writeCard
       
        let blurb = '';                      // employee type specifics
        let cardChunk = '';                 // the consolidated data
        
        for (i=0; i < team.length; i++) {

            switch (team[i].role.toString()) {
                case 'Manager':
                    blurb = "Office:  " + team[i].office;
                    break;
                case 'Engineer':
                    blurb = '<a href="https://github.com/' + team[i].getGithub() + '" target="_blank">GitHub:  ' + team[i].getGithub() + '</a>';
                    break;
                case 'Intern':
                    blurb = team[i].getSchool();
                    break;
                default:
                    break;
            }; // switch  
                
        cardChunk = cardChunk + (writeCard(team[i], blurb));     
        
        }; // for
              
        return cardChunk;
    }; // end function empLoop

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../src/css/style.css">
    <title>${team[0].name}'s Team</title>
   
    </head>
    <body>
        <header>
            <h1>${team[0].name}'s Team</h1>
        </header>
        <div class="container">
            ${empLoop(team)}
        </div>
    </body>
    </html>
    

    `; // end buildHTML

}; // end buildHTML
module.exports = buildHTML;
