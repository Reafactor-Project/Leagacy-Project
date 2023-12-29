"use client";
import React, { useState } from "react";
import axios from "axios";
// import Header from "../components/Header";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import Products from "../products/page.jsx";
import SellerProfile from "../seller/sellerprofile/page";
// import "./seller.css";

interface User {
  user_img: string;
  user_phOrEmail: string;
  user_name: string;
  // Add more properties as per your actual User interface
}

const Seller: React.FC<{ user: User }> = ({ user }) => {
  const [show, setShow] = useState<number | null>(null);

  return (
    <>
      <div className="seller-container">
        <div className="divAdmin2">
          <div className="columnAdmin">
            <div className="divAdmin3">
              <div className="seller-nav">
                <div className="divAdmin5">
                  <div className="divAdmin6">
                    <h1 className="seller-title">Seller interface</h1>
                  </div>
                  <div className="divAdmin9">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3789b4da0ff7bbb401a51930e99f1964fd94e4f71c0e259abf6ece542a3cfb2a?"
                      className="imgAdmin"
                    />
                    <div className="divAdmin10">
                      <h2>dashboard</h2>
                    </div>
                  </div>
                  <div className="divAdmin13"></div>
                  <div className="nav-item" onClick={() => setShow(2)}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/463861501310dc27db182a16aedd158acdfc08475c9e0e7c42a9a515a3b9a852?"
                      className="imgAdmin"
                    />
                    <div className="divAdmin16">Profile</div>
                  </div>
                  <div className="nav-item" onClick={() => setShow(1)}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/463861501310dc27db182a16aedd158acdfc08475c9e0e7c42a9a515a3b9a852?"
                      className="imgAdmin"
                    />
                    <div className="divAdmin16">Products</div>
                  </div>
                </div>
                <div className="seller-foot">
                  <img
                    loading="lazy"
                    src={
                      user?.user_img ||
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/463861501310dc27db182a16aedd158acdfc08475c9e0e7c42a9a515a3b9a852?"
                    }
                    className="imgAdmin3"
                  />
                  <div className="divAdmin26">
                    <div className="seller-foot-text">
                      {user?.user_phOrEmail}
                    </div>
                    <div className="divAdmin28">{user?.user_name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {show === 1 ? (
            <Products user={user} />
          ) : show === 2 ? (
            <SellerProfile user={user} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Seller;
