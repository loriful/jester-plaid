const Engineer = require('../lib/Engineer');

const engObj = {
  employee: 'Dogbert',
  id: 'LAT44',
  email: 'Dogbert@gmail.com',
  github: 'Dogworks',
}

test('creates an engineer object', () => {
    const engineer = new Engineer(engObj);
      
    expect(engineer.name).toBe('Dogbert');
    expect(engineer.id).toBe('LAT44');
    expect(engineer.email.toString()).toEqual(expect.stringContaining('@'));
    expect(engineer.role).toBe('Engineer');
  });

test("gets engineer's github user name formatted for output with label", () => {
    const engineer = new Engineer(engObj);

    expect(engineer.getGithub()).toBe('Dogworks');
});

test("gets engineer's role", () => {
  const engineer = new Engineer(engObj);

  expect(engineer.getRole()).toBe('Engineer');
});


