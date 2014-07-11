/*global Parse*/

var Drink = Parse.Object.extend("Drink", {

  defaults: {
    name: "[unknown]",
    rating: 0,
    tags: []
  },

  initialzie: function() {
    if (!this.get('name')) {
      this.set('name', this.defaults.name);
    }

    if (!this.get('rating')) {
      this.set('rating', this.defaults.rating);
    }

    if (!this.get('tags')) {
      thsi.set('tags', this.defaults.tags);
    }
  }

});

module.exports = Drink;