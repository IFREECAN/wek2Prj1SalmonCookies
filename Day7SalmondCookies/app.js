
  //call it:: pikePlaceMarket.rander()

 //git test

  var storeOpenedTimes = ['06:00am', '07:00am', '08:00am', '09:00am', '10:00am', '11:00am', '12:00pm', '01:00PM', '02:00PM',
    '03:00PM', '04:00PM', '05:00PM', '06:00PM', '07:00PM']

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  //note: look up the random equation online... and that's ok: go to "mdn math random"
  //from MDN docs
  }
  //var pat'sStore = [];

  //constructors function
  function Stores(storeLocation, min, max, avgCookiesPerCustomer){
    this.salmondCookiesStore = 'Pats Salmond Store';
    this.StoreLocation = storeLocation;
    this.minCustomerPerHour = min;
    this.maxCustomerperHour = max;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.isPatsStore = true;
    this.customerPerHour = [];
    this.cookiesSoldPerHour = [];
    this.totalDailySales = 0;
    this.calcCustomerPerHour = function(){
      for(var i = 0; i < storeOpenedTimes.length; i++){
        this.customerPerHour.push(random(this.minCustomerPerHour, this.maxCustomerperHour)); // this is a methond because it is a function that is inside an object.
      }
    };

  this.calcCookiesSoldPerHour = function(){
  this.calcCustomerPerHour()
    for(var i = 0; i < storeOpenedTimes.length; i++){
      var oneHour = Math.ceil(this.customerPerHour[i] * this.avgCookiesPerCustomer);
      //console.log(oneHour, 'oneHour');
      this.cookiesSoldPerHour.push(oneHour);
      this.totalDailySales += oneHour;
    }

    }
    //function random(min, max) {
      //return Math.floor(Math.random()) * ((this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour));

      //for(var i = 0, i < storeOpenedTimes; i++) {
      //  avgCookiesSoldPerHour * Math.floor(Math.random()) * ((this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour));
      //}
  };

firstAndPike  = new Stores('firstAndPike', 23, 65, 6.3);
seaTacAirportStore = new Stores('seaTacAirportStore', 3, 24, 1.2);
seatleCenterStore = new Stores('seattleCenterStore', 11, 38, 3.7);
capitalHillStore = new Stores('capitalHillStore', 20, 38, 2.3);
alkiStore = new Stores('alkiStore', 2, 16, 4.6);

//<script>
//  var table = '';
  //var rows = 6;
  //var columns = 7;
    //for(r = 0; r < rows; r++){

      //table += '<tr>';
        //for(c = 0; c < columns; c++){
          //table += '<td>' + c + '</td>'
        //}

      //table += '</tr>';
    //}
    //document.write('<table border = 2>' + table + '</table>')

//</script>

var salmonCookies = [];

//access table in the DOM...
var cookiesTable = document.getElementByID('salmonCookies');

