const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    if (!school || typeof school !== "string") {
      throw new Error("Expected parameter 'school' to be a non-empty string");
    }

    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
