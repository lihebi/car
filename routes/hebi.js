var Car = require('../models/car.js');

exports.carsubmit = carsubmit;

function carsubmit(req, res) {
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
    newcar.save(function(err, car){
	req.flash('success', 'Inserted Car Information');
	res.redirect('/hebi');
    });
}
