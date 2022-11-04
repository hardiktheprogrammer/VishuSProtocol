import React from "react";
import signup from "../assets/manage.png";
// import { useEffect, useState } from "react";
// import { Web3Auth } from "@web3auth/web3auth";
export default function Signup() {

  // const Home: NextPage = () => {
  // const handleConnectWallet = async () => {
  //   console.log("Connect Wallet working...")
  // };  
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Manage your Finance</p>
          <h1 className="title">Simplify business, empower merchants</h1>
          <p className="description">
          We'll Provide you with helpful tools to manage your Finances.
          </p>
          <button>Connect Wallet</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img className="manage" src={signup} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

