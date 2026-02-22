import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const studentDetails = {name, email, password,address};


  const userHandler = async (e) => {
    e.preventDefault();
   //console.log(studentsDetails);

    try {
      const response = await fetch("http://40.192.100.235:8080/api/students/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentDetails),
      });

      const data = await response.json();

      if (data.success) {
     
        toast.success("Registered Sucessfully", {
        closeButton: false,
        });
          // alert("Registered successfully");
             navigate("/login");
           } else {
             toast.error("Email Already Exist",{
               closeButton: false,
             });
              navigate("/register");
           }
    } catch (error) {
      toast.warning("Technical server issue. Please try again later",{
      closeButton: false,
      });
      navigate("/register");
    }
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={userHandler}>
        <h2>Create Account</h2>

        <input
          type="text" name="name"
          placeholder="Enter Name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email" name="email"
          placeholder="Enter Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password" name="password"
          placeholder="Enter Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text" name="address"
          placeholder="Enter Address"
          required
          onChange={(e) => setAddress(e.target.value)}
        />

        <button type="submit">Register</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
