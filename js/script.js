$(document).ready(function() {
	sweetAlert("Let's make a list!", "Type to add, drag to reorder, X to delete");

	$("#addItem").on("submit", function(e) {
		e.preventDefault();

		var $newItem = $("input").val();
		$("input").val('');
		$("ul").append("<li><span>X  </span>" + $newItem + "</li>");
		sweetAlert(
			{
			   title: "Added!",      
			   timer: 600,   
			   showConfirmButton: false });
		
			}
		);

	$("ul").on("click", "li", function() {
		$(this).remove();
	});

	$("#sortable").sortable();
});