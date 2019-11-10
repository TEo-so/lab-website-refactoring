import React, { Component } from "react";

import { connect } from "react-redux";

class NoUpLoad extends Component {
  componentDidMount() {}

  render() {
    return <div>未上传作业名单</div>;
  }
}

// state数据映射到props上 输入逻辑 state 对象转换为 UI 对象
const mapStateToProps = state => {
  return {};
};

// 输出逻辑，即将用户对 UI 组件的操作映射成 Action。
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoUpLoad);
