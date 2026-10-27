//WARM-UP 1
const clicks = { left: 0, right: 0 };
const next = { ...clicks, left: clicks.left + 1 };
const bad = { left: clicks.left + 1 };

console.log('next', next) //I predict next { left: 1, right:0 }
console.log('clicks', bad) //I predict clicks { left: clicks.left + 1 }
console.log('bad', bad )//I predict bad { left: clicks.left + 1 }

//WARM-UP 2
const a = [1, 2]
const b = a
b.push(3)
console.log('a', a) //I predict a [1, 2, 3]

const c = [1, 2]
const d = c.concat(3)
const e = [...c, 3]
console.log('c', c) //I predict c [1, 2]
console.log('d', d) //I predict d [1, 2, 3]
console.log('e', e) //I predict e [1, 2, 3]

//WARM UP 3
const makeGreeter = (who) => () => console.log('hello', who)
const greetAndre = makeGreeter('Andre')

console.log('greetAndre is', greetAndre)  //I predict hello Andre
greetAndre() //I predict hello Andre