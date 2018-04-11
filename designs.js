// prepare grid with given height and width
$("#submitGrid").on("click", function(event) {
  event.preventDefault();

  var height = $("#inputHeight").val();
  var width = $("#inputWidth").val();

  $("#pixelCanvas").empty();
  makeGrid(height, width);
});

// create grid
function makeGrid(height, width) {
  var canvas = $("#pixelCanvas");
  canvas.children().remove();

  // iterate over height and width
  for (var x = 1; x <= height; x++) {
    canvas.append("<tr></tr>");
	}
	for (var y = 1; y <= width; y++) {
		$("tr").append("<td></td>");
	};

  // change cell color on click
  $("td").on("click", function(event) {
    if ($(this).css("background-color") == "rgba(0, 0, 0, 0)") {
      $(this).css("background-color", $('#colorPicker').val());
    } else {
      $(this).css("background-color", "");
    }
  });
}
