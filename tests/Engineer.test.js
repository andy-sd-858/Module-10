const Engineer = require("../lib/Engineer");

describe("Can instanciate Engineer instance and call all parameters/functions", () => {
  it("can instanciate Engineer Instance", () => {
    const NewEmployee = new Engineer();
    expect(typeof NewEmployee).toBe("object");
  });
  it("can set github of engineer", () => {
    const github = "andy-sd-858";
    const NewEmployee = new Engineer("Andy", 1, "Andy@gmail.com", github);
    expect(NewEmployee.github).toBe(github);
  });
  it("can return github engineer", () => {
    const github = "andy-sd-858";
    const NewEmployee = new Engineer("Andy", 1, "Andy@gmail.com", github);
    expect(NewEmployee.getGithub()).toBe(github);
  });
  it("can get role of employee", () => {
    const NewEmployee = new Engineer("Andy", 1, "Email", "Andy@gmail.com");
    expect(NewEmployee.getRole()).toBe("Engineer");
  });
});
