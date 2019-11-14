import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import "./style.less";

import GetTable from "./GetTable";
const { Header, Sider, Content } = Layout;

class SuperAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = { info: 1 };
  }

  clickMenuItem = ({ item, key, keyPath, domEvent }) => {
    this.setState({ info: key });
  };

  render() {
    const { SubMenu } = Menu;

    return (
      <Layout>
        <Sider width="200">
          <div className="logo" />
          <Menu
            className="Menu"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
            onClick={this.clickMenuItem}
          >
            <SubMenu
              style={{ padding: 0, left: -20 }}
              className="SubMenu"
              key="user"
              title={
                <span>
                  <Icon type="user" />
                  用户管理
                </span>
              }
            >
              <Menu.Item key="1">管理员信息</Menu.Item>
              <Menu.Item key="2">教师信息</Menu.Item>
              <Menu.Item key="3">学生信息</Menu.Item>
              <Menu.Item key="4">注册用户</Menu.Item>
            </SubMenu>
            <SubMenu
              className="SubMenu"
              key="course"
              title={
                <span>
                  <Icon type="laptop" />
                  实验课程管理
                </span>
              }
            >
              <Menu.Item key="5">实验课程</Menu.Item>
              <Menu.Item key="6">教师课程</Menu.Item>
              <Menu.Item key="7">学生课程</Menu.Item>
            </SubMenu>
            <SubMenu
              className="SubMenu"
              key="resource"
              title={
                <span>
                  <Icon type="notification" />
                  资料管理
                </span>
              }
            >
              <Menu.Item key="9">学习资料</Menu.Item>
              <Menu.Item key="10">学习软件</Menu.Item>
            </SubMenu>
            <SubMenu
              className="SubMenu"
              key="band"
              title={
                <span>
                  <Icon type="notification" />
                  实验室管理
                </span>
              }
            >
              <Menu.Item key="11">实验室公告</Menu.Item>
            </SubMenu>
            <SubMenu
              className="SubMenu"
              key="data"
              title={
                <span>
                  <Icon type="notification" />
                  数据信息管理
                </span>
              }
            >
              <Menu.Item key="12">清除文件</Menu.Item>
              <Menu.Item key="13">导入模板</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: "#fff", padding: 0, height: 40 }}
          ></Header>
          <Content>
            <GetTable info={this.state.info}></GetTable>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SuperAdmin;
