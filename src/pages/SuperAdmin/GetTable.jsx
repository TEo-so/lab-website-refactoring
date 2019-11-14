import React, { Component, Fragment } from "react";
import { ActionWrapper, TableWrapper } from "./style.js";
import { AddButton, DeleteButton } from "../../components/Buttons";
import { Table } from "antd";

import * as columnsAll from "./info.js";

class getTable extends Component {
  constructor(props) {
    super(props);
    this.state = { columns: columnsAll.adminColumns };
  }
  componentWillReceiveProps(nextProps) {
    let info = nextProps.info;

    if (info === "1") {
      this.setState({ columns: columnsAll.adminColumns });
    } else if (info === "2") {
      this.setState({ columns: columnsAll.teacherColumns });
    } else if (info === "3") {
      this.setState({ columns: columnsAll.stuColumns });
    } else if (info === "4") {
      this.setState({ columns: columnsAll.registerColumns });
    } else if (info === "5") {
      this.setState({ columns: columnsAll.courseColumns });
    } else if (info === "6") {
      this.setState({ columns: columnsAll.teaCourseColumns });
    } else if (info === "7") {
      this.setState({ columns: columnsAll.stuCourseColumns });
    } else if (info === "8") {
      this.setState({ columns: columnsAll.resourceColumns });
    } else if (info === "9") {
      this.setState({ columns: columnsAll.softwareColumns });
    } else if (info === "10") {
      this.setState({ columns: columnsAll.bandColumns });
    }
  }
  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      }
    };

    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park"
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park"
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park"
      },
      {
        key: "4",
        name: "Disabled User",
        age: 99,
        address: "Sidney No. 1 Lake Park"
      }
    ];

    return (
      <Fragment>
        <ActionWrapper>
          <AddButton />
          <DeleteButton />
        </ActionWrapper>
        <TableWrapper>
          <Table
            pagination={false}
            rowSelection={rowSelection}
            columns={this.state.columns}
            dataSource={data}
          />
        </TableWrapper>
      </Fragment>
    );
  }
}

export default getTable;
