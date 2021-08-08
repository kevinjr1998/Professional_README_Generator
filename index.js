// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        message: "Name of Project?",
        name: "projectName",
    }, 
    {
       type: "input",
       message: "Please enter a description of your project:",
       name: "projectDesc",
    },
    {
        type: "input",
        message: "How do I install this project?",
        name: "projectInstall",
    },
    {
        type: "input",
        message: "Example of project in action? (Paste a link to a video of this project in action)",
        name: "exampleLink"
    },
    {
        type: "list",
        name: "license", 
        message: "Choose your License: ", 
        choices: ["MIT", "Boost Software License 1.0", "Mozilla Public License 2.0", "GNU AGPL v3", "None"],
    },
    {
        type: "input",
        message: "Who are the contibuting members?",
        name: "members",
    },
    {
        type: "input",
        message: "Test Instructions?",
        name: "testInstruct"

    },
    {
        type: "input",
        message: "Where can you be contacted for questions?",
        name: "contactInfo",
   }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,  generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success! File saved!'));
    console.log("");
    return;
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
         .then((answers) => {
             
            // console.log(answers);
            writeToFile(`README.md`, answers);
        

    
  })   
}
// Function call to initialize app
init();
