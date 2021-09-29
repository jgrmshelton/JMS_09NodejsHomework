// create HTML with user response to promps
// write/output HTML file to the app root director (same folder)
// need Success message after HTML is succesfully created
// callback to verify there was no error
// maybe writeFileSync?
// inquirers .prompt() method

const inquirer = require('inquirer');
const fs = require ('fs');
const markdownGenerator = require('./assests/markdownGenerator');

const promptInfo = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Professional README Guide',  
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of project.',  
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Guidelines',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'enter project instructions -- Usage section', 
    },
    {
        type: 'input',
        name: 'license',
        message: 'license for project', 
        choices: ["Attribution-NonCommercial 4.0 International", "Apache 2.0 license", "Boost Software License 1.0", "BSD 3-Clause License", "GNU GPL v3", "ISC License"],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Other users contributions', 
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test Test Test',
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
    inquirer.prompt(promptInfo).then(function (data) {
        const file = "README.md";

        fs.writeFile(file, markdownGenerator(data), (err) => {
            if (err) {
                return console.log(err);
            }

            console.log('Success!');
        });
    });
}

init();