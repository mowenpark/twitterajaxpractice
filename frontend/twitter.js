var FollowToggle = require("./follow_toggle.js");
var UserSearch = require("./user_search.js");

$(document).ready(function() {


  new FollowToggle ($('.follow-toggle'));

  new UserSearch ($('.users-search'));


});
