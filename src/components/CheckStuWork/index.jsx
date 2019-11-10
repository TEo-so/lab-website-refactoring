import React, { Component } from "react";
import { Table } from "antd";
import { connect } from "react-redux";

class CheckStuWork extends Component {
  componentDidMount() {}

  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        render: text => <i>{text}</i>
      },
      {
        title: "Age",
        dataIndex: "age"
      },
      {
        title: "Address",
        dataIndex: "address"
      }
    ];
    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park"
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park"
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park"
      },
      {
        key: "4",
        name: "Disabled User",
        age: 99,
        address: "Sidney No. 1 Lake Park"
      }
    ];

    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: record => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name
      })
    };

    return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    );
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
)(CheckStuWork);
