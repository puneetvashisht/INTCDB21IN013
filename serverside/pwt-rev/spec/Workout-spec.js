const fetch = require('node-fetch');
var base_url = "http://localhost:8080/api/v1/workouts"


describe("Fetch Workouts /", function () {
    it("returns status code 200", async  () => {
        let response = await fetch(base_url);
        // console.log(response)
        let res = await response.json();

        // console.log(res)
        // console.log(response.status)

        expect(response.status).toBe(200);
        expect(res.count).toBe(5);
        expect(res.success).toBeTruthy();
        // done();

        // request.get(base_url, function (error, response, body) {
        //     // console.log(response);
        //     expect(response.statusCode).toBe(200);
        //     expect(false).toBe(true);

        // });
    });
});

