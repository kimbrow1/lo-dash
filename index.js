'use strict'

import inquirer from 'inquirer';

const question = 
[{
    type: 'input',
    name: 'username',
    message: 'what is your name',
},
    {
        type: 'input',
        name: 'color',
        message: 'what is your faviorte color',

    },
    {
        type: 'list',
        name: 'foods',
        message: 'what are the foods you like',
        choices: ['wings', 'hotdogs', 'candy', 'drinks'],
    }
];

// happening asynchrony
 inquirer.prompt(question).then((answer) => {
    console.log(`hello my name is ${answer.username}. My favorite color is ${answer.color}. Your faviorite food ${answer.foods}`);
 });
