import React from 'react';
import Image from 'next/image';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-subscribe">
          <div className='footersubs'>
            <div className="email-input-container">
              <i className="fa-regular fa-paper-plane"></i>
            </div>
          </div>
        </div>
        <div className="footer-support"></div>
        <div className="footer-links"></div>
        <div className="footer-download"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="image-container">
        <Image
          src="https://i.postimg.cc/c1kXk1Kz/Footer.png"
          alt="App"
          className='appStoreeeee'
          width={1483} 
          height={310} 
        />
      </div>
    </footer>
  );
};

export default Footer;
