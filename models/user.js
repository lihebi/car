var mongodb = require('./db');
var common = require('./common');

function User(user) {
    common.cloneTo(user, this);
}

module.exports = User;

User.prototype.save = function(callback) {
    var user = common.clone(this);
    mongodb.open(function(err, db) {
	if (err) {
	    return callback(err);
        }
	db.collection('users', function(err, collection) {
	    if (err) {
		mongodb.close();
		return(err);
	    }
            common.getRandomUniqueId(collection, function(id){
                user.id = id;
                collection.insert(user, {
                    safe: true
                }, function(err, user) {
                    mongodb.close();
                    if (err) {
                        return callback(err);
                    }
                    callback(null, user[0]);
                });
            });
	});
    });
};

User.get = function(email, callback) {
    mongodb.open(function(err, db) {
	if (err) {
	    return callback(err);
	}
	db.collection('users', function(err, collection) {
	    if (err) {
		mongodb.close();
		return callback(err);
	    }
	    collection.findOne({
		email: email
	    }, function(err, user) {
		mongodb.close();
		if (err) {
		    return callback(err);
		}
		callback(null, user);
	    });
	});
    });
};
