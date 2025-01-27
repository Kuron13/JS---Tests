import { characterState as charState } from '../app.js'

const charList = [
  ['Маг', 90, 'healthy'],
  ['Воин', 40, 'wounded'],
  ['Лучник', 7, 'critical'],
  ['Нежить', -28, 'dead'],
]
const handler = test.each(charList);

handler('testing char %n with health %h', (name, health, expected) => {
  const result = charState({name: name, health: health});
  expect(result).toBe(expected);
});