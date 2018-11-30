// alphajuliet.js
// Requires jQuery >1.2.6

function main() {
	$("h1.toggle").click(function() {
		$(this).next("div").toggle("slow");
	});
	$("h1.toggle").next("div").hide();
}

// Set load point
$(document).ready(function() {
	main()
});


// The End
