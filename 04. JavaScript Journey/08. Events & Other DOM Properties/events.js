let button = document.getElementById("btn")
// List of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("dblclick", ()=> {
    document.querySelector(".box").innerHTML = "Yes, I am clicked!"
})

button.addEventListener("contextmenu", ()=> {
    alert("Don't do it, Please don't do it...")
})

document.addEventListener("keydown", (e)=> {
    console.log(e.key, e.keyCode)
})