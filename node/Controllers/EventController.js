const Event           = require('../Models/Event');
const EventRepo       = require('../Data/EventRepo');
const _eventRepo      = new EventRepo();

// Gets all the events using GET
exports.GetEvents = async function(request, response) {
    let events = await _eventRepo.allEvents();
    if(events != null) {
        response.json({ events:events, errorMessage:"" })
    }
    else {
        response.json( { events:[], errorMessage:"no events found" })
    }
};

// creates an event using POST
exports.CreateEvent = async function(request, response) {
    // Package object up nicely using content from 'body' of the POST request.
    let tempEventObj  = new Event( {
        "name" : request.body.name,
        "date" : request.body.date,
        "time" : request.body.time,
        "description" : request.body.description
    });

    // Call Repo to save 'Event' object.
    let responseObject = await _eventRepo.create(tempEventObj);

    // No errors so save is successful.
    if(responseObject.errorMessage == "") {
        console.log('Saved without errors.');
        console.log(JSON.stringify(responseObject.obj));
        response.json({ event:responseObject.obj,
                                            errorMessage:""});
    }
    // There are errors.
    else {
        console.log("An error occured. Item not created.");
        console.log('EM:',responseObject.errorMessage)
        response.json( {
            event:responseObject.obj,
            errorMessage:responseObject.errorMessage});
    }
};

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

exports.AddAttendee = async function(request, response) {
    let reqEvent = request.body.event;
    let user = request.body.username

    if (reqEvent.attendees.indexOf(user)>=0) {
        reqEvent.attendees.remove(user);
    } else {
        reqEvent.attendees.push(user);
    }
    // Parcel up data in a new object.
    let tempObj  = new Event( {
        "name" : reqEvent.name,
        "date" : reqEvent.date,
        "time" : reqEvent.time,
        "description" : reqEvent.description,
        "attendees" : reqEvent.attendees
    });

    // Call update() function in repository with the object.
    let responseObject = await _eventRepo.update(tempObj);

    // Update was successful.
    if(responseObject.errorMessage === "") {
        response.json({ event:responseObject.obj,
                                            errorMessage:"" });
    }

    // Update not successful. Show form again.
    else {
        response.json( {
            event:      responseObject.obj,
            errorMessage: responseObject.errorMessage });
    }
};

exports.Delete = async function(request, response) {
    let name           = request.body.name;
    let deletedItem  = await _eventRepo.delete(name);

    // Some debug data to ensure the item is deleted.
    console.log(JSON.stringify(deletedItem));
    let events     = await _eventRepo.allEvents();
    response.json( {events:events});
};
