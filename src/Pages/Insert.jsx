import React, { useState } from "react";
import axios from "axios";
const Insert = () => {
  const [input, setinput] = useState([]);
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setinput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  const handleSubmit = () => {
    let api = "http://localhost:4000/Students";
    axios.post(api, input).then((res) => {
      alert("Data Saved!!!");
    });
  };
  return (
    <>
      <h1>Insert Data</h1>
      <div style={{ border: "5px solid black", padding: "20px" }}>
        Enter Rollno: <input type="text" name="RollNo" onChange={handleInput} />
        <br />
        <br />
        Enter Name: <input type="text" name="Name" onChange={handleInput} />
        <br />
        <br />
        Enter Age: <input type="number" name="Age" onChange={handleInput} />
        <br />
        <br />
        Enter Date Of Birth:{" "}
        <input type="text" name="DOB" onChange={handleInput} />
        <br />
        <br />
        Enter CGPA: <input type="text" name="CGPA" onChange={handleInput} />
        <br />
        <br />
        Enter Course: <input type="text" name="Course" onChange={handleInput} />
        <br />
        <br />
        Enter Branch: <input type="text" name="Branch" onChange={handleInput} />
        <br />
        <br />
        <button
          onClick={handleSubmit}
          style={{ padding: "20px", background: "#93ADEB" }}
        >
          SAVE DATA
        </button>
      </div>
    </>
  );
};

export default Insert;
