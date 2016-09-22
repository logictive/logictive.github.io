// Browser detection for when you get desperate. A measure of last resort.

// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }

// Uncomment the below to use:
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);


function initPage(){

	// your functions go here
	$('#contactform').attr('action', '//formspree.io/' + 'info' + '@' + 'logictive' + '.' + 'co' + '.' + 'uk');
	$('label').not('input[type=checkbox] + label').addClass('element-invisible');
	$('input, select, textarea').not('input[type=checkbox], input[type=submit], input[type=hidden], input#gotcha').after('<span class="icon"></span>');
	$('#name + .icon').text('user');
	$('#email + .icon').text('email');
	$('#message + .icon').text('edit');
;};