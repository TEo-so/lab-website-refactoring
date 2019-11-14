import React from "react";
import styled from "styled-components";

import { Modal, Form, Input, Col, Row } from "antd";
import { connect } from "react-redux";
import * as actionCreators from "../../actionCreators/admin"; //store 里有出口文件 已经导出

const Wrapper = styled.div`
  display: flex;
  position: relative;
  top: 70px;
  left: 500px;
  div {
    margin: 0 5px;
    font-size: 12px;
  }
`;
const LoginWrapper = styled.div`
  display: flex;
  position: relative;
  top: 82px;
  left: 650px;
  div {
    margin: 0 5px;
    font-size: 12px;
  }
`;

const LoginFormPop = Form.create({ name: "form_in_login" })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          width={300}
          visible={visible}
          title="登录"
          okText="登录"
          cancelText="取消"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="学号">
              {getFieldDecorator("studentID")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="密码">
              {getFieldDecorator("password")(<Input type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

const RegisterFormPop = Form.create({ name: "form_in_register" })(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          width={500}
          visible={visible}
          title="注册"
          okText="注册"
          cancelText="取消"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Row gutter={24}>
            <Form layout="vertical">
              <Col span={12}>
                <Form.Item label="学号">
                  {getFieldDecorator("studentID")(<Input type="textarea" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="姓名">
                  {getFieldDecorator("name")(<Input type="textarea" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="年级">
                  {getFieldDecorator("grade")(<Input type="textarea" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="学院">
                  {getFieldDecorator("college")(<Input type="textarea" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="专业">
                  {getFieldDecorator("major")(<Input type="textarea" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="班级">
                  {getFieldDecorator("class")(<Input type="textarea" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="性别">
                  {getFieldDecorator("sexual")(<Input type="textarea" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="教师">
                  {getFieldDecorator("teacher")(<Input type="textarea" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="电话">
                  {getFieldDecorator("tel")(<Input type="textarea" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="密码">
                  {getFieldDecorator("password")(<Input type="textarea" />)}
                </Form.Item>
              </Col>
            </Form>
          </Row>
        </Modal>
      );
    }
  }
);

//CollectionsPage
class Admin extends React.Component {
  state = {
    loginVisible: false,
    registerVisible: false,
    loginOutVisible: false
  };

  showLoginModal = () => {
    this.setState({ loginVisible: true });
  };
  showRegisterModal = () => {
    this.setState({ registerVisible: true });
  };

  showLoginOutModal = () => {
    console.log("退出登录");
    this.setState({
      loginOutVisible: true
    });
  };

  // 退出登录
  handleOk = e => {
    console.log(e);
    this.setState({
      loginOutVisible: false
    });
    this.props.handleLoginOut();
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      loginOutVisible: false
    });
  };

  handleLoginCancel = () => {
    this.setState({ loginVisible: false });
  };

  handleRegisterCancel = () => {
    this.setState({ registerVisible: false });
  };

  handleLoginCreate = () => {
    const { form } = this.loginFormRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      } else {
        this.props.handleSubmitLogin(values);
      }

      form.resetFields();
      this.setState({ loginVisible: false });
    });
  };

  handleRegisterCreate = () => {
    const { form } = this.registerFormRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      } else {
        this.props.handleRegister(values);
      }

      form.resetFields();
      this.setState({ registerVisible: false });
    });
  };

  saveLoginFormRef = formRef => {
    this.loginFormRef = formRef;
  };

  saveRegisterFormRef = formRef => {
    this.registerFormRef = formRef;
  };

  getAdmin() {
    if (!this.props.isLogin) {
      return (
        <Wrapper className="Admin">
          <div>身份 :游客</div>
          <div>
            <div onClick={this.showLoginModal}>登录</div>
            <LoginFormPop
              wrappedComponentRef={this.saveLoginFormRef}
              visible={this.state.loginVisible}
              onCancel={this.handleLoginCancel}
              onCreate={this.handleLoginCreate}
            />
          </div>
          <div>
            <div onClick={this.showRegisterModal}>注册</div>

            <RegisterFormPop
              wrappedComponentRef={this.saveRegisterFormRef}
              visible={this.state.registerVisible}
              onCancel={this.handleRegisterCancel}
              onCreate={this.handleRegisterCreate}
            />
          </div>
          <div>使用手册</div>
        </Wrapper>
      );
    } else {
      return (
        <LoginWrapper className="loginWrapper">
          <div>您好：{this.props.usename}</div>
          <div>身份：{this.props.type}</div>
          <div onClick={this.showLoginOutModal}>
            退出
            <Modal
              title="退出登录"
              visible={this.state.loginOutVisible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>确定退出吗</p>
            </Modal>
          </div>
          <div>使用手册</div>
        </LoginWrapper>
      );
    }
  }

  render() {
    return this.getAdmin();
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.admin.get("isLogin"),
    usename: state.admin.get("username"),
    type: state.admin.get("type")
  };
};

// 输出逻辑，即将用户对 UI 组件的操作映射成 Action。
const mapDispatchToProps = dispatch => {
  return {
    handleSubmitLogin(values) {
      dispatch(actionCreators.getLoginApi(values));
    },
    handleLoginOut() {
      dispatch(actionCreators.getLoginOutApi());
    },
    handleRegister(values) {
      dispatch(actionCreators.getRegisterApi(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
