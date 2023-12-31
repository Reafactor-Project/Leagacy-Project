import React from 'react';
import './topheader.css'
const Header: React.FC = () => {
  return (
    <div className="topheader">
      <div className="centered">
        <div>Summer Sales For All Swim Suits And Free Express Delivery - OFF 50%</div>
        <div className="line" style={{ marginLeft: '22px',display:'flex', }}>Shop Now</div>
      </div>
      <div>English ⌵</div>
    </div>
  );
};

export default Header;
