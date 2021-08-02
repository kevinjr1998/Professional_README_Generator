// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)https://opensource.org/licenses/MIT]" ;
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "GNU AGPL v3":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    default:
      return "" ;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT" ;
    case "Boost Software License 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt";
    case "Mozilla Public License 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "GNU AGPL v3":
      return "https://www.gnu.org/licenses/agpl-3.0";
    default:
      return "" ;
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== ""){
 ` ## License  
  (${renderLicenseBadge(license)})${renderLicenseLink(license)}] ${data.license}}
  `
  }
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
  
  ${renderLicenseSection(license)}

  ## Tests    
  ${data.testInstruct}    

  ## Contact
  ${data.contactInfo}    

`;
}

module.exports = generateMarkdown;
