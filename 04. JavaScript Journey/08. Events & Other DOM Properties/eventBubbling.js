// If child is clicked than it's parent is automatically clicked by default and the term is called  =>  Event Bubbling
document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()                           // =>                      To stop event bubbling use this function
    alert("Child Was Clicked")
})
document.querySelector(".childContainer").addEventListener("click", (e) => {
    // e.stopPropagation()
    alert("ChildContainer Was Clicked")
})
document.querySelector(".container").addEventListener("click", (e) => {
    // e.stopPropagation()
    alert("container Was Clicked")
})

// -------------------------------------------------------------------------------------------------------------------

// Funtion to get random color
function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

// setInterval runs a particular function regularly in a given time interval
let a = setInterval(() => {
    document.querySelector(".childContainer").style.background = getRandomColor();
}, 0);

console.log(a)

// clearInterval(1)     =>      To stop the setInterval
// undefined

// setInterval runs a particular function only once in a given time interval
let b = setInterval(() => {
    document.querySelector(".child").style.background = getRandomColor();
}, 0);

console.log(b)

// clearInterval(1)     =>      To stop the setTimeout
// undefined