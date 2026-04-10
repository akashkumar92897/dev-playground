// Asynchronous Nature in JS => If script is taking time skip to the next line script at run the delayed script at the end. 
console.log("Hi, I am Akash")
console.log("and I am a Software Engineer")
setTimeout(() => {
    console.log("This fxn is inside setTimeout to check Asynchronous Nature of JS.")
}, 1000);
console.log("This is chapter 9 of JA jurney")