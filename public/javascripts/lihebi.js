$(document).ready(function(){
    switch (window.location.pathname) {
	case '/login': $('#navbarlogin').addClass('active');break;
	case '/reg': $('#navbarreg').addClass('active');break;
	case '/wedding': $('#navbarwedding').addClass('active');break;
	case '/business': $('#navbarbusiness').addClass('active');break;
	case '/travel': $('#navbartravel').addClass('active');break;
    }
    switch (window.location.pathname) {
	case '/travel': {
	    getitems();
	    break;
	}
    }
});
function getitems() {
    $.ajax({
	type: "get",
	url: "test",
	dataType: 'json',
	success: function (data) {
	    var i=0;
	    for (;data[i];i++) {
		var col1 = "<div class='col-md-3'> <a href='#'> <img src='"
		    + data[i].src
		    + "'/><span>"
		    + data[i].name
		    + "</span></a></div>";
		var col2 = "<div class='col-md-3'> <p><strong>￥"
		    + data[i].price
		    + "</strong></p> <p>"
		    + data[i].location
		    + "</p> </div>";
		var col3 = "<div class='col-md-3'> <p>30天内<strong>"
		    + data[i].usernum
		    + "</strong>人使用</p> <p><a href='#'>"
		    + data[i].commitnum
		    + "条评论</a></p> </div>";
		var col4 = "<div class='col-md-3'> <p>来自"
		    + data[i].renter
		    + "</p> </div> ";
		var html = "<div class='row'>" + col1 + col2 + col3 + col4 + "</div>";
		$('#items').append(html);
	    }
	}
    });
}
