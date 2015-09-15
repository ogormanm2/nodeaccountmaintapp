var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('users');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* GET New User page. */
router.get('/remuser', function(req, res) {
	
	// Get our form value
	var userName = 'cino';
	
    res.render('remuser', { title: 'Delete a User', username: userName });
});

//*mog091015*
/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;
    
    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;
    var name = req.body.name;

    // Set our collection
    var collection = db.get('users');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail,
        "name" : name
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

//*mog091015*
/* POST to Delete User Service */
router.post('/deluser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    
    // Set our collection
    var collection = db.get('users');

    // Submit to the DB
    collection.remove({
        "username" : userName
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem deleting the information from the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});
