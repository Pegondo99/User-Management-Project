"use strict";

// Import the models to use.
const usersStore = require('../models/user-store');
const linksStore = require('../models/link-store');

const links = {
  // Help to show the add_link view.
  index(request, response) {
    const viewData = {
      users: usersStore.getAllUsers()
    };
    response.render("add_link", viewData);
  },
  
  // Help to add a new link.
  // PRECONDITION: Only two users can be selected.
  add_new_link(request, response) {
    // Create the link between the two selected users. 
    const link = {
      u1 : request.body.usersToLink[0],
      u2 : request.body.usersToLink[1]
    }
    
    if (!linksStore.existsLink(link)) { // If the new link does not already exist.
      linksStore.addLink(link);
      response.redirect("/");
    } else { // If the new link already exists. - Notice that the link is not added.
      const viewData = {
        errMsg : "You cannot add the same link more than once."
      }
      response.render("fail_view", viewData);
    }
  },
  
  // Help to show the retrieve view.
  index_retrieve(request, response) {
    const viewData = {
      users: usersStore.getAllUsers()
    }
    response.render("retrieve", viewData);
  },
  
  // Help to retrieve the links of a certain user.
  retrieve(request, response) {
    // The id of the user.
    let id = request.params.id;
    // The ids of the users linked to the user.
    let ids = linksStore.getLinks(id);
    
    // The retrieve array will contain objects with the id and the name of each user linked with the given user.
    let retrieve = [];
    
    for (let i=0; i<ids.length; i++) {
      let thisId = ids[i].id;
      const aux = {
        id : thisId,
        name : usersStore.getById(thisId).name
      }
      retrieve.push(aux);
    }
    
    const viewData = {
      userId : id,
      userName : usersStore.getById(id).name,
      links : retrieve
    }
    response.render("show_retrieved", viewData);
  }
};

// Export the links object
module.exports = links;
