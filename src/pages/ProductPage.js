import React, { Component } from "react";
import { Card } from "antd";

class ProductPage extends Component {
  render() {
    return (
      <div className="site-card-border-less-wrapper">
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    );
  }
}

export default ProductPage;
