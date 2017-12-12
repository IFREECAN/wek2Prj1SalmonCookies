//hours the store is opened... may be used to for each store hours since all stores operates during the same times//
var storeOpenedTimes = ['06:00am', '07:00am', '08:00am', '09:00am', '10:00am', '11:00am', '12:00pm', '01:00PM', '02:00PM',
  '03:00PM', '04:00PM', '05:00PM', '06:00PM', '07:00PM', '08:00PM']

var pikeStore = {
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  storeName: 'pikeStore',
  //*zero=storeopening at 6:00am and lastvalue= closingtime from store opening which is 8:00PM//
  productSoldPerHour: [],

  //the below should give me the a projected average number of cookies sole based on the range of the min. and max. customers per times the average number of cookies sold to each customer.
  averageCustomerPerHour: function () {
    return Math.floor(Math.random()) * ((this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour));

//note: maybe I could use for(var i=0, i < storeOpenedTimes; i++); and this should result in the average # of cookies sold in the store for each hour the store is opened...
  for(var i=0, i < 15; i++) {
    avgCookiesSoldPerHour * Math.floor(Math.random()) * ((this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour));
  }
}

console.console.log(pikeStore.averageCookiesSoldPerHour());

function makeHTML(){
  var container = document.createElement(div);
  container.innerHTML = '<p>' + alkiStore.averageCustomerPerHour() + '</p>';
  document.body.appenChild(container);

  var list = document.createElement('ul');
  var listArr = [];


for(var i = 0; i < pikeStore.avgCookiesSoldPerHour.length; i++) {
  listArr.push('<li>' + pikeStore.avgCookiesSoldPerHour[i] + '</li>');
}


var fullList = listArr.join('');
list.innerHTML = fullList;
document.body.appenChild(list);
}

makeHTML(); //calling the html list..

var seaTacAirportStore = {
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesSoldPerHour: 1.2,
  storeName: 'seaTacAirportStore',
  //*zero=storeopening at 6:00am and lastvalue= closingtime from store opening which is 8:00PM//
  productSoldPerHour: [],
  averageCustomerPerHour: function () {
    return Math.floor(Math.random()) * ((this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour));

    for(var i = 0, i < 15; i++) {
      avgCookiesSoldPerHour * Math.floor(Math.random()) * ((this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour));
    }

    console.log(seaTacAirportStore.avgCookiesSoldPerHour())

    function makeHTML(){
      var container = document.createElement(div);
      container.innerHTML = '<p>' + alkiStore.averageCustomerPerHour() + '</p>';
      document.body.appenChild(container);

      var list = document.createElement('ul');
      var listArr = [];


    for(var i = 0; i < seaTacAirportStore.avgCookiesSoldPerHour.length; i++) {
      listArr.push('<li>' + seaTacAirportStore.avgCookiesSoldPerHour[i] + '</li>');
    }


    var fullList = listArr.join('');
    list.innerHTML = fullList;
    document.body.appenChild(list);
    }

    makeHTML(); //calling the html list..
}



var seattleCenterStore = {
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiesSoldPerHour: 3.7,
  storeName: 'seattleCenterStore',
  //*zero=storeopening at 6:00am and lastvalue= closingtime from store opening which is 8:00PM//
  productSoldPerHour: [],
  averageCustomerPerHour: function () {
    return Math.floor(Math.random()) * ((this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour));

    for(var i = 0, i < 15; i++) {
      avgCookiesSoldPerHour * Math.floor(Math.random()) * ((this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour));
}

console.log(seattleCenterStore.averageCookiesSoldPerHour())

var capitalHillStore = {
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookiesSoldPerHour: 2.3,
  storeName: 'capitalHillStore',
  //*zero=storeopening at 6:00am and lastvalue= closingtime from store opening which is 8:00PM//
  productSoldPerHour: [],
  averageCookiesPerHour: function () {
    return Math.floor(Math.random()) * ((this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour));
  }
}
console.log(capitalHillStore.averageCookiesSoldPerHour())

function makeHTML(){
  var container = document.createElement(div);
  container.innerHTML = '<p>' + alkiStore.averageCustomerPerHour() + '</p>';
  document.body.appenChild(container);

  var list = document.createElement('ul');
  var listArr = [];


for(var i = 0; i < capitalHillStore.avgCookiesSoldPerHour.length; i++) {
  listArr.push('<li>' + capitalHillStore.avgCookiesSoldPerHour[i] + '</li>');
}


var fullList = listArr.join('');
list.innerHTML = fullList;
document.body.appenChild(list);
}

makeHTML(); //calling the html list..

var alkiStore = {
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookiesSoldPerHour: 4.6,
  storeName: 'alkiStore',
  //*zero=storeopening at 6:00am and lastvalue= closingtime from store opening which is 8:00PM//
  productSoldPerHour: [],
  averageCustomerPerHour: function () {
    return Math.floor(Math.random()) * ((this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour));
  }

}

console.log(alkiStore.averageCookiesSoldPerHour())


function makeHTML(){
  var container = document.createElement(div);
  container.innerHTML = '<p>' + alkiStore.averageCustomerPerHour() + '</p>';
  document.body.appenChild(container);

  var list = document.createElement('ul');
  var listArr = [];


for(var i = 0; i < alkiStore.avgCookiesSoldPerHour.length; i++) {
  listArr.push('<li>' + alkiStore.avgCookiesSoldPerHour[i] + '</li>');
}

var fullList = listArr.join('');
list.innerHTML = fullList;
document.body.appenChild(list);
}


/*
acturalCustomerPerHourCount = function(store) {
  return Math.floor(Math.random()) * ((store.maxCustomerPerHour - store.minCustomerPerHour) + store.minCustomerPerHour));
}


console.log(acturalCustomerPerHourCount(alkiStore))

function averageCookiesPerHour () {
  return
} */
