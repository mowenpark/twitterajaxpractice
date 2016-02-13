var FollowToggle = function($el){
  this.$el = $el;
  this.userId = $el.data('user-id');


  this.followState = $el.data('follow-state');
  this.render();


  this.$el.on('click', this.handleClick.bind(this));
};

FollowToggle.prototype.render = function () {
  if (this.followState === 'following' || this.followState === 'unfollowing') {
    this.$el.prop( "disabled", true );
  } else if (this.followState === false) {
    this.$el.text("Follow!");
    this.$el.prop( "disabled", false );
  } else {
    this.$el.text("Unfollow!");
    this.$el.prop( "disabled", false );
  }
};

FollowToggle.prototype.handleClick = function (e) {
  e.preventDefault();

  if (this.followState === false) {
    this.followState = "following";
    this.render();
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
      this.followState = "unfollowing";
      this.render();
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
