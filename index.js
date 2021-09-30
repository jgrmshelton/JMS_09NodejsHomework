// generate readme
// write/output HTML file to the app root director (same folder)
// need Success message after HTML is succesfully created
// callback to verify there was no error
// maybe writeFileSync?
// inquirers .prompt() method

const inquirer = require('inquirer');
const fs = require ('fs');
const util = require("util");

// writeFileAsync
const writeFileAsync = util.promisify(fs.writeFile);


inquirer
    .prompt ([
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
            message: 'Test Instructions: ',
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
    ])

// .then((response))
    .then((response) => writeFileAsync("README.md", content (response)))
    .then(() => console.log("README created"));

const content = function (response) {
    const readMe = `
    # Title: ${response.projectTitle}
    ## Table of Contents
    1. [Description](#description)
    </br>
    2. [Installation](#installation)
    </br>
    3. [Application Usage](#usage)
    </br>
    4. [License](#license)
    </br>
    5. [Contributions] (#contribute)
    </br>
    6. [Test Instructions](#test)
    </br>
    # <span id="description"></span>
    # Description
    ### ${response.description}
    # <span id="installation"></span>
    # Installation
    ### ${response.installation} 
    # <span id="usage"></span>
    # Application Usage
    ### ${response.usage} 
    # <span id="license"></span>
    # License
    ### ${response.license} 
    # <span id="contribute"></span>
    # Contributions
    ### ${response.contribute} 
    # <span id="test"></span>
    # Test Instructions
    ### ${response.test}
`;
return readMe;
};