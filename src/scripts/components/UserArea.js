/** @jsx React.DOM */

var FluxChildMixin = require('fluxxor').FluxChildMixin(React);

var Profile = require('./Profile');
var Login = require('./Login');

var UserArea = React.createClass({

  mixins: [FluxChildMixin],

  render: function() {

    var component;

    if (this.props.user) {
      // render Profile
      component = <Profile user={this.props.user} />
    } else {
      // render Login
      component = <Login />
    }

    return component;

  }

});

module.exports = UserArea;