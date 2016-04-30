var userModel = Backbone.Model.extend({
  defaults: {
    name: 'mike'
  }
});

var mike = new userModel({
  name: "Mike Prather"
});

var userCollection = Backbone.Collection.extend({
  model: userModel
});

var userGroup = new userCollection([
  mike
]);
