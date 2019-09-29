var isMobile = {
Android: function () {
	return navigator.userAgent.match(/Android/i);
}, BlackBerry: function () {
	return navigator.userAgent.match(/BlackBerry/i);
}, iOS: function () {
	return navigator.userAgent.match(/iPhone|iPad|iPod/i);
}, Opera: function () {
	return navigator.userAgent.match(/Opera Mini/i);
}, Windows: function () {
	return navigator.userAgent.match(/IEMobile/i);
}, any: function () {
	return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
}};


$(document).ready(function() {
    
    if (isMobile.any()) {
		var css = $("<link></link>");
		css.attr("rel","stylesheet");
		css.attr("href","css/mobile.css");
		$("head").append(css);
	}
    
    $("#schedule").click(function() {
        $(".schedule").fadeToggle();
    });
    
    $("#contact").click(function() {
        $(".contact").fadeToggle();
    });
    
    $(".close").click(function() {
        $("#myModal").fadeToggle();
    });
    
    $(".logo").mouseenter(function() {
        $(this).addClass("spin").delay(5000).queue(function() {
            $(this).removeClass("spin").dequeue();
        });

    });
});