import React from 'react';

const Transaction = ({ transactions }) => {
  return (
    <div
      className="transaction-container relative bg-white rounded-lg p-[300px] pb-[460px]" // Modified padding bottom to 400px
    >
      {transactions.length > 0 ? (
        <ul className="transaction-list">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="transaction-item">
              {transaction.description} - {transaction.amount}
            </li>
          ))}
        </ul>
      ) : (
        <>
          <p
            className="no-transactions absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500"
          >
            Nothing to show
          </p>
          <p
            className="transaction-history-label absolute top-[18px] left-[17%] transform -translate-x-1/2 text-xl"
          >
            Transaction History
          </p>
        </>
      )}
    </div>
  );
};

export default Transaction;