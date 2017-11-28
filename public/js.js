/**
 * Created by alexk on 19.12.2016.
 */

$(document).ready(function () {
    var counter = 0;
    $('#add').click(function () {
        var select2 = document.getElementById("select2").value;
        var table = document.getElementsByTagName("TABLE")[0];
        var newRow = table.insertRow(0);
        var newCell = newRow.insertCell(0);
        newCell.innerHTML = select2;
        counter++;
    });
    $('#count').click(function () {
        var counterEl = document.getElementById("counter");
        counterEl.innerHTML = counter;
    });



});

