

function reverse(arr) {

    for (var i = 0; i < arr.length / 2; i++) {
        var front = arr[0]//1
        var back = arr[arr.length - 1]//6
        arr[0] = arr[arr.length - 1]
        arr[arr.length - 1 - i] = front


    }
}





const array = [1, 2, 3, 4, 5, 6]
console.log(array)
reverse(array)

console.log(array)