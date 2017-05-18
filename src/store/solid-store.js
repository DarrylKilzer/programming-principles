var state = {
  s: { name: 'Single Responsibility Principle', description: '' },
  o: { name: 'Open/Closed Principle', description: '' },
  l: { name: 'Liskov Substitution Principle', description: '' },
  i: { name: 'Interface Segregation Principle', description: '' },
  d: { name: 'Dependency Inversion', description: '', link: '' }
}

// Write a public function that will return a property of the state from its prop name
// PUBLIC PARTS
export default {
  getPrinciple(letter){
    return state[letter.toLowerCase()] || {name: 'ERROR', description: 'INVALID ROUTE'}
  }
}