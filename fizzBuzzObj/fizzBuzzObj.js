// // % 3 === fizz
// // % 5 === buzz
// // % 5 && 3 === fizzBuzz

// // Write and algo that tells me the number of fizzBuzzes between 1 and n.
// // this shoult tell me the NUMBER of fizzbuzzes and give me an optional
// // object showing the formatted fizzes, buzzes, and fizzBuzzes

// // n = 15 => 1


// // `There is 1 fizzBuzz between 1 and 15. Further data here: 
//     // {
//     // fizz: 4,
//     // buzz: 2, 
//     // fizzBuzz: 1
// // }


function fizzBuzzObj(num) {
    const data = {}
    let i = 1;
    while(i <= num) {
        if(i % 3 === 0 && i % 5 === 0) {
            data.fizzBuzz ? data.fizzBuzz++ : data.fizzBuzz = 1
        } else if(i % 3 === 0) {
            data.fizz ? data.fizz++ : data.fizz = 1
        } else if(i % 5 === 0) {
            data.buzz ? data.buzz++ : data.buzz = 1
        } 
        i++
    }
    
    return `There are ${data.fizzBuzz} fizzBuzzes between 1 and ${num}. Further data here: ${JSON.stringify(data)}`
}

console.log(fizzBuzzObj(15))



































