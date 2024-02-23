import React from 'react';
import myImage from './images/1.png';


const Books = ({ books }) => {
  return (
      <div className="books-container" style={{ overflowX: 'scroll', whiteSpace: 'nowrap', padding: '5px' }}>
        {books.map((book) => (
          <div key={book.id} className="book-card" style={{ display: 'inline-block', marginRight: '15px', marginTop: '10px', marginLeft: '10px', width: '150px', textAlign: 'center' }}>
            <img
              src={myImage}
              alt={"1.png"}
              className="book-image"
              style={{ maxWidth: '100%', height: 'auto' }}/>
            <p className="book-title">{book.author}</p>
          </div>
        ))}
      </div>
  );
};

export default Books;