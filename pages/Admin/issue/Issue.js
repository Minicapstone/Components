import React, { useState } from "react";
import {BsThreeDots } from "react-icons/bs";


const UserListSuperAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [formData, setFormData] = useState({
    studentNumber: "",
    docId: "",
    title: "",
    issueDate: "",
    returnDate: ""
  });
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIssuedBooks([formData, ...issuedBooks]);
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = () => {
    if (deleteIndex !== null) {
      setIssuedBooks(prevBooks => prevBooks.filter((_, i) => i !== deleteIndex));
      setDeleteIndex(null);
    }
    closeDeleteConfirmation();
  };

  const handleOpenDeleteConfirmation = (index) => {
    setDeleteIndex(index);
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
    <div className="px-3">
 <table className="bg-white w-full my-5 rounded-2xl px-2 py-2 shadow-xl overflow-y-auto">
        <thead>
            <tr className="pb-2">
              <th colSpan="10">
                <div className="flex justify-between items-center px-5 py-4">
                  <h2 className="text-2xl text-black">Book Issued</h2>
                <button
                  className="bg-white text-black border rounded-xl p-3 hover:bg-maroon hover:text-white"
                  onClick={openModal}
                >
                  Issue Book
                </button>
              </div>
            </th>
          </tr>

          <tr className="text-left text-black text-xl border-b border-gray">
            <th className="px-5 py-4">Student No.</th>
            <th className="px-5 py-4">DDC ID</th>
            <th className="px-5 py-4">Title</th>
            <th className="px-5 py-4">Issue Date</th>
            <th className="px-5 py-4">Return Date</th>
            <th className="px-5 py-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {issuedBooks.map((book, index) => (
            <tr key={index} className="border-b border-gray">
              <td className="px-5 py-2">{book.studentNumber}</td>
              <td className="px-5 py-2">{book.docId}</td>
              <td className="px-5 py-2">{book.title}</td>
              <td className="px-5 py-2">{book.issueDate}</td>
              <td className="px-5 py-2">{book.returnDate}</td>
              <td className="px-5 relative">
                <button
                  className="text-black text-center cursor-pointer text-4xl hover:text-red active:bg-red"
                  onClick={() => handleOpenDeleteConfirmation(index)}
                >
                  <BsThreeDots /> {}
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
          <h2 className="text-2xl font-bold mb-4 text-center">Action</h2>
            <p className="mb-4 text-center">Do you want to modify this row?</p>
            <div className="flex justify-center">
              <button
                onClick={handleDelete}
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

      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto drop-shadow-md">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <div className="relative bg-peach rounded-lg p-8 max-w-lg w-full">
              <span className="absolute top-0 right-0 cursor-pointer text-3xl pr-2" onClick={closeModal}>
                &times;
              </span>
              <h2 className="text-2xl font-bold mb-4">Issue Book</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="studentNumber" className="block text-gray-700 font-bold mb-2">
                      Student Number:
                    </label>
                    <input
                      type="text"
                      name="studentNumber"
                      id="studentNumber"
                      value={formData.studentNumber}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="docId" className="block text-gray-700 font-bold mb-2">
                      DDC ID:
                    </label>
                    <input
                      type="text"
                      name="docId"
                      id="docId"
                      value={formData.docId}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                      Book Title:
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="issueDate" className="block text-gray-700 font-bold mb-2">
                      Issue Date:
                    </label>
                    <input
                      type="date"
                      name="issueDate"
                      id="issueDate"
                      value={formData.issueDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="returnDate" className="block text-gray-700 font-bold mb-2">
                      Return Date:
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      id="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-maroon hover:bg-blue hover:text-black text-white font-bold py-2 px-4 border rounded-md shadow-sm mt-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={handleExport}
        className="bg-maroon text-white py-3 px-6 rounded-full absolute bottom-8 right-8 cursor-pointer"
      >
        Export as Spreadsheet
      </button>
    </div>
  );
};

export default UserListSuperAdmin;
