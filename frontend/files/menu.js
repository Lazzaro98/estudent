$(document).ready(function(){
	$(".burger").on("click",function(){
		$(".left_side").toggleClass("open");
		$(".burger").toggleClass("open");
	});
});
