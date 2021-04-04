
// Generates README.md from answers solicited in index.js via inquirer questions
// Output formatted for markdown
function createReadMe(answers) {
    return `

# Project ${answers.projectName} 🏆 


## Table of Contents ✔️

- [Description of Project](#Description)
- [Installation Instructions](#Installation)
- [Languages & Tools Used](#Toolkit)
- [License](#Licensing)
- [Contributors and Resources](#Credits)
- [Tests](#Tests)
- [Contact](#Contact)

### Description 💡

${answers.description} 

### Installation 💾

Here's how you setup this project:

${answers.installation}  


### Toolkit 🧰 

${answers.composition}  

### Licensing ![badge](https://img.shields.io/badge/license-${answers.licensing}-brightgreen)

This application is covered by the ${answers.licensing} license. 

### Credits 🤝 
${answers.credits} 

### Tests 🤓
${answers.tests}


### Contact 👋
Get in touch with me: [${answers.username}](https://github.com/${answers.username})


This README was generated with 🧡  by [The Ultimate README.md generator](https://github.com/sarahdurks/readme-generator) 
`;
}

module.exports = createReadMe;