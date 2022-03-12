const Intern = require('../lib/Intern');

const intObj = {
  employee: 'Junior',
  id: 'S54',
  email: 'junior@gmail.com',
  school: 'Vandy',
}

test('creates an intern object', () => {
  const intern = new Intern(intObj);

  expect(intern.name).toBe('Junior');
  expect(intern.id).toBe('S54');
  expect(intern.email.toString()).toEqual(expect.stringContaining('@'));
  expect(intern.role).toBe('Intern');
}); 

test("gets intern's school formatted for output with label", () => {
  const intern = new Intern(intObj);

  expect(intern.getSchool()).toBe('School:  Vandy');
});

test("gets intern's role", () => {
const intern = new Intern(intObj);

expect(intern.getRole()).toBe('Intern');
});
