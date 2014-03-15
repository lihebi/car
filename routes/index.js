
/*
 * GET home page.
 */

var account = require('./account.js');

function renderpage(req, res, ejs, title) {
    res.render(ejs, {
	    title: title,
	    user: req.session.user,
	    success: req.flash('success').toString(),
	    error: req.flash('error').toString()
    });
}
function checkLogin(req, res, next) {
    if (!req.session.user) {
	req.flash('error', 'Please login first');
	req.redirect('/login');
    }
    next();
}
function checkNotLogin(req, res, next) {
    if (req.session.user) {
	req.flash('error', 'You have already logged in');
	res.redirect('back');
    }
    next();
}
function checkHebi(req, res, next) {
    if (!req.session.user || req.session.user.email != 'lihebi@mail.ustc.edu.cn') {
	req.flash('error', 'you are not handsome');
	res.redirect('back');
    }
    next();
}

module.exports = function(app) {
    app.get('/', function(req, res) {
	renderpage(req, res, 'index', '租车风，方便快捷的租车平台');
    });
    app.get('/login', checkNotLogin);
    app.get('/login', function(req, res) {
	renderpage(req, res, 'login', '登录');
    });
    app.post('/login', checkNotLogin);
    app.post('/login', function(req, res) {
	account.login(req, res);
    });
    app.get('/reg', checkNotLogin);
    app.get('/reg', function(req, res) {
	renderpage(req, res, 'reg', '注册');
    });
    app.post('/reg', checkNotLogin);
    app.post('/reg', function(req, res) {
	account.reg(req, res);
    });
    app.get('/travel', function(req, res) {
	renderpage(req, res, 'travel', '自驾旅游-租车风');
    });
    app.get('/business', function(req, res) {
	renderpage(req, res, 'business', '商务用车-租车风');
    });
    app.get('/wedding', function(req, res) {
	renderpage(req, res, 'wedding', '婚庆典礼');
    });
    app.get('/logout', checkLogin);
    app.get('/logout', function(req, res) {
	req.session.user = null;
	req.flash('success', 'logout success');
	res.redirect('/');
    });
    app.get('/me', checkLogin);
    app.get('/me', function(req, res) {
	renderpage(req, res, 'me', '我的租车风');
    });
    app.get('/hebi', checkHebi);
    app.get('/hebi', function(req, res) {
	renderpage(req, res, 'hebi', 'Control Page');
    });
    app.get('/test', function(req, res) {
	res.send({
	    0:{
		name: '奔驰',
		src: 'images/benchi.jpg',
		price: '118',
		location: '合肥市蜀山区',
		usernum: 114,
		commitnum: 62,
		renter: '合肥天运'
	    },
	    1: {
		name: '宝马',
		src: 'images/baoma.jpg',
		price: '149',
		location: '合肥市蜀山区',
		usernum: 318,
		commitnum: 142,
		renter: '合肥天运'
	    }
	});
    });
}
