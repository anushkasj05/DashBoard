import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Display from "./Pages/Display";
import Sidebar from "./Pages/SideBar";

const Layout = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <Sidebar/>
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
