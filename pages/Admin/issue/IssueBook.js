import React, { useState } from 'react';
import Issue from './Issue';
import OverdueTable from './OverdueTable'; 
import { BiSearch } from 'react-icons/bi';

const IssueBook = () => {
  const [selectedCategory, setSelectedCategory] = useState('Issue');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className='bg-peach h-screen'>
      <div className="flex items-center justify-center w-full">
        <div className="bg-white my-5 px-4 py-2 rounded-xl shadow-lg flex items-center search-container w-full">
          <div className="flex items-center flex-grow">
            <BiSearch className="text-3xl mx-2 my-2 sm:text-4xl" />
            <input
              type="text"
              placeholder="Search..."
              className="py-3 px-4 bg-white rounded-3xl shadow-sm focus:outline-none focus:ring-maroon focus:border-maroon sm:text-base w-full  border border-black"
            />
          </div>
          <select
            id="category"
            name="category"
            className="py-3 px-4 bg-gray rounded-xl shadow-sm focus:outline-none focus:ring-maroon focus:border-maroon sm:text-base ml-10"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="Issue">Issue</option>
            <option value="Overdue">Overdue</option>
          </select>
        </div>
      </div>
      {selectedCategory === 'Issue' ? (
        <Issue />
      ) : (
        <OverdueTable />
      )}
    </div>
  );
};

export default IssueBook;
