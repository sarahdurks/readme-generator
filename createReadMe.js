
function createReadMe(answers) {
    return `

# Project ${answers.name} 🏆 

 
## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Languages & Tools](#toolkit)
- [License](#licensing)
- [Contributing](#credits)
- [Tests](#tests)
- [Contact](#contact)

### Description

${answers.description} 

### Installation

${answers.installation}  


### Toolkit 🧰 

${answers.composition}  

### Licensing

My application is covered by the ${answers.licensing}license. 
![badge](https://img.shields.io/badge/license-${answers.licensing}-brightgreen)

### Credits 🤝 
${answers.credits} 

### Tests
${answers.tests}


### Contact

Get in touch: [${answers.username}](https://github.com/${answers.username})


This README was generated with 🧡  by [The Ultimate README.md generator]https://github.com/sarahdurks/readme-generator) 
`;
}

module.exports = createReadMe;