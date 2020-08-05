"use strict";

// Import the models to use.
const JsonStore = require('./json-store');

const linksStore = {
  store: new JsonStore('./models/link-store.json', { links: [] }),
  links: 'links',
  
  // Add a new link to the collection.
  addLink(link) {
    this.store.add(this.links, link);
  },
  
  // Returns the ids of the users linked with the user with the given id.
  getLinks(id) {
    let ids1 = this.store.findBy(this.links, { u1: id });
    let ids2 = this.store.findBy(this.links, { u2: id });
    
    // All the users linked with the given user.
    let ids = [];
    
    for (let i=0; i<ids1.length; i++) {
      const aux = {
        id : ids1[i].u2
      }
      ids.push(aux);
    }
    
    for (let i=0; i<ids2.length; i++) {
      const aux = {
        id : ids2[i].u1
      }
      ids.push(aux);
    }
    
    return ids;
  },
  
  // Returns a boolean indicating if the given link already exists in the collection.
  existsLink(link) {
    return (this.store.findOneBy(this.links, {u1 : link.u1, u2 : link.u2}) != undefined) || (this.store.findOneBy(this.links, {u1 : link.u2, u2 : link.u1}) != undefined);
  }
};

// Export the linksStore object.
module.exports = linksStore;