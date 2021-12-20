import { Typography } from "antd";
import React from "react";
import { Carousel } from "antd";
import picOne from "./picture.jpg";
import picTwo from "./picture2.jpg";
import Layout from "antd/lib/layout/layout";

const { Title } = Typography;

const style = {
  background: `url(${picOne}) center/100%  #000`,
  backgroundPosition: "center",
  backgroundRepeat: " no-repeat",
  backgroundSize: "cover",
  height: "98vh",
  color: "#fff",
  justifyContent: "center",
  paddingTop: "20%",
};

const Banner = () => {
  return (
    <div>
      <Carousel effect="fade" autoplay="true">
        <Layout>
          <Title style={style} align="center">
            Welcome To Demo App
          </Title>
        </Layout>

        <Layout>
          <img
            src={picTwo}
            style={{ width: "100%", height: "98vh", objectFit: "cover" }}
            alt=""
          ></img>
        </Layout>
        <Layout>
          <img
            src={picOne}
            style={{ width: "100%", height: "98vh", objectFit: "cover" }}
            alt=""
          ></img>
        </Layout>
      </Carousel>
    </div>
  );
};

export default Banner;
