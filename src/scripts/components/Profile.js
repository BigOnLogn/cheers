/** @jsx React.DOM */

var FluxChildMixin = require('fluxxor').FluxChildMixin(React);

var Profile = React.createClass({

  mixins: [FluxChildMixin],

  propTypes: {
    user: React.PropTypes.object.isRequired
  },

  render: function() {

    return (
      <div className="row">
        <div className="col-md-4 pull-left">
          <img src="http://placehold.it/150x150" />
        </div>
        <div className="col-md-8 pull-left">
          <div className="row">
            <div className="pull-left">
              <h3>{this.props.user.getUsername()}</h3>
            </div>
          </div>
        </div>
      </div>
    );

  }
});

module.exports = Profile;