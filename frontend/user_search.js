var UserSearch = function($el){
  this.$el = $el;
  this.$input = $el.find("input");
  this.$userList = $el.find('ul');

  this.$input.on('keyup', this.handleInput.bind(this));
};
UserSearch.prototype.handleInput = function (e) {
  // debugger
  $.ajax({
      url: "/users/search",
      type: "GET",
      dataType: "json",
      data: { query: this.$input.val() },
      success: function(resp){
        // debugger
        this.renderResults(resp);
      }.bind(this)
    });

};

UserSearch.prototype.renderResults = function(resp){
  // debugger
  this.$userList.empty();

  for (var i = 0; i < resp.length; i++) {
    // debugger
    this.$userList.append("<li>"+resp[i].username+"</li>");
  }

};



module.exports = UserSearch;
