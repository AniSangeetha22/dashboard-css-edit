import React, { useState, useEffect } from "react";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import LoginContext from "../context/LoginContext";
import "./customers.css";
import api from "../api/allProductsapi";

export const Customers = () => {
  const { products } = useContext(ProductContext);
  const { usersdata, setUser, localuser, logout } = useContext(LoginContext);
  console.log(usersdata);
  const [usersdata1, setUsersdata1] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await api.get("/users");
      console.log(response.data);

      setUsersdata1(response.data);
    } catch (err) {
      if (err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="customers-main">
      <h3>Customers List</h3>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usersdata1.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
