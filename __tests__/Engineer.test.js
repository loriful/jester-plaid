const Engineer = require('../lib/Engineer');

test('creates an engineer class', () => {
    const engineer = new Engineer('Dogbert');
   engineer.address = 'Dogbert@gmail.com';
      
    expect(engineer.name).toBe('Dogbert');
    expect(engineer.id).toBeGreaterThanOrEqual(1000);
    expect(engineer.id).toBeLessThanOrEqual(4000);
    expect(engineer.address.toString()).toEqual(expect.stringContaining('@'));
  });
