import React, { Component } from "react";
// import Search from "../../components/Search";
import { Table } from "antd";

class Software extends Component {
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

    const data = [
      {
        key: "1",
        name: "John Brown",
        size: 32,
        publisher: "袁浩",
        createdAt: "2019-04-03",
        load: "下载资料"
      },
      {
        key: "1",
        name: "John Brown",
        size: 32,
        publisher: "袁浩",
        createdAt: "2019-04-03",
        load: "下载资料"
      },
      {
        key: "1",
        name: "John Brown",
        size: 32,
        publisher: "袁浩",
        createdAt: "2019-04-03",
        load: "下载资料"
      }
    ];

    return (
      <Table
        pagination={false}
        size="small"
        columns={columns}
        dataSource={data}
      ></Table>
    );
  }
}

export default Software;
