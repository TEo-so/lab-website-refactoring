import React, { Component } from "react";
import { Input, Select } from "antd";

const { Option } = Select;
const { Search } = Input;

class SearchBox extends Component {
  render() {
    const selectBefore = (arg1, arg2) => (
      <Select defaultValue={arg1} style={{ width: 100 }}>
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
          />
        </div>
      </div>
    );
  }
}

export default SearchBox;
