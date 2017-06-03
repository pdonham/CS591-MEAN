const myThing = {
    foo: 42,
    bar: "this is bar",
    baz: function () { console.log("in baz")}
}
const anotherThing = {
    foo: 420
}
const x = () => console.log(y())
const y = () => "called from x"

module.exports.myThing = myThing
module.exports.anotherThing = anotherThing
module.exports.x = x
//module.exports.y = y
x()


//module.exports = exports = {}

