const Engineer = require("../lib/Engineer");

// valid values
const name = "John Smith";
const id = 1234;
const email = "email@test.com";
const github = "Chip-L";

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should extend the Employee object with an github user name", () => {
      const obj = new Engineer(name, id, email, github);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.github).toEqual(github);
    });

    it("should throw an error if 'github' is an empty string", () => {
      const cb = () => new Engineer(name, id, email, "");
      const err = new Error(
        "Expected parameter 'github' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'github' is not a string", () => {
      const cb = () => new Engineer(name, id, email, 3);
      const err = new Error(
        "Expected parameter 'github' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });
  });

  describe("getGithub", () => {
    it("should return the object's Github name", () => {
      const obj = new Engineer(name, id, email, github);

      const result = obj.getGithub();

      expect(result).toEqual(github);
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const obj = new Engineer(name, id, email, github);

      const result = obj.getRole();

      expect(result).toEqual("Engineer");
    });
  });
});
