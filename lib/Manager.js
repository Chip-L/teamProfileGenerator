const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    if (!officeNum) {
      throw new Error("Expected parameter 'officeNum' to be a non-empty value");
    }
    super(name, id, email);
    this.officeNum = officeNum;
  }

  getOfficeNum() {
    return this.officeNum;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
