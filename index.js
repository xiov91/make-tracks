const inquirer = require('inquirer');
const mysql = require('mySQL');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'viewOptions',
            message: 'Choose from the following options:',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee'],
        },
    ])
    .then(answers => {
        const { choices } = answers;

        if (choices == 'View All Departments') {
            viewDepartments();
        } else if (choices == 'View All Roles') {
            viewRoles();
        }
    });

const viewDepartments = () => {
    const sql = "SELECT department.id AS id, department.name AS department";

    console.log(sql);
    return;
};