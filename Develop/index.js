// TODO: Include packages needed for this application
const inquirer = require('inquirer');

inquirer
    .prompt([
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
            type: 'editor',
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
            message: 'What languages did you use to create your project?',
            choices: [
                'HTML', 'CSS', 'JavaScript', 'Ruby', 'Python', 'C', 'C#', 'TypeScript', 'Other'
            ],
        },
        {
            type: 'editor',
            name: 'installation',
            message: 'This is how you set this thing up!',
        },

        {
            type: 'editor',
            name: 'credits',
            message: 'This is what and who helped me.',
        },
        {
            type: 'editor',
            name: 'tests',
            message: 'Describe any testing processes.',
        },


    ])
    .then(answers => {
        console.info('Answers:', answers);
    });

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
