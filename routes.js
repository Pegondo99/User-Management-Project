'use strict';

// import express and initialise router
const express = require('express');
const router = express.Router();

// import controllers
const main_page = require ('./controllers/main_page.js');
const users = require ('./controllers/users.js');
const links = require ('./controllers/links.js');


// connect routes to controllers
router.get('/', main_page.index);
router.get('/add_user', users.index);
router.post('/add_new_user', users.add_new_user);
router.get('/add_link', links.index);
router.post('/add_new_link', links.add_new_link);
router.get('/retrieve_users', links.index_retrieve);
router.get('/retrieve_user/:id', links.retrieve);

// export router module
module.exports = router;