import { BudgetAction, ITransaction } from '../types';

export default (state: ITransaction[], action: BudgetAction) => {
    switch (action.type) {
      case "ADD":
        return [action.payload, ...state];
      case "DELETE":
        return state.filter((i) => i.id !== action.payload.id);
      default:
        return state;
    }
  };