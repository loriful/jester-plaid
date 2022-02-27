const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('MgrBob');
    manager.address = 'bob@gmail.com';
      
    expect(manager.name).toBe('MgrBob');
    expect(manager.id).toBeGreaterThanOrEqual(1000);
    expect(manager.id).toBeLessThanOrEqual(4000);
    expect(manager.address.toString()).toEqual(expect.stringContaining('@'));
  });