/** @jsx React.DOM **/

var React = require("react");
var TodoActions = require("../actions/TodoActions");

var List = React.createClass({
  render: function() {
    var mThis = this;
    var rows = this.props.list.map(function(item){
      return (
        <li key={item.key}>
          <span>{item.label} -</span>
          <button onClick={TodoActions.removeItem.bind(mThis, item.key)}>DEL</button>
        </li>
        );
    });

    return (<ul> {rows} </ul>);
  }
});
module.exports = List;

