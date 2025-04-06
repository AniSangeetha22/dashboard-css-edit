// import React from 'react'

// export const Products1 = () => {
//   return (
//     <div>Products1</div>
//   )
// }
//-------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import api from "../api/allProductsapi";

import "./Products.css";

export const Products = () => {
  const [products1, setProducts1] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/productItems");
        console.log(response.data);

        setProducts1(response.data);
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

    fetchPosts();
  }, []);
  return (
    <div className="products-main">
      <h3>Products List</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Amount</th>
            <th>TotalNos</th>
            <th>Type</th>
            <th>Image</th>
            <th>Latest</th>
          </tr>
        </thead>
        <tbody>
          {products1.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.des}</td>
              <td>{item.amt}</td>
              <td>{item.totalNos}</td>
              <td>{item.ftype}</td>
              <td>
                <img src={item.pic} alt="" srcSet="" />
              </td>
              <td>{item.latest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
