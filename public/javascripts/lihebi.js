$(document).ready(function(){
    switch (window.location.pathname) {
	case '/login': $('#navbarlogin').addClass('active');break;
	case '/reg': $('#navbarreg').addClass('active');break;
	case '/wedding': $('#navbarwedding').addClass('active');break;
	case '/business': $('#navbarbusiness').addClass('active');break;
	case '/travel': $('#navbartravel').addClass('active');break;
    }
    switch (window.location.pathname) {
	case '/travel': getcars(); break;
	case '/hebi/carmanage': getcarsformanage(); break;
    }
});
function getcarsformanage() {
    $.ajax({
	type: "get",
	url: "/getcar",
	dataType: 'json',
	success: function(data) {
	    data.forEach(function(car, index) {
		var html = formhtml(car, index);
		$('#items').append(html);
		html = "<a href='/hebi/modify?id="+car.id+"' class='btn btn-primary'>Modify</a>";
		$('#items').append(html);
	    });
	}
    });
}
function getcars() {
    $.ajax({
	type: "get",
	url: "getcar",
	dataType: 'json',
	success: function (data) {
	    data.forEach(function(car, index) {
		var html = formhtml(car, index);
		$('#items').append(html);
	    });
	}
    });
}
function formhtml(car, index) {
    var col1 = "<div class='col-md-3'> <a href='#'> <img src='"
	+ car.src
	+ "'/><span>"
	+ car.name
	+ "</span></a></div>";
    var col2 = "<div class='col-md-3'> <p><strong>￥"
	+ car.price
	+ "</strong></p> <p>"
	+ car.location
	+ "</p> </div>";
    var col3 = "<div class='col-md-3'> <p>30天内<strong>"
	+ car.usernum
	+ "</strong>人使用</p> <p><a href='#'>"
	+ car.commitnum
	+ "条评论</a></p> </div>";
    var col4 = "<div class='col-md-3'> <p>来自"
	+ car.renter
	+ "</p> </div> ";
    var html = "<div class='row'>" + col1 + col2 + col3 + col4 + "</div>";
    return html;
}
