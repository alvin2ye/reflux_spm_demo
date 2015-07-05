/** @jsx React.DOM **/

var React = require("react");
var Reflux = require("reflux");

var TodoActions = require("./actions/TodoActions");
var TodoListStore = require("./stores/TodoListStore");

var List = require("./components/List");
var TodoHeader = require("./components/TodoHeader");

var TodoApp = React.createClass({
  mixins: [Reflux.connect(TodoListStore, "list")],
  render: function() {
    return(
      <div>
        <TodoHeader />
        <List list={this.state.list} />
      </div>
    );
  }
});

React.render(
  <TodoApp />,
  document.getElementById("container")
);
