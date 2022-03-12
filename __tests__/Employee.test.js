const Employee = require('../lib/Employee.js');

const empObj = {
  employee: 'Dilbert',
  id: 'LAT34',
  email: 'Dilbert@gmail.com',
}

test('creates an employee object', () => {
   
    const employee = new Employee(empObj);
    
    expect(employee.name).toBe('Dilbert');
    expect(employee.id).toBe('LAT34');
    expect(employee.email.toString()).toEqual(expect.stringContaining('@'));
    expect(employee.role).toBe('Employee');
  });

test("gets employee's name", () => {
    const employee = new Employee(empObj);

    expect(employee.getName()).toBe('Dilbert');
});

test("gets output ready employee's id with label", () => {
  const employee = new Employee(empObj);

  expect(employee.getId()).toBe('ID:  LAT34');
});

test("gets output ready employee's email with label", () => {
  const employee = new Employee(empObj);

  expect(employee.getEmail()).toBe('Dilbert@gmail.com');
});

test("gets employee's role", () => {
  const employee = new Employee(empObj);

  expect(employee.getRole()).toBe('Employee');
});


