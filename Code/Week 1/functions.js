//
//
// // function add(val1, val2) {
// //
// //     return val1+val2
// // }
//
// let add = (val1, val2) => {
//     val1+val2
//     console.log('in add')
//     return val1+val2
// }
//
// let addem = function add2(val1, val2) {
//
//     return val1+val2
// }
//
// let add3 = (val1, val2) => val1+val2
//
// //console.log(add(40,2))
// //console.log(addem(10,30))
// console.log(add3(40,2))

//Create a closure with an IIFE...Immediately Invoked Function Expression
//NB: The () at the very end causes the expression to be run
//We do this to build a file-level scope in order to avoid conflicts with global scopes
//in external files
(function() {

let print = function (filter, text, callback) {
    filter(text)
    console.log(typeof (callback))
    callback()
}

print(
    function (someText) {
        console.log(someText)
    },
    'this is some text',
    function() {
        console.log('this is the next thing to run')
    }
)

})()