function instructions() {
    return `
    =========================================================
    This program will automatically generate a new file named 
    "index.html" in the ./dist directory of this 
    project.  The html file will contain the formatted team
    roster based on the data provided here.
    
    Please answer the following questions to provide the
    data for your team.  All fields are required.  The manager
    information will be requested first.

    =========================================================
    `;
    
    } // end function instructions
    
    module.exports = instructions;