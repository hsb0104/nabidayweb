var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


var validator = require("email-validator");


require('../models/userEmailModel');
const UserEmail = mongoose.model('userEmails');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nabiday - The day you feel butterflies in your stomach', layout: 'index' });
});

router.get('/privacy', function (req, res, next) {
    res.render('privacy', { title: 'nabiday privacy'})
})

router.post('/emailSubscribers', function (req, res, next) {
    console.log(req.body)

    if (validator.validate(req.body.email)) {
        const newEmail = new UserEmail({
            email:req.body.email
        })
        newEmail.save()
        res.render('thankyou', {title: 'Thank you for becoming our founding member'})
    } else {
        res.render('sorry', {title: 'Nabiday - The day you feel butterflies in your stomach'})
    }


})

module.exports = router;
