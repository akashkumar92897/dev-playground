//Write a sample program to demonstate for-loop         ---> When to use, When the number of iterations is known, Most commonly used loop
for (let i=0; i<5; i++) {
    console.log(i);
}

console.log("-----------------------------------------------------------------------------------------------------------------");

//Write a sample program to demonstate while loop       ---> When to use, When the number of iterations is not fixed, Loop runs as long as condition is true
let j=0;
while (j<5) {
    console.log(j);
    j++;
}

console.log("-----------------------------------------------------------------------------------------------------------------");

//Write a sample program to demonstate do-while loop    ---> When to use, When code must run at least once, even if condition is false
let k=0;
do {
    console.log(k);
    k++;
} while (k<5);

console.log("-----------------------------------------------------------------------------------------------------------------");

//Write a sample program to demonstate for-of loop      ---> When to use, To iterate over arrays, strings, When you need values, not indexes
let arr = [10, 20, 30];

for (let val of arr) {
    console.log(val);
}
console.log("-----------------------------------------------------------------------------------------------------------------");

//Write a sample program to demonstate for-in loop      ---> When to use, To iterate over object keys, Not recommended for arrays
let student = {
    name: "Akash",
    age: 21,
    marks: 90
};

for (let key in student) {
    console.log(key, student[key]);
}