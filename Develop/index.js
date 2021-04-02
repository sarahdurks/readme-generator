// TODO: Include packages needed for this application
const inquirer = require('inquirer');


inquirer
  .prompt([
    {
      name: 'projectName',
      message: 'What is your project named?',
      default: 'The awesomest idea ever, of course!',
    },

    {
        type: 'editor',
        name: 'projectDescription',
        message: 'Give me your project details - all of them, really!!',
      },

      {
        type: 'checkbox',
        name: 'projectComposition',
        message: 'What languages did you use to create your project?',
        choices: [
          'HTML', 'CSS', 'JavaScript', 'Ruby',
        ],
      },
      {
        type: 'editor',
        name: 'projectInstallation',
        message: 'This is how you set this thing up!',
      },

      {
        type: 'editor',
        name: 'projectCredits',
        message: 'This is what and who helped me.',
      },


  ])
  .then(answers => {
    console.info('Answers:', answers);
  });
  .then(answers => {
    console.info('Answer:', answers.story);
  });
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
