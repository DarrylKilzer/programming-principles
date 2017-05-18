var state = {
  solid: {
    s: { name: 'Single Responsibility Principle', description: 'a class should have only a single responsibility (i.e. only one potential change in the softwares specification should be able to affect the specification of the class)' },
    o: { name: 'Open/Closed Principle', description: '“software entities … should be open for extension, but closed for modification.”' },
    l: { name: 'Liskov Substitution Principle', description: '“objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.” See also design by contract.' },
    i: { name: 'Interface Segregation Principle', description: '“many client-specific interfaces are better than one general-purpose interface.”' },
    d: { name: 'Dependency Inversion', description: 'one should “depend upon abstractions, [not] concretions."' }
  },
   crud: {
    c: { name: 'Create', description: 'Create or add new entries' },
    r: { name: 'Read', description: 'Read, retrieve, search, or view existing entries' },
    u: { name: 'Update', description: 'Update or edit existing entries' },
    d: { name: 'Delete', description: 'Delete/deactivate/remove existing entries' }
  },
   http: {
    post: { name: 'Post', description: 'Submits data to be processed to a specified resource' },
    delete: { name: 'Delete', description: 'Deletes the specified resource' },
    put: { name: 'Put', description: 'Uploads a representation of the specified URI' },
    get: { name: 'Get', description: 'Requests data from a specified resource', link: '' },
    patch: { name: 'Patch', description: 'modify an existing HTTP resource.', link: '' }
  }
 
}

// Write a public function that will return a property of the state from its prop name
// PUBLIC PARTS
export default {
  getPrinciple(letter) {
    return state.solid[letter.toLowerCase()] || { name: 'ERROR', description: 'INVALID ROUTE' }
  },
  getCrud(letter) {
    return state.crud[letter.toLowerCase()] || { name: 'ERROR', description: 'INVALID ROUTE' }
  },
   getHttp(word) {
    return state.http[word.toLowerCase()] || { name: 'ERROR', description: 'INVALID ROUTE' }
  }
}