const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

// valid values
const name = "John";
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
