class Employee {
  constructor(name, id, email) {
    // no values
    if (!name && !id && !email) {
      throw new Error("Must enter values");
    } else if (!name || name === "" || typeof name !== "string") {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

// const emp = new Employee("john", 123, "a@a.com");
// console.log(new Employee());

module.exports = Employee;
