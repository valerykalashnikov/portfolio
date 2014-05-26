// Jquery with no conflict
jQuery(document).ready(function($) {
	// Load dialog on click using simplemodal plugin
	var $container = $('.portfolio-list');
	
	$container.imagesLoaded(function(){
		$container.masonry({
			itemSelector: 'figure',
			isAnimated: true
		});
	});

});



















