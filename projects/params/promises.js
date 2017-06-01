const prom1 = function () {
    return new Promise (function (resolve, reject) {

    })
}
const prom2 = function () {
    return new Promise (function (resolve, reject) {

    })
}
const start = Promise.resolve()
//All must run
Promise.all([start, prom1, prom2])
    .then(() => console.log("all done"))
    .catch(() => console.log("something went wrong"))

Promise.race([start, prom1, prom2])
    .then(() => console.log("one is done"))
    .catch(() => console.log("something went wrong"))
