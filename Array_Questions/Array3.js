// Sum up all the elements of an array?


let marks = [20, 40, 35, 12, 37, 100];

// First Method to do this 
var sum=0
for(i=0; i<marks.length; i++)
{
    sum = sum + marks[i]
}
console.log(sum)



// Alternate Method to Do this
let totalSum = marks.reduce((sum, marks)=> sum+marks,0)
console.log(totalSum)
