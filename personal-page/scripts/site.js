window.SiteApp = (function($){
	var _positions = {};
    var _siteApp = {};
    var _window = $(window);

    // Used to calculate top X co-ordinate of the sections
	function _calculatePositions(){
		_positions.introduction = 0;
		_positions.about = $('section#about').position().top - 40;
		_positions.portfolio = $('section#portfolio').position().top - 40;
		_positions.contact = $('section#contact').position().top - 40;
	}

    // Retrieve the top of the scroll bar
    function _setScrollTop(){
    	_scrollTop = _window.scrollTop();
    }

    function _removeSelected(){
        var currentSelected = $('nav a.selected');
        if(currentSelected){
            currentSelected.removeClass('selected');
        }
    }

    function _onClick(e){
    	e.preventDefault();
        var $this = $(this);
        
        $this.addClass('selected');

        // Animate the page to scroll to selected section
        $('html, body').animate({
    		scrollTop: _positions[$this.attr('href')]
    	}, 'slow');
    }

    function _onScroll(e){
    	_removeSelected();
    	_setScrollTop();

        var navElements = $('nav');

        // Pin or un-pin the menu to the top
		if(_scrollTop > 315 && !navElements.hasClass('pinned')){
			navElements.addClass('pinned');
		}

		if(_scrollTop <= 315 && navElements.hasClass('pinned')){
			navElements.removeClass('pinned');
		}

        // Figure out what menu item should be selected
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

    function _eventBinder() {
    	$('nav a').on('click', _onClick);
    	_window.on('scroll', _onScroll);

        // Need this for @font-face items to be loaded
    	_window.on('load', _onLoad);
    }

    _siteApp.init = function(){
        _eventBinder();
    }

    return _siteApp;

})(jQuery);