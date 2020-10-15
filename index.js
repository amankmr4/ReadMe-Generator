
const inquirer = require("inquirer");
const axios = require("axios");


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
                    name: "contributors"
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

    const username = userInput.username;
    const Title = userInput.title;
    const description = userInput.description;
    const installation = userInput.installation;
    const license = userInput.license;

    console.log(username);
    console.log(Title);
    console.log(description);
    console.log(installation);
    console.log(license);

    const gitResponse = await axios.get(`https://api.github.com/users/${username}`);
    const gitInfo = gitResponse.data
    const gitProfilePage = gitResponse.html_url



    console.log(gitInfo)
}

init();
