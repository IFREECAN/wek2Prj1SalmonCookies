
var storeOpenedTimes = ['06:00am', '07:00am', '08:00am', '09:00am', '10:00am', '11:00am', '12:00pm', '01:00PM', '02:00PM',
'03:00PM', '04:00PM', '05:00PM', '06:00PM', '07:00PM'];

//access table in the DOM tis will bring table id info to JavaScript...
var salmonCookiesTable = document.getElementByID('salmon-cookies-table');

//CREATE THE ARREY TO HOLD ALL STORES INFO
var allSalmonCookiesStores = [];

//defind what the function random is:
function random(min, max) {
  return Math.floor(Math.random()) * ((max - min) + min));
}
//Constructor to make the table object
function salmonCookiesStore(location, minCustomer, maxCustomer, avgCookiesPerCustomer, customerPerHour, cookiesSoldPerHour, totalDailySales) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.avgCustomersPerHour =  [];
  this.cookiesSoldPerHour =  [];
  this.totalDailySales = 0;
  allSalmondCookiesStores.push(this);
  this.calcCustomerPerHour = function() {
    for(var i = 0; i < hours.length; i++) {
      var avgCustomers = random(this.minCustsPerHour, this.maxCustsPerHour); //random # being saved to "avgCustomers" for each store.
      this.avgCustomersPerHour.push(avgCustomers) //this is telling us to "push" random # into avgCustomersPerHour.
      return avgCustomers;
    }
  }
// create function for cookiesSoldPerHour:: (this fuction is within the Constructor-function)
this.calcCookiesSoldPerHour = function(){
  for(var i = 0; i < hours.length; i++){
    this.cookiesSoldPerHour.push(this.calcCustomerPerHour())*(this.avgCookiesPerCustomer) //avg.-customer per hour x avg. cookies per-customer  = cookies sold per hour.
  }
}
this.totalDailySales = function(){
  for(var i = 0; i < hours.length; i++){
  this.totalDailySales += this.CookiesSoldPerHour[i]; //total daily sale = cookies sold per hour x total cookies sold at (each-hours = [i]) the store is opened

  }
//COMMENT: CREATE A ROW FOR HEADER --> CREATE A LOOP THAT GOES THRHOUR EACH HOUR FOR EACH STORE......... 

}
}
//**************************************************
//THESE VALUES ARE CALLED INSTANCES
//***************************************************
new SalmondCookiesStore('firstAndPike', 23, 65, 6.3);
new SalmondCookiesStore('seaTacAirportStore', 3, 24, 1.2);
new SalmondCookiesStore('seattleCenterStore', 11, 38, 3.7);
new SalmondCookiesStore('capitalHillStore', 20, 38, 2.3);
new SalmondCookiesStore('alkiStore', 2, 16, 4.6);

    //CREATE TABLE-ROW
    var row = document.createElement('tr');
    //next: create table data
    var column = document.createElement('td');
    //add content to tabe data (name of each store)
    tdElement.textContent = this.location;
    //append the table data
    trElement.appendChild(tdElement);


    //NEW12-13:: CREATE TABLE-data
    tdElement = document.createElement('td');
    //GIVE TABLE-DATA CONTENTS (MIN.CUSTOMER OF EACH STORE)
    tdElement.textContent = this.minCustomer;
    //APPEND THE TABLE-data
    trElement.appendChild(tdElement);

    //NEW12-13:: CREATE TABLE-data
    tdElement = document.createElement('td');
    //GIVE TABLE-DATA CONTENTS (MAX.CUSTOMER OF EACH STORE)
    tdElement.textContent = this.maxCustomer;
    //APPEND THE TABLE-data
    trElement.appendChild(tdElement);

    //NEW12-13:: CREATE TABLE-data
    tdElement = document.createElement('td');
    //GIVE TABLE-DATA CONTENTS (MAX.CUSTOMER OF EACH STORE)
    tdElement.textContent = this.avgCookiesPerCustomer;
    //APPEND THE TABLE-data
    trElement.appendChild(tdElement);

    //NEW12-13:: CREATE TABLE-data
    tdElement = document.createElement('td');
    //GIVE TABLE-DATA CONTENTS (MAX.CUSTOMER OF EACH STORE)
    tdElement.textContent = this.customerPerHour;
    //APPEND THE TABLE-data
    trElement.appendChild(tdElement);

    //NEW12-13:: CREATE TABLE-data
    tdElement = document.createElement('td');
    //GIVE TABLE-DATA CONTENTS (MAX.CUSTOMER OF EACH STORE)
    tdElement.textContent = this.cookiesSoldPerHour;
    //APPEND THE TABLE-data
    trElement.appendChild(tdElement);


    //APPEN THE TABLE-ROW TO THE TABLE
    cookiesTable.appendChild.(trElement);
  };
}

    //



    //create table rows
    //var trElement = document.createElement('tr');
    //next: create table data
  //  var tdElement = document.createElement('td');
    //add content to tabe data (name of each store)
  //  tdElement.textContent = this.customerPerHour;
    //append the table data
  //  trElement.appendChild(tdElement);




    salmonCookies.push(this);
  };
}



//NEW INFO:::12-13--
function rander(min, max) {=


//*******
//excute actions (call functions)
//******


for(var i = 0; i < allSalmonCookiesStores.length; i++)
  allSalmonCookiesStores[i].render();





}

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


                  //NOW LET'S HAVE A SINGLE FUNCTION THAT RENDERS EACH STORE rows
                  function render...(){
                    for(var i = 0; i < .length; i++){
                      ...[i].render();
                    }
                  }

                  //EXECUTE ACTION (CALL ALL FUNCTIONS):

makeHeaderRow();
  for(var i = 0; allSalmonCookiesStores.length; i++){
    allSalmonCookiesStores[i].render();
  }
//

    }

  }


}
