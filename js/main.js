const INPUT_HEIGHT = $("#input_height");
const INPUT_WIDTH = $("#input_width");
const COLOR_CHOOSE = $("#colorChoose");
const GRID = $("#pixel_canvas");
const GRID_SIZE = $("#sizePicker");
const SUBMIT_BUTTON = $('input[type="submit"]');

function makeGrid() {
  let gridHeight = INPUT_HEIGHT.val();
  let gridWidth = INPUT_WIDTH.val();

  if (gridHeight > 50) {
    gridHeight = 50;
  }
  if (gridWidth > 50) {
    gridWidth = 50;
  }

  GRID.empty();

  const height = $("#input_height").val();
  const width = $("#input_width").val();

  for (let rows = 0; rows < height; rows++) {
    const row = $("<tr></tr>");
    GRID.append(row);

    for (let columns = 0; columns < width; columns++) {
      row.append("<td></td>");
    }
  }

  $("td").on("click", function() {
    const color = $("#colorChoose").val();
    $(this).css("background-color", color);
  });
}

$("#button").on("click", function(evt) {
  evt.preventDefault();
  makeGrid();
});

$("#resetButton").on("click", function(evt) {
  GRID.empty();
});
