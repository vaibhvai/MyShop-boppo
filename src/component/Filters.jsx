import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const Filters = () => {
  return (
    <Container>
      <Row>
        <Col
          md={3}
          style={{
            backgroundColor: "gray",
            color: "white",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start", // Align items from the start (left side)
            width: "110%",
            top: "0",
            left: "0",
            margin: "10px",
            height: "96vh",
          }}
        >
          <h5>Filter Products</h5>
          <Form>
            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Accessories"
                  name="category"
                  id="men"
                />
                <Form.Check
                  type="radio"
                  label="bangles"
                  name="category"
                  id="women"
                />
                <Form.Check
                  type="radio"
                  label="jaipur"
                  name="category"
                  id="electronics"
                />
                <Form.Check
                  type="radio"
                  label="Jewelry"
                  name="category"
                  id="jaipur"
                />
              </div>
            </Form.Group>
            <Button variant="light">Clear Filters</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Filters;
