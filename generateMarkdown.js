// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var formatData = (`# ${data.title} \n
   \n Description \n
  ## ${data.description} \n
  ## Table of contents \n
  -[Description](#description)
  -[Installation](#installation)
  
  \n Installation Steps \n
  ## ${data.installtion}
  \n Instructions \n
  ## ${data.instructions}
  \n Credits \n
  ## ${data.credits}
  \n License \n
  ## ${data.license} \n

`);
return formatData;
}

module.exports ={generateMarkdown} ;
