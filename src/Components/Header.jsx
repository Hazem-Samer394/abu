import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo1.png";

function Header() {
  return (
    <div>
      <header className="headers-one">
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="head"
        >
          <div style={{ display: "flex" }}>
            <div>
              <a
                href="#"
                style={{
                  display: "flex",
                  gap: "6px",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                <i className="la la-envelope mr-1"></i>
                <p>(123) 123-456</p>
              </a>
            </div>
            <div>
              <a
                href="#"
                style={{
                  display: "flex",
                  gap: "6px",
                  alignItems: "center",
                  marginRight: "16px",
                }}
              >
                <i className="la la-envelope mr-1"></i>
                <p>shazem550@gmail.com</p>
              </a>
            </div>
          </div>
          <button
            className="button-sign"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            تسجيل الدخول
          </button>
        </div>
        <div className="hr-top-header"></div>
        <div
          className="headers-two"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img src={Logo} alt="Logo" className="img" />
            {/* <div style={{ display: "flex" }}> */}
            <nav
              style={{
                gap: "10px",
                margin: "10px",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <ul style={{ listStyle: "none", display: "flex", gap: "34px" }}>
                <li>
                  <Link
                    to="/home"
                    style={{ marginRight: "15px" }}
                    className="link-nav"
                  >
                    الصفحة الرئيسية
                    <i className="la la-angle-down"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/booking"
                    style={{ marginLeft: "5pc" }}
                    className="link-nav"
                  >
                    استعلام عن الحجز
                    <i className="la la-angle-down"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <button
            className="button-sign but"
            style={{ justifyContent: "space-between" }}
          >
            كن وكيل محلي
          </button>
        </div>
        {/* </div> */}
      </header>
    </div>
  );
}

export default Header;
