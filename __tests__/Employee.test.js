const Employee = require("../lib/Employee.js");

// valid default values
const name = "John Smith";
const id = 1234;
const email = "email@test.com";

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      // Arrange

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
      const cb = () => new Employee("", id, email);
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Employee(3, id, email);
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' does not exist ", () => {
      let x;
      const cb = () => new Employee(name, x, email);
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is an empty string", () => {
      const cb = () => new Employee(name, "", email);
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });

    /* email validation rules:
     * Uppercase (A-Z) and lowercase (a-z) English letters.
     * Digits (0-9).
     * Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
     * Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.*/
    it("should NOT throw an error if 'email' is valid", () => {
      const email1 = "mysite@ourearth.com";
      const email2 = "my.own-#1-Site@our-1-earth.org";
      const email3 = "mysite@you.me.net";
      const email4 = "!#$%&'*+-/=?^_`{|}~@ABC.be";

      const emp1 = new Employee(name, id, email1);
      const emp2 = new Employee(name, id, email2);
      const emp3 = new Employee(name, id, email3);
      const emp4 = new Employee(name, id, email4);

      expect(emp1.email).toEqual(email1);
      expect(emp2.email).toEqual(email2);
      expect(emp3.email).toEqual(email3);
      expect(emp4.email).toEqual(email4);
    });

    it("should throw an error if 'email' is not properly formatted", () => {
      const cb1 = () => new Employee(name, id, "mysite.ourearth.com");
      const cb2 = () => new Employee(name, id, "mysite@.com.my");
      const cb3 = () => new Employee(name, id, "@you.me.net");
      const cb4 = () => new Employee(name, id, "mysite123@gmail.b");
      const cb5 = () => new Employee(name, id, "mysite@.org.org");
      const cb6 = () => new Employee(name, id, ".mysite@mysite.org");
      const cb7 = () => new Employee(name, id, "mysite()*@gmail.com");
      const cb8 = () => new Employee(name, id, "mysite..1234@yahoo.com");
      const cb9 = () => new Employee(name, id, "abc@ab@ab.ab");
      const cb10 = () => new Employee(name, id, "ab@ab");
      const cb11 = () => new Employee(name, id, "ab@a#.qab");
      const cb12 = () => new Employee(name, id, "ab@a.qab.");

      const err = new Error(
        "Expected parameter 'email' must be properly formatted"
      );

      expect(cb1).toThrowError(err);
      expect(cb2).toThrowError(err);
      expect(cb3).toThrowError(err);
      expect(cb4).toThrowError(err);
      expect(cb5).toThrowError(err);
      expect(cb6).toThrowError(err);
      expect(cb7).toThrowError(err);
      expect(cb8).toThrowError(err);
      expect(cb9).toThrowError(err);
      expect(cb10).toThrowError(err);
      expect(cb11).toThrowError(err);
      expect(cb12).toThrowError(err);
    });
  });

  describe("getName", () => {
    it("should return the objects name", () => {
      const obj = new Employee(name, id, email);

      const result = obj.getName();

      expect(result).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should return the objects id", () => {
      const obj = new Employee(name, id, email);

      const result = obj.getId();

      expect(result).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return the objects email", () => {
      const obj = new Employee(name, id, email);

      const result = obj.getEmail();

      expect(result).toEqual(email);
    });
  });

  describe("getRole", () => {
    it("should return 'Employee'", () => {
      const obj = new Employee(name, id, email);

      const result = obj.getRole();

      expect(result).toEqual("Employee");
    });
  });
});
