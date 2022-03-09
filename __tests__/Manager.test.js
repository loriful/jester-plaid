const Manager = require('../lib/Manager.js');

  test('creates a manager object', () => {
    const manager = new Manager('MgrBob','LAT24', 'MgrBob@gmail.com','');

    expect(manager.name).toBe('MgrBob');
    expect(manager.id).toBe('LAT24');
    expect(manager.email.toString()).toEqual(expect.stringContaining('@'));
    expect(manager.role).toBe('Manager');
  });

  test("gets manager's office number formatted for output with label", () => {
    const manager = new Manager('','','', 'Room222');

    expect(manager.getOffice()).toBe('Office:  Room222');
});

test("gets manager's role", () => {
  const manager = new Manager();

  expect(manager.getRole()).toBe('Manager');
});

