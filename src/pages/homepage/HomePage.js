import React from 'react';
import Showcase from '../../components/layouts/showcase/Showcase';
import Products from '../../components/layouts/products/Products';
import Footer from '../../components/layouts/footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Showcase />
      <Products />
      <Footer />
    </div>
  );
};

export default HomePage;
