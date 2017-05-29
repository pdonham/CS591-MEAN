const testStr = function (strVal) {
    return new Promise(function (resolve, reject) {
        if (strVal.length > 5) {
            resolve(strVal);
        }
        else {
            let err = {reason: "too short", originalString: strVal}
            reject(err);
        }


    })
}
const start = Promise.resolve()

Promise.race([testStr('as'), testStr('the rain in spain')])
    .then(() => console.log("Completed all promises"))
    .catch((err) =>  console.log(err.originalString, 'was', err.reason))
//console.log([1,2,3,4,5].reduce((accum, curr) => accum * curr))