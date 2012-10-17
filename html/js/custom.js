$(document).ready(function(){
	

	$('.search-view').live("click",function(){
		$(this).parent().parent().next('tr.tr-desc').toggle();
		//$(this).toggleClass('minus');
	});
	
	$('.source-btn').click(function(){
		$(this).next('.drop-menu').toggle();
		return false;
		//$(this).toggleClass('minus');
	});
	
	/*var totalelements=0;
	$(".list-profile-wrap").each(function(index) {
		 totalelements++;
	  });
	  
	$(".list-profile-wrap").each(function(index) {
		 zindex = totalelements--;
		//$(this).css('zIndex', zindex);
	  });*/
	
	/*$('.adv-search').click(function() {
	
		$(".search-box-wrap").show();
		$(".search-box-wrap .advanced-search").show();
		$(".search-box-wrap .search-template").hide();
	});
	
	$('.svd-tpl').click(function() {
	
		$(".search-box-wrap").show();
		$(".search-box-wrap .search-template").show();
		$(".search-box-wrap .advanced-search").hide();
		
	});*/
	
	$('.regular').click(function() {
	
		$(".search-box-wrap").hide();
		
	});
	
	$('.searchlink').click(function() {
	
		$(".searchbody").toggle();
		$(".search-filter-left, .search-box, .texts").toggle();
		var txt =$(this).text();
		$(this).text(txt=='Back to Search Filter' ?'Add new search' : 'Back to Search Filter');
		emitter.emit("rearrangePortals");
	});
	
	$('.toggle-hide').click(function() {
	
		$(".toggle-contnt").hide();
		
	});
	
	$('.search-link a').click(function() {
		$('.search-link a').removeClass('active');
		$(this).addClass('active');
		return false;
	
	});
	
	
	var top = $('.list-contnt-wrap').offset().top - parseFloat($('.list-contnt-wrap').css('marginTop').replace(/auto/, 0));
	      $(window).scroll(function (event) {
	        // what the y position of the scroll is
	        var y = $(this).scrollTop();
	     
	        // whether that's below the form
	        if (y >= top) {
	          // if so, ad the fixed class
	          $('.list-contnt-wrap').addClass('fixed');
	        } else {
	          // otherwise remove it
	          $('.list-contnt-wrap').removeClass('fixed');
	        }
	      });		
		
		
	
	
});
