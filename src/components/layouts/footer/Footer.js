import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="container">
        <h2>If you have any queries, Feel free to ask here</h2>

        <form className="footer-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              id="name"
              type="text"
              className="form-input"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="querry" className="form-label">
              Message:
            </label>
            <textarea
              id="querry"
              className="form-input"
              placeholder="Type your Querry"
            ></textarea>
          </div>

          <div className="form-group">
            <a href="#" className="form-submit">
              Submit
            </a>
          </div>
        </form>
        <p>&copy; 2024 Radiant Books, All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
