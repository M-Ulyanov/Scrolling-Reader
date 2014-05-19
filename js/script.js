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
	settings = $('<span class="scroll-settings"><a href="#"></a><span class="wrap-input"><span class="settings-text">Скорость скролла:</span><input type="text" value="200"><button class="new-speed" type="button">Готово</button></span></span>'),
	bottom = $('<span class="scroll-bottom"><a href="#">bottom</a></span>'),
	info = $('<span class="scroll-info"><a href="#"></a><span class="wrap-text"><strong>Scrolling-Reader</strong><br>Автор идеи и разработчик<a target="_blank" href="https://github.com/M-Ulyanov">M.Ulyanov</a><br><strong>Информация:</strong><br>Для изменения скорости скроллинга нажмите на иконку с настройками, задайте скорость, после чего переопределите направление скроллинга!Все!<span class="close-text"><a href="#">Закрыть</a></span></span></span>');

	// Вставка элементов
	$(block).append(top, stop, settings, bottom, info);
	$(body).append(block);

	// Добавление классов
	$(top).addClass('top-window');

	// Вверх
	$(top).on('click', function(event){
		event.preventDefault();

		var posisition = $(document).scrollTop();
		var scrollTime = posisition / speedScroll;

		$('html, body').stop().animate({
			'scrollTop': 0,
		}, scrollTime);
	});

	// Вниз
	$(bottom).on('click', function(event){
		event.preventDefault();

		var posisition = $(document).scrollTop();
		var scrollTime = (height - posisition) / speedScroll;

		$('html, body').animate({
			'scrollTop': height,
		}, scrollTime);

	});

	// Стоп
	$(stop).on('click', function(event){
		event.preventDefault();
		$('html, body').stop();
	});

	// Настройки 
	$('.scroll-settings > a').on('click', function(event){
		event.preventDefault();

		if($('.wrap-text').is(':visible')){
			$('.wrap-text').hide();
		}

		$(this).parent().find('.wrap-input').fadeIn(500);
	});

	// Запрет ввода чисел
	$('.wrap-input input[type="text"]').on('keypress input change', function(event){
		if(event.charCode < 48 || event.charCode > 57) return false;
	})

	// Расчет
	var speedScroll = parseFloat($('.scroll-settings .wrap-input').find('input[type="text"]').val());
	speedScroll /= 1000;

	// Расчет и закрытие
	$('.new-speed').on('click', function(event){
		event.preventDefault();

		speedScroll = parseFloat($(this).siblings('input[type="text"]').val());
		speedScroll /= 1000;
		$(this).parent('.wrap-input').fadeOut(400);

	});

	// Информация 
	$('.scroll-info > a').on('click', function(event){
		event.preventDefault();

		if($('.wrap-input').is(':visible')){
			$('.wrap-input').hide();
		}

		$(this).parent().find('.wrap-text').fadeIn(500);
	});

	$('.close-text a').on('click', function(event){
		event.preventDefault();
		
		$(this).parents('.wrap-text').hide();
	});

	// Отмена
	$(body).on('scroll mousewheel mousedown', function(){
		$('html, body').stop();
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

	// Блок настроек и информации
	$('.wrap-input, .wrap-text').css({
		display: 'none',
		position: 'absolute',
	});


});