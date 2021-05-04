let homepage = require('../pages/homepage');

describe('Test Calculator app', function () {

    it('addition test', function () {

        homepage.getURL('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber(5);

        homepage.enterSecondNumber(8);

        homepage.clickGoButton();

        homepage.verifyResult(12);

        browser.sleep(10000)
    })




})