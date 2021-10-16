import React, { useState } from 'react';
import "./NewExpense.css";
import ExpenseFrom from "./ExpenseForm"


const NewExpense = ({ onAddExpense }) => {
    // 0 means the add expense button will be shown, 1 means form will be shown
    const [displayExpenseForm, setDisplayExpenseForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        onAddExpense(expenseData);
    }

    const onChangeExpenseHandler = () => {
        setDisplayExpenseForm((preExpenseForm) => {
            return !preExpenseForm;
        })
    }

    if (displayExpenseForm) {
        return (
            <div className="new-expense">
                <ExpenseFrom onSaveExpenseDate={saveExpenseDataHandler} onChangeExpenseMode={onChangeExpenseHandler} />
            </div>
        );
    }

    return (
        <div className="new-expense">
            <button onClick={onChangeExpenseHandler}>Add New Expense</button>
        </div>
    );
}

export default NewExpense;