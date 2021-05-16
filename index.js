const inquirer = require("inquirer");
const chalk = require("chalk");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

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
    choices: [
      chalk.bgHex("#a4caee").white.bold(" Engineer "),
      chalk.bgHex("#41d7a7").white.bold(" Intern   "),
      " None",
    ],
    name: "next",
  },
];

const team = []; // an array of team members

function dispManagerQuestions() {
  console.log(
    chalk` Please create the team {bgHex('#e83283').white.bold Manager's} profile `
  );
  inquirer
    .prompt([...employeeQuestions, ...managerQuestions])
    .then((answers) => {
      try {
        team.push(
          new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNum
          )
        );
        dispMenu();
      } catch (error) {
        console.log(chalk.redBright(error));
        console.log("Please try again");
        dispManagerQuestions();
      }
    });
}

function dispEngineerQuestions() {
  console.log(
    chalk` Please create the team {bgHex("#a4caee").white.bold Engineer's} profile `
  );
  inquirer
    .prompt([...employeeQuestions, ...engineerQuestions])
    .then((answers) => {
      try {
        team.push(
          new Engineer(answers.name, answers.id, answers.email, answers.github)
        );
        dispMenu();
      } catch (error) {
        console.log(chalk.redBright(error));
        console.log("Please try again");
        dispEngineerQuestions();
      }
    });
}

function dispInternQuestions() {
  console.log(
    chalk` Please create the team {bgHex('#41d7a7').white.bold Intern's} profile `
  );
  inquirer
    .prompt([...employeeQuestions, ...internQuestions])
    .then((answers) => {
      try {
        team.push(
          new Intern(answers.name, answers.id, answers.email, answers.school)
        );
        dispMenu();
      } catch (error) {
        console.log(chalk.redBright(error));
        console.log("Please try again");
        dispInternQuestions();
      }
    });
}

function dispMenu() {
  inquirer.prompt(menuQuestion).then((option) => {
    switch (option.next) {
      case "Engineer":
        dispEngineerQuestions();
        break;
      case "Intern":
        dispInternQuestions();
        break;
      default:
        makeHTMLFile();
    }
  });
}

function makeHTMLFile() {
  generateHTML(team);
}

function init() {
  console.log(
    chalk.bgHex("#686dc3").white.bold(` ----------------------- 
 Welcome to Team Builder 
 ----------------------- `)
  );
  dispManagerQuestions();
}

init();
