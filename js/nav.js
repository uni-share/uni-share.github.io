$(function(){
	//グローバルナビゲーション部分ハンバーガー
	var $close = $(".g-nav");
	$(".ham").on("click",function(){
		$close.toggleClass('close');
		if($close.hasClass("close")){
			$(".line1,.line4").stop().fadeOut();
			$({deg:0}).animate({deg:45},{
				duration:500,
				progress:function() {
					$(".line3").css({
						transform:'rotate(' + this.deg + 'deg)',
						top:"10px"
					});
				}
			});
			$({deg:0}).animate({deg:315},{
				duration:500,
				progress:function() {
					$(".line2").css({
						transform:'rotate(' + this.deg + 'deg)',
						top :"10px"
					});
				}
			});
			$close.slideDown();
		}else{
			$(".line1,.line4").stop().fadeIn();
			$({deg:45}).animate({deg:0},{
				duration:500,
				progress:function() {
					$(".line3").css({
						transform:'rotate(' + this.deg + 'deg)',
						top :"16px"
					});
				}
			});
			$({deg:315}).animate({deg:0},{
				duration:500,
				progress:function() {
					$(".line2").css({
						transform:'rotate(' + this.deg + 'deg)',
						top:"8px"
					});
				}
			});
			$close.slideUp();
		}
	});

	//ナビゲーションの中身
	$(".nav-slide").each(function(){
		$("#top").on("mouseover",function(){
			$("#ichimaime").stop().fadeIn(800);
		});
		$("#top").on("mouseout",function(){
			$("#ichimaime").stop().fadeOut(500);
		});
		$("#youth").on("mouseover",function(){
			$("#nimaime").stop().fadeIn(800);
		});
		$("#youth").on("mouseout",function(){
			$("#nimaime").stop().fadeOut(500);
		});
		$("#home").on("mouseover",function(){
			$("#sanmaime").stop().fadeIn(800);
		});
		$("#home").on("mouseout",function(){
			$("#sanmaime").stop().fadeOut(500);
		});
		$("#enjinai").on("mouseover",function(){
			$("#yonmaime").stop().fadeIn(800);
		});
		$("#enjinai").on("mouseout",function(){
			$("#yonmaime").stop().fadeOut(500);
		});
	});
});