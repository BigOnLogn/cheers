var CheersConstants = require('../constants/CheersConstants');

var actions = {

  login: function(credentials) {
    this.dispatch(CheersConstants.LOGIN, credentials);
  },

  logout: function() {
    this.dispatch(CheersConstants.LOGOUT);
  }

};

module.exports = actions;