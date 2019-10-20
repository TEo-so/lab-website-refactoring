import React from "react";
import "./style/band.less";
import "./style/carousel.less";
import { Table, Carousel } from "antd";

const Band = () => {
  const columns = [
    {
      title: "公告标题",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "发布时间",
      dataIndex: "createdAt",
      key: "createdAt"
    }
  ];

  const data = [
    {
      key: "1",
      name: "实验室注意事项",
      createdAt: "2019-04-09"
    },
    {
      key: "2",
      name: "实验室使用方法",
      createdAt: "2019-04-09"
    }
  ];
  return (
    <div className="bandWrapper">
      <div className="contendLeft">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          size="small"
          style={{ width: 450 }}
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
};

export default Band;
