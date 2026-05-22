import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    course: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Registration Successful");

    console.log(formData);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="Enter Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="">Select Course</option>
          <option value="B.Tech">B.Tech</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;