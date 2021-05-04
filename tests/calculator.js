let homepage = require('../pages/homepage');

describe('Test Calculator app', function () {
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('addition test', function () {

        homepage.getURL('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber(5);

        homepage.enterSecondNumber(8);

        homepage.clickGoButton();

        homepage.verifyResult(12);

        browser.sleep(10000)
    });
    it('Substraction test', function () {

        homepage.getURL('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber(5);

        homepage.enterSecondNumber(8);

        homepage.clickGoButton();

        homepage.verifyResult(12);

        browser.sleep(10000)
    });

    it('Division test', function () {

        homepage.getURL('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber(5);

        homepage.enterSecondNumber(8);

        homepage.clickGoButton();

        homepage.verifyResult(12);

        browser.sleep(10000)
    });

    it('Multiplication test', function () {

        homepage.getURL('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber(5);

        homepage.enterSecondNumber(8);

        homepage.clickGoButton();

        homepage.verifyResult(12);

        browser.sleep(10000)
    });





});