
// pure
// function reverse(arr) {
//     const returnArr = []
//     let current
//     for(let i = arr.length -1; i >= 0; i--) {
//         current = arr[i]
//         returnArr.push(current)
//     }

//     return returnArr
// }

// impure
function reverse(arr) {
    let temp
    const middle = Math.floor(arr.length / 2)
    for(let i = 0; i < middle; i++) {
        temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }

    return arr
}


const arr = [1,2,3,4,5]
console.log(arr)
console.log(reverse(arr))
console.log(arr)
