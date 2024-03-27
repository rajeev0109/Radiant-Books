import React from 'react';
import './products.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { BookData } from '../../../utils/BookData';

const Products = () => {
  return (
    <div className="product-listing-container">
      <div className="container">
        <h2>
          Here are some <span className="text-primary">books</span> that you
          might like
        </h2>
        <div className="listing-container">
          {BookData.slice(0, 4).map((book) => (
            <ProductListingCard bookData={book} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
