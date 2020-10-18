
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
                    message: "Enter the description of your project",
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
                    message: "Please enter your email address",
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
    const gitUSername = userInput.username
    const userEmail = userInput.email

    // this function will check what license is chosen
    licenseOutput = () => {
        if (projectLicense == "MIT") {
            const licenseLink = "https://opensource.org/licenses/MIT"
            return licenseLink
        } else if (projectLicense == "Apache License 2.0") {
            const licenseLink = "https://opensource.org/licenses/Apache-2.0"
            return licenseLink
        } else if (projectLicense == "Apache License 2.0") {
            const licenseLink = "https://opensource.org/licenses/MIT"
            return licenseLink
        }
    }

    const licenseLink = await licenseOutput();

    console.log(licenseLink)





    //Here we will output the markdown file
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
${licenseLink}



## Contributing Guidelines
${projectContributingGuideline}
<br>



## Test
${projectTest}
<br>

## Questions
* If you have any any more question you can email me at ${userEmail}
* My github profile link[github link]
`)

    var writeResult = fs.writeFileSync('readMe.md', output)
    console.log("file generated....")

}

init();