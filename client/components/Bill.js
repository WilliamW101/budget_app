import React from 'react';

const Bill = ({ id, item, amount }) => (
  <div className='col s12'>
    <div className='col m5'>
      <div className='center'>
        {item}
      </div>
    </div>
    <div className='col m6'>
    <label htmlFor={`expense-${id}`}> Amount </label>
      <input id={`expense-${id}`} type='float' onClick={() => toggleBill(id)} />
    </div>
    <div style={{ cursor: 'pointer' }} className='col m1' onClick={() => deleteBill(id)}>
       x
    </div>
  </div>
)


export default Bill;
