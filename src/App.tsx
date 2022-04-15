import React from 'react';
import './styles/App.css';
import { Provider } from './context/BudgetContext';
import Main from './components/main/Main';
import IncomeExpenses from './components/incomeExpenseDetails/IncomeExpenses';

function App() {
  return (
    <Provider>
      <div className='app'>
      <IncomeExpenses title='Income' />
       <Main />
      <IncomeExpenses title="Expense" />
    </div>
    </Provider>
  );
}

export default App;
