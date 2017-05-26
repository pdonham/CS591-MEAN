var val = 5
function logit (text) {
    var someOtherText = "in the enclosing frame"
    var val = 42
     getVal = () => val
    return function () {
        console.log(text, someOtherText)
    }
}

//let logit = (text) => () => console.log(text)

var log = logit("text passed in ")
log()
console.log(getVal())

let anEgg = {
    weight: 3.5,
    color: "blue",
    size: "large",
    getWeight: function() { return this.weight}
}

console.log(anEgg.getWeight())
