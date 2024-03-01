import React from 'react';

const Transaction = ({ transactions }) => {
  return (
    <div className="transaction-container relative bg-white rounded-lg p-8">
      <div className="flex flex-col">
        <p className="text-xl ">Transaction History</p>
        <div className="transaction-list">
         
            <p className="text-gray-500 text-center py-80">Nothing to show</p>
        
        </div>
      </div>
    </div>
  );
};

export default Transaction;