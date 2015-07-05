var Reflux = require("reflux");

var TodoActions = Reflux.createActions([
  "addItem", "removeItem"
]);

module.exports = TodoActions;
