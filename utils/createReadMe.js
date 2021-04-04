
// Generates README.md from answers solicited in index.js via inquirer questions
// Output formatted for markdown
function createReadMe(answers) {
    return `

# Project Name: ${answers.projectName} 🏆 

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Toolkit](#toolkit)
- [Licensing](#licensing)
- [Credits](#credits)
- [Contact](#contact)

### Description 💡 <a name="description"></a>

${answers.description} 

### Installation 💾 <a name="installation"></a>

Here's how you setup this project:

${answers.installation}  

### Toolkit 🧰 <a name="toolkit"></a>

${answers.composition}  

### Licensing <a name="licensing"></a> ![badge](https://img.shields.io/badge/license-${answers.licensing}-blue)

This application is covered by the ${answers.licensing} license. 

### Credits 🤝 <a name="credits"></a> 
${answers.credits} 

### Contact 👋 <a name="contact"></a> 
Get in touch with me: [${answers.username}](https://github.com/${answers.username})


###### This README was generated with 🧡  by [The Ultimate README.md generator](https://github.com/sarahdurks/readme-generator) 
`;
}

module.exports = createReadMe;