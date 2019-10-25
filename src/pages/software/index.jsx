import React, { Component, Fragment } from "react";
import Search from "../../components/Search";
import { Table } from "antd";
import { connect } from "react-redux";
import { actionCreators } from "./store"; //store 里有出口文件 已经导出

class Software extends Component {
  componentDidMount() {
    this.props.handleSoftware();
  }
  render() {
    const columns = [
      {
        title: "软件名称",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "文件大小",
        dataIndex: "size",
        key: "size"
      },
      {
        title: "上传人",
        dataIndex: "publisher",
        key: "publisher"
      },

      {
        title: "上传时间",
        key: "createdAt",
        render: () => <span>Delete</span>
      },
      {
        title: "下载资料",
        dataIndex: "load",
        key: "load"
      }
    ];

    const data = [...this.props.software];

    return (
      <Fragment>
        <Search option1={"软件名称"} option2={"上传人"} />
        <Table
          pagination={false}
          size="small"
          columns={columns}
          dataSource={data}
        ></Table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    software: state.software.get("result")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSoftware() {
      dispatch(actionCreators.getSoftwareApi());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Software);
