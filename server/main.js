Meteor.publish("user", function() {
  if(this.userId)
    Meteor.users.find(this.userId, {fields: {"services.sandstorm.permissions": 1}})
  else
    this.ready()
})