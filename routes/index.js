/* Original author credit to: Christopher Buecheler */
/* Updates and enhancements: Matt O'Gorman */

var express = require('express');
var router = express.Router();
module.exports = router;
var actions = require('../actions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    actions.LoadContacts(req, res);
});


//*mog091015*
/* POST to Add User Service */
router.post('/adduser', function(req, res) {
    actions.InsertContact(req, res);
});

//*mog091015*
/* POST to Update User Service */
router.post('/chguser', function(req, res) {
    actions.UpdateContact(req, res);
});

//*mog091015*
/* POST to Delete User Service */
router.post('/deluser', function(req, res) {
    actions.DeleteContact(req, res);
});
