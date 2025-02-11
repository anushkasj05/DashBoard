import React from "react";
import Insert from "./Insert";
import Display from "./Display";
import Search from "./Search";
import Update from "./Update";
import Accordion from "react-bootstrap/Accordion";
const Dashboard = () => {
  return (
    <>
      <img src="src/images/ASJUNIVERSITY.png" alt="" style={{ width: "90%" }} />
      <h1>Welcome To the Student Management System Dashboard</h1>

      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Insert Student Data</Accordion.Header>
          <Accordion.Body>
            <Insert />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Display Student Data</Accordion.Header>
          <Accordion.Body>
            <Display />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Search Student Data</Accordion.Header>
          <Accordion.Body>
            <Search />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Update Student Data</Accordion.Header>
          <Accordion.Body>
            <Update />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Dashboard;
