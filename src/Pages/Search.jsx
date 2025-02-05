import React from "react";
import { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Table from "react-bootstrap/Table";

const Search = () => {
  const [RollNo, setRollNo] = useState("");
  const [mydata, setmydata] = useState([]);
  const handleSubmit = async () => {
    let api = `http://localhost:4000/Students/?RollNo=${RollNo}`;
    const response = await axios.get(api);
    console.log(response.data);
    setmydata(response.data);
  };
  const ans = mydata.map((key) => {
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
  return (
    <>
      <h1>Search </h1>
      Enter RollNo :{" "}
      <input
        type="text"
        name="RollNo"
        value={RollNo}
        onChange={(e) => {
          setRollNo(e.target.value);
        }}
      />
      <button onClick={handleSubmit} style={{ padding: "1px" }}>
        <FaSearch />
      </button>
      <hr size="4" color red />
      <Table bordered hover size="md" responsive="md" style={{ border: "1px" }}>
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

export default Search;
