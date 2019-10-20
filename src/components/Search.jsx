import React from "react";
import { Input, Select } from "antd";

const { Option } = Select;
const { Search } = Input;
const SearchBox = () => {
  const selectBefore = (
    <Select defaultValue="教师姓名" style={{ width: 100 }}>
      <Option value="教师姓名">教师姓名</Option>
      <Option value="课程号">课程号</Option>
    </Select>
  );
  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <Search addonBefore={selectBefore} style={{ width: 300 }} />
      </div>
    </div>
  );
};

export default SearchBox;
