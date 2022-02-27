const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Dilbert');
    employee.address = 'Dilbert@gmail.com';
      
    expect(employee.name).toBe('Dilbert');
    expect(employee.id).toBeGreaterThanOrEqual(1000);
    expect(employee.id).toBeLessThanOrEqual(4000);
    expect(employee.address.toString()).toEqual(expect.stringContaining('@'));
  });

