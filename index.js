// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const htmlGenerator = require('./src/htmlGenerator')
const employeesArray = require('./employees.json')

// promt user for employee information
const getInput = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Enter first name.',
                name: 'name',
            },
            {
                type: 'list',
                message: 'Choose position.',
                name: 'position',
                choices: [
                    'manager',
                    'engineer',
                    'intern',
                ]
            },
            {
                type: 'input',
                message: 'Enter ID number.',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Enter email address.',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Enter office number.',
                name: 'office',
                when: (answers) => {
                    if (answers.position === 'manager') {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: 'Enter github username.',
                name: 'username',
                when: (answers) => {
                    if (answers.position === 'engineer' || answers.position === 'manager') {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: 'Enter school.',
                name: 'school',
                when: (answers) => {
                    if (answers.position === 'intern') {
                        return true;
                    }
                }
            },
        ]
    )

    // push responses to json file to be used to generate html
    .then(answers => {
        employeesArray.push(answers);
        fs.writeFile('employees.json', JSON.stringify(employeesArray), function(err){
            if(err) console.log(err)
            console.log('Wrote to employees.json');
        });
        
        fs.writeFile(path.join(__dirname, 'dist/index.html'), htmlGenerator(employeesArray), function(err) {
            if(err) console.log(err)
            console.log('Successfully wrote our HTML to the dist folder!!!!');
        });
  
    })
}

getInput()


