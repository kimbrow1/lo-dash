'use strict'

const inquirer = require('inquirer');

const question = 
[{
    type: 'input',
    name: 'name',
    message: 'what is your name',
},
    {
        type: 'input',
        name: 'color',
        message: 'what is your faviorte color',

    }
];

// happening asynchrony
 inquirer.prompt(question).then((answer) => {
    console.log(answer);
 });
