import React, { Component, Fragment } from "react";
import { Table } from "antd";
import Search from "../../components/Search";
import "./table.less";
import { connect } from "react-redux";
import { actionCreators } from "./store"; //store 里有出口文件 已经导出

class Mission extends Component {
  componentDidMount() {
    this.props.handleMission();
  }

  render() {
    const expandedRowRender = () => {
      const columns = [
        { title: "实验任务", dataIndex: "mission", key: "mission" },
        { title: "实验任务附件", dataIndex: "afflix", key: "afflix" },
        { title: "发布时间", dataIndex: "createdAt", key: "createdAt" }
      ];

      const data = [...this.props.detailMission];

      return (
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          size="small"
        />
      );
    };

    //子菜单组件

    const columns = [
      { title: "实验课程", dataIndex: "name", key: "name" },
      { title: "教学班编号", dataIndex: "number", key: "number" },
      { title: "教学班备注", dataIndex: "comment", key: "comment" },
      { title: "学期", dataIndex: "semester", key: "semester" },
      { title: "课程教师", dataIndex: "teacher", key: "teacher" },
      { title: "发布时间", dataIndex: "createdAt", key: "createdAt" }
    ];

    const data = [...this.props.mission];

    const onExpand = (expanded, record) => {
      console.log(record);
      this.props.handleDetailMission(record.id);
    };

    return (
      <Fragment>
        <Search option1={"教师姓名"} option2={"课程名"} />
        <Table
          className="components-table-demo-nested"
          pagination={false}
          size="small"
          columns={columns}
          expandedRowRender={expandedRowRender} //子组件
          dataSource={data}
          onExpand={onExpand}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    mission: state.mission.get("result"),
    detailMission: state.mission.get("detailMission")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleMission() {
      dispatch(actionCreators.getMissionApi());
    },
    handleDetailMission(id) {
      dispatch(actionCreators.getDetailMissionApi(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mission);
