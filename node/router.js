var HomeController   = require('./Controllers/HomeController');
var UserController   = require('./Controllers/UserController');
var EventController   = require('./Controllers/EventController');
var MessageController = require('./Controllers/MessageController');
var ProductController = require('./Controllers/ProductController');
const authMiddleware = require('./authHelper')
const cors           = require('cors');


// Routes
module.exports = function(app){  
    // Main Routes
    app.get('/', HomeController.Index);

    app.get('/User/Register', UserController.Register);
    app.post('/User/RegisterUser', cors(), UserController.RegisterUser);
    app.get('/User/Login', UserController.Login);
    app.post('/User/LoginUser', UserController.LoginUser);
    app.get('/User/Logout', UserController.Logout);
    app.get('/User/SecureArea', UserController.SecureArea);
    app.get('/User/ManagerArea', UserController.ManagerArea);

    app.get('/Event/GetEvents', EventController.GetEvents);
    app.post('/Event/CreateEvent', EventController.CreateEvent);
    app.put('/Event/AddAttendee', EventController.AddAttendee);
    app.delete('/Event/Delete', EventController.Delete);

    app.get('/Message/GetMessages', MessageController.GetMessages);
    app.get('/Message/GetMessagesById', MessageController.GetMessagesById);
    app.post('/Message/CreateMessage', MessageController.CreateMessage);
    app.put('/Message/Vote', MessageController.Vote);
    app.delete('/Message/Delete', MessageController.Delete);

    app.get('/Product/Index', cors(), ProductController.Index);
    app.get('/Product/Detail', cors(), ProductController.Detail);
    app.get('/Product/Create', ProductController.Create); 
    app.post('/Product/CreateProduct', cors(), ProductController.CreateProduct)
    app.get('/Product/Edit', ProductController.Edit);    
    app.put('/Product/Update', cors(), ProductController.Update);
    app.delete('/Product/Delete', cors(), ProductController.Delete);

    // Sign in
    app.post(
        '/auth', cors(),
        // middleware that handles the sign in process
        authMiddleware.signIn,
        authMiddleware.signJWTForUser
    )

// Accessible to authenticated user. CORS must be enabled
// for client App to access it.
    app.get('/User/SecureAreaJwt', cors(),
        authMiddleware.requireJWT, UserController.SecureAreaJwt)

// Accessible to manager or admin. CORS must be enabled for
// client App to access it.
    app.get('/User/ManagerAreaJwt', cors(),
        authMiddleware.requireJWT, UserController.ManagerAreaJwt)

// Receives posted data from authenticated users.
    app.post('/User/PostAreaJwt', cors(),
        authMiddleware.requireJWT, UserController.PostAreaJwt)

};
