$(document).ready(function () {

	$("#button-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#scroll-about").offset().top - 50
    }, 500);
		});

	$("#button-my-work").click(function() {
    $('html, body').animate({
        scrollTop: $("#scroll-my-work").offset().top - 20
    }, 500);
		});

	$("#button-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#scroll-contact").offset().top - 25
    }, 500);
		});

    }
);