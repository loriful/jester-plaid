const Intern = require('../lib/Intern');

test('creates an intern class', () => {
    const intern = new Intern('Elaine');
    intern.address = 'Elaine@gmail.com';
    intern.id = 'Std01';
      
    expect(intern.name).toBe('Elaine');
    expect(intern.id).toBe('Std01');
    expect(intern.address.toString()).toEqual(expect.stringContaining('@'));
  });