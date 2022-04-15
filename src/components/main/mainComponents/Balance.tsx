import React from "react";
import useTransactions from "../../../useTransactions";

const Balance: React.FC = () => {
  const { balance } = useTransactions("Income");
  const balanceColor: string = balance > 0 ? "green" : "red";

  return (
    <div className="balance">
      <div className="balanceTitle">
        Expense Tracker
      </div>
      <div className="title">Balance</div>
      <div style={{fontSize:"30px"}} className={` ${balanceColor}`}>${balance}</div>
    </div>
  );
}

export default Balance;