import React from 'react';

export const Pagination = ({ pageNumbers, paginate }) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
    >
      {pageNumbers.map((number) => (
        <button onClick={() => paginate(number)}>{number}</button>
      ))}
    </div>
  );
};
