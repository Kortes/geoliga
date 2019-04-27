$(document).ready(function() {
	$(".carousel__list").slick({
		prevArrow: $(".carousel__arrow_position_prev"),
		nextArrow: $(".carousel__arrow_position_next"),
		dots: true
	});

	$(".services__zoom").fancybox();

	$(".services__link").fancybox();

    $(".header__burger").click(function(e){
        e.preventDefault();
        $(".header__left-menu").toggleClass("header__left-menu_active");
    });

    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [56.826760999423534,60.58656015951259],
            zoom: 17,
            controls: ['zoomControl']
        });

        myMap.behaviors.disable('scrollZoom'); 

        myPlacemark = new ymaps.Placemark([56.82681982305506,60.59060493070703],
        {},{
        	iconLayout: 'default#image',
            iconImageHref: './images/map.png',
            // Размеры метки.
            iconImageSize: [53, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -30]
        });

        myMap.geoObjects.add(myPlacemark);
    }
});