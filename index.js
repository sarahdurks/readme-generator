
const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");

const createReadMe = require("./utils/createReadMe")
const writeAsync = util.promisify(fs.writeFile);


function askUser(){
 return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your project named?',
            default: 'The awesomest idea ever, of course!',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github handle?',
            default: 'github name',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Give me your project details - all of them, really!!',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What License is this used with?!',
            choices: [
                'Apache',
                'Artistic',
                'Creative Commons',
                'Educational',
                'MIT',
                'Mozilla',
                'Open Software',
                'Other']
        },

        {
            type: 'checkbox',
            name: 'composition',
            message: 'What language(s) did you use to create your project?',
            choices: [
                'HTML', 'CSS', 'JavaScript', 'Ruby', 'Python', 'C', 'C#', 'TypeScript', 'Other'
            ],
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide instructions to get started with your project.',
        },

        {
            type: 'input',
            name: 'credits',
            message: 'Please give details about who and what resources helped you in this project.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Describe any testing processes used and/or available.',
        },
    ])
    .then(answers => {
        console.info('Answers:', answers);
    });
};

async function init() {
    try {
const answers = await askUser();
const buildContent = createReadMe(answers);
writeAsync('./written/README.md', buildContent);
        console.log('README.md successfully created.');
    }   catch(err) {
        console.log(err);
}
}

init();  
