function buildHTML(team) {
    // build the html to write out
    
    function empLoop (team) {
        // loop through the employee array and create cards for each
        // return as one chunk to the HTML file
        
        function writeCard (emp, blurb) {
        
            // create a div container for each employee
            return `
            <div id="emp-card">
                <h2>${emp.getName()}</h2>
                <img src="../src/images/${emp.role}.svg/">
                <h2>${emp.getRole()}</h3>
                <h3>${emp.getId()}</h3>
                <h3>${emp.getEmail()}</h3>
                <h3>${blurb}</h3>
            </div>`
            ;

        }; // end function writeCard
       
        let blurb = '';                      // employee type specifics
        let cardChunk = '';                 // the consolidated data
        
        for (i=0; i < team.length; i++) {

            switch (team[i].role.toString()) {
                case 'Manager':
                    blurb = "Office:  " + team[i].officenumber;
                    break;
                case 'Engineer':
                    blurb = team[i].getGithub();
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
    <title>${team[0].name}'s Team</title>
   
    </head>
    <body>
        <header class="col-12 col-md-3 p-2" id="banner">
            <h1>${team[0].name}'s Team</h1>
            <img src="../src/images/card.svg"/>
        </header>
        <main class="container">
            ${empLoop(team)}
    </main>
</body>
</html>
    

    `; // end buildHTML

}; // end buildHTML
module.exports = buildHTML;
