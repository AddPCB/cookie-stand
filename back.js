function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function CookieStore(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.custPerHour = [];
  this.cookiesPerHour = [];
}

CookieStore.prototype.calcCustPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let numCust = randomNum(this.minCust, this.maxCust);
    this.custPerHour.push(numCust);
  }
};

CookieStore.prototype.calcCookiesPerHour = function () {
  for (let i = 0; i < this.custPerHour.length; i++) {
    let cookiesSold = Math.floor(this.custPerHour[i] * this.avgSale);
    this.cookiesPerHour.push(cookiesSold);
  }
};

CookieStore.prototype.render = function () {
  this.calcCustPerHour();
  this.calcCookiesPerHour();

  // table
  const table = document.getElementById("myTable");

  // table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  // table cell
  let td = document.createElement("td");
  td.textContent = this.name;
  tr.appendChild(td);

  // get data into the row
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }
};

function makeHeaderRow() {
  // table
  const table = document.getElementById("myTable");

  // table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  // empty cell to start
  let th = document.createElement("th");
  tr.appendChild(th);
  
  // get data into the row
  for (let i = 0; i < hours.length; i++) {
    th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }
}

makeHeaderRow();

const seattle = new CookieStore("Seattle", 23, 65, 6.3);
const liverpool = new CookieStore("Liverpool", 3, 24, 1.2);
const london = new CookieStore("London", 11, 38, 3.7);
const kyiv = new CookieStore("Kyiv", 25, 38, 4.9);
const moscow = new CookieStore("Moscow", 2, 3, 2.6);
seattle.render();
liverpool.render();
london.render();
kyiv.render();
moscow.render();