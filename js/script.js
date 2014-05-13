$(function(){

	// Определение переменных
	var body  = $('body'),
	height = $(body).height(),

	// Dom элементы
	block = $('<div id="scroll-block">'),
	top = $('<span class="scroll-top"><a href="#">top</a></span>'),
	stop = $('<span class="scroll-stop"><a href="#">stop</a></span>'),
	settings = $('<span class="scroll-settings"></span>'),
	bottom = $('<span class="scroll-bottom"><a href="#">bottom</a></span>');

	// Вставка элементов
	$(block).append(top, stop, settings, bottom);
	$(body).append(block);

	// Вверх
	$(top).on('click', function(event){
		event.preventDefault();
		$(body).animate({
			'scrollTop':0,
		}, 8000);
	});

	// Вниз
	$(bottom).on('click', function(event){
		event.preventDefault();
		$(body).animate({
			'scrollTop': height,
		}, 2000);
	});

	// Стоп
	$(stop).on('click', function(event){
		event.preventDefault();
		$(body).stop();
	});

	// Отмена
	$(body).on('scroll mousedown mousewheel keyup', function(){
		$(body).stop();
	})

});