const fs = require("fs");
const path = require("path");

function makeDistFolder() {
  const distFolder = "./dist"; //path.join(process.cwd(), "dist");

  try {
    if (!fs.existsSync(distFolder)) {
      console.log("mkdir");
      fs.mkdirSync(distFolder);
    }
  } catch (err) {
    console.error(err);
  }
  console.log(fs.existsSync(distFolder));
}

function generateHTML(arrTeam) {
  console.log(arrTeam);

  // make dist folder
  // copy css to dist folder
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
