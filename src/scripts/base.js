
$(document).ready(function(){
	$('.navbar .dropdown').hover(function() {
		$(this).addClass('active').find('.dropdown-menu').first().stop(true, true).delay(100).slideDown();
	}, function() {
		$(this).removeClass('active').find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
	});
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink'),
    $('ul.navbar-nav').addClass('shrink');
    $('#logoEmblem').addClass('shrink');
    $('nav.navbar-header').addClass('shrink');
  } else {
    $('nav').removeClass('shrink'),
    $('ul.navbar-nav').removeClass('shrink');
    $('#logoEmblem').removeClass('shrink')
    $('nav.navbar-header').removeClass('shrink');
  }
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

