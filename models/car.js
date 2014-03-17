var mongodb = require('./db');
var common = require('./common');

function Car(car) {
    common.cloneTo(car, this);
}

module.exports = Car;

Car.prototype.save = function(callback) {
    var car = common.clone(this);
    mongodb.open(function(err, db) {
	if (err) {
	    return callback(err);
	}
	db.collection('cars', function(err, collection) {
	    if (err) {
		mongodb.close();
		return(err);
	    }
	    collection.insert(car, {
		safe: true
	    }, function(err, car) {
		mongodb.close();
		if (err) {
		    return callback(err);
		}
		callback(null, car[0]);
	    });
	});
    });
};

Car.deleteById = function(id, callback) {
    mongodb.open(function(err, db) {
	if (err) {
	    return callback(err);
	}
	console.log('opened');
	db.collection('cars', function(err, collection){
	    if (err) {
		mongodb.close();
		console.log('close');
		return callback(err);
	    }
	    collection.remove({id: id}, function(err, car) {
		mongodb.close();
		console.log('close2');
		if (err) {
		    return callback(err);
		}
		callback(null, car[0]);
	    });
	});
    });
};

Car.update = function(id, newcar, callback) {
    mongodb.open(function(err, db) {
	if (err) {
	    return callback(err);
	}
	db.collection('cars', function(err, collection)  {
	    if (err) {
		mongodb.close();
		return callback(err);
	    }
	    collection.update({id: id}, newcar, {
		safe: true
	    }, function (err, car) {
		mongodb.close();
		if (err) {
		    return callback(err);
		}
		callback(null, car);
	    });
	});
    });
};

Car.getById = function(id, callback) {
    mongodb.open(function(err, db) {
	if (err) {
	    return callback(err);
	}
	db.collection('cars', function(err, collection){
	    if (err) {
		mongodb.close();
		return callback(err);
	    }
	    collection.findOne({
		id: id
	    }, function (err, car) {
		mongodb.close();
		if (err) {
		    return callback(err);
		}
		callback(null, car);
	    });
	});
    });
};

Car.getall = function(callback)  {
    mongodb.open(function(err, db) {
	if (err) {
	    return callback(err);
	}
	db.collection('cars', function(err, collection) {
	    if (err) {
		mongodb.close();
		return callback(err);
	    }
	    var query = {};
	    collection.find(query).sort({
		price: 1
	    }).toArray(function(err, docs) {
		mongodb.close();
		if (err) {
		    return callback(err);
		}
		callback(null, docs);
	    });
	});
    });
}
