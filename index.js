// Installations
fs = require('fs');
inq = require ('inquirer');

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
        message: 'Do you have more team members to add? ',
        name: 'addEmployee',
        // default: false,

    }


]

function getInput () {
    return inq
        .prompt(questions)
        .then(input => {
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

function cardBuilder (input) {
    switch (input.role) {
        case "Employee" :
            return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${input.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Employee</h6>
          <p class="card-text">ID: ${input.id}</p>
          <p class="card-text">Email: ${input.email}</p>
        </div>
      </div>`;
        case "Engineer" :
            return `<div class = "card" style = "width: 18rem;">
            <div class = "card-body">
              <h5 class = "card-title">${input.name}</h5>
              <h6 class = "card-subtitle mb-2 text-muted">Engineer</h6>
              <p class = "card-text">ID: ${input.id}</p>
              <p class = "card-text">Email: ${input.email}</p>
              <p class = "card-text">Github: <a href = "https://github.com/${input.github}">https://github.com/${input.github}</a></p>
            </div>
          </div>`
        case "Intern" :
            return `<div class = "card" style = "width: 18rem;">
            <div class = "card-body">
              <h5 class = "card-title">${input.name}</h5>
              <h6 class = "card-subtitle mb-2 text-muted">Employee</h6>
              <p class = "card-text">ID: ${input.id}</p>
              <p class = "card-text">Email: ${input.email}</p>
              <p class = "card-text">School Name: ${input.school}</p>
            </div>
          </div>`;
        case "Manager" :
            return `<div class = "card" style = "width: 18rem;">
            <div class = "card-body">
              <h5 class = "card-title">${input.name}</h5>
              <h6 class = "card-subtitle mb-2 text-muted">Employee</h6>
              <p class = "card-text">ID: ${input.id}</p>
              <p class = "card-text">Email: ${input.email}</p>
              <p class = "card-text">Office Number: ${input.school}</p>
            </div>
          </div>`
    }
}

async function init () {
    const input = await getInput();
    console.log(input)
    // fs.writeFile('./dist/holmgang.txt', JSON.stringify(input), (err) =>
    // err ? console.error(err) : console.log('Input logged!'))
}

init()