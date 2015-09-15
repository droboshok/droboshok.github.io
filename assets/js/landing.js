(function($) {   

    "use strict";

    var  
    _win        = $(window),
	_win_height = _win.height(),
	_win_scrollTop = _win.scrollTop(),
	body_wrap   = $('#wrap-outer'),
	header_wrap = $('#header'),
	player_wrap = $("#jquery_jplayer"),
	menu           = header_wrap.find('#navi ul.menu'),
	first_level_items     = menu.find('>li').length;

	if( first_level_items > 7 ){
		var switchWidth = 979;
	}else{
		var switchWidth = 769;
	}

	if( $('.responsive-ux').length ){ 
		var _responsive = true;
	}else{
		var _responsive = false;
	}

	if(Modernizr.touch || _win.width()<switchWidth) {
		var _mobile = true; 
	}else{
		var _mobile = false;
	}
	

    $(document).ready(function(){
    	
    	if(!_mobile) {
    		header_scrolled();
    	
	    	if($('.demo-thumbs-wrap-long').length) {
	    		long_images_scroll();
	    	}
	    }

    	//Call mobile menu
		if( _responsive == true ){
			ux_mobile_menu();
		}

    });	//end page ready

    function header_scrolled() {
    	if($(".menu-default-show").length) { 

			if($('body').hasClass('page')){
				$(function () {
				   _win.scroll(function(){
						if (_win.scrollTop()>150){
							 header_wrap.addClass('headerbg');
						}else{
							 header_wrap.removeClass('headerbg');
						}
					});	
				   if (_win.scrollTop()>150){
						 header_wrap.addClass('headerbg');
					}else{
						 header_wrap.removeClass('headerbg');
					}
				});
			} else {
				header_wrap.addClass('headerbg');
			}
		} else {
			if($('body').hasClass('page')){
				$(function () {
				   _win.scroll(function(){
				   	//_win.on(scroll,function(){
						if (_win.scrollTop()>150){
							 header_wrap.addClass('header-slide-down');
						}else{
							 header_wrap.removeClass('header-slide-down');
						}
					});	

				});
			}
		}
	}	

	function long_images_scroll(){

		var _moudle_portfolio_item = $('.demo-thumbs-wrap-long');
		
	
		_moudle_portfolio_item.each(function(){	
			var _this = $(this);

			_this.imagesLoaded(function(){

				_this.find('.demo-thumbs').each(function(){
					
						var works_height       = $(this).height(),
						    works_frame_height = $(this).parent('.demo-thumbs-wrap').height(),
						    works_bottom       = works_height-works_frame_height,
						    works_duration     = works_bottom/150;
						    //console.log(works_height);
						    //console.log(works_frame_height);

						$(this).css('bottom','-'+ works_bottom +'px').css('-webkit-transition-duration',works_duration+'s').css('-moz-transition-duration',works_duration+'s').css('transition-duration',works_duration+'s');
					
				});
			});	
			
		});
		
	}

	function ux_mobile_menu(){

		var navb = $('#navi');

		if(!header_wrap.length) return;

		if(Modernizr.touch) {
			$('body').addClass('ux-mobile');
			navb.css('max-height',_win_height - 60);
			
		} else {

			if(_win.width() > switchWidth) {
				$('body').removeClass('ux-mobile');
				navb.css('max-height','none');
			} else {
				$('body').addClass('ux-mobile');
				navb.css('max-height',_win_height - 60);
			}

			_win.resize(function(){
				if(_win.width() > switchWidth) {
					$('body').removeClass('ux-mobile');
				} else {
					$('body').addClass('ux-mobile');
				}
			})

		}

		$('#advanced_menu_toggle').click(function () {
			if (navb.is(":visible")) {
				navb.slideUp()
			} else {
				navb.slideDown()
			}
			return false;
		});	
		$('.ux-mobile #navi a').click(function(){
			if (navb.is(":visible")) {
				navb.slideUp()
			}
		});

	}

	//** page loading event
	function ux_page_loading_event(el){
		var _url = el.attr('href');
		if(_url){
			_page_loading.fadeIn(300, function(){
				_page_loading.animate({opacity: 1}, 300, function(){
					_page_loading.addClass('visible');
				});
				setTimeout(function(){
					window.location.href = _url;
				}, 300);
			});
		}
	}
	//** Page Loading
	var _page_loading = jQuery('.page-loading');
	if( _page_loading.length ){
		
		if(!Modernizr.touch){
			//** landing demo
			jQuery('.unit-features-li a').click(function(){	
				ux_page_loading_event(jQuery(this));
				return false;
			});
		}

		jQuery("html, body").css({height:_win_height});
		
		_win.load(function(){
			_page_loading.removeClass('visible');
			$("html, body").css({height: "auto"});

		});
	}




})(jQuery);	  