import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
const Update = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const loadData = () => {
    let api = "http://localhost:4000/Students";
    axios.get(api).then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
  };
  const ans1 = data.map((key) => {
    return (
      <>
        <tr>
          <td style={{ textAlign: "center" }}>{key.RollNo}</td>
          <td style={{ textAlign: "center" }}>{key.Name}</td>
          <td style={{ textAlign: "center" }}>{key.Age}</td>
          <td style={{ textAlign: "center" }}>{key.DOB}</td>
          <td style={{ textAlign: "center" }}>{key.CGPA}</td>
          <td style={{ textAlign: "center" }}>{key.Course}</td>
          <td style={{ textAlign: "center" }}>{key.Branch}</td>
          <td>
            <a
              href="#"
              onClick={(e) => {
                myEdit(key.id);
              }}
              style={{ textAlign: "center" }}
            >
              <FaPencilAlt
                color="black"
                style={{ fontSize: "smaller", padding: "2px" }}
              />
            </a>
          </td>
          <td>
            <a
              href="#"
              x
              onClick={() => {
                myDel(key.id);
              }}
            >
              <AiTwotoneDelete
                color="black"
                style={{ fontSize: "smaller", padding: "2px" }}
              />
            </a>
          </td>
        </tr>
      </>
    );
  });
  useEffect(() => {
    loadData();
  }, []);
  const myDel = (id) => {
    let api = `http://localhost:4000/Students/${id}`;
    axios.delete(api).then((res) => {
      alert("Data deleted");
    });
    loadData();
  };
  const myEdit = (id) => {
    navigate(`/editdata/${id}`);
  };
  return (
    <div className="UpdateTable">
      <h1>Update Data</h1>
      <Table bordered hover size="md" responsive="md" style={{ border: "1px" }} >
        <thead>
          <tr>
            <th>Rollno</th>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>CGPA</th>
            <th>Course</th>
            <th>Branch</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{ans1}</tbody>
      </Table>
    </div>
  );
};

export default Update;
