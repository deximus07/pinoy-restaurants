

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

$(document).ready(function(){

	let mdLoc = $('#md-loc');
	let vaLoc = $('#va-loc');
	let dcLoc = $('#dc-loc');
	
  mdLoc.click(function(){
	  	$('article').css({background: 'linear-gradient(to top left, #0066ff 0%, #ff99cc 100%)'});
		$('.logo-container1').toggle(100);
		$('.logo-container2').hide(100);	
		$('.logo-container3').hide(100);	
		
		// $('#logo01').animate({top: '10px', left: '50px'}, 600);
		// $('#logo02').animate({top: '10px', left: '330px'}, 600);
		// $('#logo03').animate({top: '10px', right: '575px'}, 600);
		// $('#logo04').animate({top: '10px', right: '320px'}, 600);
		// $('#logo05').animate({top: '10px', right: '50px'}, 600);


		vaLoc.click(function() {
			$('article').css({background: 'linear-gradient(to top left, #ff0000 0%, #ffcc00 67%);'});
			$('.logo-container2').toggle(100);	
			$('.logo-container1').hide(100);	
			$('.logo-container3').hide(100);		  

		});

			dcLoc.click(function() {
				$('article').css({background: 'linear-gradient(to top left, #ff0000 0%, #ffcc00 67%)'});
				$('.logo-container3').toggle(100);	
				$('.logo-container1').hide(100);
				$('.logo-container2').hide(100);		  	  

			});

	});
	
});




