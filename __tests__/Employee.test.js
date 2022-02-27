const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Bob');
    employee.address = 'bob@gmail.com';
      
    expect(employee.name).toBe('Bob');
    expect(employee.id).toBeGreaterThanOrEqual(1000);
    expect(employee.id).toBeLessThanOrEqual(4000);
    expect(employee.address.toString()).toEqual(expect.stringContaining('@'));
  });

