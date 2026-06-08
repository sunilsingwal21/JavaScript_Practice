// The scope of var is global when declared globally and functional when declared inside a function (we cannot access it outside of the function)
// The scope of let is global when declared globally and at block level as well (means block level will not be considered as global)
// The value of const can not be re-declared at any stage

// Example 1

var greet = "Evening"
function random (a,b)
{
    var greet = "Afternoon"
}
console.log(greet)

/* output will be 'Evening' as 'Afternoon' is inside a function and we have called print outside(globally) of that function
and outside the function greet = "Evening" */


// Example 2

var greet1 = "Evening"
if (a=1)
{
    var greet1 = "Afternoon"
}
console.log(greet1)

/* output will be 'Afternoon' as there is no function and greet1 value is re-assigned inside the block {} which is 
still globally */


// Example 3

let greet2 = "Morning"
if (b=1)
{
    let greet2 = "Night"
}
console.log(greet2)

/* output here will be 'Morning' as greet2 is re-declared inside the blocks but it has type let which is not considered global 
outside the blocks */