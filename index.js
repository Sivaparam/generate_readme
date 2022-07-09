// List of packages used for application
const generate = require('./generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user input
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
        name: 'usage',
        message: 'Enter Instructions/Examples to use project:',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Enter name of screenshot to attach(with extension):',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Enter details for Credits section:',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter github username:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter License details:',
        choices: ['Apache', 'GNU', 'NPM', 'openBSD', 'Rust', 'WordPress'],
    },
    {
        type: 'input',
        name: 'tech',
        message: 'Enter primary technology used:',
    },
];

// Below function sends to user input to generateMarkdown js and gets the formated data and writes to README file.
function writeToFile(filename, data) {
    var content = generate.generateMarkdown(data);

    fs.writeFile(filename, content, (err) =>
        err ? console.log(err) : console.log('Data Successfully written to README file!'));
}

// This function prompts set of questions for user input and invokes writeToFile function
function init() {
    inquirer.prompt(questions)
        .then(data => {
            const filename = 'README.md';
            
            writeToFile(filename, data);
        });

}

// invokes init function
init();
