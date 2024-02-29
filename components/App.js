import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown, faCaretUp, faFileExcel, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const IssuedBooks = () => {
  const [showList, setShowList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isOverdue, setIsOverdue] = useState(false);

  const handleIssuedButtonClick = () => {
    setShowList(!showList);
    setIsOverdue(!isOverdue);
  };

  const handleIssueBookButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-peach min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="w-2/3 bg-white p-4 rounded-md shadow-md mt-4">
            <div className="flex items-center">
              <div
                style={{
                  padding: '8px',
                  backgroundColor: 'white',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                }}
                className="hover:bg-gray-100 transform hover:scale-105"
              >
                <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
              </div>
              <input
                type="text"
                id="search-input"
                placeholder="Search books..."
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
              <button
                id="issued-button"
                className="ml-2 p-2 bg-white rounded-md border border-gray-300 flex items-center"
                onClick={handleIssuedButtonClick}
              >
                {isOverdue ? 'Overdue' : 'Issued'}
                {showList ? (
                  <FontAwesomeIcon icon={faCaretUp} className="ml-2" />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
                )}
              </button>
            </div>
          </div>

          {showModal && (
  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
        &#8203;
      </span>

      <div className="inline-block align-bottom bg-peach rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-peach p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">Issue Book</h1>
          
          {/* Book Title Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="book-title">
              Book Title
            </label>
            <input
              type="text"
              id="book-title"
              className="border rounded-md p-2 w-full"
              placeholder="Enter book title"
            />
          </div>

          {/* Student Number and Issued Date Inputs */}
          <div className="mb-4 flex justify-between">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="student-number">
                Student Number
              </label>
              <input
                type="text"
                id="student-number"
                className="border rounded-md p-2 w-full"
                placeholder="Enter student number"
              />
            </div>

            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="issued-date">
                Issued Date
              </label>
              <input
                type="date"
                id="issued-date"
                className="border rounded-md p-2 w-full"
              />
            </div>
          </div>

          {/* DDC ID and Return Date Inputs */}
          <div className="mb-4 flex justify-between">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ddc-id">
                DDC ID
              </label>
              <input
                type="text"
                id="ddc-id"
                className="border rounded-md p-2 w-full"
                placeholder="Enter DDC ID"
              />
            </div>

            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="return-date">
                Return Date
              </label>
              <input
                type="date"
                id="return-date"
                className="border rounded-md p-2 w-full"
              />
            </div>
          </div>

          {/* Close Button */}
          <div className="text-center mt-8">
            <button
              onClick={closeModal}
              className="bg-maroon text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


          <div className="w-2/3 bg-white p-4 mt-4 rounded-md shadow-md overflow-x-auto h-screen">
            <h1 className="text-4xl font-bold mb-4">{isOverdue ? 'Overdue' : 'Issued'} Books</h1>

            <div className="flex justify-between mb-4">
              <div></div>
              {!isOverdue && (
                <button
                  className="ml-2 p-2 bg-white justify-end rounded-md border border-gray-300 flex items-center hover:bg-blue"
                  onClick={handleIssueBookButtonClick}
                >
                  Issue Book
                </button>
              )}
            </div>

            <div className="table-container min-h-90 overflow-auto">
  <table className="w-full border-collapse table-fixed">
    <thead>
      <tr className="border-b">
        <th className="p-2 text-center">Student Number</th>
        <th className="p-2 text-center">DDC ID</th>
        <th className="p-2 text-center">Book Title</th>
        <th className="p-2 text-center">{isOverdue ? 'Status' : 'Issued Date'}</th>
        <th className="p-2 text-center">{isOverdue ? 'Reason' : 'Return Date'}</th>
        <th className="p-2 text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="p-4 text-center">12345</td>
        <td className="p-2 text-center">DDC123</td>
        <td className="p-2 text-center">Introduction to React</td>
        <td className="p-2 text-center">2022-03-01</td>
        <td className="p-2 text-center">2022-03-15</td>
        <td className="p-2 flex items-center justify-center">
          <button
            className="focus:outline-none cursor-pointer"
            onClick={() => {
              console.log('Button clicked');
            }}
          >
            <FontAwesomeIcon icon={faEllipsisH} className="text-gray-500" />
          </button>
        </td>
      </tr>
      {/* Add more rows as needed */}
    </tbody>
  </table>
</div>
          </div>

          <div className="fixed bottom-0 right-0 m-4">
            <button className="p-2 bg-maroon text-white rounded-md border border-gray-300 flex items-center hover:bg-blue">
              <FontAwesomeIcon icon={faFileExcel} className="mr-2" />
              Export Spreadsheets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuedBooks;
