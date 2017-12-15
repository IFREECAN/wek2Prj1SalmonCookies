'use strict';
var hours = ['06:00am', '07:00am', '08:00am', '09:00am', '10:00am', '11:00am', '12:00pm', '01:00PM', '02:00PM','03:00PM', '04:00PM', '05:00PM', '06:00PM', '07:00PM'];

//access table in the DOM tis will bring table id info to JavaScript...
var storeSalesTable = document.getElementById('storeSalesTable');

//CREATE THE ARREY TO HOLD ALL STORES INFO
var allStores = [];

//defind what the function random is:
function random(min, max) {
  return Math.floor(Math.random() * ((max - min) + min)); // equation is fron MDN
}
//Constructor to make the table object
function SalmondCookiesStore(location, minCustomer, maxCustomer, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.avgCustomersPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalDailySales = 0;
  allStores.push(this);
  this.calcCustomerPerHour = function() {
    for(var i = 0; i < hours.length; i++) {
      var avgCustomers = random(this.minCustsPerHour, this.maxCustsPerHour); //random # being saved to "avgCustomers" for each store.
      this.avgCustomersPerHour.push(avgCustomers); //this is telling us to "push" random # into avgCustomersPerHour.
      return avgCustomers;
    }
  };
  //create function for cookiesSoldPerHour:: (this fuction is within the Constructor-function)
  this.calcCookiesSoldPerHour = function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesSoldPerHour.push(this.calcCustomerPerHour() * (this.avgCookiesPerCustomer)); //avg.-customer per hour x avg. cookies per-customer  = cookies sold per hour.
    }
  };
  this.totalDailySales = function(){
    for(var i = 0; i < hours.length; i++){
      this.totalDailySales += this.CookiesSoldPerHour[i]; //total daily sale = cookies sold per hour x total cookies sold at (each-hours = [i]) the store is opened
    }
  };
  this.render = function(){
    this.calcCookiesSoldPerHour();

    //CREATE TABLE-ROW
    var tableRowElement  = document.createElement('tr'); //noet: rows=tableRowElement
    //next: create table data
    var tablecolumnElement = document.createElement('th'); //noet: rows=tablecolumnElement
    //add content to tabe header (which in this case is the name  of each store)
    tablecolumnElement.textContent = this.location;
    //append the table data
    tableRowElement.appendChild(tablecolumnElement);

    //NEW12-13:: CREATE TABLE-data --> add contents to them, append for hourly numbers
    for(var i = 0; i < hours.length; i++){
      var tdElement = document.createElement('td');
      tdElement.textContent = this.cookiesSoldPerHour[i];
      tableRowElement.appendChild(tdElement);
    }

    //NEW:: create table-data --> add content to them --> append for totalDailySales
    tdElement = document.createElement('td');
    //GIVE TABLE-DATA CONTENTS (MIN.CUSTOMER OF EACH STORE)
    tdElement.textContent = this.totalDailySales;
    //APPEND table-row to THE TABLE-data
    tableRowElement.appendChild(tdElement);
    //append the tableRow to the TABLE
  };

}
//**************************************************
//THESE VALUES ARE CALLED INSTANCES
//***************************************************
new SalmondCookiesStore('firstAndPike', 23, 65, 6.3);
new SalmondCookiesStore('seaTacAirportStore', 3, 24, 1.2);
new SalmondCookiesStore('seattleCenterStore', 11, 38, 3.7);
new SalmondCookiesStore('capitalHillStore', 20, 38, 2.3);
new SalmondCookiesStore('alkiStore', 2, 16, 4.6);
//could also be written as: var intro = new SalmondCookiesStore('alkiStore', 2, 16, 4.6);

//************************************************************************
//COMMENT: CREATE A ROW FOR HEADER --> CREATE A LOOP THAT GOES THRHOUR EACH
//HOUR FOR EACH STORE.........
//**************************************************************************
// NEW::12-14-17
//NEW::12-14-17 CREATE THE 'RENDER' FUNCTIONS

//**********************************
//12-14-17:: Make the "HEADER-ROWS"
//***********************************
function makeHeaderRow(){
  // crate a table-rows
  var tableRowElement = document.createElement('tr');

  //create table-data --> add contents --> append for the store name: 12-14-17
  var tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Store location Name';
  tableRowElement.appendChild(tableHeaderElement);

  //create table-datas --> give them content --> append for hourly number: 12-14-17
  for(var i = 0; i < hours.length; i++) {
    tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = hours[i];
    tableRowElement.appendChild(tableHeaderElement);
  }

  //create table-header --> give them content -->
  //-->append the daily totalDailySales: 12-14-17
  tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'ourTotals';
  tableRowElement.appendChild(tableHeaderElement);

  //append the table-row to the table: 12-14-17
  storeSalesTable.appendChild(tableRowElement);
}

//****************************************
//12-14-17:: EXECUTE ACTIONS (HEADER-ROWS)
//****************************************

makeHeaderRow();
for(var i = 0; i < allStores.length; i++){
  console.log(allStores[i]);
  allStores[i].render();
}
