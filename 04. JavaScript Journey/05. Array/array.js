//Creating Array
let numbers = [1, 2, 3, 4, 5];

//Accessing Values
console.log(numbers[0]);  //1
console.log(numbers[1]);  //2
console.log(numbers[2]);  //3
console.log(numbers[3]);  //4
console.log(numbers[4]);  //5

//Length of array
console.log(numbers.length); //5

//Changing the value at an idx
console.log(numbers[2] = 99);  //99

//typeOf array
console.log(typeof(numbers)); //Object

//Array Methods
console.log(numbers.toString());  //1, 2, 99, 4, 5
console.log(numbers.join());  //1-2-99-4-5
console.log(numbers.pop());  //removes last idx element & return it.  =>  5
console.log(numbers.push(0));  //0 is added at last idx & returns length of new array  => 5
console.log(numbers.shift()); //Removes first element & return it.  =>  1
console.log(numbers.unshift(99)); //Add element to the begining & return the length of new array.  =>  5
console.log(delete numbers[1]); //delete removes an array element without reindexing; it leaves a hole and returns true.

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);  //99 undefined 99 4 0
}

let n1 = [1, 2, 3];
let n2 = [4, 5];
let n3 = [7, 8, 9];
console.log(n1.concat(n2, n3)) //Returns a new array, doesn't change the existing array.

let n4 = [4,2,5,7,1,9];
console.log(n4.sort()); //1, 2, 4, 5, 7, 9

let n5 = [1, 2, 3, 4, 5];
console.log(n5.splice(3, 1, 55));   //Returns deleted item, modifies the array  =>  output = 4
for (let i = 0; i < n5.length; i++) {
    console.log(n5[i]);        //1, 2, 3, 55, 5
}

//slice out a piece from an array and creates a new array
console.log(n5.slice(2));     //3, 55, 5
console.log(n5.slice(1, 4));  //2, 3, 55

let n6 = [4, 6, 8, 2, 0];
console.log(n6.reverse());  //Reverse the elements in the source array

