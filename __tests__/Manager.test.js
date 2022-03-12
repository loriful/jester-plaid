const Manager = require('../lib/Manager.js');
const mgrObj = {
  employee: 'MgrBob',
  id: 'LAT24',
  email: 'MgrBob@gmail.com',
  office: 'Room222',
}

  test('creates a manager object', () => {
    const manager = new Manager(mgrObj);

    expect(manager.name).toBe('MgrBob');
    expect(manager.id).toBe('LAT24');
    expect(manager.email.toString()).toEqual(expect.stringContaining('@'));
    expect(manager.role).toBe('Manager');
  });

  test("gets manager's office number formatted for output with label", () => {
    const manager = new Manager(mgrObj);

    expect(manager.getOffice()).toBe('Office:  Room222');
});

test("gets manager's role", () => {
  const manager = new Manager(mgrObj);

  expect(manager.getRole()).toBe('Manager');
});

