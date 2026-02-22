import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";
import { toast } from 'react-toastify';

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <h2>No user logged in</h2>;

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this profile?")) return;

    try {
      await axios.delete(
        `http://localhost:8080/api/students/${id}`
      );

      //alert("Profile deleted successfully");
      toast.success("Profile deleted Sucessfully", {
      closeButton: false,
    });
      localStorage.removeItem("user");
      navigate("/profile");
    } catch (error) {
      console.error(error.response || error);
      //alert("Delete failed");
       toast.error("Profile Delete failed",{
      closeButton: false,
      });

    }
  };

  return (
    <div className="list-container">
      <h2>User Profile</h2>

      <table className="profile-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>
              <Link to={`/edit/${user.id}`}>
                <button className="btn edit-btn">Edit</button>
              </Link>

              <button
                className="btn delete-btn"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
