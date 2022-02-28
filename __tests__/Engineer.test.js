const Engineer = require('../lib/Engineer');

test('creates an engineer class', () => {
    const engineer = new Engineer('Dogbert');
    engineer.address = 'Dogbert@gmail.com';
    engineer.id = 'DJR47';
      
    expect(engineer.name).toBe('Dogbert');
    expect(engineer.id).toBe('DJR47');
    expect(engineer.address.toString()).toEqual(expect.stringContaining('@'));
  });
