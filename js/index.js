function scrollDown(name) {
	var aTag = $("a[name='" + name + "']");
	$('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
}

$('#adventure-link').click(function() {
	scrollDown('adventure');
});

$('#wedding-party-link').click(function() {
	scrollDown('wedding-party');
});

$('#wedding-details-link').click(function() {
	scrollDown('wedding-details');
});

$('#registry-link').click(function() {
	scrollDown('registry');
});

$('#contact-link').click(function() {
	scrollDown('contact');
});

function contentReposition() {
	var $screenHeight = $(window).height();
	var $mainDiv = $('.l-main-div');
	var $mainContentHeight = $('#l-main-content').outerHeight(true);
	var marginTop = ($screenHeight - $mainContentHeight) / 2;

	if (marginTop > 30 && $mainContentHeight <= $screenHeight) {
		$mainDiv.css("padding-top", marginTop);
		$mainDiv.css("padding-bottom", marginTop);
	}
	else if (marginTop < 30) {
		$mainDiv.css("padding", "30px");
	}
}

$(window).resize(contentReposition);