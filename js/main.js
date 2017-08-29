/**
 * Created by maddem on 17.08.2017.
 */
$(document).ready(function(){

	/**
	 * Инициализация слайдера
	 */
	$('.main-slider').slick({
		speed: 1000,
		slidesToShow: 3,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: true,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: true,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false
				}
			},
			{
				breakpoint: 543,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	/**
	 * Плавная прокрутка к якорю
	 */
	$(".navbar-header").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href');

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		var top = $(id).offset().top;
		top = top - top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});


	/**
	 * Инициализация блока акции
	 */
	function specialOffer() {
		$('.special-offer').modal('show')
	}
	setTimeout(specialOffer, 5000);

});
