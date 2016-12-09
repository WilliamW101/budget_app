import React from 'react';

class AddBill extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let bill = this.refs.bill;

    $.ajax({
      url: '/api/expenses',
      type: 'POST',
      data: { expense: { name: bill.value } }
    }).done( bill => {
      this.props.add(bill);
      bill.value = null;
    }).fail( msg => {
      // Do something here
    });
  }

  render() {
    return(
      <div className='center'>
        <form onSubmit={this.handleSubmit}>
          <label> Add Bill </label>
          <input ref='bill' />
        </form>
      </div>
    );
  }
}

export default AddBill;
