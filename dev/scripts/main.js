$(document).ready(function(){
	$(".burger").on("click tap", function(){
		console.log("click me!");
		$(".dropdown-content").toggleClass("burger1");
	});
});