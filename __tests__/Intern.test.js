const Intern = require('../lib/Intern');

test('creates an intern class', () => {
    const intern = new Intern('Elaine');
   intern.address = 'Elaine@gmail.com';
      
    expect(intern.name).toBe('Elaine');
    expect(intern.id).toBeGreaterThanOrEqual(1000);
    expect(intern.id).toBeLessThanOrEqual(4000);
    expect(intern.address.toString()).toEqual(expect.stringContaining('@'));
  });