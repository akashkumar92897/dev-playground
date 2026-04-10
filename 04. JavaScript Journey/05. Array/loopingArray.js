array = [1, 3, 5, 7, 9, 11];

//classic for-loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

//for-each loop   --> doesn't create a new array 
array.forEach ((value, index, array) => {
    console.log(value, index, array);
});

//map   --> creates a new array by performing some operations on each array element.
array.map ((value, index, array)=> {
    console.log(value * value);
})

//filter   --> creates a new array with a particular filter.
console.log(array.filter (value > 20));
array.filter((value, index, array) => {
    console.log(value > 20);
})