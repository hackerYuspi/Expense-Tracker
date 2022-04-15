import React, { useContext, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { BudgetContext } from "../../../context/BudgetContext";
import { incomeCategories, expenseCategories } from "../../../constants/categories";
import { Category, IFormData, ITransaction } from "../../../types";

const initialState: IFormData = {
    amount: 0,
    category: "",
    type: "Income",
    date: "",
};

const AddTransaction: React.FC = () => {
    const [formData, setFormData] = useState<IFormData>(initialState);
    const { dispatch } = useContext(BudgetContext);

    const selectRef = useRef<HTMLSelectElement>(null);

    const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const transaction: ITransaction = {
            ...formData,
            id: uuid(),
        };

        dispatch({
            type: "ADD",
            payload: transaction,
        });

        setFormData(initialState);
        selectRef.current?.blur();
    };

    const selectedCategories: Category[] =
        formData.type === "Income" ? incomeCategories : expenseCategories;

    return (
        <div>
            <form id="from" onSubmit={(e) => formSubmitHandler(e)}>
                <div className="formComponent">
                    <div className="formValues">
                        <select
                            required
                            name="type"
                            id="type"
                            value={formData.type}
                            onChange={(e) =>
                                setFormData({ ...formData, type: e.target.value })
                            }
                        >
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                    </div>
                    <div className="formValues">
                        <select
                            required
                            ref={selectRef}
                            name="category"
                            id="category"
                            value={formData.category}
                            onChange={(e) =>
                                setFormData({ ...formData, category: e.target.value })
                            }
                        >
                            <option value="" disabled hidden>
                                Category
                            </option>
                            {selectedCategories.map((c) => (
                                <option key={c.type} value={c.type} className="optionList">
                                    {c.type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="formValues">
                        <input
                            required
                            id="amount"
                            type="number"
                            value={formData.amount || ''}
                            onChange={(e) =>
                                setFormData({ ...formData, amount: +e.target.value })
                            }
                            placeholder="Amount"
                        />
                    </div>
                    <div className="formValues">
                        <input
                            required
                            id="date"
                            type="text"
                            placeholder="Date"
                            value={formData.date}
                            onChange={(e) =>
                                setFormData({ ...formData, date: e.target.value })
                            }
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")}
                        />
                    </div>
                    <div className="">
                        <button
                            type="submit"
                            className="addbutton"
                        >
                            Add New Item
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddTransaction;