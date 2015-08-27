/** @jsx React.DOM **/

var React = require("react");
var Reflux = require("reflux");

var Dialog = require("rc-dialog");
require("rc-dialog/assets/index.css");
require("./main.less");

var PriceTr = React.createClass({
  render : function() {

    var RandomPrice = function() {
      if(Math.random() < 0.5) {
        return "-";
      } else {
        return parseInt(Math.random() * 500 + 100);
      }
    }

    return (
      <tr>
        <td>{this.props.y}</td>
        <td><a onClick={this.props.onClick} href="javascript:void(0)">{RandomPrice()}</a></td>
        <td><a onClick={this.props.onClick}  href="javascript:void(0)">{RandomPrice()}</a></td>
        <td><a onClick={this.props.onClick}  href="javascript:void(0)">{RandomPrice()}</a></td>
        <td>&nbsp;</td>
      </tr>
    );
  }
});

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
      showDialog: false
    }
  },
  handleClick: function(e) {
    this.setState({showDialog: true})
  },

  handleDailogClose: function() {
    this.setState({showDialog: false})
  },

  handleAddX: function(){
    var newX = prompt("请输入", "");
    if(newX && newX.length > 0) {
      var arr = this.state.levelx;
      arr.push(newX);
      this.setState({levelx: arr});
    }
  },

  handleAddY: function(){
    var newX = prompt("请输入", "");
    if(newX && newX.length > 0) {
      var arr = this.state.levely;
      arr.push(newX);
      this.setState({levely: arr});
    }
  },

  render: function() {
    var _this = this;

    var renderX = function() {
      var mapFn = function(i) {
        return <th>{i}</th>;
      }
      return _this.state.levelx.map(mapFn);
    }

    var renderY = function() {
      var mapFn = function(i) {
        return <PriceTr onClick={_this.handleClick} y={i} data={_this.state.data} x={_this.state.levelx} />;
      }
      return _this.state.levely.map(mapFn);
    }

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
            <tr>
              <th>&nbsp;</th>
              {renderX()}
              <th><a href="javascript:void(0)" onClick={_this.handleAddX}>+</a></th>
            </tr>
          </thead>
          <tbody>
            {renderY()}
            <tr>
              <td><a href="javascript:void(0)" onClick={_this.handleAddY}>+</a></td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>

        <h3>儿童</h3>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              {renderX()}
              <th><a href="javascript:void(0)" onClick={_this.handleAddX}>+</a></th>
            </tr>
          </thead>
          <tbody>
            {renderY()}
            <tr>
              <td><a href="javascript:void(0)" onClick={_this.handleAddY}>+</a></td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>&nbsp;</td>
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