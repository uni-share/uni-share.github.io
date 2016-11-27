// $(function() {
//   var h = $(window).height();
 
//   $('.wrapper').css('display','none');
//   $('.loader,.load').height(h).css('display','block');
// });
$(function(){
	setTimeout(function(){
		$('.loader').delay(900).fadeOut(800);
		$('.load').delay(600).fadeOut(300);
	},5000);
});