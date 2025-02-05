import React from "react";
import SideBar from "./Pages/SideBar";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Display from "./Pages/Display";

const Layout = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <SideBar />
          </Col>
          <Col sm={8} style={{ marginLeft: "-15%" }}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
