// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        question: "Name of Project?",
        name: "projectName",
    }, 
    {
       type: "input",
       question: "Please enter a description of your project:",
       name: "projectDesc",
    },
    {
        type: "input",
        question: "How do I install this project?",
        name: "projectInstall",
    },
    {
        type: "input",
        question: "Example of project in action? (Paste a link to a video of this project in action)",
        name: "exampleLink"
    },
    {
        type: "list",
        name: "license", 
        message: "Choose your License: ", 
        choices: ["MIT", "Boost Software License 1.0", "Mozilla Public License 2.0", "GNU AGPL v3"],
    },
    {
        type: "input",
        question: "Who are the contibuting members?",
        name: "members",
    },
    {
        type: "input",
        question: "Test Instructions?",
        name: "testInstruct"

    },
    {
        type: "input",
        question: "Where can I be contacted for questions?",
        name: "contactInfo",
   }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
         .then((answers) => {
             
            console.log(answers);

    
  })

    
}


// Function call to initialize app
init();
