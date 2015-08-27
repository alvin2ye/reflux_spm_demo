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
      data: [
        {z: "成人", y: "25座", x: "如家三星", price: 120},
        {z: "成人", y: "35座", x: "如家三星", price: 380},
        {z: "儿童", y: "25座", x: "喜来登五星", price: 780},
        {z: "儿童", y: "35座", x: "如家三星", price: 180},
        {z: "成人", y: "25座", x: "汉庭四星", price: 280}
      ],
      showDialog: true
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
        <Dialog style={{wdith: 300}} title="选择价格" visible={_this.state.showDialog} onClose={_this.handleDailogClose} >
          <fieldset>
            <legend>用餐</legend>
            <label><input type="checkbox" />成人 25</label>
            <label><input type="checkbox" />儿童 15</label>
          </fieldset>
          <fieldset>
            <legend>住</legend>
            <label><input type="checkbox" />如家三星 183</label>
            <label><input type="checkbox" />汉庭四星 383</label>
            <label><input type="checkbox" />喜来登五星 598</label>
          </fieldset>
          <fieldset>
            <legend>大交通</legend>
            <label><input type="checkbox" />飞机 经济舱 383</label>
            <label><input type="checkbox" />飞机 商务舱 583</label>
            <label><input type="checkbox" />动车 二等 298</label>
            <label><input type="checkbox" />动车 一等 398</label>
          </fieldset>
          <fieldset>
            <legend>小交通</legend>
            <label><input type="checkbox" />大巴57座 </label>
            <label><input type="checkbox" />小巴25座</label>
          </fieldset>
          <fieldset>
            <legend>门票</legend>
            <label><input type="checkbox" />大沙岙 80 </label>
            <label><input type="checkbox" />太姥山成人 100</label>
            <label><input type="checkbox" />儿童 80</label>
            <label><input type="checkbox" />老人 5</label>
          </fieldset>
          <fieldset>
            <legend>其他</legend>
            <label><input type="checkbox" />包 4</label>
            <label><input type="checkbox" />帽子 5</label>
            <label><input type="checkbox" />箱子 15</label>
            <label><input type="checkbox" />导游服务 30</label>
            <label><input type="checkbox" />保险 5</label>
          </fieldset>

          <button onClick={_this.handleDailogClose}>确定</button>
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