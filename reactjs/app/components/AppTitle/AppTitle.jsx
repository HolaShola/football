import React from 'react';
import { Link } from 'react-router-dom';
import './AppTitle.css';

const AppTitle = () => (
  <div className="AppTitle">
    <div className="AppTitle_label">
      <p>book_shop</p>
      <Link to="/auth"><p>login</p></Link>
    </div>
  </div>
);

export default AppTitle;
