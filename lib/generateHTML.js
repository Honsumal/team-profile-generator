function empCardBuilder (input) {
        return `<div class="card m-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${input.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${input.getRole()}</h6>
          <p class = "card-text">ID: ${input.getId()}</p>
          <p class="card-text">Email: <a href = "mailto:${input.getEmail()}">${input.getEmail()}</a></p>
        </div>
      </div>`;
}

function engCardBuilder(input) {
    return `<div class = "card m-2" style = "width: 18rem;">
    <div class = "card-body">
        <h5 class = "card-title">${input.getName()}</h5>
        <h6 class = "card-subtitle mb-2 text-muted">${input.getRole()}</h6>
        <p class = "card-text">ID: ${input.getId()}</p>
        <p class = "card-text">Email: <a href = "mailto:${input.getEmail()}">${input.getEmail()}</a></p>
        <p class = "card-text">Github: <a href = "https://github.com/${input.getGithub()}">https://github.com/${input.getGithub()}</a></p>
    </div>
    </div>`
}

function iCardBuilder(input) {
        return `<div class = "card m-2" style = "width: 18rem;">
        <div class = "card-body">
            <h5 class = "card-title">${input.getName()}</h5>
            <h6 class = "card-subtitle mb-2 text-muted">${input.getRole()}</h6>
            <p class = "card-text">ID: ${input.getId()}</p>
            <p class = "card-text">Email: <a href = "mailto:${input.getEmail()}">${input.getEmail()}</a></p>
            <p class = "card-text">School Name: ${input.getSchool()}</p>
        </div>
        </div>`;
}

function mCardBuilder (input) {
    return `<div class = "card m-2" style = "width: 18rem;">
    <div class = "card-body">
        <h5 class = "card-title">${input.getName()}</h5>
        <h6 class = "card-subtitle mb-2 text-muted">${input.getRole()}</h6>
        <p class = "card-text">ID: ${input.getId()}</p>
        <p class = "card-text">Email: <a href = "mailto:${input.getEmail()}">${input.getEmail()}</a></p>
        <p class = "card-text">Office Number: ${input.getOfficeNumber()}</p>
    </div>
    </div>`
}

function generateHTML (teamArray) {
    let  cardArray = []

    for (i in teamArray) {
        switch (teamArray[i].getRole()){
            case "Employee":
                cardArray.push(empCardBuilder(teamArray[i]));
                break;
            case "Engineer":
                cardArray.push(engCardBuilder(teamArray[i]));
                break;
            case "Intern":
                cardArray.push(iCardBuilder(teamArray[i]));
                break;
            case "Manager":
                cardArray.push(mCardBuilder(teamArray[i]));
                break;
        }
    }

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Team Profile</title>
    </head>
    <body>
        <div class="container">
            <div class="jumbotron" width = "100%">
            <h1 class = "text-center">Team Profile Builder</h1>
            <p class = "text-center">Welcome all! Here is your team!</p>
            </div>
        </div>

        <div class = "container d-flex flex-row justify-content-center flex-wrap">
            ${cardArray.join("\n")}
        </div>
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    `
            
}


module.exports = generateHTML