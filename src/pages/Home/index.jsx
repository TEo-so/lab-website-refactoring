import React, { Component } from "react";
import { HomeWrapper, HeaderWrapper, Admin, Tab } from "./style";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HeaderWrapper />
        <Admin>
          <div>身份：游客</div>
          <div>登陆</div>
          <div>注册</div>
          <div>使用手册</div>
        </Admin>
        <Tab>
          <div>实验室首页</div>
          <div>上机任务</div>
          <div>学习资料</div>
          <div>软件下载</div>
        </Tab>
      </HomeWrapper>
    );
  }
}

export default Home;
