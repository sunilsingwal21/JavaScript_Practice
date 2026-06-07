
let marks = [20, 40, 35, 12, 100];

//Find the value of 3rd index in an array
console.log(marks[3]);       // Output should be: 12


//Find the index of 35 in an array
console.log(marks.indexOf(35));       // Output should be: 2


//Find the length of an array
console.log(marks.length);       // Output should be: 5


//Find the last index of 35 in an array
console.log(marks.lastIndexOf(35));       // Output should be: 2


//Add an element 50 at the end of an array
marks.push(50);
console.log(marks);       // Output should be: [20, 40, 35, 12, 100, 50]


//Add an element 10 at the beginning of an array
marks.unshift(10);
console.log(marks);       // Output should be: [10, 20, 40, 35, 12, 100, 50]


//Delete the last element of an array
marks.pop();
console.log(marks);       // Output should be: [10, 20, 40, 35, 12, 100]


//Delete the first element of an array
marks.shift();
console.log(marks);       // Output should be: [20, 40, 35, 12, 100]


//Check if an element 40 is present in an array or not
console.log(marks.includes(40));       // Output should be: true


//Create a sub-array from index 1 to 3
let subArray = marks.slice(1, 4);
console.log(subArray);       // Output should be: [40, 35, 12]


//delete a sub-array from index 1 to 3
marks.splice(1, 3);
console.log(marks);       // Output should be: [20, 100]


//sum of all the elements of an array
let sum = marks.reduce((total, value) => total + value, 0);
console.log(sum);       // Output should be: 120