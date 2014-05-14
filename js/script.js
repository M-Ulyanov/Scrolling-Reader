$(function(){

	// Определение переменных
	var body  = $('body'),
	height = $(document).height(),
	winHeight = $(window).height(),
	scroll = '',

	// Dom элементы
	block = $('<div id="scroll-block">'),
	top = $('<span class="scroll-top"><a href="#">top</a></span>'),
	stop = $('<span class="scroll-stop"><a href="#">stop</a></span>'),
	settings = $('<span class="scroll-settings"><a href="#"></a><span class="wrap-input"><span class="settings-text">Скорость скролла:</span><input type="text"><button type="button">Готово</button></span></span>'),
	bottom = $('<span class="scroll-bottom"><a href="#">bottom</a></span>');

	// Вставка элементов
	$(block).append(top, stop, settings, bottom);
	$(body).append(block);

	// Добавление классов
	$(top).addClass('top-window');	

	// Вверх
	$(top).on('click', function(event){
		event.preventDefault();

		var posisition = $(document).scrollTop();
		var scrollTime = posisition / 0.2;

		$(body).animate({
			'scrollTop': 0,
		}, scrollTime);
	});

	// Вниз
	$(bottom).on('click', function(event){
		event.preventDefault();

		var posisition = $(document).scrollTop();
		var scrollTime = (height - posisition) / 0.2;

		$(body).animate({
			'scrollTop': height,
		}, scrollTime);

	});

	// Стоп
	$(stop).on('click', function(event){
		event.preventDefault();
		$(body).stop();
	});

	// Настройки 

	$('.scroll-settings > a').on('click', function(event){
		event.preventDefault();
		$(this).parent().find('.wrap-input').animate({
			opacity: 1,
		})		
	});

	// Отмена
	$(body).on('scroll mousewheel', function(){
		$(body).stop();
	});

	// Поведение кнопок
	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll == 0){
			$(top).addClass('top-window');
		}
		else{
			$(top).removeClass('top-window');
		}

		if(scroll == (height - winHeight)) {
			$(bottom).addClass('bottom-window');
		}
		else{
			$(bottom).removeClass('bottom-window');
		}

	});

	// Блок настроек

	$('.wrap-input').css({
		opacity: 0,
		position: 'absolute',
	})

});