var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

require('../models/userEmailModel');
const UserEmail = mongoose.model('userEmails');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', layout: 'index' });
});

router.get('/privacy', function (req, res, next) {
    res.render('privacy', { title: 'nabiday privacy'})
})

router.post('/emailSubscribers', function (req, res, next) {
    console.log(req.body)
    const newEmail = new UserEmail({
        email:req.body.email
    })
    newEmail.save()
    res.render('thankyou', {title: 'Thank you for becoming our founding member'})
})

module.exports = router;
