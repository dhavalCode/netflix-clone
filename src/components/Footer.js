import React from "react";

function Footer() {
  return (
    <div
      className="text-center pb-4 text-white"
      style={{ marginTop: "10px", fontSize: "1rem" }}
    >
      Created by {"  "}
      <a
        className="text-white"
        style={{ textDecoration: "none" }}
        target="_blank"
        href="https://github.com/dhavalnpatel"
      >
        Dhaval Patel
      </a>
      <span style={{ fontSize: 14 }}> &#129293;</span>
    </div>
  );
}

export default Footer;
