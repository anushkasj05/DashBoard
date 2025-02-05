import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const EditData = () => {
  const { id } = useParams();
  const [mydata, setMydata] = useState({});
  const lodaData = () => {
    let api = `http://localhost:4000/Students/${id}`;
    axios.get(api).then((res) => {
      setMydata(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    lodaData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setMydata((values) => ({ ...values, [name]: value }));
    console.log(mydata);
  };

  const handleSubmit = () => {
    let api = `http://localhost:4000/Students/${id}`;
    axios.put(api, mydata).then((res) => {
      alert("data updated!!!");
    });
  };

  return (
    <>
      <h1> Edit data</h1>
      Edit RollNo :{" "}
      <input
        type="text"
        name="RollNo"
        value={mydata.RollNo}
        onChange={handleInput}
      />
      <br />
      Edit Name :{" "}
      <input
        type="text"
        name="Name"
        value={mydata.Name}
        onChange={handleInput}
      />
      <br />
      Edit Age :{" "}
      <input type="text" name="Age" value={mydata.Age} onChange={handleInput} />
      <br />
      Edit DOB :{" "}
      <input type="text" name="DOB" value={mydata.DOB} onChange={handleInput} />
      <br />
      Edit CGPA:
      <input
        type="text"
        name="CGPA"
        value={mydata.CGPA}
        onChange={handleInput}
      />
      <br />
      Edit Course:
      <input
        type="text"
        name="Course"
        value={mydata.Course}
        onChange={handleInput}
      />
      <br />
      Edit Branch:
      <input
        type="text"
        name="Branch"
        value={mydata.Branch}
        onChange={handleInput}
      />
      <br />
      <button onClick={handleSubmit}> Edit Save!</button>
    </>
  );
};

export default EditData;