//Constructor to make the table object
function salmonCookiesStore('location', 'mincustomer', 'maxCustomer', 'avgCookiesPerCustomer', 'customerPerHour', 'cookiesSoldPerHour', 'totalDailySales') {
  this.location = location;
  this.mincustomer = mincustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customerPerHour = customerPerHour;
  this.cookiesSoldPerHour = cookiesSoldPerHour;
  this.totalDailySales = totalDailySales;
  salmondCookiesStore.push(this);
  this.render = function(){

    //create table rows
    var trElement = document.createElement('tr');
    //next: create table data
    var tdElement = document.createElement('td');
    //add content to tabe data (name of each store)
    tdElement.textContent = this.location;
    //append the table data
    trElement.appendChild(tdElement);

    //create table rows
    var trElement = document.createElement('tr');
    //next: create table data
    var tdElement = document.createElement('td');
    //add content to tabe data (name of each store)
    tdElement.textContent = this.mincustomer;
    //append the table data
    trElement.appendChild(tdElement);

    //create table rows
    var trElement = document.createElement('tr');
    //next: create table data
    var tdElement = document.createElement('td');
    //add content to tabe data (name of each store)
    tdElement.textContent = this.maxCustomer;
    //append the table data
    trElement.appendChild(tdElement);

    //create table rows
    var trElement = document.createElement('tr');
    //next: create table data
    var tdElement = document.createElement('td');
    //add content to tabe data (name of each store)
    tdElement.textContent = this.avgCookiesPerCustomer;
    //append the table data
    trElement.appendChild(tdElement);


    //create table rows
    var trElement = document.createElement('tr');
    //next: create table data
    var tdElement = document.createElement('td');
    //add content to tabe data (name of each store)
    tdElement.textContent = this.customerPerHour;
    //append the table data
    trElement.appendChild(tdElement);


    //create table rows
    var trElement = document.createElement('tr');
    //next: create table data
    var tdElement = document.createElement('td');
    //add content to tabe data (name of each store)
    tdElement.textContent = this.cookiesSoldPerHour;
    //append the table data
    trElement.appendChild(tdElement);

    //create table rows
    var trElement = document.createElement('tr');
    //next: create table data
    var tdElement = document.createElement('td');
    //add content to tabe data (name of each store)
    tdElement.textContent = this.totalDailySales;
    //append the table data
    trElement.appendChild(tdElement);

    salmonCookies.push(this);
  };
}

    new SalmondCookiesStore('firstAndPike', 23, 65, 6.3);
    new SalmondCookiesStore('seaTacAirportStore', 3, 24, 1.2);
    new SalmondCookiesStore('seattleCenterStore', 11, 38, 3.7);
    new SalmondCookiesStore('capitalHillStore', 20, 38, 2.3);
    new SalmondCookiesStore('alkiStore', 2, 16, 4.6);

    //console.table('salmondCookiesStore');

    //make another function to make the table header:
    function makeTableHeaderRow(){
      //create table row
      var trElement = document.createElement('tr');
      //next: create table header
      var tdElement = document.createElement('th');
      //add content to tabe data (name of each store)
      thElement.textContent = this.location;
      //append the table header
      trElement.appendChild(tdElement);

      //make another function to make the table header:
      function makeTableHeaderRow(){
        //create table row
        var trElement = document.createElement('tr');
        //next: create table header
        var tdElement = document.createElement('th');
        //add content to tabe data (name of each store)
        thElement.textContent = this.mincustomer;
        //append the table header
        trElement.appendChild(tdElement);

        //make another function to make the table header:
        function makeTableHeaderRow(){
          //create table row
          var trElement = document.createElement('tr');
          //next: create table header
          var tdElement = document.createElement('th');
          //add content to tabe data (name of each store)
          thElement.textContent = this.maxCustomer;
          //append the table header
          trElement.appendChild(tdElement);

          //make another function to make the table header:
          function makeTableHeaderRow(){
            //create table row
            var trElement = document.createElement('tr');
            //next: create table header
            var tdElement = document.createElement('th');
            //add content to tabe data (name of each store)
            thElement.textContent = this.avgCookiesPerCustomer;
            //append the table header
            trElement.appendChild(tdElement);

            //make another function to make the table header:
            function makeTableHeaderRow(){
              //create table row
              var trElement = document.createElement('tr');
              //next: create table header
              var tdElement = document.createElement('th');
              //add content to tabe data (name of each store)
              thElement.textContent = this.customerPerHour;
              //append the table header
              trElement.appendChild(tdElement);

              //make another function to make the table header:
              function makeTableHeaderRow(){
                //create table row
                var trElement = document.createElement('tr');
                //next: create table header
                var tdElement = document.createElement('th');
                //add content to tabe data (name of each store)
                thElement.textContent = this.cookiesSoldPerHour;
                //append the table header
                trElement.appendChild(tdElement);

                //make another function to make the table header:
                function makeTableHeaderRow(){
                  //create table row
                  var trElement = document.createElement('tr');
                  //next: create table header
                  var tdElement = document.createElement('th');
                  //add content to tabe data (name of each store)
                  thElement.textContent = this.totalDailySales;
                  //append the table header
                  trElement.appendChild(tdElement);

    }

  }


}



// create function for cookiesSoldPerHour::



//   this.calcCookiesSoldPerHour = function() {
//   this.render = function (){
//   allSalmonCookiesStores.push(this);  ***

//   }
// };
//
// //*************************************************************
// // defind the actions you want performed on behalf...
// //of the above elements (DECLEAR FUNCTIONS)
// //*************************************************************
//
// this.calcCookiesSoldPerHour = function(){
// this.calcCustomerPerHour()
//   for(var i = 0; i < storeOpenedTimes.length; i++){
//     var oneHour = Math.ceil(this.customerPerHour[i] * this.avgCookiesPerCustomer);
//     //console.log(oneHour, 'oneHour');
//     this.cookiesSoldPerHour.push(oneHour);
//     this.totalDailySales += oneHour;
//     // console.log(this.totalDailySales, 'total');
//   }
// };
// rander = function(){
//   this.calcCookiesSoldPerHour();
//
// }
//   this.calcCustomerPerHour = function(){
//     for(var i = 0; i < storeOpenedTimes.length; i++){
//       this.customerPerHour.push(random(this.minCustomerPerHour, this.maxCustomerperHour)); // this is a methond because it is a function that is inside an object.
//
