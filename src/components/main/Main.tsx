import TransactionList from "./mainComponents/TransactionList"
import AddTransaction from "./mainComponents/AddTransaction";
import Balance from "./mainComponents/Balance";

const Main: React.FC  = () => {
  return (
      <div className="main">
        <Balance />
        <TransactionList />
        <AddTransaction />
      </div>
  );
}

export default Main;