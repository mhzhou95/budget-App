//
// Object Destructuring
//
const person = {
  name: 'Speed',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};

// const name = person.name;
// const age = person.age;

const {name = 'anon', age} = person; 
// you can also set defaults while destructuring

console.log(`${name} is ${age}`);

// ----------------------------------------------------------------------

const {city, temp: temperature} = person.location;
// renaming the variable to something else 

if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`)
}

// ----------------------------------------------------------------------

const { name: firstName ='anon'} = person; 
// you can also set defaults and rename during destructuring

console.log(`${firstName} is ${age}`);

// ----------------------------------------------------------------------

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const {name : publisherName ='Self Published'} = book.publisher;

console.log(publisherName);

// ----------------------------------------------------------------------

//
// Array Desctructuring
//
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, ccity, state = 'Jersey'] = address;

console.log(`You are in ${ccity} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, , medium] = item;
//grab first and third items using array desctructuring
console.log(`A medium ${drink} costs ${medium}`);

