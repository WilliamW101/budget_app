import React from 'react';
import Bill from './Bill';

const BillList = ({ bills }) => {
  let expenses = bills.map( bill => {
    return(
      <Bill
      key={bill.id}
      {...bill}
      />
    )
  });

  return(
    <div className='row'>
      {expenses}
    </div>
  );
}

export default BillList;
