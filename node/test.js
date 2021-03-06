// Import the dependencies for testing
var chai     = require('chai')
var chaiHttp = require('chai-http');
var app      = require('./app.js');
//
const Message           = require('./Models/Message');


// Configure chai.
chai.use(chaiHttp);
chai.should();

// SUCCESS TESTS FOR MESSAGE
describe("Tests success API HTTP requests for Messages", () => {         
    const ID = 99;
    const replyID = 100;

    // Get All
    it("Tests if it can GET all messages from the DB", (done) => {
            chai.request(app)
                .get(`/Message/GetMessages`)
                .end((err, res) => {
                    res.should.have.status(200); //<= test http status, 200 is all-good, 400 is bad.
                    res.body.should.be.a('object');
                // Show entire contents of response.
                console.log(res)
                
                    done();
                });
    }).timeout(10000);

    // Create Message
    it("Tests if messages can be POSTED to the DB", (done) => {
            chai.request(app)
                .post(`/Message/CreateMessage`) //<=POST to some PATH, in our case, a good place to start is /Message/CreateMessage
                                        //This PATH can be any of the ones in router.js.

            //Since this is a POST test, in my case, I want to .send some data to be posted.
                .send({
                    "_id":ID,
                "content": "test",
                "author":"test",
                "date": "Jan 6, 2040",
                "replies": [],
                "reply": false
            })
                .end((err, res) => {
                    //Then, run your specific tests just like before.

                    console.log("Showing output.")
                    let msg = res.body.message
                    console.log("Posted Message:", msg)
                    console.log(res.body.errorMessage);
                    console.log("Here: \n", msg.content, "\n", msg["content"])
                    //If there are no errors, the API should return the POSTED item.
                    let content = msg.content
                    let author = msg.author
                    let date = msg.date
                    let replies = msg.replies
                    let reply = msg.reply
                    content.should.equal('test')
                    author.should.equal('test')
                    date.should.equal('Jan 6, 2040')
                    replies.length.should.equal(0)
                    reply.should.equal(false)
                
                    done();
                });
    });

    // Create reply
    it("Tests if replies can be POSTED to the DB", (done) => {
        chai.request(app)
            .post(`/Message/CreateMessage`)
            .send({
                "_id":replyID,
            "content": "test",
            "author":"test",
            "date": "Jan 6, 2040",
            "replies": [],
            "reply": true,
	        "replyingTo": 99
        })
            .end((err, res) => {
                let msg = res.body.message
                //If there are no errors, the API should return the POSTED item.
                let content = msg.content
                let author = msg.author
                let date = msg.date
                let replies = msg.replies
                let reply = msg.reply
                let replyingTo = msg.replyingTo
                content.should.equal('test')
                author.should.equal('test')
                date.should.equal('Jan 6, 2040')
                replies.length.should.equal(0)
                reply.should.equal(true)
                replyingTo.should.equal(99)
            
                done();
            });
    });

    // Get by ID
    it("Tests if it can GET SPECIFIC messages from the DB", (done) => {
        chai.request(app)
            .get(`/Message/GetMessagesById`)
            .query({
                "ids": [99]
            })
            .end((err, res) => {
                res.should.have.status(200); //<= test http status, 200 is all-good, 400 is bad.
                res.body.should.be.a('object');
            //    // Show entire contents of response.
            //    console.log(res)
                let msg = res.body.messages[0]
                let id = msg._id
                id.should.equal(99);
                
                done();
                });
    }).timeout(10000);

    // Toggle Vote
    it("Tests if messages can be voted on", (done) => {
        chai.request(app)
            .put(`/Message/Vote`)
            .send({
                "_id": ID,
                "upVote": true
            })
            .end((err, res) => {
                res.should.have.status(200); //<= test http status, 200 is all-good, 400 is bad.
                res.body.should.be.a('object');
                let msg = res.body.message;
                let votes = msg.votes;
                votes.should.equal(1)
                
                done();
                });
    }).timeout(10000);

    // Delete Reply
    it("Tests if messages can be deleted", (done) => {  
        chai.request(app)
            .delete(`/Message/Delete`)
            .send({
                "_id": replyID
            })
            .end((err, res) => {
                res.should.have.status(200); //<= test http status, 200 is all-good, 400 is bad.
                res.body.should.be.a('object');
                console.log(res.body)
                let messages = res.body.messages;
                messages.should.be.an('array');
                let msg = messages[messages.length-1]
                console.log("new final msg:", msg)
                msg.replies.length.should.equal(0);
                
                // finalID.should.not.equal(99);
                
                done();
                });
    }).timeout(10000);

    // Delete Message
    it("Tests if messages can be deleted", (done) => {
        chai.request(app)
            .delete(`/Message/Delete`)
            .send({
                "_id": ID
            })
            .end((err, res) => {
                res.should.have.status(200); //<= test http status, 200 is all-good, 400 is bad.
                res.body.should.be.a('object');
                console.log(res.body)
                let messages = res.body.messages;
                messages.should.be.an('array');
                let msg = messages[messages.length-1]
                console.log("new final msg:", msg)
                let finalID = msg._id;
                
                done();
                });
    }).timeout(10000);

}).timeout(10000);

// SUCCESS TESTS FOR PRODUCT
describe("Tests success API HTTP requests for Products", () => {         
    const ID = 99;

    // Create Poduct
    it("Tests if products can be POSTED to the DB", (done) => {
        chai.request(app)
            .post(`/Product/CreateProduct`) //<=POST to some PATH, in our case, a good place to start is /Message/CreateMessage
                                    //This PATH can be any of the ones in router.js.

        //Since this is a POST test, in my case, I want to .send some data to be posted.
            .send({
                "_id":  ID,
        "productName":  "test",
        "category":     "test",
        "description":  "test",
        "price":        10,
        "date":         "Jan 6, 2040",
        "quantity":     2,
        "seller":       "test",
        })
            .end((err, res) => {
                //Then, run your specific tests just like before.
                let msg = res.body.product
                //If there are no errors, the API should return the POSTED item.
                let name = msg.productName
                let cat = msg.category
                let date = msg.date
                let price = msg.price
                let quantity = msg.quantity
                name.should.equal('test')
                cat.should.equal('test')
                date.should.equal('Jan 6, 2040')
            
                done();
            });
});

   // Updated Product
   it("Tests if products can be UPDATED IN the DB", (done) => {
    chai.request(app)
        .post(`/Product/Edit`) //<=POST to some PATH, in our case, a good place to start is /Message/CreateMessage
                                //This PATH can be any of the ones in router.js.

    //Since this is a POST test, in my case, I want to .send some data to be posted.
        .send({
            "_id":  ID,
    "productName":  "test",
    "category":     "test",
    "description":  "test",
    "price":        10,
    "date":         "Jan 6, 2040",
    "quantity":     2,
    "isSold":         false,
        "buyers": [],
    "seller":       "test",
    })
        .end((err, res) => {
            //Output is returned fine
        
            done();
        });
});


}).timeout(10000);