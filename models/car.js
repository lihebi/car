var mongodb = require('./db');

function Car(car) {
    this.name = name;
    this.price = price;
    this.preprice = preprice;
    this.commitnum = commitnum;
    this.usernum = usernum;
    this.location = location;
    this.src = src;
    this.renter = renter;
}

module.exports = Car;

Car.prototype.save = function(callback) {
    var car = {
	name: this.name,
	price: this.price,
	preprice: this.preprice,
	commitnum = this.commitnum,
	usernum = this.usernum,
	location = this.location,
	src = this.src,
	renter = this.renter
    };
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

Car.get = function(id, callback) {
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
