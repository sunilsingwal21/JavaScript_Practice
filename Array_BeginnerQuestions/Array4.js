// var scores =  [12,13,14,16]. Create a new array with even numbers of the scores array?   


// First Method to do this 
var scores =  [12,13,14,16];

var evenScores = []
for (let i=0; i<scores.length; i++)
{
    if(scores[i]%2==0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)


// Another Method to do this
var scores =  [12,13,14,16];

let newEvenScores = scores.filter(scores=>scores%2==0)
console.log(newEvenScores)


// Ques - Multiply each element by 3 from above output

var multiplyEvenScores = scores.map(evenScores=>evenScores*3)
console.log(multiplyEvenScores)

// filter - filter() selects a subset of elements that pass a specific condition, like (%2==0)
// map - map() transforms each element in an array into a new value. like (multiplication or division)