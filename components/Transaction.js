import React from 'react';

const Transaction = ({ transactions }) => {
  return (
    <div className="transaction-container relative bg-white rounded-lg p-8" style={{ height: '240%' }}>
      {transactions.length > 0 ? (
        <ul className="transaction-list">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="transaction-item">
              {transaction.description} - {transaction.amount}
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col h-full">
        <p className="text-xl">Transaction History</p>

        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-gray-500">Nothing to show</p>
        </div>
        </div>
      )}
    </div>
  );
};

export default Transaction;