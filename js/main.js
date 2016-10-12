$(function(){

	//スムーススクロールの起動
	smoothScroll.init({
		speed: 1000 ,
		easing: 'easeInOutCubic',
		offset: "50px",
	}) ;

	//トップの自動更新
	$(".main-visual").each(function(){

		var $slides = $(this).find("img");
		var slidecount = $slides.length;
		var currentIndex = 0;

		setInterval(showNextSlide,8000);

		function showNextSlide(){
			var nextIndex = (currentIndex + 1) % slidecount;
			$slides.eq(currentIndex).stop().fadeOut(2500);
			$slides.eq(nextIndex).stop().fadeIn(2500);
			currentIndex = nextIndex;
		}
	});

	//クリックするとcoverを変更
	$("#one").on("click",function(){
		$(".big-cover").attr("src","img/cover_onodera.png");
	});
	$("#two").on("click",function(){
		$(".big-cover").attr("src","img/cover_komiyama.png");
	});
	$("#three").on("click",function(){
		$(".big-cover").attr("src","img/cover_kissho.png");
	});

	//位置ナビゲーションの場所
	var $window = $(window);
	var $magazine = $(".magazine");
	var $cover = $(".cover");
	var $contents = $(".contents");
	var $web = $(".webcontents");
	var $stock = $(".stock");
	var magazineOffsetTop = $magazine.offset().top;
	var coverOffsetTop = $cover.offset().top -300;
	var contentsOffsetTop = $contents.offset().top -100;
	var webcontentsOffsetTop = $web.offset().top -200;
	var stockOffsetTop = $stock.offset().top -150;
	var duration = 200;

	$window.on("scroll",function(){
		if($window.scrollTop() > magazineOffsetTop - 300){
			$(".circles").fadeIn();
		}else{
			$(".circles").fadeOut();
		}

		if(magazineOffsetTop-300 < $window.scrollTop() && $window.scrollTop() < coverOffsetTop){
			$(".maru1").stop().animate({
				"background-color":"red"
			},duration);
		}else{
			$(".maru1").stop().animate({
				"background-color":"rgba(33,33,33,0.6)"
			},duration);
		}

		if(coverOffsetTop < $window.scrollTop() && $window.scrollTop() < contentsOffsetTop){
			$(".maru2").stop().animate({
				"background-color":"red"
			},duration);
		}else{
			$(".maru2").stop().animate({
				"background-color":"rgba(33,33,33,0.6)"
			},duration);
		}

		if(contentsOffsetTop < $window.scrollTop() && $window.scrollTop() < webcontentsOffsetTop){
			$(".maru3").stop().animate({
				"background-color":"red"
			},duration);
		}else{
			$(".maru3").stop().animate({
				"background-color":"rgba(33,33,33,0.6)"
			},duration);
		}
		if(webcontentsOffsetTop < $window.scrollTop() && $window.scrollTop() < stockOffsetTop){
			$(".maru4").stop().animate({
				"background-color":"red"
			},duration);
		}else{
			$(".maru4").stop().animate({
				"background-color":"rgba(33,33,33,0.6)"
			},duration);
		}

		if($window.scrollTop() > stockOffsetTop){
			$(".maru5").stop().animate({
				"background-color":"red"
			},duration);
		}else{
			$(".maru5").stop().animate({
				"background-color":"rgba(33,33,33,0.6)"
			},duration);
		}
	});
});