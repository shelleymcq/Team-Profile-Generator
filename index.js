// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
    .then(answers => {
        console.log(answers);
    })
}

getInput()


