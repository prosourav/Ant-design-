import { Card, Typography } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React, { useState } from "react";
const { Text } = Typography;

const Cards = ({ post }) => {
  const [ellipsis, setEllipsis] = useState(true);
  return (
    <Card
      title={post.title}
      style={{ width: 300, margin: "10px auto" }}
      align="center"
      hoverable="true"
    >
      <Text strong type="danger">
        Post id:{post.id}
      </Text>
      <br />
      <Paragraph
        ellipsis={
          ellipsis ? { rows: 4, expandable: true, symbol: "more" } : false
        }
      >
        {post.body}
      </Paragraph>
    </Card>
  );
};

export default Cards;
