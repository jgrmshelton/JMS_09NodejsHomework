// generate readme
// write/output HTML file to the app root director (same folder)
// need Success message after HTML is succesfully created
// callback to verify there was no error
// maybe writeFileSync?
// inquirers .prompt() method

const inquirer = require('inquirer');
const fs = require ('fs');


const promptQuestions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Project Title: ',  
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project: ',  
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Did you make any installations while creating this project?  ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Application Usage: ', 
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license did you use for this project?', 
        choices: ["Attribution-NonCommercial 4.0 International", "Apache 2.0 license", "Boost Software License 1.0", "BSD 3-Clause License", "GNU GPL v3", "ISC License"],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Are there rules for other contributors?', 
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Testing Instructions: ',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github Username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: ',
    },
]

function init() {
    inquirer.prompt(promptQuestions).then(function (data) {
        const readme = "README.md";

        fs.writeFile("README.md", (data), (err) => {
            if (err) {
                return console.log(err);
            }

            console.log('YAY! Your README.md was successfully created.');
        });
    });
}

init();