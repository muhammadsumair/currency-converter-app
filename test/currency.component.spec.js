describe('Component: currencyConverter', () => {

    let scope;
    let controller;

    beforeEach(() => {
        angular.mock.module('currencyConverterApp');
    });

    beforeEach(inject(($rootScope, $componentController) =>{
        scope = $rootScope.$new();
        controller = $componentController('currencyConverter', {$scope: scope});
    }));

    it('should expose currency configuration', function() {
        expect(controller.currencies).toBeDefined();
        expect(controller.currency_from).toBeDefined();
        expect(controller.currency_to).toBeDefined();
        expect(controller.amount).toBeDefined();
        expect(controller.result).toBeDefined();
        expect(controller.currency_from).toBe('AUD');
        expect(controller.currency_to).toBe('USD');
    });

    it('convertRate should rate ', function() {
        expect(controller.convertRate(10, 152.256252, 1.132522)).toBe(1344.3999498464486);
    });

    it('makeDecimalRound should make Decimal to Round', function() {
        expect(controller.makeDecimalRound(100.5555)).toBe(100.56);
    });

});