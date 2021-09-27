// create HTML with user response to promps
// write/output HTML file to the app root director (same folder)
// need Success message after HTML is succesfully created
// callback to verify there was no error
// maybe writeFileSync?
// inquirers .prompt() method

const inquirer = require('inquirer');
const fs = require ('fs');

const promptInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Professional README Guide',  
        },
        {
            type: 'input',
            name: 'description',
            message: '',  
        },
        {
            type: 'input',
            name: 'installation',
            message: '',
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
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Other users contributions', 
        },
        {
            type: '',
            name: 'tests',
            message: ''
        },
    ])    
}