$(document).ready(function(){
    switch (window.location.pathname) {
	case '/login': $('#navbarlogin').addClass('active');break;
	case '/reg': $('#navbarreg').addClass('active');break;
	case '/wedding': $('#navbarwedding').addClass('active');break;
	case '/business': $('#navbarbusiness').addClass('active');break;
	case '/travel': $('#navbartravel').addClass('active');break;
    }
});
