import React from 'react';
import './books.css';
import Navbar from '../../components/layouts/navbar/Navbar';
import SearchInputForm from '../../components/form/Form';
import ProductListingAll from '../../components/layouts/productlistingall/ProductListingAll';
import Footer from '../../components/layouts/footer/Footer';
const BookPage = () => {
  return (
    <section>
      <Navbar darkTheme={true} />

      <div className="search-container">
        <h2>
          Find the <span className="text-primary">Books</span> that you want
        </h2>
        <SearchInputForm darkTheme={false} />
      </div>

      <ProductListingAll />
      <Footer />
    </section>
  );
};

export default BookPage;
