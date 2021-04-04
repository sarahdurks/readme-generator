
// CONSTANTS USED
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const createReadMe = require("./utils/createReadMe")
const writeAsync = util.promisify(fs.writeFile);

// QUESTION SERIES
// end result is 'answers' in total
function askUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
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
            name: 'email',
            message: 'What is your email address?',
            default: 'myname@domain.com',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the rules about using this project code, materials, etc.?',
            default: 'People can use this for anything as long as it is not commercial.',
        },
     
        {
            type: 'input',
            name: 'tests',
            message: 'What kind of testing was completed?',
            default: 'I did x, y and z with testing.',
        },
        {
            type: 'input',
            name: 'description',
            message: 'How would you describe this project? Give me your project details - all of them, really!',
        },
        {   // select from list
            type: 'list',
            name: 'licensing',
            message: 'What License is this used with? If you do not know, select no idea or other.',
            choices: [
                'Apache',
                'Artistic',
                'Creative Commons',
                'Educational',
                'MIT',
                'Mozilla',
                'Open Software',
                'No idea',
                'Other']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What should people do if they want to contribute to your project?',
            default: 'Reach out on Github or via email with your plan.',
        },
        {   // check multiple options
            type: 'checkbox',
            name: 'composition',
            message: 'What language(s) did you use to create your project?',
            choices: [
                'HTML', 'CSS', 'JavaScript', 'Ruby', 'React', 'Python', 'C', 'C#', 'TypeScript', 'Other'
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
            message: 'Please give details about who, what, and how resources helped you in this project.',
        }
    ]);
}
async function init() {
    try {
        const answers = await askUser();
        const buildContent = createReadMe(answers);
        writeAsync('./written/README.md', buildContent);
        // overwrites last version - no new document
        console.log('README.md successfully created in the written folder.');
    } catch (err) {
        console.log(err);
    }
}

init();
