window.MyApp = (function($){
	var _introduction, _about, _portfolio, _contact;

	function _calculatePositions(){
		_introduction = 0;
		_about = $('section#about').position().top;
		_portfolio = $('section#portfolio').position().top;
		_contact = $('section#contact').position().top;
	}

    function _populatePositions(positions){
      positions.introduction = _introduction;
      positions.about = _about;
      positions.portfolio = _portfolio;
      positions.contact = _contact;
    }

	return { 
		init: function(){
			_calculatePositions()
		},
		getPositions: function(){
			var positions = { };
			_populatePositions(positions);
			return positions;
		}

	};
})(jQuery);

$(function() {
	MyApp.init();

	var sections = MyApp.getPositions();

	$(window).scroll(function (){
		scrollTop = $(window).scrollTop();

		if(scrollTop > 255 && !$('nav').hasClass('pinned')){
			$('nav').addClass('pinned');
		}

		if(scrollTop <= 255 && $('nav').hasClass('pinned')){
			$('nav').removeClass('pinned');
		}

		if(scrollTop < sections.about){
		}
		else if(scrollTop >= sections.about && scrollTop < sections.portfolio){
			$('nav').add
		}
		else if(scrollTop >= sections.portfolio && scrollTop < sections.contact){
		}
		else if(scrollTop >= sections.contact){
		}

	});
});