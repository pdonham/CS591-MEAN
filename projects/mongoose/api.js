const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cs411')
const db = mongoose.connection
db.once('open', function () {
  console.log('Connection successful.')
})
const Schema = mongoose.Schema
const personSchema = new Schema({
    name: String,
    UID: String,
    department: String
})
const people = mongoose.model('people', personSchema)

// POST Create a new user
router.post('/db', function(req, res, next) {
  console.log(req.body)
    // let name = req.body.name
    // let dept = req.body.department
    // let UID = req.body.UID
  const aPerson = new people(
      req.body
  )
 //   const aPerson = new people ( {name: name, department: dept, UID: UID})
    aPerson.save(function(err) {
    if (err) {res.send(err)}
        //send back the new person
    else {res.send (aPerson)
  })


//GET Fetch all users
router.get('/db', function (req, res, next) {
  people.find({}, function (err, results) {
    res.json(results);
  })

})

//GET Fetch single user, match /users/db/Frank
router.get('/db/:_name', function (req, res, next) {
  people.find({name: req.params._name}, function (err, results) {
    res.json(results)
  })
})



//PUT Update the specified user's name
router.put('/db/:_id', function (req, res, next) {
  people.findByIdAndUpdate(req.params._id, req.body, {'upsert': 'true'}, function (err, result) {
    if (err) {res.json({message: 'Error updating'});}
    else {console.log('updated'); res.json({message: 'success'})}
  })

})


//DELETE Delete the specified user
router.delete('/db/:_id', function (req, res, next) {
  people.findByIdAndRemove(req.params._id, function (err, result) {
    if(err) {res.json({message: 'Error deleting'});}
    else {res.json({message: 'success'});}
  })
});

module.exports = router;
