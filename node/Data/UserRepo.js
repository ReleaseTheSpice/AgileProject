const User = require('../Models/User');

class UserRepo {
    UserRepo() {        
    }

    async getUserByEmail(email) {
        var user = await User.findOne({email: email});
        if(user) {
            let respose = { obj: user, errorMessage:"" }
            return respose;
        }
        else {
            return null;
        }
    }

    async getRolesByUsername(username) {
        var user = await User.findOne({username: username}, {_id:0, roles:1});
        if(user.roles) {
            return user.roles;
        }
        else {
            return [];
        }
    }    

    async getVotesByUsername(username) {
        var user = await User.findOne({username: username});
        if(user) {
            let votes = {
                "up": user.votedUp,
                "down": user.votedDown
            }
            return votes
        }
        else {
            return [];
        }
    }

    async vote(username, upvotes, downvotes) {
        var user = await User.findOne({username: username});
        let response = {
                    obj: user,
                    errorMessage: "" };

        if(user) {
            // User exists so update it.
            let updated = await User.updateOne(
                {username: username}, // Match id.

                // Set new attribute values here.
                {$set: { votedUp: upvotes, votedDown: downvotes }});

            // No errors during update.
            if(updated.nModified!=0) {
                response.obj = updated;
                return response;
            }
            // Errors occurred during the update.
            else {
                response.errorMessage =
                    "An error occurred during the update. The item did not save."
            };
            return response;
        }

        // User not found.
        else {
            response.errorMessage = "An item with this name cannot be found." };
            return response;
        }
}
module.exports = UserRepo;

