/*MyApp = (function($){

})(jQUery);*/

$(function() {
	window.sections = { };

	sections.introduction = 0;
	sections.about = $('section#about').position().top;
	sections.portfolio = $('section#portfolio').position().top;
	sections.contact = $('section#contact').position().top;

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