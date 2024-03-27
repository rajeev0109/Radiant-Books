import React from 'react';
import './productlistingall.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { BookData } from '../../../utils/BookData';

const ProductListingAll = () => {
  console.log(BookData);
  return (
    <section className="product-listing-all-container">
      <div className="container">
        <div className="grid-container">
          {BookData.map((book) => {
            return (
              <div className="grid-items">
                <ProductListingCard bookData={book} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductListingAll;
