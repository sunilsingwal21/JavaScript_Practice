

// Given a string containing (, ), {, }, [, ], determine if it's valid.

function isValid(s)
{
    const stack = []
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for(let char of s)
    {
        if('({['.includes (char))
        {
            stack.push(char)
        }
        else {
            if (stack.pop() !== map[char])
                return false
        }
    }
    return stack.length === 0;
}

console.log(isValid("()[]{}"));   
console.log(isValid("(]"));       
console.log(isValid("{[()]}"));   
console.log(isValid("([)]"));     
console.log(isValid(""));       


/* A,B,C, D, E, F, G, H
A-> C
C-> E,F
F-> B
H-> G */

let char1 = "ABCDEFGH"



function upChar(char1, char2) {
const newChar = char1.split('').filter(char => char.char1).map()
}