import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import bankStore from './bankStore';
import constants from './constants';

class BankApp extends Component {
  handleDeposit() {
    this.props.onDeposit(this.refs.amount.value);
    this.refs.amount.value = '';
  }

  handleWithdraw() {
    this.props.onWithdraw(this.refs.amount.value);
    this.refs.amount.value = '';
  }

  render() {
    return (
      <div>
        <header>
          <img src="//www.pro-react.com/logos/redux-bank.svg" width="150" />Redux Bank 
        </header>
        <h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
        <div className="atm">
          <input type="text" placeholder="Enter Ammount" ref="amount" /> <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button> <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
        </div>
      </div>
    );
  }
}

BankApp.propTypes = {
  balance: PropTypes.number,
  onDeposit: PropTypes.func,
  onWithdraw: PropTypes.func
};

class BankAppContainer extends Component {
  componentDidMount() {
    this.unsubscribe = bankStore.subscribe(() => 
      this.setState({
        balance: bankStore.getState().balance
      })
    );
  }

  componentWillUnMount() {
    this.unsubscribe();
  }

  render() {
    return (
      <BankApp
        balance={bankStore.getState().balance}
        onDeposit={(amount) => bankStore.dispatch(
            {type: constants.DEPOSITED_INTO_ACCOUNT, amount: amount}
          )} 
        onWithdraw={(amount) => bankStore.dispatch(
            {type: constants.WITHDREW_FROM_ACCOUNT, amount: amount}
          )} />
    )
  }
}

render(<BankAppContainer />, document.getElementById('root'));