// Installations
let fs = require('fs');
let inq = require ('inquirer');
let generateHTML = require('./lib/generateHTML')

// Classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let teamArray = []

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
                console.log(' Please enter the name of your team member.')
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
                console.log(' Please enter the id of your team member.')
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
                console.log(' Please enter a valid email address.')
                return false
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter your engineer\'s github username: ',
        name: 'github',
        when: (input) => input.role === 'Engineer',
        validate: (gInput) => {
            if (gInput) {
                return true
            } else {
                console.log(' Please enter your engineer\'s github username.')
                return false
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter your intern\'s school name: ',
        name: 'school',
        when: (input) => input.role === 'Intern',
        validate: (sInput) => {
            if (sInput) {
                return true
            } else {
                console.log(' Please enter your intern\'s school name')
                return false
            }
        }
    },
    {
        type: 'number',
        message: 'Please enter your manager\'s office number: ',
        name: 'office',
        when: (input) => input.role === 'Manager',
        validate: (oInput) => {
            if (Number.isInteger(oInput) && !Number.isNaN(oInput) && (Math.sign(oInput) === 1)) { //ensures that input is a positive integer
                return true
            } else {
                console.log(' Please enter a valid office number.')
                return false
            }
        }
    },
    {
        type: 'confirm',
        message: 'Do you want to confirm adding this team member? ',
        name: 'confirmEmployee',
    },
    {
        type: 'confirm',
        message: 'Do you have more team members to add? ',
        name: 'addEmployee',
    }


]

function getInput () {
    return inq
        .prompt(questions)
        .then(input => {
            if (!input.confirmEmployee && input.addEmployee){
                return getInput();
            } else {
                let teamMem;
                switch (input.role) {
                    case "Employee":
                        teamMem = new Employee (input.name, input.id, input.email);
                        teamArray.push(teamMem);
                        break;
                    case "Engineer":
                        teamMem = new Engineer (input.name, input.id, input.email, input.github);
                        teamArray.push(teamMem);
                        break;
                        case "Intern":
                        teamMem = new Intern (input.name, input.id, input.email, input.school);
                        teamArray.push(teamMem);
                        break;
                    case "Manager":
                        teamMem = new Manager (input.name, input.id, input.email, input.office);
                        teamArray.unshift(teamMem);
                        break;
                }
            }
            if (input.addEmployee){
                return getInput();
            }
            else {
                return teamArray
            }
        })
        
        .catch(err => {
            console.log(err)
        })
}

async function init () {
    const input = await getInput();
    const html = generateHTML(input)
    fs.writeFile('./dist/index.html', html, (err) =>
    err ? console.error(err) : console.log('Input logged!'))
}

init()