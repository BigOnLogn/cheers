var Fluxxor = require('fluxxor');
var CheersConstants = require('../constants/CheersConstants');

var drinkStoreActions = {};
drinkStoreActions[CheersConstants.LOGIN] = 'onLogin';
drinkStoreActions[CheersConstants.LOGOUT] = 'onLogout';

Parse.initialize('APPLICATION_KEY', 'JAVASCRIPT_KEY');

var Drink = require('./Drink');
var DrinkList = require('./DrinkList');

var DrinkStore = Fluxxor.createStore({

  actions: drinkStoreActions,

  initialize: function() {

    var user = Parse.User.current();

    // Initialize the drinks list
    this.drinks = new DrinkList();

    // subscribe to all events the drinks list emits
    this.drinks.on('all', this.onChange.bind(this));

    // Initialize the drinks list to bring back drinks
    // only associated with the current user.
    this.drinks.query = new Parse.Query(Drink);
    this.drinks.query.equalTo('user', user);

    // Fetch the drinks
    this.drinks.fetch();

  },

  // Announce that the drinks list has changed
  onChange: function() {
    this.emit('change');
  },

  // Respond to the LOGIN action
  onLogin: function(payload) {
    Parse.User.logIn(payload.username, payload.password)
      .then(
        function(user) {
          this.todos.query.equalTo('user', user);
          this.todos.fetch();
          this.emit('change');
        }.bind(this),

        function(err) {
          console.error('ERROR:', err);
          this.emit('change');
        }.bind(this)
      );
  },

  onLogout: function() {
    Parse.User.logOut();
    this.emit('change');
  },

  getState: function() {
    return {
      drinks: this.drinks,
      user: Parse.User.current()
    };
  }

});

module.exports = DrinkStore;