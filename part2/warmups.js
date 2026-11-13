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