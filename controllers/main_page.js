"use strict";

const main_page = {
  // Help to show the inital view (index).
  index(request, response) {
    const viewData = {};
    response.render("index", viewData);
  },
};

// Export the main_page object.
module.exports = main_page;
