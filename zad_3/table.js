const headerLabels = [
  "Lp.",
  "Nagłówek",
  "Data"
];

function drawTable(data) {

  document.write(`<table id="data-table">`);

  document.write(`<thead>`);
  document.write(`<tr>`);
  for (label of headerLabels) {
    document.write(`<th>${label}</th>`);
  }
  document.write(`</tr>`);
  document.write(`</thead>`);

  for (let i = 0; i < data.length; i++) {
    document.write(`<tr>`);
    document.write(`<td class="index-col">${i}</td>`);
    document.write(`<td class="title-col">${data[i].title}</td>`);
    document.write(`<td class="date-col">${data[i].date}</td>`);
    document.write(`</tr>`);
  }

  document.write(`</table>`);
}

$('#table-select').on('change', function () {
  var year = this.value;
  $('#data-table tbody tr').show();
  $('#data-table tbody tr').filter(function () {
    var date = new Date($(this).find('td').last().text());
    return date.getFullYear() != year
  }).hide();
});

drawTable(data)