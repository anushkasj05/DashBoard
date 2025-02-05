import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTable, FaUserPlus, FaPenNib } from "react-icons/fa";
import { MdImageSearch, MdSecurityUpdate } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="sidebar-header">
        <div className="logo">
          <img
            src="src/images/ASJUNIVERSITY.png"
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              borderRadius: "50px",
              padding: "5px",
            }}
          />
          <h1>
            A S J <br />
            University
          </h1>
        </div>
        <nav className="sidebar-nav ">
          <ul>
            <li className="active">
              <FaHome
                className="icon"
                style={{ color: "black", fontSize: "x-larger" }}
              />
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "black" }}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <FaPenNib
                className="icon"
                style={{ color: "black", fontSize: "x-larger" }}
              />
              <Link
                to="/insert"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "x-larger",
                }}
                ß
              >
                Insert
              </Link>
            </li>
            <li>
              <FaTable
                className="icon"
                style={{ color: "black", fontSize: "x-larger" }}
              />
              <Link
                to="/display"
                style={{ textDecoration: "none", color: "black" }}
              >
                Display
              </Link>
            </li>
            <li>
              <MdImageSearch
                className="icon"
                style={{ color: "black", fontSize: "x-larger" }}
              />
              <Link
                to="/search"
                style={{ textDecoration: "none", color: "black" }}
              >
                Search
              </Link>
            </li>
            <li>
              <MdSecurityUpdate
                className="icon"
                style={{ color: "black", fontSize: "x-larger" }}
              />
              <Link
                to="/update"
                style={{ textDecoration: "none", color: "black" }}
              >
                Update
              </Link>
            </li>
            <li>
              <FaUserPlus
                className="icon"
                style={{ color: "black", fontSize: "x-larger" }}
              />
              <Link
                to="/logout"
                style={{ textDecoration: "none", color: "black" }}
              >
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
