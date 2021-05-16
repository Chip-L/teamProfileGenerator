const Manager = require("../lib/Manager");

// valid values
const name = "John Smith";
const id = 1234;
const email = "email@test.com";
const officeNum = 12;

describe("Manager", () => {
  describe("Initialization", () => {
    it("should extend the Employee object with an office number", () => {
      const obj = new Manager(name, id, email, officeNum);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.officeNum).toEqual(officeNum);
    });

    // office num can be either a number (28) or a string ('suite 1')
    it("should throw an error if 'officeNum' is an empty value", () => {
      const cb = () => new Manager(name, id, email, "");
      const err = new Error(
        "Expected parameter 'officeNum' to be a non-empty value"
      );

      expect(cb).toThrowError(err);
    });
  });

  describe("getOfficeNum", () => {
    it("should return the object's office number", () => {
      const obj = new Manager(name, id, email, officeNum);

      const result = obj.getOfficeNum();

      expect(result).toEqual(officeNum);
    });
  });

  describe("getRole", () => {
    it("should return 'Manager'", () => {
      const obj = new Manager(name, id, email, officeNum);

      const result = obj.getRole();

      expect(result).toEqual("Manager");
    });
  });
});
