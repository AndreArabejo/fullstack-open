// ----- "React" --- 
let storage                 // React's storage spot, outside the component
let needsRender = false 

const useState = (startValue) => {
    if (storage === undefined) {       // first render: nothing stored yet
        storage = startValue
    }

const setValue = (newValue) => {
    storage = newValue                  //1. write the new value into storage
    needsRender = true                  //2. ask for a new render
}
return [ storage, setValue ]            //hand back [current value, setter]
}

let screen
const render = () => {
    screen = App()                      // a "render" is just calling App
}

const click = () => {
    screen.click()
    if (needsRender) {
        needsRender = false
        render()
    }
}

// ------my component-----
const App = () => {
    const [counter, setCounter] = useState(0)
    console.log('App runs counter is', counter)

    const handlePlus = () => {
        setCounter(counter + 1)
        console.log(' right after setCounter, counter is still', counter)
    }

    return { click: handlePlus } // pretend this is the button
}

// ---------- pretend to use the app ----------
render()     // the page loads
click()      // you click plus
click()      // you click plus again
click()   
click()   
click()   

