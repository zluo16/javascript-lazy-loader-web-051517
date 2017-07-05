"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
let pageNum = 3

function formatCars(carsJSON) {
  return `
  <div class="col-md-4 car">
    <h2>${carsJSON.Make}</h2>
    <p><strong>Model:</strong> ${carsJSON.Model}</p>
    <p><strong>Year:</strong> ${carsJSON.Year}</p>
  </div>`
}

function addCarsToDOM(carsJSON) {
  let rendered = [
    `<div class="row">`,
    ...carsJSON.map(car => formatCars(car)),
    `</div>`
  ]
  $('#cars').append(rendered.join(""))
}

function fetchJSON() {
  let url = baseUrl + pageNum + '/3'
  pageNum += 1
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(cars) {
      addCarsToDOM(cars)
    }
  })
}
