import React from "react";
// import { useState, useEffect } from "react";
import data from "../data";
// import img from "../image/img2.jpg";
export default function Template({ formData, setFormData }) {
  // useEffect(() => console.log(formData));

  return (
    // <div>
    <span>
      {data.map((item) => {
        return (
          <div>
            {/* <img
              src={item.img}
              width="250"
              height="250"
              // style="border-width:2px ;"
            ></img> */}
            {/* <div></div> */}
            <button
              className="btn btn-primary"
              onClick={() => {
                setFormData({ ...formData, id: item.id });
              }}
            >
              Select
            </button>
          </div>
        );
      })}
    </span>
  );
}
