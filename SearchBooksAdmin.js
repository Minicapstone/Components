import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaRegFilePdf } from "react-icons/fa";

const AdminSearchBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Default");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState('Books');

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };
  

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  const categories = [
    "Default",
    "History and Geography",
    "Literature",
    "Psychology and Philosophy",
    "Natural Sciences",
  ];

  const bookData = [
    {
      ddcId: 909,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      category: "History and Geography",
      status: "Available",
    },
    {
      ddcId: 813.5,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Literature",
      status: "Available",
    },
    {
      ddcId: 158.1,
      title: "The Power of Habit: Why We Do What We Do in Life and Business",
      author: "Charles Duhigg",
      category: "Psychology and Philosophy",
      status: "Not Available",
    },
    {
      ddcId: 813.54,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      category: "Literature",
      status: "Not Available",
    },
    {
      ddcId: 576.8,
      title: "The Origin of Species",
      author: "Charles Darwin",
      category: "Natural Sciences",
      status: "Available",
    },
    
  ];

  const [issuedBooks] = useState([
    {
      studentNumber: "123456",
      ddcId: "789",
      title: "Sample Book 1",
      issueDate: "2024-03-07",
      returnDate: "2024-03-21",
    },
    {
      studentNumber: "654321",
      ddcId: "456",
      title: "Sample Book 2",
      issueDate: "2024-03-10",
      returnDate: "2024-03-24",
    },
    {
      studentNumber: "987654",
      ddcId: "123",
      title: "Sample Book 3",
      issueDate: "2024-03-14",
      returnDate: "2024-03-28",
    }
  ]);

  const [overdueBooks] = useState([
    {
      studentNumber: "123456",
      name: "John Doe",
      docId: "DDC001",
      title: "Introduction to React",
      status: "Overdue",
    },
    {
      studentNumber: "654321",
      name: "Jane Smith",
      docId: "DDC002",
      title: "JavaScript Basics",
      status: "Overdue",
    },
    {
      studentNumber: "987654",
      name: "Alice Johnson",
      docId: "DDC003",
      title: "HTML Essentials",
      status: "Overdue",
    },
    {
      studentNumber: "246813",
      name: "Bob Johnson",
      docId: "DDC004",
      title: "CSS Mastery",
      status: "Overdue",
    },
  ]);

  const filteredData = bookData.filter((item) =>
    selectedCategory === "Default" || item.category === selectedCategory
      ? [item.title, item.author].some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      : false
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Transaction Added");
    setIsModalOpen(false);
  };

  const handleExport = () => {
    alert("Successfully exported as Spreadsheet...");
  };

  return (
    <div className="px-3 flex-1">
    <div className="bg-white my-3 px-3 py-2 rounded-xl flex justify-between search-container">
      <div className="flex items-center w-full">
        <BiSearch className="text-3xl mx-2 my-2 sm:text-4xl" />

        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-3 border border-opacity-25 rounded-3xl focus:outline-none focus:ring-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

      </div>

        <select
          id="table"
          name="table"
          className="w-fit py-3 px-4 xl:ml-60 md:ml-32 bg-gray rounded-xl shadow-sm focus:outline-none focus:ring-maroon focus:border-maroon sm:text-sm"
          value={selectedTable}
          onChange={handleTableChange}>
          <option value="Books">Books</option>
          <option value="Issue">Issue</option>
          <option value="Overdue">Overdue</option>
        </select>
      </div>

      {selectedTable === 'Books' && (
  <div className="admin-table overflow-y-auto rounded-xl custom-scrollbar">
    <table className="bg-white w-full rounded-2xl px-2 py-2 shadow-xl">
      <thead className="sticky top-0 bg-white">
        <tr className="pb-2">
          <th colSpan="10">
            <div className="flex justify-between items-center px-5 py-4">
              <h2 className="text-xl text-black">Book List</h2>
              {}
              <select
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-black">
                {categories.map((category, index) => (
              <option key={index} value={category} onClick={() => handleCategoryChange(category)}>
            {category}
          </option>
            ))}
            </select>
            </div>
          </th>
        </tr>
        <tr className="text-left text-black text-base border-b border-gray">
          <th className="px-3 py-4">DDC ID</th>
          <th className="px-3 py-4">Title of the Book</th>
          <th className="px-3 py-4">Author</th>
          <th className="px-3 py-4">Category</th>
          <th className="px-3 py-4 text-center">Status</th>
          <th className="px-3 py-4">Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item) => (
          <tr key={item.ddcId} className="border-b border-gray text-sm">
            <td className="px-2 py-2">{item.ddcId}</td>
            <td className="px-2 py-2">{item.title}</td>
            <td className="px-2 py-2">{item.author}</td>
            <td className="px-2 py-2">{item.category}</td>
            <td
              className={`px-1 py-2 text-center ${
                item.status === "Available" ? "bg-green" : "bg-red"
              } m-2 inline-block text-center rounded-xl text-sm w-3/4`}
            >
              {item.status}
            </td>
            <td className="px-5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-black hover:bg-maroon hover:text-white font-bold border border-black shadow-md py-2 px-4 rounded"
              >
                Issue
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


{selectedTable === 'Issue' && (
  <div className="admin-table overflow-y-auto rounded-xl custom-scrollbar">
    <table className="bg-white w-full rounded-2xl px-2 py-2 shadow-xl">
      <thead className="sticky top-0 bg-white">
        <tr className="pb-2">
          <th colSpan="10">
            <div className="flex justify-between items-center px-5 py-4">
              <h2 className="text-xl text-black">Book Issued</h2>
              <button
                onClick={handleExport}
                className="bg-maroon text-white text-sm py-2 px-4 flex items-center rounded-full cursor-pointer">
                <FaRegFilePdf className="mr-1" />
                Export as PDF
              </button>
            </div>
          </th>
        </tr>

        <tr className="text-left text-black text-lg border-b border-gray">
          <th className="px-5 py-4">Student No.</th>
          <th className="px-5 py-4">DDC ID</th>
          <th className="px-5 py-4">Title</th>
          <th className="px-5 py-4">Issue Date</th>
          <th className="px-5 py-4">Return Date</th>
          <th className="px-5 py-4">Action</th>
        </tr>
      </thead>

      <tbody>
        {issuedBooks.map((issue, index) => (
          <tr key={index} className="border-b border-gray text-sm">
            <td className="px-5 py-2">{issue.studentNumber}</td>
            <td className="px-5 py-2">{issue.docId}</td>
            <td className="px-5 py-2">{issue.title}</td>
            <td className="px-5 py-2">{issue.issueDate}</td>
            <td className="px-5 py-2">{issue.returnDate}</td>
            <td className="px-5">
              <button className="text-sm text-black bg-white border p-2 my-2 px-4 rounded-lg hover:shadow-xl hover:bg-green hover:text-black">Mark as Returned</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

{selectedTable === 'Overdue' && (
  <div className="admin-table overflow-y-auto rounded-xl custom-scrollbar">
    <table className="bg-white w-full rounded-2xl px-2 py-2 shadow-xl">
      <thead className="sticky top-0 bg-white">
        <tr className="pb-2">
          <th colSpan="10">
            <div className="flex justify-between items-center px-5 py-4">
              <h2 className="text-xl text-black">Overdue books</h2>
              <button
                onClick={handleExport}
                className="bg-maroon text-white text-sm py-2 px-4 flex items-center rounded-full cursor-pointer">
                <FaRegFilePdf className="mr-1" />
                Export as PDF
              </button>
            </div>
          </th>
        </tr>
        <tr className="text-left text-black text-lg border-b border-gray">
          <th className="px-5 py-4">Student No.</th>
          <th className="px-5 py-4">Name</th>
          <th className="px-5 py-4">DDC ID</th>
          <th className="px-5 py-4">Book Title</th>
          <th className="px-5 py-4">Status</th>
          <th className="px-5 py-4">Action</th>
        </tr>
      </thead>
      <tbody>
        {overdueBooks.map((overdue, index) => (
          <tr key={index} className="border-b border-gray text-sm">
            <td className="px-5 py-2">{overdue.studentNumber}</td>
            <td className="px-5 py-2">{overdue.name}</td>
            <td className="px-5 py-2">{overdue.docId}</td>
            <td className="px-5 py-2">{overdue.title}</td>
            <td className="px-5 py-2">{overdue.status}</td>
            <td className="px-5">
              <button className="text-sm text-black bg-white border p-2 my-2 px-4 rounded-lg hover:shadow-xl hover:bg-green hover:text-black">Mark as Returned</button>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto drop-shadow-md">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <div className="relative bg-peach rounded-lg p-8 max-w-lg w-full">
              <h2 className="text-2xl font-bold mb-4">Issue Book</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="studentNumber" className="block text-gray-700 font-semibold mb-2">
                      Student Number:
                    </label>
                    <input
                      type="text"
                      name="studentNumber"
                      id="studentNumber"
                      placeholder="12345678"
                      className="w-full px-3 py-2 shadow-md rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="ddcId" className="block text-gray-700 font-semibold mb-2">
                      DDC ID:
                    </label>
                    <input
                      type="text"
                      name="ddcId"
                      id="ddcId"
                      placeholder="1234"
                      className="w-full px-3 py-2 shadow-md rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                      Book Title:
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Superbook"     
                      className="w-full px-3 py-2 shadow-md rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="issueDate" className="block text-gray-700 font-semibold mb-2">
                      Issue Date:
                    </label>
                    <input
                      type="date"
                      name="issueDate"
                      id="issueDate"
                      className="w-full px-3 py-2 shadow-md rounded-md  focus:outline-none focus:
                      ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="returnDate" className="block text-gray-700 font-semibold mb-2">
                      Return Date:
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      id="returnDate"
                      className="w-full px-3 py-2 shadow-md rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handleSubmit} 
                    className="bg-maroon hover:bg-blue hover:text-black text-white font-bold py-2 px-4 mr-1 border rounded-md shadow-sm mt-2"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)} 
                    className="bg-white hover:bg-red hover:text-black text-black font-bold py-2 px-4 ml-1 border rounded-md shadow-sm mt-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSearchBooks;
