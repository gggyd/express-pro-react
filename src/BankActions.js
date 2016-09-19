import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

let BankActions = {
  createAccount() {
    AppDispatcher.dispatch({
      type: bankConstants.CREATE_ACCOUNT,
      ammount: 0
    });
  },
  depositIntoAccount(ammount) {
    AppDispatcher.dispatch({
      type: bankConstants.DEPOSITED_INTO_ACCOUNT,
      ammount: ammount
    });
  },
  withdrawFromAccount(ammount) {
    AppDispatcher.dispatch({
      type: bankConstants.WITHDREW_FROM_ACCOUNT,
      ammount: ammount
    });
  }
};

module.exports = BankActions;