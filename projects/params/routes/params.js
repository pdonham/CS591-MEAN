//Create a new express router
const express = require('express')
const router = express.Router()
const request = require("request");

/*
 GET routes

 Set up some sample routes to handle various kinds of parameters
 First, a simple GET that includes params on the query string
 i.e. /params?p1=foo&p2=bar. For this kind of query, the
 params are on req.query.variable.
 */
router.get('/', function (req, res, next) {
    //One way to access the params is on the req.query object
    console.log("req.query: ", req.query.p1, req.query.p2)
    //send back what was received
    res.json(req.query)
})

router.get('/fx', function (req, res, next) {

    const options = { method: 'POST',
        url: 'http://apilayer.net/api/live',
        qs:
            { access_key: '707d4d2111a1976c7c4bbd767a9bf3a6',
                source: 'USD',
                currencies: 'EUR',
                format: '1' },
        headers:
            { 'content-type': 'application/x-www-form-urlencoded',
                'postman-token': 'b9e3fb19-ae2d-8dc9-6797-23536d27e085',
                'cache-control': 'no-cache' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body)
        res.json(body)

    });
})
/*
Create a route to match a regexp (regular expressions)
 */
router.get('/[a-z].*/', function (req, res, next) {
    console.log("matched regexp")
    res.send("matched regexp", req.originalUrl)
})

/*
Create middleware that grabs a param and does something with it...
 */

/*
We also can pick off parts of the URI and use them as parameters.
For example, /params/maggie?breed=lab. In this case, we'll match
on the first string after the base URI and use it as a param
Note that we use the same req.param syntax to get the name in this
example, not req.query...the '/:name' pattern allows us to match
this kind of URI. We'll print the original URL for reference.
*/

router.get('/:name', function (req, res, next) {
    let theName = req.params.name
    let theBreed = req.query.breed
    console.log("Saw", theName, "a", theBreed, "in", req.originalUrl)
    res.send("Welcome, " + theName + " the " + theBreed)
//    next()
})
router.param('name', function (req, res, next, value) {
    console.log('got', value)
    req.params.name += " the great"
    req.params.bar = "baz"
    next()
})

router.get('/lab', function (req, res, next) {
    let theBreed = req.params.breed
    console.log("Saw", theName, "a", theBreed, "in", req.originalUrl)
    res.send("Welcome, " + theName + " the " + theBreed + "(just URI params)")
})
/*
This kind of param matching works for as many levels as you need.
If the incoming URI is in the form /params/breed/name rather than
using a query string parameter for breed as above, the route looks
like this:
*/

router.get('/:breed/:name', function (req, res, next) {
    let theName = req.params.name
    let theBreed = req.params.breed
    console.log("Saw", theName, "a", theBreed, "in", req.originalUrl)
    res.send("Welcome, " + theName + " the " + theBreed + "(just URI params)")
})

/*
POST routes

For POSTs, such as from a form on a web page, the parameters
(typically form fields) are placed on the req.body object. We'll
use router.POST to match the method. Two things to note: 1) the data
from the form should be URL-encoded, and 2) we'll use Postman to
generate the request (rather than an HTML page with a form)
Another important note is that parsing of the URL-encoded form data
is done in middleware, in this case from app.js:
 app.use(bodyParser.urlencoded({ extended: false }));

*/
router.post('/', function (req, res, next) {
    console.log(req.body)
    res.json(req.body)
})

//export the router object to expose it in other modules
module.exports = router