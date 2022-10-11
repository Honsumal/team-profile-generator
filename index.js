// Installations
let fs = require('fs');
let inq = require ('inquirer');
let generateHTML = require('./lib/generateHTML')

// Classes
// const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let teamArray = []

//Questions for Manager Input
const mQuestions = [
    {
        type: 'input',
        message: 'Please enter your name: ',
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
        message: 'Please enter your ID: ',
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
        message: 'Please enter your email address: ',
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
        message: 'Please enter your office number: ',
        name: 'office',
        validate: (oInput) => {
            if (Number.isInteger(parseInt(oInput)) && !Number.isNaN(parseInt(oInput)) && (Math.sign(parseInt(oInput)) === 1)) { //ensures that input is a positive integer
                return true
            } else {
                console.log(' Please enter a valid office number.')
                return false
            }
        }
    },
    {
        type: 'confirm',
        message: 'Have you correctly added your information? ',
        name: 'confirmEmployee',
    },
    {
        type: 'confirm',
        message: 'Do you have more team members to add? ',
        name: 'addEmployee',
    }
]

//Questions for Team Member Input
const questions = [
    {
        type: 'list',
        message: 'Is your team member an engineer or an intern? : ',
        name: 'role',
        choices: [
            'Engineer',
            'Intern',
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

function getInput (questionArray) {
    return inq
        .prompt(questionArray)
        .then(input => {
            if (!input.confirmEmployee && input.addEmployee && teamArray.length === 0) { // Recurses onto Manager input 
                return getInput(mQuestions)
            } else if (!input.confirmEmployee && input.addEmployee) { //Recurses onto Team Member Input
                return getInput(questions);
            } else if (input.confirmEmployee) { //Adds team members
                let teamMem;
                switch (input.role) {
                    case "Engineer":
                        teamMem = new Engineer (input.name, input.id, input.email, input.github);
                        teamArray.push(teamMem);
                        break;
                    case "Intern":
                        teamMem = new Intern (input.name, input.id, input.email, input.school);
                        teamArray.push(teamMem);
                        break;
                    case undefined:
                        teamMem = new Manager (input.name, input.id, input.email, input.office);
                        teamArray.unshift(teamMem); // Adds manager to the top of the list
                        break;
                }
            }
            if (input.addEmployee){
                return getInput(questions);
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
    console.log ("Adding Manager Information")
    const input = await getInput(mQuestions);
    const html = generateHTML(input)
    fs.writeFile('./dist/index.html', html, (err) =>
    err ? console.error(err) : console.log('Input logged!'))
}

init()