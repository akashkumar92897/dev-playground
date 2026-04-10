// Write a program to print the marks of a student in an object using for-loop.

let obj = {harry: 98, rohan: 70, akash: 80}

let keys = Object.keys(obj);

for (let i=0; i<keys.length; i++) {
    console.log(keys[i] + " : " + obj[keys[i]]);
}


//Since objects are not index-based, we use Object.keys() to convert keys into an array and then iterate using a for loop.