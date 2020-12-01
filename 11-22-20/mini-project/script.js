const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your first name?",
      name: "username",
    },
    {
      type: "input",
      message: "Where do you live?",
      name: "location",
    },
    {
      type: "input",
      message: "A short, one sentence bio:",
      name: "bio",
    },
    {
      type: "input",
      message: "LinkedIn profile",
      name: "linkedin",
    },
    {
      type: "input",
      message: "Github profile",
      name: "github",
    },
  ])
  .then((response) =>
    fs.writeFile(
      "bio.html",
      `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <title>mini node project</title>
        </head>
        <body>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4"></h1>
                    <p class="lead"></p>
                    <h3>Example heading <span class="badge badge-heading">Contact Me</span></h3>
                    <ul class="list-group">
                        <li class="list-group-item">My name is ${response.username}</li>
                        <li class="list-group-item">I live in ${response.location}</li>
                        <li class="list-group-item">${response.bio}</li>
                        <li class="list-group-item">My linked in profile: ${response.linkedin}</li>
                        <li class="list-group-item">My github profile: ${response.github}</li>
                    </ul>
                </div>
            </div>

            <script type="text/javascript" src="script.js"></script>
        </body>
        </html>`,
      (err) => (err ? console.error(err) : console.log("bravo!"))
    )
  );
