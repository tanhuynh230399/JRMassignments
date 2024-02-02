import React from "react";

const MySocialPage = ({ header, status }) => (
  <div>
    {/* <img
      src={URL.createObjectURL(image)}
      alt="selected"
      style={{
        width: "300px",
        height: "200px",
        objectFit: "contain",
      }}
    /> */}
    <h1>{header}</h1>
    <p>{status}</p>
  </div>
);

export default MySocialPage;
