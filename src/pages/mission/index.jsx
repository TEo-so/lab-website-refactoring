import React, { Component, Fragment } from "react";
import { Tabs } from "antd";
import Search from "../../components/Search/Search";
import VisitorMission from "../../components/VisitorMission/index";
import StudentMission from "../../components/StudentMission/index";
import TeacherMission from "../../components/TeacherMission/index.jsx";
import TeacherCourse from "../../components/TeacherCourse/index.jsx";
import "./table.less";
import { connect } from "react-redux";

class Mission extends Component {
  componentDidMount() {
    console.log(this.props.history);
  }

  //  动态加载组件

  render() {
    const { TabPane } = Tabs;

    const GetMission = () => {
      if (this.props.isLogin) {
        return <VisitorMission></VisitorMission>;
      } else if (!this.props.isLogin) {
        if (this.props.type === "student") {
          return (
            <Tabs defaultActiveKey="1">
              <TabPane tab="我的任务" key="1">
                <StudentMission></StudentMission>
              </TabPane>
              <TabPane tab="所有任务" key="2">
                <Search
                  option1={"教师姓名"}
                  option2={"课程名"}
                  api={" http://localhost:3000/api/mission.json"}
                />
                {/* 所有任务，学生可添加 */}
                <VisitorMission add={"实验处理"}></VisitorMission>
              </TabPane>
            </Tabs>
          );
        } else if (this.props.type === "teacher") {
          return (
            <Tabs defaultActiveKey="1">
              <TabPane tab="我的任务" key="1">
                <TeacherMission></TeacherMission>
              </TabPane>
              <TabPane tab="实验课程" key="2">
                <TeacherCourse></TeacherCourse>
              </TabPane>
              <TabPane tab="所有任务" key="3">
                <Search
                  option1={"教师姓名"}
                  option2={"课程名"}
                  api={" http://localhost:3000/api/mission.json"}
                />
                <VisitorMission></VisitorMission>
              </TabPane>
            </Tabs>
          );
        }
      }
    };

    return (
      <Fragment>
        <GetMission></GetMission>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.mission.get("isLogin"),
    type: state.admin.get("type")
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mission);
