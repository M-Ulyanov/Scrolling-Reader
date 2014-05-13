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
	settings = $('<span class="scroll-settings"></span>'),
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

	// Отмена
	$(body).on('scroll mousedown mousewheel keyup', function(){
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

});