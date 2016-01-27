$(document).ready(function() {
	$("#addItem").on("submit", function(e) {
		e.preventDefault();

		var $newItem = $("input").val();
		$("input").val('');
		$("ul").append("<li><span>X </span>" + $newItem + "</li>");
		
	});

	$("span").on("click", function() {
		$(this).remove();
	});
});