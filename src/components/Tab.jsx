import React from "react";
import { Menu } from "antd";
import "./style/menuOverwrite.less";
import styled from "styled-components";

import Band from "./Band";
import Mission from "../pages/mission/index";
import Software from "../pages/software/index";
import Resource from "../pages/resource/index";

import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

export const ContentWrapper = styled.div`
  border: 1px solid gray;
  padding: 5px;
`;

const Tab = () => {
  let { path, url } = useRouteMatch();

  // const { TabPane } = Tabs;

  return (
    <div>
      {/* <Tabs type="card">
        <TabPane tab="实验室首页" key="1">
         
        </TabPane>
        <TabPane tab="上机任务" key="2">
         
        </TabPane>
        <TabPane tab="资料下载" key="3">
         
        </TabPane>
        <TabPane tab="软件下载" key="4">
        
        </TabPane>
      </Tabs> */}

      <Menu mode="horizontal" className="menu">
        <Menu.Item key="home" className="tab">
          <Link to="/home"> 实验室首页</Link>
        </Menu.Item>

        <Menu.Item key="mission" className="tab">
          <Link to={`${url}/mission`}>上机任务 </Link>
        </Menu.Item>

        <Menu.Item key="resource" className="tab">
          <Link to={`${url}/resource`}>学习资源 </Link>
        </Menu.Item>

        <Menu.Item key="sofeware" className="tab">
          <Link to={`${url}/software`}>软件下载</Link>
        </Menu.Item>
      </Menu>
      <ContentWrapper>
        <Switch>
          <Route path={path} exact component={Band}></Route>
          <Route path={`${path}/mission`} component={Mission}></Route>
          <Route path={`${path}/resource`} component={Resource}></Route>
          <Route path={`${path}/software`} component={Software}></Route>
        </Switch>
      </ContentWrapper>
    </div>
  );
};

export default Tab;
