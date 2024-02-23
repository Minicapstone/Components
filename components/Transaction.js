import React from 'react';

const Transaction = ({ transactions }) => {
  return (
    <div
      className="transaction-container"
      style={{
        padding: '500px 5px 280px',
        backgroundColor: 'white',
        borderRadius: '10px',
        position: 'relative', // Add this line for positioning
      }}
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
            className="no-transactions"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)', // Center horizontally and vertically
              color: 'grey',
            }}
          >
            Nothing to show
          </p>
          <p
            className="transaction-history-label"
            style={{
              position: 'absolute',
              top: '18px', // Adjust the top position as needed
              left: '17%',
              transform: 'translateX(-50%)', // Center horizontally
              fontSize: '18px',
              
            }}
          >
            Transaction History
          </p>
        </>
      )}
    </div>
  );
};

export default Transaction;