import React from "react";
import './ECommerceHomePage.css';

const TopHeader: React.FC = () => {
  return (
    <div className="div-2">
      <div className="div-3">
        <div className="div-4">
          <div className="div-5">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF
            50%!
          </div>
          <div className="div-6">ShopNow</div>
        </div>
        <div className="div-7">
          <div className="div-8">English</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c458026ddcb4daaaca9291897ab1b8ab8e65bd1233e48db8bbc95eb90ee3e16?"
            className="img"
            alt="English"
          />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
