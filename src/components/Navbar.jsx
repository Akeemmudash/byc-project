import React, { useState } from "react";
import searchIcon from "../assets/icons/search.png";
import heartIcon from "../assets/icons/heart.png";
import profileIcon from "../assets/icons/profile.png";
import cartIcon from "../assets/icons/cart.png";

const InputField = () => {
  return (
    <div className="searchBar">
      <input
        type="search"
        className="border-0 outline-0"
        placeholder="Search products"
      />
      <button className="btn">
        <img src={searchIcon} alt="" />
      </button>
    </div>
  );
};

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="nav-body position-relative">
          <ul className="nav-list d-flex justify-content-between align-items-center list-unstyled">
            <div className="d-flex">
              <li>
                <a href="">Shop Products</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </div>
            <div className="center_item">
              {showSearch ? (
                <InputField />
              ) : (
                <img
                  src="/logo.png"
                  alt="logo"
                  style={{ width: 72, aspectRatio: 218 / 132 }}
                  className="object-fit-contain"
                />
              )}
            </div>
            <div className="d-flex align-items-center">
              <li>
                <a href="" className="">
                  About us{" "}
                </a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <div className="icon-buttons">
                <button
                  className="btn"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <img src={searchIcon} alt="" />
                </button>
                <button className="btn">
                  <img src={heartIcon} alt="" />
                </button>
                <button className="btn">
                  <img src={profileIcon} alt="" />
                </button>
                <button className="btn">
                  <img src={cartIcon} alt="" />
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
