import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

const Editprofile = () => {
const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({
    name: "",
    email: "",
    address: ""
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/students/${id}`
        );

        setData({
          name: res.data.data.name,
          email: res.data.data.email,
          address: res.data.data.address
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudent();
  }, [id]);




 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.put(
      `http://localhost:8080/api/students/${id}`,
      data
    );

  
    localStorage.setItem("user", JSON.stringify(res.data.data));

    toast.success("Profile updated successfully", {
      closeButton: false,
    });

    navigate("/profile");

  } catch (error) {
    
    if (error.response) {
      toast.error(error.response.data.message || "Email Already Exists", {
        closeButton: false,
      });
    }
  
    else {
      toast.warning(
        "Technical server issue. Please try again later",
        { closeButton: false }
      );
    }

    navigate(`/edit/${id}`);
  }
};


  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleSubmit}>
        <h2>Edit account</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={data.address}
          onChange={(e) => setData({ ...data, address: e.target.value })}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Editprofile;
