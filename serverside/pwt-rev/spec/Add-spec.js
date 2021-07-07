var app = require("../Add.js");

describe("Addition", function () {

    it("Addtion of 5,6 should be 11", function () {
        var result = app.AddNumber(5, 6);
        expect(result).toBe(11);
       
    });

    it("-5 + -6 = -11", function () {
        var value = app.AddNumber(-5, -6);
        expect(value).toBe(-11);
    });

    it("11111111 + 22222222 = 33333333", function () {
        var value = app.AddNumber(11111111, 22222222);
        expect(value).toBe(33333333);
    });

    it('world simplest test case', function(){
        expect(true).toBe(true);
        expect(true).toBeTruthy();
        // expect(true).t
    })

});