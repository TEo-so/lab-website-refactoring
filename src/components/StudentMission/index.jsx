import React, { Component, Fragment } from "react";
import { Table, Popconfirm, Divider, Button, Modal } from "antd";
import { connect } from "react-redux";
import { actionCreators } from "./store"; //store 里有出口文件 已经导出
import WorkPop from "../../components/WorkPop/index";

class StudentMission extends Component {
  state = {
    checkVisible: false,
    loadVisible: false
  };

  componentDidMount() {
    this.props.handleMission();
  }

  handleDelete(record) {
    const id = record.id;
    const data = [...this.props.mission];
    const arg = {
      id,
      data
    };
    this.props.handleDeleteStuCourse(arg);
  }

  //展示作业详情 并请求接口
  showCheckModal = id => {
    this.setState({
      checkVisible: true
    });

    this.props.handleCheckWork(id);
  };

  showLoadModal = id => {
    this.setState({
      loadVisible: true
    });
  };

  handleOk = e => {
    this.setState({
      checkVisible: false,
      loadVisible: false
    });
  };

  handleCancel = e => {
    this.setState({
      checkVisible: false,
      loadVisible: false
    });
  };

  render() {
    const expandedRowRender = () => {
      const data = [...this.props.detailMission];

      return (
        <Table dataSource={data} pagination={false} size="small">
          <Column title="实验任务" dataIndex="mission" key="mission" />
          <Column title="实验任务附件" dataIndex="afflix" key="afflix" />
          <Column title="发布时间" dataIndex="createdAt" key="createdAt" />
          <Column
            title="作业处理"
            dataIndex="measure"
            key="measure"
            render={(text, record) => {
              return (
                <span>
                  <Button
                    size="small"
                    onClick={() => this.showCheckModal(record.id)}
                  >
                    查看作业
                  </Button>
                  <Divider type="vertical"></Divider>
                  <Button
                    size="small"
                    onClick={() => this.showLoadModal(record.id)}
                  >
                    上传作业
                  </Button>
                </span>
              );
            }}
          />
        </Table>
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
            title="删除课程"
            dataIndex="delete"
            key="delete"
            render={(text, record) => {
              return (
                <Popconfirm
                  title="确定删除课程?"
                  onConfirm={() => this.handleDelete(record)}
                >
                  <i>删除课程</i>
                </Popconfirm>
              );
            }}
          />
        </Table>
        <Modal
          title="查看作业"
          visible={this.state.checkVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <WorkPop></WorkPop>
        </Modal>
        <Modal
          title="上传作业"
          visible={this.state.loadVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {/* 上传作业的组件要重做 */}
          <WorkPop></WorkPop>
        </Modal>
      </Fragment>
    );
  }
}

// state数据映射到props上 输入逻辑 state 对象转换为 UI 对象
const mapStateToProps = state => {
  return {
    mission: state.student.get("result"),
    detailMission: state.student.get("detailMission"),
    isLogin: state.admin.get("isLogin"),
    type: state.admin.get("type")
    // id :state.admin.get('id) 暂时未添加
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleMission() {
      dispatch(actionCreators.getMissionApi());
    },
    handleDetailMission(id) {
      dispatch(actionCreators.getDetailMissionApi(id));
    },
    handleDeleteStuCourse(arg) {
      dispatch(actionCreators.DeleteStudentCourse(arg));
    },
    handleCheckWork(id) {
      dispatch(actionCreators.getWorkApi(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentMission);
