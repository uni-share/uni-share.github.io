$(function(){
	
	//スライドさせるところを作る
	$("#main").each(function(){

		var $slides = $(this).find(".slides");
		var slidecount = $slides.length;
		var currentIndex = 0;

		$slides.eq(currentIndex).fadeIn();
		$("#r-btn").on("click",showNextSlide);
		$("#l-btn").on("click",showSlide);

		function showNextSlide(){
			var nextIndex = (currentIndex + 1) % slidecount;
			$slides.eq(currentIndex).stop().fadeOut(2000);
			$slides.eq(nextIndex).stop().fadeIn(2000);
			currentIndex = nextIndex;
		}
		function showSlide(){
			var nextIndex = (currentIndex - 1) % slidecount;
			$slides.eq(currentIndex).stop().fadeOut(2000);
			$slides.eq(nextIndex).stop().fadeIn(2000);
			currentIndex = nextIndex;
		}
	});

});