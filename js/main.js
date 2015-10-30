/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

$('#change-content').click(function() {
	var selector = $('#selector').val();
	var content = #('#newContent').val();
	$(selector).text(content);
});

$('#add-at-end').click(function() {
	var selector = $('#selector').val();
	var content = #('#newContent').val();
	$(selector).append(" " + content);
});

$('#add-at-start').click(function() {
	var selector = $('#selector').val();
	var content = #('#newContent').val();
	$(selector).prepend(content + " ");
});

$('#insert-before').click(function() {
	var selector = $('#selector').val();
	var content = #('#newContent').val();
	$(selector).before(content + " ");
});

$('#move-after').click(function() {
	var selector = $('#selector').val();
	var content = #('#newContent').val();
	$(selector).insertAfter("  " + content);
});

$('#surround-class').click(function() {
	var selector = $('#selector').val();
	var content = #('#newContent').val();
	$(selector).wrap("<div class=" + content + "></div>");
});

$('#hide-text').click(function() {
	var selector = $('#selector').val();
	var content = #('#newContent').val();
	if (content.length > 12) {
		$(selector).wrap("<div class='hidden'></div");
	};
});

$('#remove-word').click(function() {
	var selector = $('#selector').val();
	var content = #('#newContent').val();
	if ($(selector).includes(content)) {
		$(selector).remove();
	};
});