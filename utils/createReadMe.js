
// Generates README.md from answers solicited in index.js via inquirer questions
// Output formatted for markdown
function createReadMe(answers) {
    return `

# Project Name: ${answers.projectName} 🏆 

## Table of Contents ![badge](https://img.shields.io/badge/license-${answers.licensing}-blue)

- [Description](#description)
- [Installation](#installation)
- [Toolkit](#toolkit)
- [Licensing](#licensing)
- [Usage](#usage)
- [Licensing](#tests)
- [Contributing](#contributing)
- [Contact](#contact)
- [Questions](#questions)

### Description 💡 <a name="description"></a>

${answers.description} 

### Installation 💾 <a name="installation"></a>

Here's how you setup this project:

${answers.installation}  

### Toolkit 🧰 <a name="toolkit"></a>

${answers.composition}  

### Licensing <a name="licensing"></a> 

This application is covered by the ${answers.licensing} license. 

### Usage  <a name="usage"></a> 

${answers.usage} 

### Tests  <a name="tests"></a> 

${answers.tests} 

### Contributing 🤝 <a name="contributing"></a> 

Resources and people who contributed include: ${answers.credits} 
If you would like to contribute to the project further, then: ${answers.contributing} 

### Contact 👋 <a name="contact"></a> 
Get in touch with me on Github: [${answers.username}](https://github.com/${answers.username})

### Questions <a name="questions"></a> 

If you have any questions, please contact me at: ${answers.email}

###### This README was generated with 🧡  by [The Ultimate README.md generator](https://github.com/sarahdurks/readme-generator) 
`;
}

module.exports = createReadMe;