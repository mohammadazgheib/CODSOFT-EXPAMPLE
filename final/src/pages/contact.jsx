import React from "react";

export const Contact = () => {
  const containerStyle = {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "150px auto",
    textAlign: "center",
  };

  const infoStyle = {
    margin: "5px 0",
    fontSize: "16px",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us via the following contact details:</p>
      <div style={infoStyle}>
        <p>Email: mohammadazgheib@gmail.com</p>
        <p>Phone: (+961) 81772405</p>
        <p>Address: Prince St, Beirut , Lebanon</p>
      </div>
    </div>
  );
};
