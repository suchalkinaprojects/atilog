$(document).ready(function() {
	$('.button-burger').on('click', function(){
		this.classList.toggle('active');
		$('.header-navigation').toggle('open');
	});
});