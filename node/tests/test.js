// Import the dependencies for testing
var chai     = require('chai')
var chaiHttp = require('chai-http');
var app      = require('../app.js');

// Configure chai.
chai.use(chaiHttp);
chai.should();

describe("Message", () => {
    describe("GET /", () => {         
        //perform a GET test. (data can be gotten correctly)
        it("", (done) => {
             chai.request(app)
                 .get(`/`)
                 .end((err, res) => {
                     //These tests shouldn't need to be changed
                     res.should.have.status(200); //<= test http status, 200 is all-good, 400 is bad.
                     res.body.should.be.a('object');
                    // Show entire contents of response.

                    // These tests ARE SPECIFIC TO WHAT YOU ARE TESTING.  WRITE CODE BELOW HERE.
                    /*
                    if you wanted to test that a variable is on the page, you could do something like:
                    VAR_ON_PAGE = res.body.VARIABLE
                    VAR_ON_PAGE.should.equal("WHAT YOU EXPECT IT TO BE")
                    */

                     //Then day "done"
                     done();
                  });
         });

        // Perform a POST test. (data can be posted correctly)
        it("Tests POST and receipt of 'store' content from API.", 
             (done) => {
             const id = 5;
             chai.request(app)
                 .post(`/User/Register`) //<=POST to some PATH, in our case, a good place to start is /Message/CreateMessage
                                            //This PATH can be any of the ones in router.js.

                //Since this is a POST test, in my case, I want to .send some data to be posted.
                 .send({
                     'retailStore': 'walmart', 
                     'name' : 'Martin', 
                     'vehicles': ['caar','bike','plane']
                    })
                 .end((err, res) => {
                     //Then, run your specific tests just like before.

                     /*
                     console.log("Showing output.")
                     let name = res.body.name
                     console.log("First Name:", name)
                     console.log(JSON.stringify(res.body));
                     let store = res.body.store;
                     name.should.equal('Martin')
                     res.body.vehicles[0].should.equal('caar')
                     res.body.vehicles[1].should.equal('bike')
                     res.body.vehicles[2].should.equal('plane')
                     */

                     done();
                  });
         });
    });
});