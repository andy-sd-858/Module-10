const Employee = require("../lib/Employee");

describe("Can instanciate Employeee instance and call all parameters/functions", () => {
  it("can instanciate Employeee Instance", () => {
    const NewEmployee = new Employee();
    expect(typeof NewEmployee).toBe("object");
  });
  it("can set name of employee", () => {
    const name = "Andy";
    const NewEmployee = new Employee(name);
    expect(NewEmployee.name).toBe(name);
  });
  it("can set id of employee", () => {
    const id = "1";
    const NewEmployee = new Employee("Andy", id);
    expect(NewEmployee.id).toBe(id);
  });
  it("can set email of employee", () => {
    const email = "Andy@gmail.com";
    const NewEmployee = new Employee("Andy", 1, email);
    expect(NewEmployee.email).toBe(email);
  });
  it("can get name of employee", () => {
    const name = "Andy";
    const NewEmployee = new Employee(name);
    expect(NewEmployee.getName()).toBe(name);
  });
  it("can get Id of employee", () => {
    const id = 2;
    const NewEmployee = new Employee("Andy", id);
    expect(NewEmployee.getId()).toBe(id);
  });
  it("can get Email of employee", () => {
    const Email = "Andy@gmail.com";
    const NewEmployee = new Employee("Bob", 1, Email);
    expect(NewEmployee.getEmail()).toBe(Email);
  });
  it("can get role of employee", () => {
    const NewEmployee = new Employee("bob", 1, "bob@gmail.com");
    expect(NewEmployee.getRole()).toBe("Employee");
  });
});
