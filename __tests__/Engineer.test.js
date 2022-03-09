const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Dogbert','LAT44', 'Dogbert@gmail.com','Dogworks');
      
    expect(engineer.name).toBe('Dogbert');
    expect(engineer.id).toBe('LAT44');
    expect(engineer.email.toString()).toEqual(expect.stringContaining('@'));
    expect(engineer.role).toBe('Engineer');
  });

test("gets engineer's github user name formatted for output with label", () => {
    const engineer = new Engineer('','','', 'Dogworks');

    expect(engineer.getGithub()).toBe('GitHub:  Dogworks');
});

test("gets engineer's role", () => {
  const engineer = new Engineer();

  expect(engineer.getRole()).toBe('Engineer');
});


