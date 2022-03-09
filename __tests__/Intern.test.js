const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('Bobby','S54', 'Bobby@gmail.com','');

  expect(intern.name).toBe('Bobby');
  expect(intern.id).toBe('S54');
  expect(intern.email.toString()).toEqual(expect.stringContaining('@'));
  expect(intern.role).toBe('Intern');
}); 

test("gets intern's school formatted for output with label", () => {
  const intern = new Intern('','','', 'Vandy');

  expect(intern.getSchool()).toBe('School:  Vandy');
});

test("gets intern's role", () => {
const intern = new Intern();

expect(intern.getRole()).toBe('Intern');
});
