import React from "react";
import Fetchdata from "./Fetchdata";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-navbar">
        <div className="home-navbar1">
          <p>Home</p>
          <p>Products</p>
          <p>Users</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="home-content">
        <div>
          <h4>User Details</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, est
            accusantium? Eum fugit possimus voluptates magnam sequi assumenda
            commodi, quasi impedit unde architecto minima cupiditate earum
            consectetur quisquam at, dolorum dignissimos maiores inventore ad?
            Numquam possimus deserunt, cupiditate amet sapiente itaque nihil qui
            ratione soluta necessitatibus, voluptas id repudiandae maiores,
            labore doloribus praesentium et accusantium! Inventore voluptatem a
            cupiditate quis ea nulla minima quibusdam quia. Deleniti debitis,
            iure ex omnis reprehenderit sunt aliquid ea! Dicta veniam ad maxime
            voluptate modi architecto fugiat ab eius porro consequuntur iusto
            similique doloribus hic dolore nemo quis provident cum aperiam, vero
            consectetur incidunt neque.
          </p>
        </div>
      </div>
      <Fetchdata />
    </div>
  );
};

export default Home;
