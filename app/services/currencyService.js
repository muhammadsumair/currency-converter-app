'use strict';

angular.module("currencyConverterApp")
    .service('currencyService', function($http) {
        this.getCurrencyRates = function(src) {
            return $http({
                url: "http://data.fixer.io/api/latest?access_key=8f9ea4abc117037a510c303b53a09ed3",
                method: 'GET'
            }).then(function(res) {
               return res.data.rates;
            });
        };
    });