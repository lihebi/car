var crypto = require('crypto');
//var User = require('../models/user.js');
var User = rquire('../models/user2.js');
exports.login = login;
exports.reg = reg;
function reg(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;
    if (!password || !confirmPassword || password != confirmPassword) {
	req.flash('error', 'confirm password failed');
	return res.redirect('/reg');
    }
    var md5 = crypto.createHash('md5');
    var password_md5 = md5.update(password).digest('hex');
    var newUser = new User({
	email: email,
	password: password_md5
    });
    newUser.save(function(err){
        if (err) return console.error(err);
    });
    /*
    User.get(newUser.email, function(err, user) {
	if (user) {
	    req.flash('error', 'user already exists');
	    return res.redirect('/reg');
	}
	newUser.save(function(err, user) {
	    if (err) {
		req.flash('error', err);
		return res.redirect('/reg');
	    }
	    req.session.user = user;
	    req.flash('success', 'register success');
	    res.redirect('/');
	});
    });
    */
};
function login (req, res) {
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('hex');
    /*
    User.get(req.body.email, function(err, user) {
	if (!user) {
	    req.flash('error', 'user not exists');
	    return res.redirect('/login');
	}
	if (user.password != password) {
	    req.flash('error', 'wrong password');
	    return res.redirect('/login');
	}
	req.session.user = user;
	req.flash('success', 'login success');
	res.redirect('/');
    });
    */
};
