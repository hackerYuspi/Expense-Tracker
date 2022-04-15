import { useContext, useEffect, useState } from "react";
import { BudgetContext } from "../../../context/BudgetContext";
import { AiFillDelete } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ITransaction } from "../../../types";


const TransactionList: React.FC = () => {
  const { state, dispatch } = useContext(BudgetContext);

	const [filteredTransactions, setfilteredTransactions] = useState(state || []);

	useEffect(() => {
		setfilteredTransactions(state);
	}, [state]);

	const handleChange = (event: { target: { value: string; }; }) => {
		const searchResults = state.filter((filteredTransactions) =>
			filteredTransactions.category.toLowerCase().includes(event.target.value) 
      || filteredTransactions.category.toUpperCase().includes(event.target.value) 
      || filteredTransactions.date.includes(event.target.value) 
		);
        console.log(filteredTransactions);
		setfilteredTransactions(searchResults);
        console.log(filteredTransactions);
	};

  const deleteHandler: (transaction: ITransaction) => void = (transaction) => {
    dispatch({
      type: "DELETE",
      payload: transaction,
    });
  };

  return (
      <>
    <input type="text" placeholder="Type to search.." onChange={handleChange}></input>
    <div className="transactionList">
      {filteredTransactions.map((i) => (
        <div key={i.id}>
          <div className="list">
            <div className="transactionDetail">
              {i.type === "Income" ? (
                <FaPlus className="green" />
              ) : (
                <FaMinus className="red" />
              )}
              <span className="">${i.amount}</span>
              <span className="">{i.category}</span>
              <span className="">{i.date}</span>
            </div>
            <div className="delete">
              <AiFillDelete
                className="deleteIcon"
                onClick={() => deleteHandler(i)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default TransactionList;