const Manager = require("../lib/Manager");

describe("Can instanciate Manager instance and call all parameters/functions", () => {
  it("can instanciate Manager Instance", () => {
    const NewEmployee = new Manager();
    expect(typeof NewEmployee).toBe("object");
  });
  it("can set officeNumber of Manager", () => {
    const officeNumber = "111111111";
    const NewEmployee = new Manager("Andy", 1, "Andy@gmail.com", officeNumber);
    expect(NewEmployee.officeNumber).toBe(officeNumber);
  });
  it("can get role of employee", () => {
    const NewEmployee = new Manager("Andy", 1, "Email", "Bootcamp");
    expect(NewEmployee.getRole()).toBe("Manager");
  });
});
