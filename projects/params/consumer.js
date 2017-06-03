const stuff = require("./exporter1")
const stuff2 = require("./exporter2")

let CONFIG
if (process.env.PROD == "TRUE") {
     CONFIG = require("./config.prod")
}
else {
     CONFIG = require("./config.dev")
}

console.log("DBIP:", CONFIG.data.dbIP)

// console.log(stuff.foo)
// stuff.func1()
// console.log(stuff2.anotherThing.foo)
// console.log(stuff2.myThing.foo)
// console.log(stuff2)
// stuff2.x()





