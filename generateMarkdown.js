// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var formatData = (`# ${data.title} \n
    ## Description \n
   ${data.description} \n
  ## Table of contents \n
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  -[License](#license)
   \n ## Installation Steps \n
  ${data.installtion}
  \n ## Usage \n
   ${data.usage}
  \n ## Credits \n
  Collaborators for this project is/are: ${data.credits} \n
  Link to github: https://github.com/${data.username} \n
  \n ## License \n
  ${data.license} \n

`);
  return formatData;
}

module.exports = { generateMarkdown };
