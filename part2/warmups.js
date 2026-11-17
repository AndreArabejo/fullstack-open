const cart = [
    {item: 'Sketchbook', price: 12},
    {item: 'Ink set', price: 30},
    {item: 'Brushes', price: 8}
]

const total = cart.reduce((sum, c) => {
    console.log('sum so far', sum, 'adding', c.price)
    return sum + c.price
}, 0)

console.log('total', total)

const songs = [{ title: 'Blue Monday' }, { title: 'Bluebird' }, { title: 'Yellow' }]

console.log(songs.some(s => s.title === 'Yellow'))
console.log(songs.some(s => s.title === 'yellow'))

const query = 'BLUE'
console.log(songs.filter(s => s.title.toLowerCase().includes(query.toLowerCase())))