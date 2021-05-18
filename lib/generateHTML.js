const fs = require("fs");
const path = require("path");

// set up a variable to store the write stream to - Do this rather than continually opening/closing file with a bunch of quick appends. This also fixed the problem of cards being out of order, because the append is done when the cards are done and not asynchronously.
let indexHTMLStream;

// ensure directory exists
function makeDistFolder() {
  const distFolder = path.join(process.cwd(), "dist");

  try {
    if (!fs.existsSync(distFolder)) {
      fs.mkdirSync(distFolder);
    }
  } catch (err) {
    console.error(err);
  }
}

// copy css file (to ensure it exists)
function copyCSS() {
  const localCSS = path.join(process.cwd(), "src", "bootstrap.css");
  const newCSS = path.join(process.cwd(), "dist", "bootstrap.css");

  //  By default, destination is overwritten if it already exists.
  fs.copyFile(localCSS, newCSS, (err) =>
    err ? console.log("Error Found:", err) : true
  );
}

// copy the template file to the new directory and rename it to index.html
function copyHeaderTemplate() {
  const localHeader = path.join(process.cwd(), "src", "header.template.html");
  const newHTML = path.join(process.cwd(), "dist", "index.html");

  //  By default, destination is overwritten if it already exists.
  try {
    fs.copyFileSync(localHeader, newHTML);

    // open the file to write from a stream (https://dev.to/sergchr/tricks-on-writing-appending-to-a-file-in-node-1hik)
    indexHTMLStream = fs.createWriteStream(newHTML, { flags: "as" });
  } catch (err) {
    if (err) console.log("Error Found:", err);
  }
}

function makeManagerCard(arrTeam) {
  const manager = arrTeam[0]; //Manager will always be first in array

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
            <li class="list-group-item p-1">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item p-1">Office: ${manager.getOfficeNum()}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Start Engineer and Intern Div -->
    <div class="container p-2 d-flex justify-content-evenly flex-wrap">
        
    `;

  indexHTMLStream.write(card);
}

function makeEngineerCards(arrTeam) {
  const engineers = arrTeam.filter((obj) => obj.getRole() === "Engineer");

  engineers.forEach((engineer) => {
    const card = `<!-- Engineer Div -->
      <div class="engineer card border-secondary col-12 col-md-5 col-lg-3 m-1">
        <div class="card-header lh-lg h4 text-center p-1">
          <i class="fas fa-code pe-2"></i>Engineer
        </div>
        <div class="card-body px-2 pt-1">
          <h4 class="card-title">${engineer.getName()}</h4>
          <ul class="list-group">
            <li class="list-group-item p-1">ID: ${engineer.getId()}</li>
            <li class="list-group-item p-1">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item p-1">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
          </ul>
        </div>
      </div>

`;

    indexHTMLStream.write(card);
  });
}

function makeInternCards(arrTeam) {
  const interns = arrTeam.filter((obj) => obj.getRole() === "Intern");

  interns.forEach((intern) => {
    const card = `      <!-- Intern Div -->
      <div class="intern card border-success col-12 col-md-5 col-lg-3 m-1">
        <div class="card-header lh-lg h4 text-center p-1">
          <i class="fas fa-user-graduate pe-2"></i>Intern
        </div>
        <div class="card-body px-2 pt-1">
          <h4 class="card-title">${intern.getName()}</h4>
          <ul class="list-group">
            <li class="list-group-item p-1">ID: ${intern.getId()}</li>
            <li class="list-group-item p-1">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item p-1">School: ${intern.getSchool()}</li>
          </ul>
        </div>
      </div>

`;

    indexHTMLStream.write(card);
  });
}

function appendFooter() {
  // read in file fs.read
  // then append to other fs.append
  let localFooter = path.join(process.cwd(), "src", "footer.template.html");

  fs.readFile(localFooter, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    indexHTMLStream.write(data);

    indexHTMLStream.end(); // close the stream
  });
}

function generateHTML(arrTeam) {
  // console.log(arrTeam);

  // make dist folder
  makeDistFolder();
  // copy css to dist folder
  copyCSS();

  // copy header template to dist folder; open indexHTMLStream for append
  copyHeaderTemplate();
  // append manager card html
  makeManagerCard(arrTeam);
  // iterate through arrTeam and populate appropriate divs
  //  append engineer cards
  makeEngineerCards(arrTeam);
  //  append intern cards
  makeInternCards(arrTeam);

  // append footer template; close the stream
  appendFooter();
}

module.exports = generateHTML;
