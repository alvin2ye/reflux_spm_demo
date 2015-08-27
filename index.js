/** @jsx React.DOM **/

var React = require("react");
var Reflux = require("reflux");

var Dialog = require("rc-dialog");
require("rc-dialog/assets/index.css");
require("./main.less");

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      levelz: ["成人", "儿童"],
      levely: ["25座", "35座"],
      levelx: ["如家三星", "汉庭四星", "喜来登五星"],
      showDialog: false
    }
  },
  handleClick: function(e) {
    this.setState({showDialog: true})
  },

  handleDailogClose: function() {
    this.setState({showDialog: false})
  },

  render: function() {
    var _this = this;

    var renderDialog = function() {
      return (
        <Dialog visible={_this.state.showDialog} onClose={_this.handleDailogClose} >
          <p>first dialog</p>
        </Dialog>
      );
    }

    return(
      <div>
        <h3>成人</h3>
        <table>
          <thead>
            <th>&nbsp;</th>
            <th>如家三星</th>
            <th>汉庭四星</th>
            <th>喜来登五星</th>
          </thead>
          <tbody>
            <tr>
              <td>25座</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>35座</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>儿童</h3>
        <table>
          <thead>
            <th>&nbsp;</th>
            <th>如家三星</th>
            <th>汉庭四星</th>
            <th>喜来登五星</th>
          </thead>
          <tbody>
            <tr>
              <td>25座</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>35座</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <button onClick={this.handleClick}>对话框</button>
        {renderDialog()}
      </div>
    );
  }
});

React.render(
  <TodoApp />,
  document.getElementById("container")
);