import React, { Component } from "react";
import "../style/band.less";
import "../style/carousel.less";
import { Table, Carousel } from "antd";
import { connect } from "react-redux";
import { actionCreators } from "./store"; //store 里有出口文件 已经导出

class Band extends Component {
  componentDidMount() {
    this.props.handleBand();
  }

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

    const data = [...this.props.result];
    return (
      <div className="bandWrapper">
        <div className="contendLeft">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            size="small"
            style={{ width: 450 }}
            rowKey="id"
          />
        </div>

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
    handleBand() {
      dispatch(actionCreators.getBandApi());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Band);
