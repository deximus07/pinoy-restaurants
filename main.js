

// --- Menu Button:

$(document).ready(function(){

    var a = 0;

    var menuButton = $('#hamburger');
    var mobileMenu = $('#mobile-menu');

	menuButton.click(function() {
		
		if (a == 0) {
			mobileMenu.animate({
			top: '100'
            }, 200);
            
            a = a + 1;
		} 

		else {
			mobileMenu.animate({
			top: '-400'
            }, 200);
            
			a = a - 1;
		}
    });

});