import React from "react";
// import { Row, Col, Divider } from "antd";
import Layout, { Header } from "antd/lib/layout/layout";
import { Col, Menu, Row, Typography } from "antd";
const { Title } = Typography;

const style = { background: "#000", padding: "12px 0", color: "#fff" };
const color = { color: "#fff", padding: "0px 25px", lineHeight: "30px" };
const Head = () => {
  return (
    <>
      <Layout>
        <Row style={style}>
          <Col span={6} align="center" xs={24} sm={24} md={6} lg={6} xl={6}>
            <Title level={4} style={{ color: "#fff" }}>
              Demo App
            </Title>
          </Col>
          <Col span={18} align="center" xs={24} sm={24} md={18} lg={18} xl={18}>
            <Typography.Link style={color}>Link</Typography.Link>
            <Typography.Link style={color}>Link</Typography.Link>
            <Typography.Link style={color}>Link</Typography.Link>
            <Typography.Link style={color}>Link</Typography.Link>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default Head;
