const fs = require("fs");
const path = require("path");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// Be sure we have a single path to the
const newHTML = path.join(process.cwd(), "dist", "index.html");

// ensure directory exists
function makeDistFolder() {
  const distFolder = path.join(process.cwd(), "dist");

  console.log("makeDistFolder");

  try {
    if (!fs.existsSync(distFolder)) {
      // console.log("mkdir");
      fs.mkdirSync(distFolder);
    }
  } catch (err) {
    console.error(err);
  }
  // console.log(fs.existsSync(distFolder));
}

// copy css file (to ensure it exists)
function copyCSS() {
  const localCSS = path.join(process.cwd(), "src", "bootstrap.css");
  const newCSS = path.join(process.cwd(), "dist", "bootstrap.css");

  console.log("copyCSS");

  //  By default, destination is overwritten if it already exists.
  fs.copyFile(localCSS, newCSS, (err) =>
    err ? console.log("Error Found:", err) : true
  );
}

// copy the template file to the new directory and rename it to index.html
function copyHeaderTemplate() {
  const localHeader = path.join(process.cwd(), "src", "header.template.html");

  console.log("copyHeaderTemplate");

  //  By default, destination is overwritten if it already exists.
  fs.copyFile(localHeader, newHTML, (err) =>
    err ? console.log("Error Found:", err) : true
  );
}

function makeManagerCard(arrTeam) {
  const manager = arrTeam[0]; //Manager will always be first in array

  console.log("makeManagerCard");

  const card = `<!-- Manager Div (there will always be a manager) -->
    <div class="container p-2 d-flex justify-content-center">
      <div class="manager card border-primary col-12 col-md-5 col-lg-3">
        <div class="card-header lh-lg h4 text-center p-1">
          <i class="fas fa-mug-hot pe-2"></i>Manager
        </div>
        <div class="card-body px-2 pt-1">
          <h4 class="card-title">${manager.getName()}</h4>
          <ul class="list-group">
            <li class="list-group-item p-1">ID: ${manager.getId()}</li>
            <li class="list-group-item p-1">Email: ${manager.getEmail()}</li>
            <li class="list-group-item p-1">Office: ${manager.getOfficeNum()}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Start Engineer and Intern Div -->
    <div class="container p-2 d-flex justify-content-evenly flex-wrap">
        
    `;

  fs.appendFile(newHTML, card, (err) => (err ? console.log(err) : true));
}

function makeEngineerCards(arrTeam) {
  const engineers = arrTeam.filter((obj) => obj.getRole() === "Engineer");

  // console.log(engineers);
  engineers.forEach((engineer) => {
    // console.log(engineer);

    const card = `<!-- Engineer Div -->
      <div class="engineer card border-secondary col-12 col-md-5 col-lg-3 m-1">
        <div class="card-header lh-lg h4 text-center p-1">
          <i class="fas fa-code pe-2"></i>Engineer
        </div>
        <div class="card-body px-2 pt-1">
          <h4 class="card-title">${engineer.getName()}</h4>
          <ul class="list-group">
            <li class="list-group-item p-1">ID: ${engineer.getId()}</li>
            <li class="list-group-item p-1">Email: ${engineer.getEmail()}</li>
            <li class="list-group-item p-1">GitHub: ${engineer.getGithub()}</li>
          </ul>
        </div>
      </div>

`;

    fs.appendFile(newHTML, card, (err) => (err ? console.log(err) : true));
  });
}

function appendFooter() {
  // read in file fs.read
  // then append to other fs.append
  let localFooter = path.join(process.cwd(), "src", "footer.template.html");

  console.log("appendFooter");

  fs.readFile(localFooter, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("read file");
    fs.appendFile(newHTML, data, (err) => (err ? console.log(err) : true));
  });
}

function generateHTML(arrTeam) {
  // console.log(arrTeam);

  // make dist folder
  makeDistFolder();
  // copy css to dist folder
  copyCSS();
  // copy header template to dist folder;
  copyHeaderTemplate();
  // append manager card html
  makeManagerCard(arrTeam);
  // iterate through arrTeam and populate appropriate divs
  makeEngineerCards(arrTeam);
  //  append engineer cards
  //  append intern cards
  // append close Engineer and Intern container
  // append footer template
  appendFooter();
}

module.exports = generateHTML;

team = [
  new Manager("manager", "managerID", "manager@corp.com", "manager's office"),
  new Engineer("Engineer", "EngineerID", "engineer@corp.com", "engineer"),
  new Engineer("Engineer1", "EngineerID", "engineer@corp.com", "engineer"),
  new Engineer("Engineer2", "EngineerID", "engineer@corp.com", "engineer"),
  new Engineer("Engineer3", "EngineerID", "engineer@corp.com", "engineer"),
  new Intern("Intern", "InternID", "intern@corp.com", "intern school"),
];
// makeDistFolder();
// copyCSS();
// copyHeaderTemplate();
// makeManagerCard();
// appendFooter();

generateHTML(team);
// console.log(team[1].getRole());
