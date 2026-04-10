//Create a const object in JS. Can you change it to hold a number later?
const obj = {
    name: "Akash"
}

console.log(obj);


// Allowed: modifying property
obj.name = 10;
console.log(obj);   // { name: 10 }

// Not allowed: reassigning the variable
obj = 10;           // ❌ Error

// You cannot reassign a const object to a number, but you can modify its properties because const protects the reference, not the value inside the object.
// ❌ obj = 10 → Not allowed
// ✅ obj.name = 10 → Allowed
// So the object cannot be changed to hold a number, but its properties can be changed.

