import React from 'react';
import { Card, Col, Row } from 'antd';
const CardListFirst = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card
            title="Card title"
            bordered={true}
            style={{ marginTop: 16 }}
            headStyle={{ backgroundColor:"rgb(13 110 253 / 25%)" }}
            hoverable={true}
            loading={false}
            bodyStyle={{ backgroundColor:"rgb(0 251 255 / 9%)" }}
        >
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
);
export default CardListFirst;