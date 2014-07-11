/** @jsx React.DOM */
/*global React*/

var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var UserArea = require('./UserArea');
var Logout = require('./Logout');

var App = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("DrinkStore")],

  getStateFromFlux: function() {
    var flux = this.getFlux();

    return flux.store("DrinkStore").getState();
  },

  render: function() {

    var logout = <li />;

    if (Parse.User.current()) {
      logout = <Logout />;
    }

    return (
      <div>
        <div className="header">
          <ul className="nav nav-pills pull-right">
            {logout}
          </ul>
          <h3 className="text-muted">react-parse-template</h3>
        </div>

        <div className="jumbotron">
          <UserArea todos={this.state.todos} user={this.state.user} />
        </div>

        <div className="footer">
          <p>&copy; Nick Moore 2014</p>
        </div>
      </div>
    );

  }
  
});

module.exports = App;