$(document).ready(function() {
	$("#addItem").on("submit", function(e) {
		e.preventDefault();

		var $newItem = $("input").val();
		$("input").val('');
		$("ul").append("<li><span>X  </span>" + $newItem + "</li>");

		
	});

	$("ul").on("click", "li", function() {
		$(this).remove();
	});

	$("#sortable").sortable();
});