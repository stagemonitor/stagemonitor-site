(function ($) {
	var resizeHero = function(){
		$('#hero').css('max-height', $(window).height()+'px');
	};
	resizeHero();
	$(window).resize(function() {
		resizeHero();
	});


	/*----------------------------------------------------*/
	/* Smooth Scrolling
	 ------------------------------------------------------ */
	$('.smoothscroll').on('click', function (e) {

		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});

	});


	/*----------------------------------------------------*/
	/* ImageLightbox
	 /*----------------------------------------------------*/
	var activityIndicatorOn = function () {
			$('<div id="imagelightbox-loading"><div></div></div>').appendTo('body');
		},
		activityIndicatorOff = function () {
			$('#imagelightbox-loading').remove();
		},

		overlayOn = function () {
			$('<div id="imagelightbox-overlay"></div>').appendTo('body');
		},
		overlayOff = function () {
			$('#imagelightbox-overlay').remove();
		},

		closeButtonOn = function (instance) {
			$('<a href="#" id="imagelightbox-close" title="close"><i class="fa fa fa-times"></i></a>').appendTo('body').on('click touchend', function () {
				$(this).remove();
				instance.quitImageLightbox();
				return false;
			});
		},
		closeButtonOff = function () {
			$('#imagelightbox-close').remove();
		},

		captionOn = function () {
			var description = $('a[href="' + $('#imagelightbox').attr('src') + '"] img').attr('alt');
			if (description.length > 0)
				$('<div id="imagelightbox-caption">' + description + '</div>').appendTo('body');
		},
		captionOff = function () {
			$('#imagelightbox-caption').remove();
		};

	var instanceA = $('a[data-imagelightbox="a"]').imageLightbox(
		{
			onStart: function () {
				overlayOn();
				closeButtonOn(instanceA);
			},
			onEnd: function () {
				overlayOff();
				captionOff();
				closeButtonOff();
				activityIndicatorOff();
			},
			onLoadStart: function () {
				captionOff();
				activityIndicatorOn();
			},
			onLoadEnd: function () {
				captionOn();
				activityIndicatorOff();
			}

		});


})(jQuery);