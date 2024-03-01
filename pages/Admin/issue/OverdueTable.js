import React, { useState } from 'react';
import {BsThreeDots} from "react-icons/bs";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";

const OverdueTable = ({ onDelete }) => {
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);

  // Sample data for demonstration
  const [overdueBooks] = useState([
    {
      studentNumber: '123456',
      name: 'John Doe',
      docId: 'DDC001',
      title: 'Introduction to React',
      status: 'Overdue'
    },
    {
      studentNumber: '654321',
      name: 'Jane Smith',
      docId: 'DDC002',
      title: 'JavaScript Basics',
      status: 'Overdue'
    },
    {
      studentNumber: '987654',
      name: 'Alice Johnson',
      docId: 'DDC003',
      title: 'HTML Essentials',
      status: 'Overdue'
    },
    {
      studentNumber: '246813',
      name: 'Bob Johnson',
      docId: 'DDC004',
      title: 'CSS Mastery',
      status: 'Overdue'
    }
  ]);

  const handleOpenDeleteConfirmation = (index) => {
    setIsDeleteConfirmationOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setIsDeleteConfirmationOpen(false);
  };
  // Function to handle export action
  const handleExport = () => {
    alert('Succesfully exported as Spreadsheet...');
  };


  return (
    <div className="px-0">
      <table className="bg-white w-full my-5 rounded-2xl px-2 py-2 shadow-xl overflow-y-auto">
        <thead>
          <h2 className="text-2xl text-black font-bold px-6 pt-6">Overdue Books</h2>
          <tr className="text-left text-black text-xl">
            <th colSpan="6" className="px-5 py-4 text-left"></th>
          </tr>
          <tr className="text-left text-black text-xl border-b border-gray">
            <th className="px-5 py-4">Student No.</th>
            <th className="px-5 py-4">Name</th>
            <th className="px-5 py-4">DDC ID</th>
            <th className="px-5 py-4">Book Title</th>
            <th className="px-5 py-4">Status</th>
            <th className="px-5 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {overdueBooks && overdueBooks.map((book, index) => (
            <tr key={index} className="border-b border-gray">
              <td className="px-5 py-2">{book.studentNumber}</td>
              <td className="px-5 py-2">{book.name}</td>
              <td className="px-5 py-2">{book.docId}</td>
              <td className="px-5 py-2">{book.title}</td>
              <td className="px-5 py-2">{book.status}</td>
              <td className="px-5 relative">
                <button
                  className="text-black text-center cursor-pointer text-4xl hover:text-red active:bg-red"
                  onClick={() => handleOpenDeleteConfirmation(index)}
                >
                  <BsThreeDots />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Delete confirmation */}
      {isDeleteConfirmationOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center drop-shadow-md">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <div className="relative bg-peach rounded-lg p-8 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Confirm Delete</h2>
            <p className="mb-4 text-center">Are you sure you want to delete this item?</p>
            <div className="flex justify-center">
              <button
                onClick={closeDeleteConfirmation}
                className="bg-gray hover:bg-red text-black font-bold py-2 px-4 rounded mr-4"
              >
                Delete
              </button>
              <button
                onClick={closeDeleteConfirmation}
                className="bg-gray hover:bg-gray hover:bg-white text-gray-800 font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={handleExport}
        className='bg-maroon text-white text-sm py-2 px-4 flex items-center rounded-full absolute bottom-8 right-8 cursor-pointer'>
        <BsFileEarmarkSpreadsheetFill className="mr-1" />Export as Spreadsheet
      </button>
    </div>
  );
};

export default OverdueTable;
