const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('MgrBob');
    manager.address = 'bob@gmail.com';
    manager.id = 'Mgr01';
      
    expect(manager.name).toBe('MgrBob');
    expect(manager.id).toBe('Mgr01');
    expect(manager.address.toString()).toEqual(expect.stringContaining('@'));
  });