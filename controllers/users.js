"use strict";

// Import the models to use.
const users_store = require("../models/user-store");

const users = {
  // Help to show the add_user view.
  index(request, response) {
    const viewData = {
    };
    response.render("add_user", viewData);
  },
  
  // Help to add a new user
  add_new_user(request,response) { 
    let id = request.body.id;
    
    if (users_store.getById(id) == undefined) { // If the user does not already exist.
    const user = {
      id: id,
      name: request.body.name
    }
    users_store.addUser(user);
    response.redirect("/");
    } else { // If the user is repeated.
      const viewData = {
        errMsg : "You cannot have more than one user with the same ID. Try using a different one."
      }
      response.render("fail_view", viewData);
    }
  },
};

// Export the users object.
module.exports = users;
