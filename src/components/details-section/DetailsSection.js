import React, { useState, useEffect } from 'react';
import './detailsSection.css';
import { useParams } from 'react-router-dom';
import { BookData } from '../../utils/BookData';

const DetailsSection = () => {
  const { id } = useParams();
  const [bookData, setBookdata] = useState({});
  useEffect(() => {
    let newData = BookData.filter((book) => book.id == id);
    setBookdata(newData[0]);
  }, []);

  return (
    <section className="detail-section-container">
      <div className="container">
        <div className="flex-container">
          <div className="book-image-container">
            <img src={bookData.book_url} alt="img1" />
          </div>
          <div className="book-detail-container">
            <h2>{bookData.book_name}</h2>
            <p className="text-primary">{bookData.author_name}</p>
            <p className="book-description">{bookData.book_description}</p>
            <p>
              <b>Language</b>: {bookData.language}
            </p>
            <p>
              <b>BookLength</b>: {bookData.print_length}
            </p>
            <h3>&#8377;{bookData.price}</h3>

            <a href="#" className="button-primary">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
