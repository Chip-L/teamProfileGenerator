const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      // Arrange
      const name = "John";
      const id = 1234;
      const email = "email@test.com";

      // Act
      const obj = new Employee(name, id, email);

      // Assertion
      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Employee();

      expect(cb).toThrow();
    });

    it("should throw an error if 'name' is an empty string", () => {
      const cb = () => new Employee("", 3, "a@a.com");
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => Employee(3, 3, "a@a.com");
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is not a number", () => {
      const cb = () => Employee("John", "", "a@a.com");
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is less than 0", () => {
      const cb = () => Employee("John", 3, "a@a.com");
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'email' is missing @", () => {
      const cb = () => Employee("John", 3, "aa.com");
      const err = new Error(
        "Expected parameter 'email' must be properly formatted"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'email' is missing the . after the @", () => {
      const cb = () => Employee("John", 3, "aa@com");
      const err = new Error(
        "Expected parameter 'email' must be properly formatted"
      );

      expect(cb).toThrowError(err);
    });
  });

  describe("getName", () => {
    it("should return the objects name", () => {
      const name = "John";
      const id = 1234;
      const email = "email@test.com";
      const obj = new Employee(name, id, email);

      const cb = () => obj.getName();

      expect(cb).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should return the objects id", () => {
      const name = "John";
      const id = 1234;
      const email = "email@test.com";
      const obj = new Employee(name, id, email);

      const cb = () => obj.getID();

      expect(cb).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return the objects email", () => {
      const name = "John";
      const id = 1234;
      const email = "email@test.com";
      const obj = new Employee(name, id, email);

      const cb = () => obj.getEmail();

      expect(cb).toEqual(email);
    });
  });

  describe("getRole", () => {
    it("should return 'Employee'", () => {
      const name = "John";
      const id = 1234;
      const email = "email@test.com";
      const obj = new Employee(name, id, email);

      const cb = () => obj.getRole();

      expect(cb).toEqual("Employee");
    });
  });
});
