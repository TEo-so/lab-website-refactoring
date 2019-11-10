import React, { Component } from "react";
import { Table, Button, Divider } from "antd";
import { connect } from "react-redux";

class WorkPop extends Component {
  render() {
    const { Column } = Table;
    const data = [...this.props.work];
    return (
      <Table
        dataSource={data}
        pagination={false}
        size="small"
        style={{ width: 450 }}
        rowKey="id"
      >
        <Column title="作业名称" dataIndex="name" key="name" />
        <Column title="发布时间" dataIndex="createdAt" key="createdAt" />
        <Column
          title="作业操作"
          dataIndex="measure"
          key="measure"
          render={(text, record) => {
            return (
              <span>
                <Button size="small">下载</Button>
                <Divider type="vertical"></Divider>
                <Button size="small">删除</Button>
              </span>
            );
          }}
        />
      </Table>
    );
  }
}

// state数据映射到props上 输入逻辑 state 对象转换为 UI 对象
const mapStateToProps = state => {
  return {
    work: state.student.get("work")
  };
};

// 输出逻辑，即将用户对 UI 组件的操作映射成 Action。
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkPop);
