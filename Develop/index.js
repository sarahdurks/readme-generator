
const inquirer = require('inquirer');



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
