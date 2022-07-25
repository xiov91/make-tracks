const inquirer = require('inquirer');

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
    const {choices} = answers;

    if (choices == 'View All Departments') {
        viewDepartments();
    }    
  });

  const viewDepartments = () => {
    let sql = SELECT department.name AS department;
  };