// What will the following print in JS?

console.log ("har\"".length) //4
console.log ("har\"")
console.log('Adam D\'Angelo')

//String Properties & Methods
let name1 = "Akash Kumar";
let name2 = "         Singh"

console.log(name1.length)                           //length of string
console.log(name1.toUpperCase())                   //All in Uppercase
console.log(name1.toLowerCase())                  //All in lowercase
console.log(name1.slice(2,5))                    //slice from 2 to 4, 5 not included (idx)
console.log(name1.slice(3))                     //slice from idx 3 to end.
console.log(name1.replace("Kumar", "Singh"))   //replaces kumar to singh
console.log(name1.concat(name2))              //Add name1 with name2
console.log(name2.trim())                    //Deletes white space

//Template Literals `-----`
let me = `This is me ${name1}`;           //String Interpolation
console.log(me);
