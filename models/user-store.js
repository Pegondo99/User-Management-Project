"use strict";

// Import the models to use.
const JsonStore = require("./json-store");

const userStore = {
  store: new JsonStore("./models/user-store.json", { users: [] }),
  users: "users",

  // Add a given user to the collection.
  addUser(user) {
    this.store.add(this.users, user);
  },
  
  // Return all the users that exist in the collection.
  getAllUsers() {
    return this.store.findAll(this.users);
  },
  
  // Returns the user with the given id.
  getById(id) {
    return this.store.findOneBy(this.users, { id: id });
  }
};

// Export the userStore object.
module.exports = userStore;
