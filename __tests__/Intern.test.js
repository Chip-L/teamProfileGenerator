const Intern = require("../lib/Intern");

// valid values
const name = "John";
const id = 1234;
const email = "email@test.com";
const school = "DU";

describe("Intern", () => {
  describe("Initialization", () => {
    it("should extend the Employee object with an school user name", () => {
      const obj = new Intern(name, id, email, school);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.school).toEqual(school);
    });

    // it("should throw an error if provided no arguments", () => {
    //   const cb = () => new Intern();

    //   expect(cb).toThrow();
    // });

    // it("should throw an error if 'name' is an empty string", () => {
    //   const cb = () => new Intern("", id, email, school);
    //   const err = new Error(
    //     "Expected parameter 'name' to be a non-empty string"
    //   );

    //   expect(cb).toThrowError(err);
    // });

    it("should throw an error if 'school' is an empty string", () => {
      const cb = () => new Intern(name, id, email, "");
      const err = new Error(
        "Expected parameter 'school' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'school' is not a string", () => {
      const cb = () => new Intern(name, id, email, 3);
      const err = new Error(
        "Expected parameter 'school' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });
  });

  describe("getSchool", () => {
    it("should return the object's school name", () => {
      const obj = new Intern(name, id, email, school);

      const result = obj.getSchool();

      expect(result).toEqual(school);
    });
  });

  describe("getRole", () => {
    it("should return 'Intern'", () => {
      const obj = new Intern(name, id, email, school);

      const result = obj.getRole();

      expect(result).toEqual("Intern");
    });
  });
});
