const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type:  "input",
            message: "What is your name?",
            name: "username"
        },
        {
            type: "input",
            message: "What language do you speak?",
            name: "language"
        },
        {
            type: "input",
            message: "What is your preferred method of communication?",
            name: "comms"
        }
    ]).then((response) => 
        fs.writeFile('newFile.txt', `${response.username}\n${response.language}\n${response.comms}`, (err) =>
        err ? console.error(err) : console.log("Success!")
        ))
        