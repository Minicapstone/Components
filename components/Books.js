import React from 'react';
import myImage from './images/1.png';

const Books = ({ books }) => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap p-5">
      {books.map((book) => (
        <div key={book.id} className="inline-block mr-5 mt-5 ml-10 w-40 text-center">
          <img
            src={myImage}
            alt={"1.png"}
            className="max-w-full h-auto"
          />
          <p className="">{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;