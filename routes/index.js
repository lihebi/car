
/*
 * GET home page.
 */

module.exports = function(app) {
    app.get('/', function(req, res) {
	res.render('index', {
	    title: '租车风，方便快捷的租车平台'
	});
    });
    app.get('/travel', function(req, res) {
	res.render('travel', {
	    title: '自驾旅游-租车风'
	});
    });
    app.get('/business', function(req, res) {
	res.render('business', {
	    title: '商务用车-租车风'
	});
    });
    app.get('/wedding', function(req, res) {
	res.render('wedding', {
	    title: '婚庆典礼'
	});
    });
}
