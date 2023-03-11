import React from "react";
// import { useState, useEffect } from "react";
import data from "../data";
// import img from "../image/img2.jpg";
import "../index.css";
export default function Template({ formData, setFormData }) {
  // useEffect(() => console.log(formData));

  return (
    // <div>
    <ul className="template">
      {data.map((item) => {
        return (
          <li className="select-template">
            <img
              src={item.img}
              width="250"
              height="350"
              className="image"
              // style="border-width:2px ;"
            ></img>

            <button
              className="btn btn-primary"
              onClick={() => {
                
                setFormData({ ...formData, id: item.id });
              }}
            >
              Select
            </button>
          </li>
        );
      })}
    </ul>
  );
}
