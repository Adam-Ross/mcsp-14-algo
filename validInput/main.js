// assume you will take in a string

// '()' -> true, the number of opening and closing parens are balanced
// '(())' -> tue
// ')()' -> false - the opening and closing parens are not balanced.
// ')(' -> false



function validateInput(str) {
    // create arr
    const arr = []
    for(let char of str) {

        if(char === '(') {
            arr.push(char)
        } else if(arr.length === 0) {
            return false
        } else {
            arr.pop()
        }
    }
    return arr.length === 0
}

const str = ')))))((((('
console.log(validateInput(str))

