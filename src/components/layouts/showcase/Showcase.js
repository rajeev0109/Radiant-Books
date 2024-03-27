import React from 'react';
import './showcase.css';
import Navbar from '../navbar/Navbar.js';
import Form from '../../form/Form.js';

const Showcase = () => {
  return (
    <section className="showcase-container">
      <Navbar darkTheme={false} />
      <div className="overlay"></div>
      <div className="showcase-content">
        <h1>
          Best <span className="text-primary">Books</span> Available
        </h1>
        <p>Buy quality books at cheaper price</p>
        <Form darkTheme={true} />
      </div>
    </section>
  );
};
export default Showcase;
