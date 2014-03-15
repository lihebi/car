var mongodb = require('./db');

function Car(car) {
    this.name = car.name;
    this.id = car.id;
    this.price = car.price;
    this.preprice = car.preprice;
    this.commitnum = car.commitnum;
    this.carnum = car.carnum;
    this.location = car.location;
    this.src = car.src;
    this.renter = car.renter;
}

module.exports = Car;

Car.prototype.save = function(callback) {
    var car = {
	name: this.name,
	id: this.id,
	price: this.price,
	preprice: this.preprice,
	commitnum: this.commitnum,
	usernum: this.usernum,
	location: this.location,
	src: this.src,
	renter: this.renter
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
