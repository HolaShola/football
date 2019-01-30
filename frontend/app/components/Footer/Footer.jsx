import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <div className="Footer">
    <div className="footer_label">
      <Link to="/">
        <p>book_shop</p>
      </Link>
    </div>
  </div>
);

export default Footer;
