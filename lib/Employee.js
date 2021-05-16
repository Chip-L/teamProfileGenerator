class Employee {
  constructor(name, id, email) {
    // no values
    if (!name && !id && !email) {
      throw new Error("Must enter values");
    }
    if (!name || typeof name !== "string") {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
    if (!id) {
      throw new Error("Expected parameter 'id' to be a non-negative number");
    }
    if (
      !/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+[a-zA-Z0-9-]+)+$/gm.test(
        email
      ) ||
      email.includes("..")
    ) {
      throw new Error("Expected parameter 'email' must be properly formatted");
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

module.exports = Employee;
