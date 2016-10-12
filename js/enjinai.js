$(function(){
	window.onload = function(){
		$(".start").fadeIn(3000,function(){
			$(".wrapper").fadeIn(300);
		});
		$(".batu").on("click",function(){
			$(".start").fadeOut(1500);
		});
	};
});