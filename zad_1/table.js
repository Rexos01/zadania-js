function drawTable(data) {
  document.write(`<table>`);

  document.write(`<tr>`);
  for (element of data) {
    document.write(`<th> ${element.title} </th>`);
  }
  document.write(`</tr>`);

  for (element of data) {
    document.write(`<tr>`);
    for (value of element.data) {
      document.write(`<td> ${value} </td>`);
    }
    document.write(`</tr>`);
  }

  document.write(`</table>`);
}

drawTable(data)