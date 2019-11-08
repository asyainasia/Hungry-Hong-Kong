$(function(){
	$('.wrapper').on('click', function(){
		$('.firstPage').toggle();
		$('.block').toggle('slide');
		$('.wrapper').toggleClass('wrapperActive');
		$('.thirdPage').css('display', 'none');
		$('.secondPage').css('display', 'flex');
	});

	$('.scrollDown').click(function(){
		$('.secondPage').slideToggle('slow');
		$('.thirdPage').slideToggle('slow').css('display', 'flex').css('flex-direction', 'row');
	});

	$('.scrollUp').click(function(){
		$('.secondPage').slideToggle('slow');
		$('.thirdPage').slideToggle('slow');
	});
	$('.scrollDown2').click(function(){
		$('.fourthPage').slideToggle('slow');
		$('.fifthPage').slideToggle('slow').css('display', 'flex').css('flex-direction', 'row');
	});

	$('.scrollUp2').click(function(){
		$('.fourthPage').slideToggle('slow');
		$('.fifthPage').slideToggle('slow');
	});
});