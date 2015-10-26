module.exports = {
	InsertContact : function (req, res){
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
	},
	UpdateContact : function (req, res){
		// Set our internal DB variable
    var db = req.db;
    
    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;
    var name = req.body.name;

    // Set our collection
    var collection = db.get('users');

    // Submit to the DB
    collection.update(
    {   "username" : userName},
    {   "username" : userName,
        "email" : userEmail,
        "name" : name
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem updating the information in the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
	},
	DeleteContact : function (req, res){
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
	},
	LoadContacts : function (req, res){
		var db = req.db;
        var collection = db.get('users');
        collection.find({},{},function(e,docs){
	        res.render('userlist', {
	            "userlist" : docs
	        });
        });
    }
}