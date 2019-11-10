import React, { Component, Fragment } from "react";
import { Table, Popconfirm } from "antd";
import { connect } from "react-redux";
import { actionCreators } from "./store"; //store 里有出口文件 已经导出

class TeacherCourse extends Component {
  componentDidMount() {
    this.props.handleMission();
  }

  handleAdd(record) {
    this.props.handleAddTeaCourse(record);
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

    const { Column } = Table;

    const data = [...this.props.mission];

    const onExpand = (expanded, record) => {
      this.props.handleDetailMission(record.id);
    };

    return (
      <Fragment>
        <Table
          className="components-table-demo-nested"
          pagination={false}
          size="small"
          // columns={columns}
          expandedRowRender={expandedRowRender} //子组件
          dataSource={data}
          onExpand={onExpand}
        >
          <Column title="实验课程" dataIndex="name" key="name" />
          <Column title="教学班编号" dataIndex="number" key="number" />
          <Column title="教学班备注" dataIndex="comment" key="comment" />
          <Column title="学期" dataIndex="semester" key="semester" />
          <Column title="课程教师" dataIndex="teacher" key="teacher" />
          <Column title="发布时间" dataIndex="createdAt" key="createdAt" />
          <Column
            title="实验处理"
            dataIndex="add"
            key="add"
            render={(text, record) => {
              return (
                <Popconfirm
                  title="确定添加课程?"
                  onConfirm={() => this.handleAdd(record)}
                >
                  <i>添加课程</i>
                </Popconfirm>
              );
            }}
          />
        </Table>
      </Fragment>
    );
  }
}

// state数据映射到props上 输入逻辑 state 对象转换为 UI 对象
const mapStateToProps = state => {
  return {
    mission: state.course.get("result"),
    detailMission: state.course.get("detailMission"),
    isLogin: state.admin.get("isLogin"),
    type: state.admin.get("type")
    // id :state.admin.get('id) 暂时未添加
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleMission() {
      dispatch(actionCreators.getCourseApi());
    },
    handleDetailMission(id) {
      dispatch(actionCreators.getDetailMissionApi(id));
    },
    handleAddTeaCourse(record) {
      dispatch(actionCreators.AddTeacherCourse(record));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherCourse);
