var FollowToggle = function($el){
  this.$el = $el;
  this.userId = $el.data('user-id');


  this.followState = $el.data('follow-state');
  this.render();


  this.$el.on('click', this.handleClick.bind(this));
};

FollowToggle.prototype.render = function () {
  if (this.followState === false) {
    this.$el.text("Follow!");
  } else {
    this.$el.text("Unfollow!");
  }
};

FollowToggle.prototype.handleClick = function (e) {
  e.preventDefault();

  if (this.followState === false) {
    $.ajax({
        url: "/users/" + this.userId + "/follow",
        type: "POST",
        dataType: "json",
        data: { followState: true},
        success: function(resp){
          this.followState = true;
          this.$el.data('follow-state', true);
          this.render();
        }.bind(this)
      });
    } else {
      $.ajax({
          url: "/users/" + this.userId + "/follow",
          type: "DELETE",
          dataType: "json",
          data: { followState: false },
          success: function(resp){
            this.followState = false;
            this.$el.data('follow-state', false); 
            this.render();
          }.bind(this)
        });
    }
};




module.exports = FollowToggle;
