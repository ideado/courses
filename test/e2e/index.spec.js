describe("employees", function() {
    describe ("index" , function() {
        it ("should display the correct title", function() {
            browser.get('/#/employees');
            expect(browser.getTitle()).toContain('employee');
        });
    });
});