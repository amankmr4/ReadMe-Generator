
const inquirer = require("inquirer");
const axios = require("axios");


async function init() {
    const userInput = await
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your user name?",
                    name: "username"
                },
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
                    type: "list",
                    name: "license",
                    message: "please choise whiich license you will be using",
                    choices: ["MIT", "Apache License 2.0", "Mozilla Public License 2.0"]

                }
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

    const gitavatar = gitResponse.data;



    console.log(gitURL)
}

init();
