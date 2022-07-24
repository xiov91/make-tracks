DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE department(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    /* "to hold reference to department role belongs to" it said
    does that mean it needs to be a foreign key? */
    /* 
    department_id INTEGER NOT NULL
);

CREATE TABLE employee (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    /* "to hold reference to employee role"
    foreign key again? */
    role_id INTEGER,
    /*  to hold reference to another employee
    that is the manager of the current employee
    (null if the employee has no manager) */
    manager_id INTEGER
);