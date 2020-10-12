function drawTable(data) {
  document.write(`<div class="container">`);

  document.write(`<div class="row">`);
  for (element of data) {
    document.write(`<div class="col title"> ${element.title} </div>`);
  }
  document.write(`</div>`);

  for (element of data) {
    document.write(`<div class="row">`);
    for (value of element.data) {
      document.write(`<div class="col"> ${value} </div>`);
    }
    document.write(`</div>`);
  }

  document.write(`</div>`);
}

drawTable(data)