
// gets the user input data and generate markdown/formatted data for README file

function generateMarkdown(data) {
  var formatData = (`# ${data.title} \n
  ![badge](https://shields.io/category/license-${data.license}-brightgreen) \n
    ## Description \n
   ${data.description} \n
     ## Table of contents \n
  -[Description](#description) \n
  -[Installation](#installation) \n
  -[Usage](#usage) \n
  -[Credits](#credits) \n
  -[License](#license) \n
  ## Installation Steps \n
  ${data.installtion}
   ## Usage \n
   This section provides instrcutions for use and includes screenshots as needed. \n
   ${data.usage} \n
   * Screenshot: \n
   ![alt text](images/${data.screenshot})
   ## Credits \n
  Collaborators for this project is/are: ${data.credits} \n
  Link to github: https://github.com/${data.username} \n
   ## License \n
   ![badge](https://img.shields.io/badge/<license>-<${data.license}>-<brightgreen>)  \n
   ![badge] (https://img.shields.io/category/<coverage>-<${data.tech}>-<blue>) \n

`);
  return formatData;
}

module.exports = { generateMarkdown };

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) { }
