import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import React from "react";
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
                <i class="la la-envelope mr-1"></i>
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
                <i class="la la-envelope mr-1"></i>
                <p>shazem550@gmail.com</p>
              </a>
            </div>
          </div>
          <button
            className="button-sign"
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            تسجيل الدخول
          </button>
        </div>
        <div className="hr-top-header"></div>
        <div className="headers-two">
          <img src={Logo} alt="Logo" />
        </div>
      </header>
    </div>
  );
}

export default Header;
