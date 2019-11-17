import React, { Component } from "react";
import "./band.less";
import "./carousel.less";
import { Table, Carousel, Pagination, Modal } from "antd";
import { connect } from "react-redux";
import * as actionCreators from "../../actionCreators/band";

class Band extends Component {
  componentDidMount() {
    this.props.handleBand(this.state.currentPage); //组件挂载好之后获取公告内容
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.currentPage !== nextState.currentPage) {
      this.props.handleBand(nextState.currentPage);
    }
    return true;
  }

  state = {
    visible: false,
    content: null,
    title: null,
    currentPage: 1
  };

  showModal = record => {
    this.setState({
      visible: true,
      content: record.content,
      title: record.title
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  onChange = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const columns = [
      {
        title: "公告标题",
        dataIndex: "title",
        key: "title"
      },
      {
        title: "发布时间",
        dataIndex: "addTime",
        key: "addTime"
      }
    ];

    const data = this.props.result.items;
    const total = this.props.result.total;

    return (
      <>
        <div className="bandWrapper">
          <div className="contendLeft">
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              size="small"
              style={{ width: 450 }}
              rowKey="id"
              onRow={record => {
                return {
                  onClick: event => {
                    this.showModal(record);
                  }
                };
              }}
            />
          </div>
          {/* 轮播图 */}
          <Carousel autoplay dots className="carouselWrapper">
            <div>
              <div className="first"></div>
            </div>
            <div>
              <div className="second"></div>
            </div>
            <div>
              <div className="third"></div>
            </div>
            <div>
              <div className="fourth"></div>
            </div>
            <div>
              <div className="fifth"></div>
            </div>
          </Carousel>
        </div>
        <Modal
          title={this.state.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{this.state.content}</p>
        </Modal>
        <Pagination
          showQuickJumper
          defaultCurrent={1}
          total={total}
          onChange={this.onChange}
          size="small"
        />
      </>
    );
  }
}

// state数据映射到props上 输入逻辑 state 对象转换为 UI 对象
const mapStateToProps = state => {
  return {
    result: state.band.get("result")
  };
};

// 输出逻辑，即将用户对 UI 组件的操作映射成 Action。
const mapDispatchToProps = dispatch => {
  return {
    //获取公告内容
    handleBand(page) {
      dispatch(actionCreators.getBandApi(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Band);
