
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
                    name: "instructions"
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

    console.log(userInput)
    const usertitle = userInput.title

    var output = (`
# ${usertitle}

## Table Of Contents

[Installation](#Installation)

[Usage](#usage)

[License](#License)

[Contributing Guidelines](#contributingguidelines)

[Test](#test)

[Questions](#questions)


## Installation

## Usage

## License

## Contributing Guidelines

## Tests

## Questions
* If you have any any more question you can email me at 
* My github profile link[github link]
`)

    var writeResult = fs.writeFileSync('readMe.md', output)
    console.log("file generated....")

}






init();
