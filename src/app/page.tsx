import React from 'react';
import "./landing.scss";

const Home = () => {
  return (
    <div className="landing-container">
      <div className="book-container">
        <img src="/landing/book.png" />
        <img src="/landing/corner_book_purple.png"/>
        <img src="/landing/corner_paper.png"/>
      </div>
    </div>
  );
}

export default Home;