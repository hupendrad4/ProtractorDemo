describe('Test Calculator app',function(){

    it('addition test',function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
    
        element(by.model('first')).sendKeys('5');

        element(by.model('second')).sendKeys('7');
        element(by.css('[ng-click="doAddition()"]')).click();

        let result=element(by.cssContainingText('.ng-binding', '12'));
        expect(result.getText()).toEqual('12');
        browser.sleep(10000)
    })




})