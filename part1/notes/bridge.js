//LEVEL 1
//part 1
const sayHi = ()=> {
    console.log('hi!')
    return 'done'
}

console.log('A:', sayHi) // I predict A: [function Anonymous] << it's [Function: sayHi] it's already defined
console.log('B:', sayHi()) // I predict hi!, B: done

//part 2
const runLater = (fn) => {
    console.log('about to run it')
    fn()
}

runLater(sayHi) //I predict: about to run it, [function: sayHi] < Wrong, it's 'hi" since sayHi becomes sayHi() when it replaces the fn
//runLater(sayHi()) //I predict: 'hi', about to run it, done() < TypeError

//LEVEL 2
const Greeting = (props) => 'Hello ' + props.name
console.log(Greeting({name: 'Andre'}))                  // I predict Hello Andre

const person = { name: 'Andre', age:25 }
const { name, age } = person                        // destructuring: unpack two properties into variables
console.log(name, age)                              // I predict Andre 25

const Greeting2 = ({ name }) => 'Hello ' + name     // unpack right in the brackets
console.log(Greeting2({ name: 'Maya' }))              // I predict Hello Maya

//LEVEL 3
const App = () => {
    let counter = 0
    counter = counter + 1
    return counter
}

console.log(App()) //I predict 1, 1, 1 since each call runs let counter=0
console.log(App())
console.log(App())