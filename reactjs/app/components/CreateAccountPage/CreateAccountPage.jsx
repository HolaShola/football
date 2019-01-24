import React from 'react';
import './CreateAccountPage.css';

const CreateAccountPage = () => (
  <div className="account">
    <form action="">
      <div className="account_firstname">
        <input placeholder="First Name" />
      </div>
      <div className="account_secondname">
        <input placeholder="Second Name" />
      </div>
      <div className="account_email">
        <input placeholder="Email" />
      </div>
      <div className="account_pass">
        <input placeholder="Password" />
      </div>
      <div className="account_in">
        <input type="submit" value="Create account" />
      </div>
    </form>
  </div>
);

export default CreateAccountPage;
