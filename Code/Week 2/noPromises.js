const request = require("request");

const doReq = function () {
    let options = {
        method: 'GET',
        url: 'https://echo.getpostman.com/get',
        qs: {test: '123'},
        headers: {
            'postman-token': '9bb9a22f-b509-6c7c-b716-cd4c3106ed0f',
            'cache-control': 'no-cache'
        }
    };
    console.log('received request');

    request(options, function (error, response, body) {
        console.log('completed request');
        if (error) {
            console.log('oops', error);
            throw new Error(error); }
        else {
            return body;
        }
    });
}
console.log('starting request')
let test = doReq();
console.log(test);
console.log('complete')
