import React from "react";
import { Link } from "react-router-dom";
import './index.css';
function Hello() {
    return (
      <div className="hello-top-container">
        <div className="hello-container">
          <h1 className="hello-title">Hello Driver</h1>
          <p className="hello-content">
            Automated driving, electro-mobility, on-demand mobility and
            connectivity-mobility have never been so fascinating – and
            automobile advancement never so exciting and promising – as it is
            today. With BMW, we would like to create a automobile that brings you closer to
            this fascination and the latest technological trends.
          </p>
          <Link to='login'><button className="hello-btn">Find Your BMW</button></Link>
        </div>
        <div className="hello-img">
          <img src={require("./helloBmw.png")} alt="bmw" />
        </div>
      </div>
    );
  }

export default Hello;