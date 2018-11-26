'use strict';

angular.module("currencyConverterApp")
    .component('currencyConverter', {
        controllerAs: 'currencyConverter',
        controller: function (currencyService) {
            let vm = this;
            vm.currencies = {};
            vm.currency_from = "AUD";
            vm.currency_to = "USD";
            vm.amount = '';
            vm.result = '';

            // on initialize component
            vm.$onInit = function () {
                vm.getCurrencies();
            };

            vm.getCurrencies = function() {
                currencyService.getCurrencyRates().then(function (currencies) {
                    vm.currencies = currencies;
                });
            };

            vm.makeDecimalRound = function (amount) {
                return Math.round(amount * 100) / 100;
            };

            vm.convertRate = function (amount, toRate, fromRate) {
                return amount * (toRate / fromRate);
            };

            vm.convert = function (form) {
                vm.result = '';
                if(form.$valid) {
                    let from_currency_rate = vm.currencies[vm.currency_from];
                    let to_currency_rate = vm.currencies[vm.currency_to];
                    let from_value = vm.amount;

                    let result = vm.convertRate(vm.amount, to_currency_rate, from_currency_rate);
                    result = vm.makeDecimalRound(result);

                    vm.result = `${vm.amount} ${vm.currency_from} equals ${result} ${vm.currency_to}`;
                }
            }
        },
        templateUrl: './components/currencyConverter/template.html'
    });