import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
const Display = () => {
  const [data, setdata] = useState([]);
  const loadData = () => {
    let api = "http://localhost:4000/Students";
    axios.get(api).then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
  };
  const ans = data.map((key) => {
    return (
      <>
        <tr>
          <td>{key.RollNo}</td>
          <td>{key.Name}</td>
          <td>{key.Age}</td>
          <td>{key.DOB}</td>
          <td>{key.CGPA}</td>
          <td>{key.Course}</td>
          <td>{key.Branch}</td>
        </tr>
      </>
    );
  });
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <h1>Display Data </h1>
      <Table
        bordered
        hover
        size="md"
        responsive="md"
        style={{ border: "1px",}}
      >
        <thead>
          <tr>
            <th>Rollno</th>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>CGPA</th>
            <th>Course</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};

export default Display;
