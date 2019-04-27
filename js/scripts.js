$(document).ready(function() {
	$(".carousel__list").slick({
		prevArrow: $(".carousel__arrow_position_prev"),
		nextArrow: $(".carousel__arrow_position_next"),
		dots: true
	});

	$(".services__zoom").fancybox();

	$(".services__link").fancybox();
});