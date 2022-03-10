function buildHTML(team) {
    // build the html to write out
    
    function empLoop (team) {
        // loop through the employee array and create cards for each
        // and splat to the page for return
        // let cardContainer = document.querySelector("#banner");
    
        function writeCard (emp) {
        
            // create a container for each employee
            return `
            <div id="emp-card">
                <h2>${emp.name}</h2>
                <h2>${emp.role}</h3>
                <h3>ID:  ${emp.id}</h3>
                <h3>Email:  ${emp.email}</h3>
                <h3>Office:  ${emp.office}</h3>
            </div>
            `;

        }; // end function writeCard
       
        for (let i=0; i < team.length; i++) {
            return writeCard(team[i]);
        } // for

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
        </header>
        <main class="container">
            <div id="emp-card">
                <h2>${team[0].name}</h2>
                <h2>${team[0].role}</h3>
                <h3>ID:  ${team[0].id}</h3>
                <h3>Email:  ${team[0].email}</h3>
                <h3>Office:  ${team[0].office}</h3>
            </div>
            ${empLoop(team)}
    </main>
</body>
</html>
    

    `; // end buildHTML

}

module.exports = buildHTML;
