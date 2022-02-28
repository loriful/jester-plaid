const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Dilbert');
    employee.id = 'AJR47';
    employee.address = 'Dilbert@gmail.com';
      
    expect(employee.name).toBe('Dilbert');
    expect(employee.id).toBe('AJR47');
    expect(employee.address.toString()).toEqual(expect.stringContaining('@'));
  });

