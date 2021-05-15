const inquirer = require("inquirer");
const chalk = require("chalk");
const Manager = require("./lib/Manager");

// arrays for questions
const employeeQuestions = [
  { type: "input", message: `Please enter employee's name: `, name: "name" },
  {
    type: "input",
    message: `Please enter their employee ID number: `,
    name: "id",
  },
  {
    type: "input",
    message: `Please enter their email address: `,
    name: "email",
  },
];
const managerQuestions = [
  {
    type: "input",
    message: `Please enter their office number: `,
    name: "officeNum",
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: `Please enter their GitHub id: `,
    name: "github",
  },
];
const internQuestions = [
  {
    type: "input",
    message: `Please enter their school: `,
    name: "school",
  },
];
const menuQuestion = [
  {
    type: "list",
    message: `What type of employee would you like to add next? `,
    choices: ["Engineer", "Intern", "None"],
    name: "next",
  },
];

const team = []; // an array of team members

function dispManagerQuestions() {
  const questions = [...employeeQuestions, ...managerQuestions];

  inquirer.prompt(questions).then((answers) => {
    try {
      team.push(
        new Manager(answers.name, answers.id, answers.email, answers.officeNum)
      );
    } catch (error) {
      console.log(chalk.redBright(error));
      console.log("Please try again");
      dispManagerQuestions();
    }
    // dispMenu();
  });
}

function init() {
  console.log(chalk.bgYellow.red.bold(" Welcome to Team Builder "));
  dispManagerQuestions();
}

init();
