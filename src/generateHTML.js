const fs = require("fs");
const path = require("path");

function makeDistFolder() {
  const distFolder = path.join(process.cwd(), "dist");

  // console.log(fs.existsSync(distFolder));
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

function copyCSS() {
  const localCSS = path.join(process.cwd(), "src", "bootstrap.css");
  const newCSS = path.join(process.cwd(), "dist", "bootstrap.css");

  //  By default, destination is overwritten if it already exists.
  fs.copyFile(localCSS, newCSS, (err) =>
    err ? console.log("Error Found:", err) : true
  );
}

function generateHTML(arrTeam) {
  console.log(arrTeam);

  // make dist folder
  makeDistFolder();
  // copy css to dist folder
  copyCSS();
  // copy header template to dist folder
  // append manager card html
  // append Engineer and Intern container (if arrTeam.length>0)
  // iterate through arrTeam and populate appropriate divs
  //  append engineer cards
  //  append intern cards
  // append close Engineer and Intern container
  // append footer template
}

module.exports = generateHTML;

makeDistFolder();
copyCSS();
