import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Table, Button, Divider, Popconfirm, Modal, Input } from "antd";
import { connect } from "react-redux";
import * as actionCreators from "../../actionCreators/teaMission";
import CheckStuWork from "../CheckStuWork/index";
import "../style/input.less";

import { withRouter } from "react-router-dom";

const InputWrapper = styled.div`
  display: flex;
`;

class TeacherMission extends Component {
  state = {
    PublishVisible: false,
    NoUpLoadVisible: false,
    CheckVisible: false
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
    this.props.handleDeleteTeaCourse(arg);
  }

  showPublishModal = id => {
    this.setState({
      PublishVisible: true
    });
  };

  showNoUpLoadModal = id => {
    this.setState({
      NoUpLoadVisible: true
    });
  };

  showCheckModal = id => {
    this.setState({
      CheckVisible: true
    });
  };

  handleOk = e => {
    this.setState({
      PublishVisible: false,
      NoUpLoadVisible: false,
      CheckVisible: false
    });
  };

  handleCancel = e => {
    this.setState({
      PublishVisible: false,
      NoUpLoadVisible: false,
      CheckVisible: false
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
            title="学生作业"
            dataIndex="work"
            key="work"
            render={(text, record) => {
              return (
                <span>
                  <Button
                    size="small"
                    onClick={() => {
                      this.showCheckModal(record.id);
                    }}
                  >
                    查看作业
                  </Button>
                  <Divider type="vertical"></Divider>
                  <Button size="small" onClick={() => {}}>
                    关闭任务上传
                  </Button>
                  <Divider type="vertical"></Divider>
                  <Button
                    size="small"
                    onClick={() => {
                      this.showNoUpLoadModal(record.id);
                    }}
                  >
                    未提交作业名单
                  </Button>
                </span>
              );
            }}
          />
          <Column
            title="任务处理"
            dataIndex="measure"
            key="measure"
            render={(text, record) => {
              return (
                <span>
                  <Button size="small" onClick={() => {}}>
                    修改任务
                  </Button>
                  <Divider type="vertical"></Divider>
                  <Button size="small" onClick={() => {}}>
                    删除任务
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
          <Column
            title="教学班备注"
            dataIndex="comment"
            key="comment"
            render={(text, record) => {
              return (
                <span>
                  <Button
                    size="small"
                    onClick={() => {
                      this.showPublishModal(record.id);
                    }}
                  >
                    修改
                  </Button>
                  + {data[1].comment}
                </span>
              );
            }}
          />
          <Column title="学期" dataIndex="semester" key="semester" />
          <Column title="课程教师" dataIndex="teacher" key="teacher" />
          <Column title="发布时间" dataIndex="createdAt" key="createdAt" />
          <Column
            title="实验处理"
            dataIndex="add"
            key="add"
            render={(text, record) => {
              return (
                <span>
                  <Button
                    size="small"
                    onClick={() => {
                      this.showPublishModal(record.id);
                    }}
                  >
                    发布任务
                  </Button>
                  <Divider type="vertical"></Divider>
                  <Popconfirm
                    title="确定删除课程?"
                    onConfirm={() => this.handleDelete(record)}
                  >
                    <i>删除课程</i>
                  </Popconfirm>
                </span>
              );
            }}
          />
        </Table>
        <Modal
          title="发布任务"
          visible={this.state.PublishVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <InputWrapper>
            <span>任务名称:</span>
            <Input className="antdInput"></Input>
            <Button type="small">发布</Button>
          </InputWrapper>
          <p>添加附件</p>
        </Modal>

        <Modal
          title="未上传作业"
          visible={this.state.NoUpLoadVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        ></Modal>

        <Modal
          title="查看作业"
          visible={this.state.CheckVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <CheckStuWork></CheckStuWork>
        </Modal>
      </Fragment>
    );
  }
}

// state数据映射到props上 输入逻辑 state 对象转换为 UI 对象
const mapStateToProps = state => {
  return {
    mission: state.teacher.get("result"),
    detailMission: state.teacher.get("detailMission"),
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
    handleDeleteTeaCourse(arg) {
      dispatch(actionCreators.DeleteTeadentCourse(arg));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeacherMission)
);
