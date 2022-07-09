// TODO: Include packages needed for this application
const generate = require('./generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter Project Name:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter Project Description:',
    },
    {
        type: 'input',
        name: 'installtion',
        message: 'Enter steps for Installation:',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Enter Instructions/Examples to use project:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Enter details for Credits section:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter License details:',
    },
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
   var content = generate.generateMarkdown(data);
    fs.writeFile(filename, content, (err)=> 
    err ? console.log(err): console.log('success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            const filename = 'README.md';
           writeToFile(filename, data);
        });

}

// Function call to initialize app
init();
