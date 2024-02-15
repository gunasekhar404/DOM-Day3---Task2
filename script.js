function submitForm() {
  var form = document.getElementById("myForm");
  var table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

  var newRow = table.insertRow(table.rows.length);

  var cells = [];
  for (var i = 0; i < 8; i++) {
    cells[i] = newRow.insertCell(i);
  }

  cells[0].innerHTML = form.elements["firstName"].value;
  cells[1].innerHTML = form.elements["lastName"].value;
  cells[2].innerHTML = form.elements["address"].value;
  cells[3].innerHTML = form.elements["pincode"].value;
  cells[4].innerHTML = form.elements["gender"].value;

  var foodOptions = form.elements["food"].selectedOptions;
  var foodValues = [];
  for (var i = 0; i < foodOptions.length; i++) {
    foodValues.push(foodOptions[i].value);
  }
  cells[5].innerHTML = foodValues.join(", ");

  cells[6].innerHTML = form.elements["state"].value;
  cells[7].innerHTML = form.elements["country"].value;

  form.reset();
}
