import React, { useState, useRef, useEffect } from 'react';
import myImage from './images/1.png';

const Books = () => {
  const [showScrollbar, setShowScrollbar] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setShowScrollbar(container.scrollWidth > container.clientWidth);
    }
  }, []);

  const books = [
    {
      id: 1,
      title: 'Title of the book',
      image: <img src={myImage} alt="1.png" />, 
    },
    {
      id: 2,
      title: 'Title of the book',
      image: <img src={myImage} alt="1.png" />, 
    },
    {
      id: 3,
      title: 'Title of the book',
      image: <img src={myImage} alt="1.png" />,
    },
    {
      id: 4,
      title: 'Title of the book',
      image: <img src={myImage} alt="1.png" />, 
    },
    {
      id: 5,
      title: 'Title of the book',
      image: <img src={myImage} alt="1.png" />, 
    },
    {
      id: 6,
      title: 'Title of the book',
      image: <img src={myImage} alt="1.png" />, 
    },
    {
      id: 7,
      title: 'Title of the book',
      image: <img src={myImage} alt="1.png" />, 
    },
    {
      id: 8,
      title: 'Title of the book',
      image: <img src={myImage} alt="1.png" />, 
    },
    {
      id: 9,
      title: 'Title of the book',
      image: <img src={myImage} alt="1.png" />, 
    },
    {
      id: 10,
      title: 'Title of the book',
      image: <img src={myImage} alt="1.png" />, 
    },
    {
      id: 11,
      title: 'Title of the book',
      image: <img src={myImage} alt="1.png" />,
    },
    {
      id: 12,
      title: 'Title of the book',
      image: <img src={myImage} alt="1.png" />,
    },
    // Add more book objects as needed
    
  ];

  return (
    
    <div className="flex">
      <div className="pd-3 pr-1 rounded-lg">
        <div
          ref={containerRef}
          className={`books-container rounded-lg custom-padding`}>
          <div className="custom-padding bg-white rounded-lg">
            <div className="flex overflow-x-auto whitespace-nowrap p-5">
              {books.map((book) => (
                <div key={book.id} className="inline-block mr-4 mt-3 ml-7 w-30 text-center">
                  {book.image}
                  <p className="">{book.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;