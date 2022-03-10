function buildHTML(team) {
    // build the html to write out
    console.log('this is the team ');

    for (let i=0; i < team.length;i++) {
        console.log(team[i].employee);
    };
    
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
    <h2>${team[0].name}</h2>
    <h3>${team[0].role}</h3>
</body>
</html>
    

    `; // end buildHTML

}

module.exports = buildHTML;
