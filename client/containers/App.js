import React from 'react';
import AddBill from '../components/AddBill';
import BillList from '../components/BillList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bills: [] }

    this.add = this.add.bind(this);
  }

  componentDidMount() { 
  $.ajax({
    url: '/api/expenses',
    type: 'GET'
  }).done( bills => {
    this.setState({ bills })
  });
}

  add(bill) {
    this.setState({ bills: [bill, ...this.state.bills] })
  }

  render() {
    return(
      <div className='container'>
        <AddBill />
        <BillList />
      </div>
    );
  }
}

export default App;
