var v = 1;
//chỉ định vận tóc của hiẹu ứng back-to-top và link trên menu
$(".portfolio button").click(function(event){
	var data = $(this).attr("data");
	// alert(data);
	var portfolios = $(this).siblings('.row').children();
	$(this).addClass('active');
	$(this).siblings('button').removeClass('active');
	// alert(portfolios.length);
	if( data == undefined){
		//all btn
		//show all
		// $(".portfolio .row > div").show();
		$(portfolios).show();
	}
	else {
	// var showedElements = $(".portfolio .row > div[data=" + data + "]");
	// var hiddenElements = $(".portfolio .row > div").not(showedElements);

	// var showedElements = $(this).siblings('.row').children("[data=" + data + "]");
	var showedElements = $(portfolios).filter("[data=" + data + "]");
	var hiddenElements = $(portfolios).not(showedElements);
	$(showedElements).show();
	$(hiddenElements).hide();
	}
	//cach cu chuoi
	// $(".portfolio .row > div").hide();
	// $(".portfolio .row > div[data=" + data + "]").show();

});

toggleBackToTop();
$(window).scroll(function(event) {
	 //Act on the event 
	// console.log($(window).scrollTop());

	// console.log($("#portfolio").offset().top);
	if($(window).scrollTop() >= $("#portfolio").offset().top){
		$("header .navbar").addClass('fixed-top');
		$("header").addClass('dummy-padding');
	}else {
		$("header .navbar").removeClass('fixed-top');
		$("header").removeClass('dummy-padding');
	}
	toggleBackToTop();
});


$(".back-to-top").click(function(event) {
	/* Act on the event */
	//time = distance / v;
	var distance = $(this).offset().top;
	var time = distance / v;
	$("html, body").animate({scrollTop:0}, time);
});

function toggleBackToTop(){
	if($(window).scrollTop() == 0){
		//tắt nút back to top
		$(".back-to-top").fadeOut();
	}else {
		//hiện ra
		$(".back-to-top").fadeIn();
	}
}

$("header nav ul li a, #home a").click(function(event) {
	/* Act on the event */
	event.preventDefault(); //ngăn chặn không cho chạy đến vùng có id tương ứng vs hash.
	// var hash = $(this).attr("href");
	var hash = this.hash; //hàm của javascript.
	// alert(hash);
	var target = $(hash);
	//phần tử có id tương ứng vs hash của nút dc click.
	var top = $(target).offset().top;
	// alert(top);
	var distance = Math.abs($(this).offset().top - top);
	//distance: vùng hiện tại con trỏ chuột -  section id
	var time = distance / v;

	$("html, body").stop().animate({scrollTop: top}, time, function(){
		console.log(1);
		window.location.hash=hash;//upate hash of address
	});
	console.log(5);
});