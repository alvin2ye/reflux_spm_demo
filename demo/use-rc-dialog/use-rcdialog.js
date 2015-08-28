/** @jsx React.DOM **/

var React = require("react");
var Dialog = require("rc-dialog");
require("rc-dialog/assets/index.css");

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showDialog: false
    };
  },
  handleClick: function() {
    this.setState({showDialog: true});
  },

  handleDailogClose: function() {
    this.setState({showDialog: false});
  },

  render: function() {
    var t = this;

    var renderDialog = function() {
      return (
        <Dialog visible={t.state.showDialog} onClose={t.handleDailogClose} >
          <p>first dialog</p>
        </Dialog>
      );
    };

    return (
      <div>
        <button onClick={this.handleClick}>Open</button>
        {renderDialog()}
      </div>
    );
  }
});

React.render(
  <TodoApp />,
  document.getElementById("container")
);
