var Car = require('../models/car.js');

exports.carsubmit = carsubmit;
exports.carmodify = carmodify;

function formCar(req) {
    var name = req.body.name;
    var id = req.body.id;
    var price = req.body.price;
    var preprice = req.body.preprice;
    var commitnum = req.body.commitnum;
    var usernum = req.body.usernum;
    var location = req.body.location;
    var src = req.body.src;
    var renter = req.body.renter;
    var newcar = new Car({
	name: name,
	id: id,
	price: price,
	preprice: preprice,
	commitnum: commitnum,
	usernum: usernum,
	location: location,
	src: src,
	renter: renter
    });
    console.log(newcar.usernum);
    return newcar;
}

function carsubmit(req, res) {
    var newcar = formCar(req);
    newcar.save(function(err, car){
	req.flash('success', 'Inserted Car Information');
	res.redirect('/hebi');
    });
}

function carmodify(req, res) {
    var newcar = new Car(formCar(req));
    Car.update(req.body.id, newcar, function(err, car) {
	req.flash('success', 'Updated');
	res.redirect('/hebi');
    });
}
