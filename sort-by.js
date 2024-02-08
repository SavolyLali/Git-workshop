
// Task 1: Sort the given dogs by their name. Output their names 
//  by ascending alphabetical order of their name.

// Execute:  node sort-by.js name

// Example: node sort-by.js name
//  It will outputs:
//    Bailey
//    Buddy
//    Charlie
//    ...

// Task 2: Sort the given dogs by their age. Output their names 
//  by an ascending order of their age.

// Execute: node sort-by.js age

// Example: node sort-by.js age
//  It will outputs:
//    Daisy
//    Bailey
//    Buddy
//    ...
// add dummy text


const dogs = [
  {
    "name": "Buddy",
    "age": 3
  },
  {
    "name": "Max",
    "age": 7
  },
  {
    "name": "Bailey",
    "age": 2
  },
  {
    "name": "Charlie",
    "age": 5
  },
  {
    "name": "Lucy",
    "age": 4
  },
  {
    "name": "Daisy",
    "age": 1
  }
]
  

function main(sortBy) {
  switch (sortBy) {
  case 'age':
    dogs.sort((a, b) => a.age - b.age);
    console.log(`sortBy: age\n\n${dogs.map((dog) => `${dog.name} (${dog.age})`).join('\n')}`);
    break;
   case 'name':
    const sorted = (dogs.sort((a, b) => a[sortBy].localeCompare(b[sortBy])))
    console.log(sorted);
    break;
  }
}

main(process.argv[2])

