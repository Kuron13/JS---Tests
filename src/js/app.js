// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));


export function characterState (character) {
  
  let health = character.health
  
  if (health < 0) {
    return 'dead'
  } else if (health < 15) {
    return 'critical';
  } else if (health <= 50) {
    return 'wounded';
  } else {
    return 'healthy';
  }
}