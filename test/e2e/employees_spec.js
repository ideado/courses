require("protractor/jasminewd");
require('jasmine-given');

var HomePage = require("./pages/home_page");

describe("app", function() {
    var page = new HomePage();
    describe("visiting the home page", function() {
        Given(function() {
            page.visitPage();
        });
        describe("when a user logs in", function() {
            Given(function() {
                page.fillEmail("testy@example.com");
            });
            Given(function() {
                page.fillPassword();
            });
            When(function() {
                page.login();
            });
            Then(function() {
                page.getCurrentUser().then(function(text) {
                    expect(text).toEqual("Randy Savage");
                });
            });
        });
    });
});