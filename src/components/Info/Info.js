import { Card, Col, Pagination, Row } from "antd";
import Layout from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { getPost } from "../../service/api";
import Cards from "./Card";

const PageNo = { start: 0, end: 10 };

const Info = () => {
  const [userPost, setUserPost] = useState([]);
  const [page, setPage] = useState(PageNo);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPost();
      setUserPost(data);
    };
    fetchData();
  }, []);
  const handleChange = (currentPage, pageSize) => {
    console.log(page, pageSize);
    setPage({ start: (currentPage - 1) * 10, end: currentPage * 10 });
  };

  console.log("page", page);
  console.log("total", userPost.length);
  return (
    <>
      <Row justify="center">
        {userPost.slice(page.start, page.end).map((post) => (
          <Col
            key={post.id}
            span={6}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            xs={{ span: 24 }}
          >
            <Cards post={post} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col span={12} offset={6} align="center">
          <Pagination
            defaultCurrent={1}
            total={userPost.length}
            onChange={handleChange}
          />
        </Col>
      </Row>
    </>
  );
};

export default Info;
