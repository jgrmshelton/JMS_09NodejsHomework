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
            
        }
    ])    
}