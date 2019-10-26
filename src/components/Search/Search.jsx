import React, { Component } from "react";
import { Input, Select } from "antd";
import { connect } from "react-redux";
import { actionCreators } from "./store"; //store 里有出口文件 已经导出

const { Option } = Select;
const { Search } = Input;

class SearchBox extends Component {
  componentDidMount() {
    this.props.handleDefaultSelect(this.props.option1);
    this.props.handleApi(this.props.api);
  }

  onChange = value => {
    this.props.handleChangeSelect(value);
  };

  onSearch = value => {
    this.props.handleSearch(
      //`${this.props.correctApi}+?q=${this.props.selectValue}+?p=${value}`
      " http://localhost:3000/api/mission.json"
    );
  };

  render() {
    const selectBefore = (arg1, arg2) => (
      <Select
        labelInValue
        defaultValue={{ key: arg1 }}
        style={{ width: 100 }}
        onChange={this.onChange}
      >
        <Option value={arg1}>{arg1}</Option>
        <Option value={arg2}>{arg2}</Option>
      </Select>
    );

    return (
      <div>
        <div style={{ marginBottom: 8 }}>
          <Search
            addonBefore={selectBefore(this.props.option1, this.props.option2)}
            style={{ width: 300 }}
            onSearch={this.onSearch}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectValue: state.search.get("selectValue"),
    correctApi: state.search.get("correctApi")
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleDefaultSelect(value) {
      dispatch(actionCreators.getDefaultSelect(value));
    },
    handleChangeSelect(value) {
      dispatch(actionCreators.getChangeSelect(value));
    },
    handleApi(value) {
      dispatch(actionCreators.getApi(value));
    },
    handleSearch(value) {
      dispatch(actionCreators.getSearchApi(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
