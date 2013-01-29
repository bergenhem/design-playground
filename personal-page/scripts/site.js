window.SiteApp = (function($){
	var _positions = {};

	function _calculatePositions(){
		_positions.introduction = 0;
		_positions.about = $('section#about').position().top - 40;
		_positions.portfolio = $('section#portfolio').position().top - 40;
		_positions.contact = $('section#contact').position().top - 40;
	}

    function _setScrollTop(){
    	_scrollTop = $(window).scrollTop();
    }

    function _onClick(e){
    	e.preventDefault();
    	$('html, body').animate({
    		scrollTop: _positions[$(this).attr('href')]
    	}, 'slow');

    	$(this).addClass('selected');
    }

    function _onScroll(e){
    	_removeSelected();
    	_setScrollTop();

		if(_scrollTop > 315 && !$('nav').hasClass('pinned')){
			$('nav').addClass('pinned');
		}

		if(_scrollTop <= 315 && $('nav').hasClass('pinned')){
			$('nav').removeClass('pinned');
		}

		if(_scrollTop < _positions.about){
			$('a[href=introduction]').addClass('selected');
		}
		else if(_scrollTop >= _positions.about && _scrollTop < _positions.portfolio){
			$('a[href=about]').addClass('selected');
		}
		else if(_scrollTop >= _positions.portfolio && _scrollTop < _positions.contact){
			$('a[href=portfolio]').addClass('selected');
		}
		else if(_scrollTop >= _positions.contact){
			$('a[href=contact]').addClass('selected');
		}
    }

    function _onLoad(e){
    	_calculatePositions();
    }

    function _removeSelected(){
        var currentSelected = $('nav a.selected');
        if(currentSelected){
            currentSelected.removeClass('selected');
        }
    }

    function _eventBinder() {
    	$('nav a').on('click', _onClick);
    	$(window).on('scroll', _onScroll);
    	$(window).on('load', _onLoad);
    }

	return { 
		init: function(){
			_eventBinder();
		}
	};
})(jQuery);

window.tileApp = (function($){

})(jQuery);