// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" ;
      break;
    case "":
      // code block
      break;
    default:
      // code block
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  if (license !== ""){
 ` ## License  
  [![badge](${renderLicenseBadge(license)})${renderLicenseLink(license)}] ${data.license}}
  `
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}  
  ## Description  
  ${data.projectDesc}  
  ## Table of Contents  

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation    
  ${data.projectInstall}    

  ## Usage
  [link to demonstration](${data.exampleLink})

  ## Credits    
  ${data.members}    
  
    

  ## Tests    
  ${data.testInstruct}    

  ## Contact
  ${data.contactInfo}    

  
`;
}

module.exports = generateMarkdown;
