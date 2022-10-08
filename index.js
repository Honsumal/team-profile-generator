// Installations
fs = require('fs');
inq = require ('inquirer');

// Classes
Employee = require('./lib/Employee');
Engineer = require('./lib/Engineer');
Intern = require('./lib/Intern');
Manager = require('./lib/Manager');

const questions = [
    {
        type: 'list',
        message: 'Please enter which role you team member holds: ',
        name: 'role',
        choices: [
            'Employee',
            'Engineer',
            'Intern',
            'Manager',
        ]
    },
    {
        type: 'input',
        message: 'Please enter the name of your team member: ',
        name: 'name',
        validate: (nInput) => {
            if (nInput){
                return true
            } else {
                console.log('Please enter the name of your team member.')
                return false
            }
        }

    },
    {
        type: 'input',
        message: 'Please enter the id of your team member: ',
        name: 'id',
        validate: (iInput) => {
            if (iInput) {
                return true
            } else {
                console.log('Please enter the id of your team member.')
                return false
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter your team member\'s email address: ',
        name: 'email',
        validate: (eInput) => {
            if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(eInput)){ //obtained from regexr.com email address validation
                return true
            } else {
                console.log('Please enter a valid email address.')
                return false
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter your engineer\'s github username: ',
        name: 'github',
        when: (input) => input.role === 'Engineer',
        validate: (nameInput) => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter your engineer\'s github username.')
                return false
            }
        }
    }


]

function init () {

}

init()