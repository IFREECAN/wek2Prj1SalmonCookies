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
    this.avgCookiesSoldPerHour * Math.floor(Math.random()) * ((this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour));
  }
}

var seaTacAirportStore = {
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesSoldPerHour: 1.2,
  storeName: 'seaTacAirportStore',
  //*zero=storeopening at 6:00am and lastvalue= closingtime from store opening which is 8:00PM//
  productSoldPerHour: [],
  averageCustomerPerHour: function () {
    return Math.floor(Math.random()) * ((this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour));
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
}

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
console.log(capitalHillStore.averageCookiesPerHour())

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

console.log(alkiStore.averageCookiesPerHour())

/*
acturalCustomerPerHourCount = function(store) {
  return Math.floor(Math.random()) * ((store.maxCustomerPerHour - store.minCustomerPerHour) + store.minCustomerPerHour));
}


console.log(acturalCustomerPerHourCount(alkiStore))

function averageCookiesPerHour () {
  return
} */
