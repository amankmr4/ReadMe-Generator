
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');

async function init() {

    const userInput = await
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What your project Title?",
                    name: "title"
                },
                {
                    type: "input",
                    message: "what is  the description of your project?",
                    name: "description"
                },
                {
                    type: "input",
                    message: "What is steps do you require to install this project? ",
                    name: "installation"
                },

                {
                    type: "input",
                    message: "What is steps for usage of this project? ",
                    name: "usage"
                },

                {
                    type: "input",
                    message: "Please enter contribution guidelines",
                    name: "contributing"
                },

                {
                    type: "input",
                    message: "Please enter the test instruction for this project",
                    name: "test"
                },


                {
                    type: "list",
                    name: "license",
                    message: "please choise which license you will be using",
                    choices: ["MIT", "Apache License 2.0", "Mozilla Public License 2.0"]

                },

                {
                    type: "input",
                    message: "What is your user name?",
                    name: "username"
                },

                {
                    type: "input",
                    message: "what is your email address",
                    name: "email"
                },

            ])
    //Putting all the inputs from the prompt into an constanent and it it will be called back later
    console.log(userInput)
    const projectTitle = userInput.title
    const projectDescription = userInput.description
    const projectInstallation = userInput.installation
    const projectTest = userInput.test
    const projectUsage = userInput.usage
    const projectContributingGuideline = userInput.contributing
    const projectLicense = userInput.license
    const gitUsername = userInput.username
    const userEmail = userInput.email

    licenseOutputLink = () => {
        if (projectLicense == "MIT") {
            const licenseLink = "https://opensource.org/licenses/MIT"
            return licenseLink
        } else if (projectLicense == "Apache License 2.0") {
            const licenseLink = "https://opensource.org/licenses/Apache-2.0"
            return licenseLink
        } else if (projectLicense == "Mozilla Public License 2.0") {
            const licenseLink = "https://opensource.org/licenses/MPL-2.0"
            return licenseLink
        }
    }

    licenseOutputBadge = () => {
        if (projectLicense == "MIT") {
            const licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            return licenseBadge
        } else if (projectLicense == "Apache License 2.0") {
            const licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            return licenseBadge
        } else if (projectLicense == "Mozilla Public License 2.0") {
            const licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
            return licenseBadge
        }
    }

    const licenseLink = await licenseOutputLink();
    const licenseBadge = await licenseOutputBadge();

    console.log(licenseLink)
    try {
        //We will now call out github API for the github details
        const gitOutput = await axios.get(`https://api.github.com/users/${gitUsername}`);
        const githubdata = gitOutput.data
        const githubProfile = githubdata.html_url

        console.log(typeof (githubProfile))




        var output = (`
# ${projectTitle}

## Table Of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Test](#test)

[Contributing Guidelines](#Contributing-Guidelines)

[License](#license)

[Questions](#questions)

## Description
${projectDescription}



## Installation
${projectInstallation}



## Usage
${projectUsage}



## License
${projectLicense}

${licenseBadge}



## Contributing Guidelines
${projectContributingGuideline}




## Test
${projectTest}


## Questions
* If you have any any more question you can email me at ${userEmail}
* My github profile link ${githubProfile}




`)

        var writeResult = fs.writeFileSync('readMe.md', output)
        console.log("file generated....")
    } catch (error) {
        console.log(error)
        console.log("there was an error please read above!!")
    }
}

init();






