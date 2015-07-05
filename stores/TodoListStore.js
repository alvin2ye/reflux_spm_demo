var Reflux = require("reflux");
var TodoActions = require("../actions/TodoActions");

var TodoListStore = Reflux.createStore({
  listenables: [TodoActions],
  onAddItem: function(label) {
    this.updateList([{
      key: this.todoCounter++,
      created: new Date(),
      isComplete: false,
      label: label
    }].concat(this.list));
  },
  onRemoveItem: function(itemKey) {
    this.updateList(this.list.filter(function(item) {
      return item.key !== itemKey;
    }));
  },

  updateList: function(list) {
    this.list = list;
    this.trigger(list); // sends the updated list to all listening components (TodoApp)
  },

  getInitialState: function() {
    if(!this.todoCounter) {
      this.todoCounter = 0;
    }

    this.list = [{
      key: this.todoCounter++,
      created: new Date(),
      isComplete: false,
      label: 'Rule the web'
    }];
    return this.list;
  }
});

module.exports = TodoListStore;
